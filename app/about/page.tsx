import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import AnimatedBox from '@/components/animated-box';
import { Cloud, Server, Database, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <AnimatedBox>
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-muted-foreground mb-6">What I Bring to Your Team</p>

        <div className="mb-6">
          <p className="text-base text-muted-foreground">Expertise in modern cloud technologies and DevOps practices to accelerate your digital transformation.</p>
        </div>

        {/* Feature cards: Cloud / DevOps / Infrastructure / Security */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">What I Bring to Your Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Expertise in modern cloud technologies and DevOps practices to accelerate your digital transformation</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group">
                <div className="rounded-lg bg-card text-card-foreground shadow-sm p-6 h-full border-2 border-border hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-card to-card/50 group-hover:shadow-lg">
                  <div className="space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-orange-500 group-hover:scale-110 transition-transform">
                      <Cloud className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">Cloud Architecture</h3>
                    <p className="text-muted-foreground">AWS &amp; Azure expertise</p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="rounded-lg bg-card text-card-foreground shadow-sm p-6 h-full border-2 border-border hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-card to-card/50 group-hover:shadow-lg">
                  <div className="space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-blue-500 group-hover:scale-110 transition-transform">
                      <Server className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">DevOps Engineering</h3>
                    <p className="text-muted-foreground">CI/CD &amp; Automation</p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="rounded-lg bg-card text-card-foreground shadow-sm p-6 h-full border-2 border-border hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-card to-card/50 group-hover:shadow-lg">
                  <div className="space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-purple-500 group-hover:scale-110 transition-transform" style={{ transform: 'rotate(-1.7deg)' }}>
                      <Database className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">Infrastructure</h3>
                    <p className="text-muted-foreground">IaC with Terraform</p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="rounded-lg bg-card text-card-foreground shadow-sm p-6 h-full border-2 border-border hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-card to-card/50 group-hover:shadow-lg">
                  <div className="space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-green-500 group-hover:scale-110 transition-transform">
                      <Shield className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">Security</h3>
                    <p className="text-muted-foreground">DevSecOps practices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent>
              <h3 className="text-xl font-semibold mb-3">Core Capabilities</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>Cloud Architecture:</strong> AWS & Azure expertise</li>
                <li><strong>DevOps Engineering:</strong> CI/CD & Automation</li>
                <li><strong>Infrastructure:</strong> IaC with Terraform</li>
                <li><strong>Security:</strong> DevSecOps practices</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h3 className="text-xl font-semibold mb-3">Professional Achievements</h3>
              <p className="text-sm text-muted-foreground">A glimpse of my professional journey and accomplishments in the cloud and DevOps space</p>

              <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
                <div>
                  <div className="font-semibold">Education</div>
                  <div className="text-muted-foreground">B.E. in E&TC Engineering — JSPM's RSCOE, Pune</div>
                </div>
                <div>
                  <div className="font-semibold">Experience</div>
                  <div className="text-muted-foreground">3+ Years — DevOps & Cloud Engineering</div>
                </div>
                <div>
                  <div className="font-semibold">Projects</div>
                  <div className="text-muted-foreground">20+ Completed Deployments, CI/CD, Infrastructure</div>
                </div>
                <div>
                  <div className="font-semibold">Certifications</div>
                  <div className="text-muted-foreground">10+ Earned — AWS, Azure, Kubernetes</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Technology Stack</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardContent>
                <h4 className="font-semibold mb-2">AWS</h4>
                <div className="text-muted-foreground">Expert</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h4 className="font-semibold mb-2">Docker</h4>
                <div className="text-muted-foreground">Advanced</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h4 className="font-semibold mb-2">Kubernetes</h4>
                <div className="text-muted-foreground">Advanced</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h4 className="font-semibold mb-2">Terraform</h4>
                <div className="text-muted-foreground">Expert</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h4 className="font-semibold mb-2">GitLab CI</h4>
                <div className="text-muted-foreground">Advanced</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h4 className="font-semibold mb-2">Jenkins</h4>
                <div className="text-muted-foreground">Intermediate</div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Professional Snapshot</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-card p-4 rounded">
              <div className="text-sm text-muted-foreground">Experience</div>
              <div className="text-xl font-bold">3+ Years</div>
              <div className="text-xs text-muted-foreground">DevOps & Cloud Engineering</div>
            </div>
            <div className="bg-card p-4 rounded">
              <div className="text-sm text-muted-foreground">Projects</div>
              <div className="text-xl font-bold">20+</div>
              <div className="text-xs text-muted-foreground">Completed Deployments & CI/CD</div>
            </div>
            <div className="bg-card p-4 rounded">
              <div className="text-sm text-muted-foreground">Certifications</div>
              <div className="text-xl font-bold">10+</div>
              <div className="text-xs text-muted-foreground">AWS, Azure, Kubernetes</div>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Infrastructure?</h2>
          <p className="text-muted-foreground mb-4">Let's discuss how I can help accelerate your cloud journey and optimize your DevOps processes.</p>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="/contact">Get In Touch</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/resume">Download Resume</Link>
            </Button>
          </div>
        </section>
      </AnimatedBox>
    </div>
  );
}
