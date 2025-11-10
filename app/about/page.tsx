'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Lightbulb, Users, TrendingUp, Target, Globe, Share2, Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const values = [
  {
    icon: Lightbulb,
    title: 'Creativity',
    description: 'Values creativity and encourages innovative ideas to create unique and engaging content for clients.',
    color: 'from-primary to-secondary',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Values communication, collaboration and teamwork, working closely together with clients.',
    color: 'from-primary to-secondary',
  },
  {
    icon: TrendingUp,
    title: 'Growth Mindset',
    description: 'Values a growth mindset, adapting and seeking to learn and improve to deliver better results for clients\' needs and evolving industry trends.',
    color: 'from-primary to-secondary',
  },
];

const idealClient = [
  {
    icon: Globe,
    title: 'Search Engine Optimized Website',
    subtitle: 'Enhance Visibility and Performance',
    description: 'Clients that include relevant keywords, meta tags, and quality content on their website allow ads to perform effectively',
  },
  {
    icon: Share2,
    title: 'Be On Social Media',
    subtitle: 'Brand Visibility and Organic Reach',
    description: 'Keep your brand top of mind by regularly posting and engaging with your audience',
  },
  {
    icon: Target,
    title: 'Have A Google Ads Account',
    subtitle: 'Highly Targeted and Immediate Visibility',
    description: 'Gain quick traction and reach users actively searching for your products or services',
  },
  {
    icon: Search,
    title: 'Know Your Target Audience',
    subtitle: 'Demographics and Behavior',
    description: 'This insight helps tailor marketing strategies to effectively reach and engage their ideal customers',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(112,155,163,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(90,128,137,0.06),transparent_50%)]"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Image
                src="/logo.png"
                alt="Nhu Media Studio Logo"
                width={80}
                height={80}
                className="w-16 h-16 md:w-20 md:h-20"
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
              Who is{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                NHU MEDIA
              </span>
              <span className="text-slate-900">
                {' '}STUDIO
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image - LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/team-1.jpg"
                  alt="Nhu Media Studio Team"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-2xl -z-10"></div>
            </motion.div>

            {/* Text Content - RIGHT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none order-1 lg:order-2"
            >
              <p className="text-xl text-slate-700 leading-relaxed mb-6">
                We are Canadian-based digital marketing specialists with over five years of experience. We have worked with a diverse range of industries, including Construction, Non-profits, Pharmaceuticals, Landscaping, Law firms, Marketing agencies, and more.
              </p>
              <p className="text-xl text-slate-700 leading-relaxed mb-6">
                We've worn many hats in the marketing world—from designing and developing websites to creating marketing collateral, coordinating trade shows and events, and managing social media. Over time, we've honed our focus to specialize in one area where we truly excel: Digital Marketing.
              </p>
              <p className="text-xl text-slate-700 leading-relaxed">
                Our expertise lies in maximizing your business's online presence. We handle everything from hashtag research and content creation to detailed analytics reporting. Additionally, we manage paid digital advertising through Google Ads and Meta Ad Campaigns to drive targeted traffic and achieve your marketing goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Our <span className="text-primary">Values</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary"></div>
          </motion.div>

          {/* Values with Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Values List */}
            <div className="space-y-16">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="relative pl-20"
                >
                  {/* Large number background */}
                  <div className="absolute left-0 top-0">
                    <span className="text-8xl font-extrabold text-slate-100 leading-none">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  {/* Icon */}
                  <div className="absolute left-2 top-8">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center shadow-lg`}>
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-3xl font-extrabold mb-4 text-slate-900 tracking-tight">
                      {value.title}
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>

                  {/* Connecting line */}
                  {index < values.length - 1 && (
                    <div className="absolute left-8 -bottom-8 w-0.5 h-8 bg-gradient-to-b from-primary/30 to-transparent"></div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Team Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/team-3.jpg"
                  alt="Our Values in Action"
                  width={600}
                  height={750}
                  className="w-full h-auto object-cover"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                
                {/* Floating badge */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                  <p className="text-slate-900 font-semibold text-lg">
                    Driven by passion, guided by values
                  </p>
                  <p className="text-slate-600 text-sm mt-1">
                    5+ years of digital marketing excellence
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-secondary to-primary rounded-full opacity-20 blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Our <span className="text-primary">Story</span>
            </h2>
            <p className="text-xl text-slate-600">How did we grow to where we are now?</p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image First */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/team-2.jpg"
                  alt="Our Journey"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
              </div>
              {/* Decorative element */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-secondary to-primary rounded-2xl -z-10"></div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 order-1 lg:order-2"
            >
              <p className="text-lg text-slate-700 leading-relaxed">
                At the heart of nhumediastudio is a deep-rooted passion for creativity and a commitment to excellence. The journey began with a foundational background in Fine Arts, where the team explored the dynamic fields of phone app design, robotics, and videography. Despite the initial focus on programming and analytical challenges, the team's true calling lay in the realms of Art and Design, which ultimately led them to the world of graphic design.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Over the years, nhumediastudio has adeptly navigated the corporate landscape, managing a diverse portfolio that includes brand websites, social media, tradeshows, and various marketing collateral. This experience has fostered a robust skill set in organization and multitasking, with each project serving as a stepping stone to greater expertise.
              </p>
            </motion.div>
          </div>

          {/* Second Row - Continued Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <p className="text-lg text-slate-700 leading-relaxed">
              The onset of the pandemic introduced a period of significant change, accelerating the shift to digital marketing. Embracing this transformation, the team honed their skills in social media, analytics, and paid advertising, while continuing to support both corporate clients and small businesses. Through this period of rapid adaptation, nhumediastudio gained invaluable insights and resilience, emerging with a unique blend of capabilities.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Driven by a mission to empower small businesses with the same expertise that has fueled their success, nhumediastudio was born. With a wealth of experience and a dedicated approach, they now offer comprehensive digital marketing solutions designed to help small businesses thrive in today's digital world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ideal Client Section */}
      <section className="py-20 md:py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Be Our <span className="text-primary">Ideal Client</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {idealClient.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/70 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 hover:border-primary transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-primary font-semibold text-sm mb-3">{item.subtitle}</p>
                    <p className="text-slate-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08),transparent_50%)]"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Discover the difference of being seen
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed">
              We're passionate about marketing and love building relationships with ambitious business owners who want to boost brand awareness and generate more leads through effective ad strategies. Ready to get started?
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-white text-primary px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Get In Touch →
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

