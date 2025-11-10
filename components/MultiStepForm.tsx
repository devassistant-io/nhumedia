'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Check, ChevronDown } from 'lucide-react';

interface FormData {
  name: string;
  businessName: string;
  email: string;
  website: string;
  monthlyBudget: string;
  services: string[];
  message: string;
}

interface MultiStepFormProps {
  serviceType?: string;
  preselectedService?: string;
}

const steps = [
  { id: 'name', label: 'What is your name?', type: 'text', placeholder: 'John Doe' },
  { id: 'businessName', label: 'What is your business name?', type: 'text', placeholder: 'Acme Inc.' },
  { id: 'email', label: 'What is your email?', type: 'email', placeholder: 'john@acme.com' },
  { id: 'website', label: 'What is your business website/platform?', type: 'text', placeholder: 'www.acme.com' },
  {
    id: 'monthlyBudget',
    label: 'What is your monthly budget?',
    type: 'select',
    options: [
      '$650 - $1,000',
      '$1,000 - $2,500',
      '$2,500 - $5,000',
      '$5,000 - $10,000',
      '$10,000+',
    ],
  },
  {
    id: 'services',
    label: 'Which services are you interested in?',
    type: 'multiselect',
    options: [
      'Search Engine Ad Campaigns (Google/Bing)',
      'Meta Ad Campaigns (Facebook/Instagram)',
      'Social Media Content Creation & Management',
      'Website Search Engine Optimization',
      'Digital Marketing Consultation',
    ],
  },
  { id: 'message', label: 'Tell us about your goals', type: 'textarea', placeholder: 'I want to...' },
];

