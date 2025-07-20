'use client';

import { motion } from 'framer-motion';
import { TechIcons } from '@/components/tech-icons';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail, MapPin, Server, Cloud, GitBranch } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function About() {
  return (
    <div className="container py-8 sm:py-12 md:py-16 space-y-12 sm:space-y-16 px-4">
      <section className="grid gap-8 lg:grid-cols-2 xl:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1"
        >
          <h1 className="text-3xl sm:text-4xl font-bold">Kamlesh Parihar</h1>
          <div className="flex items-center justify-center lg:justify-start text-muted-foreground">
            <MapPin className="mr-2 h-4 w-4 flex-shrink-0" />
            <span className="text-sm sm:text-base">bali, Rajasthan India</span>
          </div>
          <div className="flex justify-center lg:justify-start space-x-4">
            <Button variant="outline" size="icon" asChild>
              <Link href="https://github.com/pariharkamal9829">
                <Github className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/kamlesh-parihar/">
                <Linkedin className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="mailto:pariharkamal9829@gmail.com">
                <Mail className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="flex flex-col items-center space-y-6">
            {/* Profile Picture */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72">
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
              <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                <Image
                  src="/image/pic.jpg"
                  alt="Kamlesh Parihar"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            
            {/* Tech Icons */}
            <div className="w-full max-w-md">
              <TechIcons />
            </div>
          </div>
        </motion.div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-8"
      >
        <Card>
          <CardContent className="p-4 sm:p-6 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold">About Me</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              I'm Kamlesh Parihar, a DevOps Engineer based in Bali, Rajasthan, India. 
              I specialize in cloud infrastructure, automation, and building robust CI/CD pipelines 
              that help teams deliver software faster and more reliably.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              With a Bachelor's degree in Computer Applications and hands-on experience with major 
              cloud platforms like AWS, Azure, and Google Cloud, I focus on implementing modern 
              DevOps practices using tools like Docker, Kubernetes, Terraform, and Jenkins. 
              I'm passionate about continuous learning and staying updated with the latest 
              technologies in the DevOps ecosystem.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 sm:p-6 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold">What I Do</h2>
            <ul className="space-y-4 sm:space-y-6">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-start gap-4"
              >
                <div className="text-primary flex-shrink-0 self-center sm:self-start">
                  <Cloud className="h-6 w-6" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-semibold">Cloud Infrastructure</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mt-1">
                    Design and implement scalable cloud solutions using AWS,
                    Azure, and GCP
                  </p>
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row items-start gap-4"
              >
                <div className="text-primary flex-shrink-0 self-center sm:self-start">
                  <Server className="h-6 w-6" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-semibold">Container Orchestration</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mt-1">
                    Manage and scale containerized applications using Kubernetes and Docker
                  </p>
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row items-start gap-4"
              >
                <div className="text-primary flex-shrink-0 self-center sm:self-start">
                  <GitBranch className="h-6 w-6" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-semibold">CI/CD Implementation</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mt-1">
                    Build and optimize automated deployment pipelines
                  </p>
                </div>
              </motion.li>
            </ul>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  );
}
