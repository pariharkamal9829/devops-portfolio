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
		<div className="min-h-screen w-full overflow-x-hidden">
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
						{/* Profile Picture with Anti-Clockwise Orbiting Certificates - Adjusted for 1.5x Mobile Profile */}
						<div className="relative w-full max-w-[420px] h-[420px] sm:max-w-[480px] sm:h-[480px] md:max-w-[540px] md:h-[540px] lg:max-w-[600px] lg:h-[600px] xl:max-w-[660px] xl:h-[660px] overflow-hidden">
							{/* Central Profile Picture - Adjusted for 1.5x Mobile Profile (w-40 → w-60) */}
							<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-88 lg:h-88 xl:w-96 xl:h-96">
								<motion.div
									animate={{
										rotate: [0, 360],
									}}
									transition={{
										duration: 25,
										repeat: Infinity,
										ease: 'linear',
									}}
									className="absolute inset-[-15px] sm:inset-[-18px] md:inset-[-21px] lg:inset-[-24px] xl:inset-[-27px] rounded-full bg-gradient-to-r from-primary/40 via-secondary/30 to-accent/20"
								/>
								<div className="absolute inset-4 sm:inset-5 md:inset-6 lg:inset-7 xl:inset-8 rounded-full overflow-hidden border-4 sm:border-5 md:border-6 lg:border-7 xl:border-8 border-primary/40 shadow-2xl z-10">
									<Image
										src="/image/pic.jpg"
										alt="Kamlesh Parihar"
										fill
										className="object-cover"
										priority
									/>
								</div>
							</div>

							{/* Anti-Clockwise Orbiting Certificates - Adjusted for 1.5x Mobile Profile */}
							{certifications.map((cert, index) => {
								const angleOffset = index * 120;

								return (
									<motion.div
										key={cert.title}
										className="absolute inset-0"
										animate={{
											rotate: [angleOffset, angleOffset - 360],
										}}
										transition={{
											duration: 15 + index * 3,
											repeat: Infinity,
											ease: 'linear',
										}}
									>
										<motion.div
											className="absolute w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-44 xl:h-44"
											style={{
												left: '50%',
												top: '50%',
												transform: 'translate(-50%, -50%) translateY(-135px)',
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
												scale: 1.2,
												zIndex: 20,
											}}
										>
											<motion.div
												className="relative w-full h-full"
												animate={{
													rotate: [-(angleOffset), -(angleOffset) + 360],
												}}
												transition={{
													duration: 15 + index * 3,
													repeat: Infinity,
													ease: 'linear',
												}}
											>
												{/* Clear background, no black background */}
												<div className="relative w-full h-full flex items-center justify-center rounded-full shadow-lg">
													<Image
														src={cert.image}
														alt={cert.title}
														fill
														className="object-contain"
														priority
													/>
												</div>
											</motion.div>
										</motion.div>
									</motion.div>
								);
							})}

							{/* Enhanced Responsive orbit radius styles for certificates - Adjusted for 1.5x Mobile Profile */}
							<style jsx>{`
								@media (min-width: 640px) {
									.absolute:nth-of-type(4) .absolute {
										transform: translate(-50%, -50%) translateY(-165px) !important;
									}
									.absolute:nth-of-type(5) .absolute {
										transform: translate(-50%, -50%) translateY(-200px) !important;
									}
									.absolute:nth-of-type(6) .absolute {
										transform: translate(-50%, -50%) translateY(-235px) !important;
									}
								}
								@media (min-width: 768px) {
									.absolute:nth-of-type(4) .absolute {
										transform: translate(-50%, -50%) translateY(-195px) !important;
									}
									.absolute:nth-of-type(5) .absolute {
										transform: translate(-50%, -50%) translateY(-240px) !important;
									}
									.absolute:nth-of-type(6) .absolute {
										transform: translate(-50%, -50%) translateY(-285px) !important;
									}
								}
								@media (min-width: 1024px) {
									.absolute:nth-of-type(4) .absolute {
										transform: translate(-50%, -50%) translateY(-225px) !important;
									}
									.absolute:nth-of-type(5) .absolute {
										transform: translate(-50%, -50%) translateY(-280px) !important;
									}
									.absolute:nth-of-type(6) .absolute {
										transform: translate(-50%, -50%) translateY(-335px) !important;
									}
								}
								@media (min-width: 1280px) {
									.absolute:nth-of-type(4) .absolute {
										transform: translate(-50%, -50%) translateY(-255px) !important;
									}
									.absolute:nth-of-type(5) .absolute {
										transform: translate(-50%, -50%) translateY(-320px) !important;
									}
									.absolute:nth-of-type(6) .absolute {
										transform: translate(-50%, -50%) translateY(-385px) !important;
									}
								}
							`}</style>

							{/* Middle Ring - Adjusted for 1.5x Mobile Profile */}
							<motion.div
								className="absolute inset-10 sm:inset-12 md:inset-14 lg:inset-18 xl:inset-22 rounded-full border-3 sm:border-4 border-dashed border-primary/30"
								animate={{
									rotate: [0, 360],
									opacity: [0.2, 0.5, 0.2],
									scale: [1, 1.02, 1],
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
									scale: {
										duration: 6,
										repeat: Infinity,
										ease: 'easeInOut',
									},
								}}
							/>

							{/* Inner Ring - Adjusted for 1.5x Mobile Profile */}
							<motion.div
								className="absolute inset-20 sm:inset-24 md:inset-28 lg:inset-34 xl:inset-40 rounded-full border-2 border-secondary/40"
								animate={{
									rotate: [0, -360],
									scale: [1, 0.98, 1],
									opacity: [0.15, 0.4, 0.15],
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
									opacity: {
										duration: 4,
										repeat: Infinity,
										ease: 'easeInOut',
									},
								}}
							/>

							{/* Enhanced Particle Effects - Adjusted for 1.5x Mobile Profile */}
							{[...Array(8)].map((_, i) => (
								<motion.div
									key={i}
									className="absolute w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 bg-primary/70 rounded-full"
									style={{
										left: '50%',
										top: '50%',
										transform: `translateX(-50%) translateY(-50%) translateY(-${150 + i * 15}px)`,
									}}
									animate={{
										rotate: [i * 45, i * 45 - 360],
										scale: [0, 1.3, 0],
										opacity: [0, 0.8, 0],
									}}
									transition={{
										rotate: {
											duration: 25,
											repeat: Infinity,
											ease: 'linear',
										},
										scale: {
											duration: 4,
											repeat: Infinity,
											delay: i * 0.3,
											ease: 'easeInOut',
										},
										opacity: {
											duration: 4,
											repeat: Infinity,
											delay: i * 0.3,
											ease: 'easeInOut',
										},
									}}
								/>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
