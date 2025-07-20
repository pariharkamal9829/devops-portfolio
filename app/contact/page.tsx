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
        <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
          <div className="space-y-4 sm:space-y-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-3 sm:gap-4 justify-center lg:justify-start"
              >
                <div className="p-2 sm:p-3 rounded-full bg-primary/10 text-primary flex-shrink-0">
                  <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm text-muted-foreground">{item.label}</div>
                  {item.href ? (
                    <a 
                      href={item.href} 
                      className="hover:text-primary transition-colors text-sm sm:text-base md:text-lg break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-sm sm:text-base md:text-lg">{item.value}</div>
                  )}
                </div>
              </motion.div>
            ))}
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
            <CardHeader className="text-center">
              <CardTitle className="text-xl sm:text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="text-sm font-medium block mb-1 sm:mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium block mb-1 sm:mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium block mb-1 sm:mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full min-h-[120px] sm:min-h-[150px] text-sm sm:text-base resize-none"
                  />
                </div>
                <Button type="submit" className="w-full group text-sm sm:text-base">
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
    </div>
  );
}
