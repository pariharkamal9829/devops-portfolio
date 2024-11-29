'use client';

import { motion } from 'framer-motion';
import { TechIcons } from '@/components/tech-icons';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail, MapPin, Server } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <div className="container py-16 space-y-16">
      <section className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-4xl font-bold">Kamlesh Parihar</h1>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="mr-2 h-4 w-4" />
            bali, Rajasthan India
          </div>
          <div className="flex space-x-4">
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
        >
          <TechIcons />
        </motion.div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-8"
      >
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold">About Me</h2>
            <p className="text-muted-foreground">
              As a Senior DevOps Engineer with over 8 years of experience, I
              specialize in building and maintaining scalable cloud
              infrastructure and implementing efficient CI/CD pipelines. My
              expertise spans across AWS, Azure, and GCP, with a strong focus on
              containerization and Kubernetes orchestration.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold">What I Do</h2>
            <ul className="space-y-4">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="text-primary">
                  <Cloud className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Cloud Infrastructure</h3>
                  <p className="text-muted-foreground">
                    Design and implement scalable cloud solutions using AWS,
                    Azure, and GCP
                  </p>
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="text-primary">
                  <Server className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Container Orchestration</h3>
                  <p className="text-muted-foreground">
                    Manage and scale Kubernetes clusters across multiple
                    environments
                  </p>
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-start gap-4"
              >
                <div className="text-primary">
                  <GitBranch className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">CI/CD Implementation</h3>
                  <p className="text-muted-foreground">
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
