'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';

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
    { icon: Phone, label: 'Phone', value: '+91-9887494512', href: 'tel:+919887494512' },
    { icon: MapPin, label: 'Location', value: 'Punjab, India' },
    { icon: Github, label: 'GitHub', value: 'github.com/pariharkamal9829', href: 'https://github.com/pariharkamal9829' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/kamlesh-parihar', href: 'https://www.linkedin.com/in/kamlesh-parihar/' },
  ];

  return (
    <div className="container mx-auto px-6 lg:px-12 py-16 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid gap-12 md:grid-cols-2"
      >
        {/* Contact Info */}
        <div className="space-y-8 text-center md:text-left">
          <div>
            <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
            <p className="text-muted-foreground text-lg">
              Have a project in mind? Let's discuss how we can work together.
            </p>
          </div>
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 justify-center md:justify-start"
              >
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className="hover:text-primary transition-colors text-lg">
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-lg">{item.value}</div>
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
          transition={{ duration: 0.5 }}
        >
          <Card className="shadow-lg rounded-lg">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-sm font-medium block mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium block mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium block mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full group">
                  <span className="flex items-center gap-2">
                    Send Message
                    <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
