import React, { useState } from 'react';
import { CONTACT_INFO, SOCIAL_LINKS } from '../constants';
import { Send, Loader2, Copy, MessageSquare, ArrowRight } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import { useToast } from '../context/ToastContext';

export default function Contact() {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFocus = (name: string) => setFocusedField(name);
  const handleBlur = () => setFocusedField(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      showToast('Message sent successfully! We will get back to you soon.', 'success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      showToast('Something went wrong. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopy = (text: string, type: string) => {
    if (type !== 'email' && type !== 'phone') return;
    
    navigator.clipboard.writeText(text).then(() => {
      showToast(`${type === 'email' ? 'Email' : 'Phone number'} copied to clipboard`, 'info');
    }).catch(() => {
        showToast('Failed to copy to clipboard', 'error');
    });
  };

  return (
    <section className="py-20 md:py-28 bg-light relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-200/50 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Contact Information Column */}
          <div className="lg:col-span-5">
            <RevealOnScroll direction="left">
              <div className="sticky top-28">
                <h2 className="text-3xl font-heading font-bold text-primaryDark mb-6">
                  Information & <br /> Connect
                </h2>
                <p className="text-textLight text-lg mb-10 leading-relaxed">
                  We're always interested in discussing new projects, creative ideas or opportunities to be part of your vision.
                </p>
                
                <div className="space-y-8">
                  {CONTACT_INFO.map((info) => (
                    <div key={info.id} className="flex items-start group">
                      <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 mr-6 text-primaryDark group-hover:bg-primaryDark group-hover:text-white transition-all duration-300 border border-gray-100">
                        <info.icon size={26} aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-primaryDark mb-2">
                          {info.title}
                        </h3>
                        <div className="text-textLight/90 font-medium">
                          {info.lines.map((line, i) => {
                            const isCopyable = info.id === 'email' || info.id === 'phone';
                            return (
                              <p 
                                key={i}
                                onClick={() => isCopyable && handleCopy(line, info.id)}
                                className={`relative w-fit py-0.5 ${isCopyable ? 'cursor-pointer hover:text-secondary transition-colors flex items-center gap-2' : ''}`}
                                title={isCopyable ? "Click to copy" : ""}
                              >
                                {line}
                                {isCopyable && (
                                  <Copy size={14} className="opacity-0 group-hover:opacity-40 transition-opacity" />
                                )}
                              </p>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-10 border-t border-gray-200">
                   <h4 className="text-sm font-bold uppercase tracking-widest text-textLight mb-6">Follow Us</h4>
                   <div className="flex gap-4">
                      {SOCIAL_LINKS.map(social => (
                        <a 
                          key={social.id}
                          href={social.href}
                          className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primaryDark hover:bg-secondary hover:text-dark hover:-translate-y-1 transition-all duration-300 border border-gray-100"
                          aria-label={`Follow on ${social.id}`}
                        >
                           <social.icon size={18} />
                        </a>
                      ))}
                   </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <RevealOnScroll direction="right" delay={200}>
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-white/50 relative overflow-hidden">
                {/* Decorative blob */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
                
                <div className="relative z-10">
                  <div className="mb-8 flex items-center gap-3">
                     <MessageSquare className="text-secondary" size={28} />
                     <h3 className="text-2xl font-heading font-bold text-primaryDark">Send a Message</h3>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label 
                          htmlFor="name" 
                          className={`block text-sm font-semibold mb-2 transition-colors ${focusedField === 'name' ? 'text-primaryDark' : 'text-textLight'}`}
                        >
                          Full Name
                        </label>
                        <input 
                          id="name"
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => handleFocus('name')}
                          onBlur={handleBlur}
                          placeholder="John Doe"
                          required
                          maxLength={100}
                          className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-text focus:outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all duration-300 placeholder:text-gray-400"
                        />
                      </div>
                      <div>
                        <label 
                          htmlFor="email" 
                          className={`block text-sm font-semibold mb-2 transition-colors ${focusedField === 'email' ? 'text-primaryDark' : 'text-textLight'}`}
                        >
                          Email Address
                        </label>
                        <input 
                          id="email"
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => handleFocus('email')}
                          onBlur={handleBlur}
                          placeholder="john@company.com"
                          required
                          maxLength={255}
                          className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-text focus:outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all duration-300 placeholder:text-gray-400"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label 
                        htmlFor="subject" 
                        className={`block text-sm font-semibold mb-2 transition-colors ${focusedField === 'subject' ? 'text-primaryDark' : 'text-textLight'}`}
                      >
                        Subject
                      </label>
                      <input 
                        id="subject"
                        type="text" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => handleFocus('subject')}
                        onBlur={handleBlur}
                        placeholder="How can we help?"
                        maxLength={255}
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-text focus:outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all duration-300 placeholder:text-gray-400"
                      />
                    </div>
                    
                    <div>
                      <label 
                        htmlFor="message" 
                        className={`block text-sm font-semibold mb-2 transition-colors ${focusedField === 'message' ? 'text-primaryDark' : 'text-textLight'}`}
                      >
                        Message
                      </label>
                      <textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => handleFocus('message')}
                        onBlur={handleBlur}
                        placeholder="Tell us about your project requirements..."
                        required
                        rows={6}
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-text focus:outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all duration-300 resize-y placeholder:text-gray-400"
                      ></textarea>
                    </div>
                    
                    <div className="pt-2">
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="group w-full md:w-auto md:min-w-[200px] bg-primaryDark text-white font-bold py-4 px-8 rounded-xl hover:bg-secondary hover:text-dark transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 size={20} className="animate-spin" />
                            <span>Processing...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}