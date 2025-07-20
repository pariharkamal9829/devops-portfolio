'use client';

import { Github, Linkedin, Mail, Terminal, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimatedText } from '@/components/animated-text';
import TypewriterComponent from 'typewriter-effect';
import Image from 'next/image';

const certifications = [
  {
    title: 'AWS Solutions Architect',
    image: '/image/aws-certified-solutions-architect-associate (2).png',
  },
  {
    title: 'AWS Cloud Practitioner',
    image: '/image/aws-certified-cloud-practitioner.png',
  },
  {
    title: 'Azure Security Engineer',
    image: '/image/azure-security-engineer-associate600x600 (1).png',
  },
];

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
          {/* Profile Picture with Anti-Clockwise Orbiting Certificates */}
          <div className="relative w-[32rem] h-[32rem] sm:w-[36rem] sm:h-[36rem] md:w-[40rem] md:h-[40rem]">
            {/* Central Profile Picture */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/40 via-secondary/30 to-accent/20"
              />
              <div className="absolute inset-3 rounded-full overflow-hidden border-4 border-primary/40 shadow-2xl">
                <Image
                  src="/image/pic.jpg"
                  alt="Kamlesh Parihar"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Anti-Clockwise Orbiting Certificates - All Separate with Different Radii */}
            {certifications.map((cert, index) => {
              const baseRadius = 160; // Base distance from center
              const radiusIncrement = 40; // Additional spacing between each certificate
              const radius = baseRadius + (index * radiusIncrement); // Different radius for each certificate
              const angleOffset = index * 120; // 120 degrees apart for equal spacing

              return (
                <motion.div
                  key={cert.title}
                  className="absolute inset-0"
                  animate={{
                    rotate: [angleOffset, angleOffset - 360], // Each starts at different angle and rotates anti-clockwise
                  }}
                  transition={{
                    duration: 15 + index * 3, // Different speeds for each certificate
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <motion.div
                    className="absolute w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(-50%, -50%) translateY(-${radius}px)`,
                    }}
                    initial={{
                      opacity: 0,
                      scale: 0,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      delay: index * 0.4,
                      duration: 0.8,
                      type: 'spring',
                      bounce: 0.3,
                    }}
                    whileHover={{
                      scale: 1.3,
                      zIndex: 20,
                    }}
                  >
                    {/* Certificate stays upright while orbiting */}
                    <motion.div
                      className="relative w-full h-full"
                      animate={{
                        rotate: [-(angleOffset), -(angleOffset) + 360], // Counter-rotate to keep upright
                      }}
                      transition={{
                        duration: 15 + index * 3,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    >
                      {/* Certificate Image Only - Clean Background */}
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                          src={cert.image}
                          alt={cert.title}
                          width={144}
                          height={144}
                          className="object-contain"
                          priority
                        />
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Outer Orbital Ring - Anti-clockwise */}
            <motion.div
              className="absolute inset-8 rounded-full border-2 border-dashed border-primary/20"
              animate={{
                rotate: [0, -360], // Anti-clockwise rotation
                scale: [1, 1.02, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                rotate: {
                  duration: 30,
                  repeat: Infinity,
                  ease: 'linear',
                },
                scale: {
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
                opacity: {
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
            />

            {/* Middle Ring - Clockwise for contrast */}
            <motion.div
              className="absolute inset-16 rounded-full border border-secondary/30"
              animate={{
                rotate: [0, 360], // Clockwise for visual contrast
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                rotate: {
                  duration: 35,
                  repeat: Infinity,
                  ease: 'linear',
                },
                opacity: {
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
            />

            {/* Inner Ring - Fast anti-clockwise */}
            <motion.div
              className="absolute inset-24 rounded-full border border-accent/25"
              animate={{
                rotate: [0, -360], // Fast anti-clockwise
                scale: [1, 0.98, 1],
              }}
              transition={{
                rotate: {
                  duration: 15,
                  repeat: Infinity,
                  ease: 'linear',
                },
                scale: {
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
            />

            {/* Particle Effects */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary/60 rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translateX(-50%) translateY(-50%) translateY(-${200 + i * 20}px)`,
                }}
                animate={{
                  rotate: [i * 60, i * 60 - 360], // Anti-clockwise
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  rotate: {
                    duration: 25,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                  scale: {
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: 'easeInOut',
                  },
                  opacity: {
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: 'easeInOut',
                  },
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
