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
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="container max-w-6xl mx-auto py-8 sm:py-12 md:py-16 space-y-8 sm:space-y-12 px-4">
        <section className="w-full">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 xl:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Kamlesh Parihar</h1>
              <div className="flex items-center justify-center lg:justify-start text-muted-foreground">
                <MapPin className="mr-2 h-4 w-4 flex-shrink-0" />
                <span className="text-sm sm:text-base">Bali, Rajasthan, India</span>
              </div>
              <div className="flex justify-center lg:justify-start space-x-3">
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
              className="order-1 lg:order-2 flex justify-center w-full"
            >
              <div className="flex flex-col items-center space-y-4 w-full max-w-sm">
                {/* Profile Picture */}
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
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
                  <div className="absolute inset-1 rounded-full overflow-hidden border-2 border-primary/20 shadow-lg">
                    <Image
                      src="/image/pic.jpg"
                      alt="Kamlesh Parihar"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                
                {/* Tech Icons - Fixed Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="w-full max-w-xs"
                >
                  <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 justify-items-center">
                    <TechIcons />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full space-y-6"
        >
          <Card className="w-full">
            <CardContent className="p-4 sm:p-6 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold">About Me</h2>
              <div className="space-y-3">
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
              </div>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardContent className="p-4 sm:p-6 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold">What I Do</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col items-center text-center space-y-3 p-3 sm:p-4 rounded-lg bg-muted/20"
                >
                  <div className="text-primary">
                    <Cloud className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm sm:text-base">Cloud Infrastructure</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Design and implement scalable cloud solutions using AWS, Azure, and GCP
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col items-center text-center space-y-3 p-3 sm:p-4 rounded-lg bg-muted/20"
                >
                  <div className="text-primary">
                    <Server className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm sm:text-base">Container Orchestration</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Manage and scale containerized applications using Kubernetes and Docker
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col items-center text-center space-y-3 p-3 sm:p-4 rounded-lg bg-muted/20 sm:col-span-2 lg:col-span-1"
                >
                  <div className="text-primary">
                    <GitBranch className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm sm:text-base">CI/CD Implementation</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Build and optimize automated deployment pipelines
                    </p>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}