export default function MultiStepForm({ serviceType = 'General Inquiry', preselectedService }: MultiStepFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>(
    preselectedService ? [preselectedService] : []
  );
  
  const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm<FormData>({
    defaultValues: {
      services: preselectedService ? [preselectedService] : [],
    }
  });

  // Update form value when selectedServices changes
  useEffect(() => {
    setValue('services', selectedServices);
  }, [selectedServices, setValue]);

  const currentField = steps[currentStep];
  const watchedValue = watch(currentField.id as keyof FormData);

  const onSubmit = async (data: FormData) => {
    try {
      console.log('📤 Submitting form:', data);
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          serviceType,
        }),
      });

      const result = await response.json();
      
      console.log('=== CONTACT FORM API RESPONSE ===');
      console.log('Status:', response.status);
      console.log('Response:', result);
      console.log('================================');

      setIsSubmitted(true);
    } catch (error) {
      console.error('=== CONTACT FORM ERROR ===');
      console.error('Error:', error);
      console.error('==========================');
      // Still show success message to user even if there's an error
      setIsSubmitted(true);
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = () => {
    if (currentField.type === 'multiselect') {
      return selectedServices.length > 0;
    }
    if (currentField.type === 'checkbox') {
      return watchedValue && (watchedValue as string[]).length > 0;
    }
    return watchedValue && watchedValue.toString().trim().length > 0;
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Thank You!</h3>
        <p className="text-gray-600 text-lg">
          We've received your information and will reach out to you shortly to schedule a consultation.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-slate-900/10 p-6 md:p-10 max-w-2xl mx-auto border border-slate-200/50 relative overflow-hidden">
      {/* Premium accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">
            Step {currentStep + 1} of {steps.length}
          </span>
          <span className="text-sm text-gray-600">
            {Math.round(((currentStep + 1) / steps.length) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-primary h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <label className="block">
              <span className="text-xl md:text-2xl font-bold text-dark mb-4 block">
                {currentField.label}
              </span>

              {currentField.type === 'text' || currentField.type === 'email' ? (
                <input
                  type={currentField.type}
                  {...register(currentField.id as keyof FormData, { required: true })}
                  placeholder={currentField.placeholder}
                  className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg text-lg focus:border-primary focus:outline-none transition-colors"
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      if (isStepValid() && currentStep < steps.length - 1) {
                        nextStep();
                      }
                    }
                  }}
                />
              ) : currentField.type === 'textarea' ? (
                <textarea
                  {...register(currentField.id as keyof FormData, { required: true })}
                  placeholder={currentField.placeholder}
                  rows={4}
                  className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg text-lg focus:border-primary focus:outline-none transition-colors resize-none"
                  autoFocus
                  onKeyDown={(e) => {
                    // Allow Enter in textarea for new lines, but Ctrl+Enter or Cmd+Enter to proceed
                    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
                      e.preventDefault();
                      if (isStepValid() && currentStep < steps.length - 1) {
                        nextStep();
                      }
                    }
                  }}
                />
              ) : currentField.type === 'select' ? (
                <select
                  {...register(currentField.id as keyof FormData, { required: true })}
                  className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg text-lg focus:border-primary focus:outline-none transition-colors"
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      if (isStepValid() && currentStep < steps.length - 1) {
                        nextStep();
                      }
                    }
                  }}
                >
                  <option value="">Select your budget...</option>
                  {currentField.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : currentField.type === 'multiselect' ? (
                <div className="relative">
                  <input
                    type="hidden"
                    {...register(currentField.id as keyof FormData, { required: true })}
                    value={selectedServices.join(',')}
                  />
                  
                  {/* Dropdown Button */}
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg text-lg focus:border-primary focus:outline-none transition-colors flex items-center justify-between bg-white hover:border-primary"
                  >
                    <span className={selectedServices.length === 0 ? 'text-gray-400' : 'text-slate-900'}>
                      {selectedServices.length === 0
                        ? 'Select services...'
                        : `${selectedServices.length} service${selectedServices.length > 1 ? 's' : ''} selected`}
                    </span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute z-10 w-full mt-2 bg-white border-2 border-gray-300 rounded-lg shadow-xl max-h-[140px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-100">
                      {currentField.options?.map((option) => {
                        const isSelected = selectedServices.includes(option);
                        return (
                          <label
                            key={option}
                            className="flex items-center px-3 py-2 hover:bg-primary/5 cursor-pointer transition-colors border-b border-gray-100 last:border-b-0"
                          >
                            <input
                              type="checkbox"
                              checked={isSelected}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setSelectedServices([...selectedServices, option]);
                                } else {
                                  setSelectedServices(selectedServices.filter(s => s !== option));
                                }
                              }}
                              className="w-4 h-4 text-primary focus:ring-primary rounded border-gray-300"
                            />
                            <span className="ml-2 text-sm text-slate-900">{option}</span>
                          </label>
                        );
                      })}
                    </div>
                  )}
                </div>
              ) : currentField.type === 'checkbox' ? (
                <div className="space-y-3">
                  {currentField.options?.map((option) => (
                    <label
                      key={option}
                      className="flex items-center space-x-3 p-3 border-2 border-gray-300 rounded-lg hover:border-primary transition-colors cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        value={option}
                        {...register(currentField.id as keyof FormData, { required: true })}
                        className="w-5 h-5 text-primary focus:ring-primary"
                      />
                      <span className="text-lg">{option}</span>
                    </label>
                  ))}
                </div>
              ) : null}
            </label>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center pt-6">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
              currentStep === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 text-dark hover:bg-gray-300'
            }`}
          >
            <ChevronLeft size={20} />
            <span>Back</span>
          </button>

          {currentStep === steps.length - 1 ? (
            <button
              type="submit"
              disabled={!isStepValid()}
              className={`flex items-center space-x-2 px-8 py-3 rounded-lg font-semibold transition-colors ${
                isStepValid()
                  ? 'bg-primary text-white hover:bg-secondary'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <span>Submit</span>
              <Check size={20} />
            </button>
          ) : (
            <button
              type="button"
              onClick={nextStep}
              disabled={!isStepValid()}
              className={`flex items-center space-x-2 px-8 py-3 rounded-lg font-semibold transition-colors ${
                isStepValid()
                  ? 'bg-primary text-white hover:bg-secondary'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <span>Next</span>
              <ChevronRight size={20} />
            </button>
          )}
        </div>
      </form>

      <p className="text-sm text-gray-500 text-center mt-6">
        By submitting your information, you're giving us permission to email you
      </p>
    </div>
  );
}

