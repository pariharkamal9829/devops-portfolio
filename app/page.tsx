'use client';

import { Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimatedText } from '@/components/animated-text';
import TypewriterComponent from 'typewriter-effect';

export default function Home() {
  return (
    <div className="container px-4 py-8 sm:py-16 md:py-24 lg:py-32">
      <div className="grid gap-8 lg:grid-cols-2 xl:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center space-y-4 lg:space-y-6"
        >
          <div className="space-y-2">
            <AnimatedText
              text="Hi, I'm Kamlesh Parihar"
              className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl"
            />
            <div className="text-base sm:text-lg text-muted-foreground h-6 sm:h-8">
              <TypewriterComponent
                options={{
                  strings: [
                    'DevOps Engineer',
                    'Cloud Architect',
                    'Cloud Administration',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm sm:text-base text-muted-foreground leading-relaxed"
          >
            I specialize in building and optimizing scalable infrastructure,
            implementing CI/CD pipelines, and managing cloud-native
            applications. With expertise in AWS, Kubernetes, and automation, I
            help teams deliver software faster and more reliably.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild className="w-full sm:w-auto">
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Link>
            </Button>
            <Button variant="outline" asChild className="w-full sm:w-auto">
              <Link href="https://github.com/pariharkamal9829">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
            <Button variant="outline" asChild className="w-full sm:w-auto">
              <Link href="https://www.linkedin.com/in/kamlesh-parihar/">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Link>
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center order-first lg:order-last"
        >
          <div className="relative aspect-square w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-primary/0"
            />
            <div className="absolute inset-4 rounded-full bg-muted flex items-center justify-center">
              <Terminal className="h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 text-primary" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
