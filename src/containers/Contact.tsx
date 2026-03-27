'use client';

import { contactSection } from '@/lib/content/contact';
import { author } from '@/lib/content/portfolio';
import { Wrapper } from '@/components';
import { getSectionAnimation } from '@/styles/animations';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useState } from 'react';

const Contact = () => {
  const { subtitle, title, paragraphs, contactMethods } = contactSection;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Email logic
    const subject = encodeURIComponent('New Message from Portfolio');
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${author.email}?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Wrapper
      id= "contact"
  className = "max-w-7xl mx-auto !py-24 md:!py-32 mb-20 md:mb-32 relative"
  {...getSectionAnimation }
    >
    {/* Decorative background elements */ }
    < motion.div
  animate = {{ opacity: [0.1, 0.25, 0.1] }
}
transition = {{ duration: 4, repeat: Infinity }}
className = "absolute -top-40 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10"
  />

  {/* Section Header */ }
  <motion.div
        initial={ { opacity: 0, y: 20 } }
whileInView = {{ opacity: 1, y: 0 }}
viewport = {{ once: true }}
transition = {{ duration: 0.6 }}
className = "text-center mb-12 md:mb-16"
  >
  {/* Section subtitle with elegant styling */ }
  < div className = "flex items-center justify-center gap-3 mb-4" >
    <div className="h-px w-6 bg-gradient-to-r from-transparent to-accent/50" />
      <p className="font-mono text-xs md:text-sm uppercase text-accent/70 tracking-widest" >
        { subtitle }
        </p>
        < div className = "h-px w-6 bg-gradient-to-l from-transparent to-accent/50" />
          </div>

{/* Main title */ }
<h2 className="heading-secondary !mb-6" > { title } </h2>

{/* Elegant divider */ }
<div className="flex justify-center mb-8" >
  <div className="h-1 w-16 bg-gradient-to-r from-accent/0 via-accent to-accent/0 rounded-full" />
    </div>

{/* Description text */ }
{
  paragraphs.map((paragraph, i) => (
    <p key= { i } className = "text-slate-600 dark:text-slate-400 mb-3 text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-light" >
    { paragraph }
    </p>
  ))
}
</motion.div>

  {/* Two Column Layout - Contact Info + Form */ }
  <motion.div
        initial={ { opacity: 0, y: 30 } }
whileInView = {{ opacity: 1, y: 0 }}
viewport = {{ once: true }}
transition = {{ duration: 0.6, delay: 0.2 }}
className = "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 my-16"
  >

  {/* Left Column - Contact Information */ }
  <div className="flex flex-col gap-8" >
    <h3 className="text-xl md:text-2xl font-semibold text-white mb-2" > Open to Opportunities </h3>
    <p className="text-slate-400 leading-relaxed mb-4" >
      I'm actively seeking Cloud & AWS roles, software development positions, internships, and tech projects. Let's connect!
    </p>

    {/* Contact Methods List */ }
    <motion.div
          className="space-y-6"
  variants = { containerVariants }
  initial = "hidden"
  whileInView = "visible"
  viewport = {{ once: true }
}
        >
    {
      contactMethods && contactMethods.map((method, index) => (
        <motion.a
                  key= { index }
                  href = { method.href }
                  target = { method.href.startsWith('mailto') ? '_self' : '_blank' }
                  rel = "noopener noreferrer"
                  variants = { itemVariants }
                  className = "group flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-all duration-300"
        >
        {/* Icon */ }
        < div className = "flex-shrink-0 p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-all duration-300" >
          <Icon
                    icon={ method.icon }
                    width = { 24}
                    height = { 24}
                    className = "text-accent"
          />
          </div>

          {/* Content */ }
          < div className = "flex-grow" >
            <p className="text-sm font-mono uppercase text-accent/60 group-hover:text-accent transition-colors duration-300" >
              { method.label }
            </p>
            < p className = "text-slate-300 group-hover:text-white transition-colors duration-300 break-all" >
            { method.value }
            </p>
            </div>
            </motion.a>
      ))
    }
    </motion.div>
    </div>

  {/* Right Column - Contact Form */ }
  <motion.div
        initial={ { opacity: 0, x: 40 } }
whileInView = {{ opacity: 1, x: 0 }}
viewport = {{ once: true }}
transition = {{ duration: 0.6, delay: 0.3 }}
className = "flex flex-col"
  >
  <div className="relative rounded-2xl p-8 bg-gradient-to-br from-white/5 via-white/3 to-white/0 border border-white/20 backdrop-blur-md shadow-xl" >
    {/* Form */ }
    <form onSubmit= { handleSubmit } className = "space-y-5" >
      {/* Name Input */ }
      <div className="space-y-2" >
        <label className="text-sm font-medium text-slate-300" > Your Name </label>
        < input
                  type = "text"
                  name = "name"
                  value = { formData.name }
                  onChange = { handleInputChange }
                  placeholder = "Enter your name"
                  required
                  className = "w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all duration-300"
        />
        </div>

        {/* Email Input */ }
        < div className = "space-y-2" >
        <label className="text-sm font-medium text-slate-300" > Your Email </label>
        < input
                  type = "email"
                  name = "email"
                  value = { formData.email }
                  onChange = { handleInputChange }
                  placeholder = "Enter your email"
                  required
                  className = "w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all duration-300"
        />
        </div>

        {/* Message Input */ }
        < div className = "space-y-2" >
        <label className="text-sm font-medium text-slate-300" > Your Message </label>
        < textarea
                  name = "message"
                  value = { formData.message }
                  onChange = { handleInputChange }
                  placeholder = "Write your message..."
                  rows = { 5}
                  required
                  className = "w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all duration-300 resize-none"
        />
        </div>

        {/* Submit Button */ }
        < motion.button
                  type = "submit"
                  whileHover = {{ scale: 1.02 }}
                  whileTap = {{ scale: 0.98 }}
                  className = "w-full mt-3 px-6 py-3 rounded-lg bg-gradient-to-r from-accent to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 flex items-center justify-center gap-2"
        >
        < Icon icon = "tabler:send" width = { 20} height = { 20} />
        { isSubmitted ? 'Message Sent!' : 'Send Message'}
        </motion.button>
        </form>
    </div>
  </motion.div>
  </motion.div>
      </Wrapper>
  );
};

export default Contact;
