'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'pariharkamal9829@gmail.com', href: 'mailto:pariharkamal9829@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 8209685949', href: 'tel:+918209685949' },
    { icon: MapPin, label: 'Location', value: 'Bali, Rajasthan, India' },
    { icon: Github, label: 'GitHub', value: 'github.com/pariharkamal9829', href: 'https://github.com/pariharkamal9829' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/kamlesh-parihar', href: 'https://www.linkedin.com/in/kamlesh-parihar/' },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12 md:py-16 max-w-6xl">
      {/* Header with Profile Picture */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="flex flex-col items-center space-y-4">
          <div className="relative w-24 h-24 sm:w-32 sm:h-32">
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-primary/0"
            />
            <div className="absolute inset-1 rounded-full overflow-hidden border-2 border-primary/20">
              <Image
                src="/image/pic.jpg"
                alt="Kamlesh Parihar"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">Get in Touch</h1>
            <p className="text-muted-foreground text-base sm:text-lg">
              Let's discuss your project and how we can work together.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2"
      >
        {/* Contact Info */}
        <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
          {/* Mobile: Center aligned, Desktop: Left aligned */}
          <div className="space-y-4 sm:space-y-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="w-full"
              >
                {/* Mobile Layout - Left aligned */}
                <div className="flex items-start gap-3 sm:hidden">
                  <div className="p-3 rounded-full bg-primary/10 text-primary flex-shrink-0">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-muted-foreground mb-1">{item.label}</div>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        className="hover:text-primary transition-colors text-sm font-medium break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-sm font-medium">{item.value}</div>
                    )}
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden sm:flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary flex-shrink-0">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        className="hover:text-primary transition-colors text-base lg:text-lg font-medium break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-base lg:text-lg font-medium">{item.value}</div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional mobile-friendly contact card */}
          <div className="sm:hidden">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-background">
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold mb-2 text-lg">Quick Contact</h3>
                <div className="space-y-3">
                  <div>
                    <a 
                      href="mailto:pariharkamal9829@gmail.com"
                      className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
                    >
                      <Mail className="h-4 w-4" />
                      Send Email
                    </a>
                  </div>
                  <div>
                    <a 
                      href="tel:+918209685949"
                      className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
                    >
                      <Phone className="h-4 w-4" />
                      Call Now
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="order-1 lg:order-2"
        >
          <Card className="shadow-lg rounded-lg">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl sm:text-2xl">Send a Message</CardTitle>
              <p className="text-sm text-muted-foreground mt-2">
                Fill out the form below and I'll get back to you soon.
              </p>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="text-sm font-medium block mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full text-sm sm:text-base h-11"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium block mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full text-sm sm:text-base h-11"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium block mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full min-h-[120px] sm:min-h-[150px] text-sm sm:text-base resize-none"
                  />
                </div>
                <Button type="submit" className="w-full group text-sm sm:text-base h-11 sm:h-12">
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <Send className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* Mobile Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12 sm:hidden"
      >
        <Card className="border-primary/20">
          <CardContent className="p-4">
            <h3 className="font-semibold text-center mb-4">Connect with me</h3>
            <div className="flex justify-center gap-4">
              <a 
                href="https://github.com/pariharkamal9829"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/kamlesh-parihar/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
