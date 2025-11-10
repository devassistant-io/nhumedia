'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle } from 'lucide-react';

interface ContactFormProps {
  title?: string;
  description?: string;
  serviceType?: string;
}

interface FormData {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm({ 
  title = "Get Started Today", 
  description = "Fill out the form below and we'll get back to you within 24 hours.",
  serviceType = "General Inquiry"
}: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact-simple', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          serviceType,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200 text-center"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
        <p className="text-slate-600">
          We've received your inquiry and will be in touch within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            {...register('name', { required: 'Name is required' })}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-primary transition-colors ${
              errors.name ? 'border-red-500' : 'border-slate-300'
            }`}
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Business Name *
          </label>
          <input
            type="text"
            {...register('businessName', { required: 'Business name is required' })}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-primary transition-colors ${
              errors.businessName ? 'border-red-500' : 'border-slate-300'
            }`}
            placeholder="Your Business Inc."
          />
          {errors.businessName && (
            <p className="text-red-500 text-sm mt-1">{errors.businessName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-primary transition-colors ${
              errors.email ? 'border-red-500' : 'border-slate-300'
            }`}
            placeholder="john@business.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            {...register('phone')}
            className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Tell us about your needs
          </label>
          <textarea
            {...register('message')}
            rows={4}
            className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
            placeholder="What are your marketing goals?"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Sending...
            </>
          ) : (
            <>
              Send Inquiry
              <Send className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

