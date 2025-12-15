'use client';

import { Badge } from '@/components/ui/badge';
import { SkillCard } from '@/components/skill-card';
import { CertificationCard } from '@/components/certification-card';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronUp, Cloud, Container, Settings, GitBranch, Activity, Monitor, Code, Terminal } from 'lucide-react';
import { useState } from 'react';
import { FaMicrosoft } from 'react-icons/fa';
import { Building, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { SiUpwork } from 'react-icons/si';
import UpworkReviews from '@/components/upwork-reviews';

// Import React Icons for tool logos
import { 
    SiAmazon, 
    SiGooglecloud, 
    SiDocker, 
    SiKubernetes, 
    SiTerraform, 
    SiAnsible, 
    SiJenkins, 
    SiGithubactions, 
    SiGitlab, 
    SiPrometheus, 
    SiGrafana, 
    SiElasticsearch, 
    SiLinux, 
    SiUbuntu, 
    SiRedhat, 
    SiPython, 
    SiGnubash, 
    SiPowers, 
    SiYaml, 
    SiJson, 
    SiGit, 
    SiGithub, 
    SiBitbucket,
    SiHelm,
    SiPulumi,
    // SiAzuredevops, // Removed: not available in react-icons/si
    SiAmazonec2,
    SiAmazons3,
    SiAwslambda,
    SiCentos,
    // SiMaven, // Removed: not available in react-icons/si
    SiSonarqube,
    SiPodman
} from 'react-icons/si';

// Tool logo mapping
const toolLogos: Record<string, JSX.Element> = {
    // Cloud Platforms
    'AWS': <SiAmazon className="w-4 h-4" />,
    'Azure': <FaMicrosoft className="w-4 h-4" />,
    'GCP': <SiGooglecloud className="w-4 h-4" />,
    'EC2': <SiAmazonec2 className="w-4 h-4" />,
    'S3': <SiAmazons3 className="w-4 h-4" />,
    'Lambda': <SiAwslambda className="w-4 h-4" />,
    
    // Container Technologies
    'Docker': <SiDocker className="w-4 h-4" />,
    'Kubernetes': <SiKubernetes className="w-4 h-4" />,
    'Podman': <SiPodman className="w-4 h-4" />,
    'Helm': <SiHelm className="w-4 h-4" />,
    
    // Infrastructure as Code
    'Terraform': <SiTerraform className="w-4 h-4" />,
    'Ansible': <SiAnsible className="w-4 h-4" />,
    'CloudFormation': <SiAmazon className="w-4 h-4" />,
    'Pulumi': <SiPulumi className="w-4 h-4" />,
    
    // CI/CD Tools
    'Jenkins': <SiJenkins className="w-4 h-4" />,
    'GitHub Actions': <SiGithubactions className="w-4 h-4" />,
    'GitLab CI': <SiGitlab className="w-4 h-4" />,
    // 'Azure DevOps': <SiAzuredevops className="w-4 h-4" />, // Removed: not available in react-icons/si
    'Azure DevOps': <FaMicrosoft className="w-4 h-4" />, // Use Azure icon as a placeholder
    
    // Monitoring & Logging
    'Prometheus': <SiPrometheus className="w-4 h-4" />,
    'Grafana': <SiGrafana className="w-4 h-4" />,
    'ELK Stack': <SiElasticsearch className="w-4 h-4" />,
    'CloudWatch': <SiAmazon className="w-4 h-4" />,
    
    // Operating Systems
    // Operating Systems
    'Linux': <SiLinux className="w-4 h-4" />,
    'Ubuntu': <SiUbuntu className="w-4 h-4" />,
    'CentOS': <SiCentos className="w-4 h-4" />,
    'RHEL': <SiRedhat className="w-4 h-4" />,
    // 'Windows': <SiWindows className="w-4 h-4" />, // No SiWindows icon available
    // Programming & Scripting
    'Python': <SiPython className="w-4 h-4" />,
    'Bash': <SiGnubash className="w-4 h-4" />,
    'PowerShell': <SiPowers className="w-4 h-4" />,
    'YAML': <SiYaml className="w-4 h-4" />,
    'JSON': <SiJson className="w-4 h-4" />,
    
    // Version Control
    'Git': <SiGit className="w-4 h-4" />,
    'GitHub': <SiGithub className="w-4 h-4" />,
    'GitLab': <SiGitlab className="w-4 h-4" />,
    'Bitbucket': <SiBitbucket className="w-4 h-4" />,
    
    // Build Tools
    // 'Maven': <SiMaven className="w-4 h-4" />, // Removed: not available in react-icons/si
    'Maven': <Code className="w-4 h-4" />, // Use a generic icon as a placeholder
    'SonarQube': <SiSonarqube className="w-4 h-4" />,
};

const skills = [
    {
        title: 'Cloud Platforms',
        level: 90,
        description: 'AWS (EC2, S3, Lambda, VPC), Azure, Google Cloud Platform',
        icon: Cloud,
        color: 'from-blue-500 to-cyan-500',
        technologies: ['AWS', 'Azure', 'GCP', 'EC2', 'S3', 'Lambda']
    },
    {
        title: 'Container Technologies',
        level: 85,
        description: 'Docker, Kubernetes, Container Orchestration',
        icon: Container,
        color: 'from-blue-600 to-purple-600',
        technologies: ['Docker', 'Kubernetes', 'Podman', 'Helm']
    },
    {
        title: 'Infrastructure as Code',
        level: 88,
        description: 'Terraform, CloudFormation, Ansible',
        icon: Settings,
        color: 'from-green-500 to-emerald-500',
        technologies: ['Terraform', 'Ansible', 'CloudFormation', 'Pulumi']
    },
    {
        title: 'CI/CD Tools',
        level: 85,
        description: 'Jenkins, GitHub Actions, GitLab CI/CD',
        icon: GitBranch,
        color: 'from-orange-500 to-red-500',
        technologies: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'Azure DevOps']
    },
    {
        title: 'Monitoring & Logging',
        level: 80,
        description: 'Prometheus, Grafana, ELK Stack, CloudWatch',
        icon: Activity,
        color: 'from-purple-500 to-pink-500',
        technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'CloudWatch']
    },
    {
        title: 'Operating Systems',
        level: 90,
        description: 'Linux (Ubuntu, CentOS, RHEL), Windows Server',
        icon: Monitor,
        color: 'from-gray-600 to-gray-800',
        technologies: ['Linux', 'Ubuntu', 'CentOS', 'RHEL', 'Windows']
    },
    {
        title: 'Scripting & Programming',
        level: 85,
        description: 'Python, Bash, PowerShell, YAML, JSON',
        icon: Code,
        color: 'from-yellow-500 to-orange-500',
        technologies: ['Python', 'Bash', 'PowerShell', 'YAML', 'JSON']
    },
    {
        title: 'Version Control',
        level: 90,
        description: 'Git, GitHub, GitLab, Bitbucket',
        icon: Terminal,
        color: 'from-indigo-500 to-blue-500',
        technologies: ['Git', 'GitHub', 'GitLab', 'Bitbucket']
    },
];

const certifications = [
    {
        title: 'AWS Certified Solutions Architect Associate',
        issuer: 'Amazon Web Services',
        date: '2024',
        image: '/image/aws-certified-solutions-architect-associate (2).png',
        verifyLink:
            'https://www.credly.com/badges/9550cc3f-ae9e-4192-b2d1-cfd6c4122022/linked_in_profile',
    },
    {
        title: 'AWS Certified Cloud Practitioner',
        issuer: 'Amazon Web Services',
        date: '2023',
        image: '/image/aws-certified-cloud-practitioner.png',
        verifyLink:
            'https://www.credly.com/badges/b46283d1-ffef-4873-9818-f43fed158c76/linked_in_profile',
    },
    {
        title: 'Microsoft Azure Security Engineer Associate (AZ-500)',
        issuer: 'Microsoft',
        date: '2023',
        image: '/image/azure-security-engineer-associate600x600 (1).png',
        verifyLink:
            'https://learn.microsoft.com/en-us/users/pariharkamal/credentials/certification-o-/azure-security-engineer?tab=credentials-tab',
    },
    {
        title: 'AWS Certified AI Cloud Practitioner',
        issuer: 'Amazon Web Services',
        date: '2025',
        image: '/image/aws-certified-ai-cloud-practitioner.png',
        verifyLink: 'https://www.credly.com/badges/d77305f9-b1ce-456f-8371-c83b5e068a41',
    },
  ];

// Company logos mapping
const companyLogos: Record<string, { logo: JSX.Element; website: string }> = {
    'Freelance/Contract Work': {
        logo: <SiUpwork className="w-8 h-8 text-green-500" />,
        website: 'https://www.upwork.com/freelancers/~01763ff771cdbdfb3a'
    },
    'KodeKloud': {
        logo: (
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                K
            </div>
        ),
        website: 'https://kodekloud.com/'
    }
};

const experience = [
    {
        title: 'DevOps Engineer',
        company: 'Freelance/Contract Work',
        period: '2024 - Present',
        location: 'Remote',
        achievements: [
            'Implemented CI/CD pipelines using Jenkins and GitHub Actions for multiple client projects',
            'Managed cloud infrastructure on AWS and Azure platforms, reducing deployment time by 60%',
            'Automated deployment processes using Docker and Kubernetes, improving scalability',
            'Configured comprehensive monitoring and logging solutions using Prometheus and Grafana',
            'Collaborated with development teams across different time zones for seamless deployments',
            'Optimized infrastructure costs through efficient resource management and auto-scaling',
        ],
        technologies: [
            'AWS',
            'Azure',
            'Jenkins',
            'Docker',
            'Kubernetes',
            'Terraform',
            'Python',
            'Git',
        ],
    },
    {
        title: 'DevOps Trainee',
        company: 'KodeKloud',
        period: 'Nov 2024 - Apr 2025 · 6 mos',
        location: 'Online Training Program',
        achievements: [
            'Completed intensive 6-month DevOps training program with hands-on real-world projects',
            'Built and deployed CI/CD pipelines using Jenkins and GitLab CI with 99% uptime',
            'Gained expertise in containerization with Docker and orchestration using Kubernetes',
            'Worked with cloud platforms like AWS and Azure for scalable infrastructure deployment',
            'Implemented Infrastructure as Code (IaC) using Terraform and Ansible for consistency',
            'Set up monitoring and logging solutions with Prometheus, Grafana, and ELK Stack',
            'Mastered version control with Git and GitHub workflows for team collaboration',
            'Gained experience with automation tools like Maven and SonarQube for code quality',
        ],
        technologies: [
            'Jenkins',
            'GitLab CI',
            'Docker',
            'Kubernetes',
            'AWS',
            'Azure',
            'Terraform',
            'Ansible',
            'Prometheus',
            'Grafana',
            'ELK Stack',
            'Git',
            'Maven',
            'SonarQube',
        ],
    },
];

const education = [
    {
        degree: 'Bachelor of Technology - BTech, Computer Science',
        school: 'Lovely Professional University',
        year: 'Jun 2021 - Jun 2025',
        grade: '7.38 CGPA',
    },
    {
        degree: 'Senior Secondary Education, PCM',
        school: 'Vivek Sr Sec School Bali',
        year: 'Sep 2018 - Jun 2019',
        grade: '93.6%',
    },
];

// Enhanced Skill Card Component
type Skill = {
    title: string;
    level: number;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
    technologies: string[];
};

interface EnhancedSkillCardProps {
    skill: Skill;
    index: number;
}

const EnhancedSkillCard: React.FC<EnhancedSkillCardProps> = ({ skill, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const IconComponent = skill.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                bounce: 0.3
            }}
            whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 }
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="group"
        >
            <Card className="relative overflow-hidden h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-grid-pattern animate-pulse" />
                </div>

                <CardContent className="relative p-6 h-full flex flex-col">
                    {/* Header with Icon */}
                    <div className="flex items-center gap-3 mb-4">
                        <motion.div 
                            className={`p-3 rounded-lg bg-gradient-to-br ${skill.color} text-white shadow-lg`}
                            animate={{
                                scale: isHovered ? 1.1 : 1,
                                boxShadow: isHovered 
                                    ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                                    : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                            }}
                            transition={{ duration: 0.3 }}
                            whileHover={{
                                scale: 1.15,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <motion.div
                                animate={{
                                    opacity: isHovered ? [1, 0.7, 1] : 1
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: isHovered ? Infinity : 0,
                                    ease: "easeInOut"
                                }}
                            >
                                <IconComponent className="w-6 h-6" />
                            </motion.div>
                        </motion.div>
                        <div className="flex-1">
                            <h3 className="font-semibold text-lg">{skill.title}</h3>
                            <div className="flex items-center gap-2 mt-1">
                                <div className="text-sm text-muted-foreground">Proficiency:</div>
                                <div className="text-sm font-medium text-primary">{skill.level}%</div>
                            </div>
                        </div>
                    </div>

                    {/* Progress Bar with Animation */}
                    <div className="mb-4">
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                            <motion.div
                                className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ 
                                    duration: 1.5, 
                                    delay: index * 0.1 + 0.5,
                                    ease: "easeOut"
                                }}
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4 flex-1">
                        {skill.description}
                    </p>

                    {/* Technologies with Logos */}
                    <div className="space-y-2">
                        <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                            Technologies
                        </div>
                        <motion.div 
                            className="flex flex-wrap gap-1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 + 0.8 }}
                        >
                            {skill.technologies.map((tech, techIndex) => (
                                <motion.div
                                    key={tech}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ 
                                        delay: index * 0.1 + 0.8 + techIndex * 0.05,
                                        type: "spring",
                                        bounce: 0.5
                                    }}
                                >
                                    <Badge 
                                        variant="secondary" 
                                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default flex items-center gap-1"
                                    >
                                        {toolLogos[tech] && (
                                            <span className="inline-flex items-center">
                                                {toolLogos[tech]}
                                            </span>
                                        )}
                                        <span>{tech}</span>
                                    </Badge>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                    />
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default function Resume() {
    const [expandedExperience, setExpandedExperience] = useState<Record<number, boolean>>({});

    const toggleExperience = (index: number) => {
        setExpandedExperience((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <div className="container py-8 sm:py-12 md:py-16 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-12 sm:space-y-16"
            >
                {/* Enhanced Professional Summary */}
                <section>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="text-center mb-8">
                            <motion.h2 
                                className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                Professional Summary
                            </motion.h2>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '120px' }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full"
                            />
                        </div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                        >
                            <Card className="relative overflow-hidden border-2 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-xl">
                                {/* Animated Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-blue-500/5 to-purple-500/5" />
                                <div className="absolute inset-0 opacity-30">
                                    <div className="absolute top-0 left-0 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
                                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000" />
                                </div>
                                
                                <CardContent className="relative p-8 sm:p-10">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1, delay: 0.6 }}
                                        className="flex items-start gap-4 mb-6"
                                    >
                                        <motion.div
                                            className="p-3 rounded-full bg-gradient-to-br from-primary to-purple-600 text-white shadow-lg"
                                            animate={{ 
                                                rotate: [0, 5, -5, 0],
                                                scale: [1, 1.05, 1]
                                            }}
                                            transition={{ 
                                                duration: 4,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        >
                                            <Building className="w-6 h-6" />
                                        </motion.div>
                                        <div>
                                            <motion.h3 
                                                className="text-xl font-semibold mb-2"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.8 }}
                                            >
                                                DevOps Engineer
                                            </motion.h3>
                                            <motion.div 
                                                className="flex items-center gap-2 text-muted-foreground"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.9 }}
                                            >
                                                <MapPin className="w-4 h-4" />
                                                <span className="text-sm">Bali, Rajasthan, India</span>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                    
                                    <motion.p 
                                        className="text-base sm:text-lg text-muted-foreground leading-relaxed"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.4 }}
                                    >
                                        Dedicated DevOps Engineer with expertise in cloud technologies,
                                        automation, and infrastructure management. Based in Bali, Rajasthan,
                                        India, with hands-on experience in AWS, Azure, and Google Cloud
                                        Platform. Skilled in implementing CI/CD pipelines, containerization
                                        with Docker and Kubernetes, and infrastructure as code using
                                        Terraform. Passionate about optimizing development workflows and
                                        ensuring reliable, scalable deployments. Strong background in Linux
                                        systems administration and automation scripting.
                                    </motion.p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Professional Experience Section */}
                <section>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="text-center mb-8">
                            <motion.h2 
                                className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                Professional Experience
                            </motion.h2>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '140px' }}
                                transition={{ duration: 1, delay: 0.3 }}
                                className="h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full"
                            />
                        </div>
                    </motion.div>
                    
                    <div className="space-y-6 lg:space-y-8">
                        {experience.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`
                                    relative border-2 rounded-xl shadow-lg transition-all duration-500
                                    ${expandedExperience[index] 
                                        ? 'border-primary/50 bg-gradient-to-br from-primary/5 to-purple-500/5 shadow-xl' 
                                        : 'border-border hover:border-primary/30 hover:shadow-xl bg-card'
                                    }
                                `}
                            >
                                {/* Animated Background Elements */}
                                <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden rounded-xl">
                                    <div className="absolute top-4 right-4 w-16 h-16 bg-primary/10 rounded-full blur-xl animate-pulse" />
                                    <div className="absolute bottom-4 left-4 w-20 h-20 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000" />
                                </div>

                                {/* Mobile-First Company Header */}
                                <div className="relative p-4 sm:p-6 lg:p-8">
                                    <div 
                                        className="cursor-pointer group"
                                        onClick={() => toggleExperience(index)}
                                    >
                                        {/* Mobile Layout (stacked) */
                                        <div className="block lg:hidden">
                                            <div className="flex items-start gap-3 mb-4">
                                                {/* Company Logo */}
                                                <motion.div 
                                                    className="relative flex-shrink-0"
                                                    whileHover={{ scale: 1.1 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg border-2 border-primary/20 flex items-center justify-center bg-gradient-to-br from-background to-primary/5 shadow-lg">
                                                        {companyLogos[job.company]?.logo}
                                                    </div>
                                                    <motion.div
                                                        className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background"
                                                        animate={{ scale: [1, 1.2, 1] }}
                                                        transition={{ duration: 2, repeat: Infinity }}
                                                    />
                                                </motion.div>

                                                {/* Job Details */}
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-start justify-between">
                                                        <div className="flex-1">
                                                            <h3 className="text-lg sm:text-xl font-bold leading-tight mb-1">{job.title}</h3>
                                                            <div className="flex items-center gap-2 mb-2">
                                                                <Building className="w-4 h-4 text-primary flex-shrink-0" />
                                                                <span className="font-semibold text-primary text-sm sm:text-base truncate">{job.company}</span>
                                                                {companyLogos[job.company] && (
                                                                    <motion.a
                                                                        href={companyLogos[job.company].website}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0"
                                                                        whileHover={{ scale: 1.1 }}
                                                                        whileTap={{ scale: 0.95 }}
                                                                        onClick={(e) => e.stopPropagation()}
                                                                    >
                                                                        <ExternalLink className="w-4 h-4" />
                                                                    </motion.a>
                                                                )}
                                                            </div>
                                                        </div>
                                                        
                                                        {/* Expand Button */}
                                                        <motion.div
                                                            className="p-2 rounded-full hover:bg-primary/10 transition-colors flex-shrink-0"
                                                            animate={{ 
                                                                rotate: expandedExperience[index] ? 180 : 0,
                                                                scale: expandedExperience[index] ? 1.1 : 1
                                                            }}
                                                            transition={{ duration: 0.3 }}
                                                            whileHover={{ scale: 1.2 }}
                                                        >
                                                            <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                                                        </motion.div>
                                                    </div>
                                                
                                                    {/* Period and Location */}
                                                    <div className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                                                        <div className="flex items-center gap-1">
                                                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                                                            <span className="leading-tight">{job.period}</span>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                                                            <span className="leading-tight">{job.location}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {/* Expand Badge */}
                                            <div className="flex justify-center">
                                                <Badge variant="outline" className="text-xs animate-pulse">
                                                    {expandedExperience[index] ? 'Click to collapse' : 'Click to expand'}
                                                </Badge>
                                            </div>
                                        </div>
}

                                        {/* Desktop Layout (horizontal) */}
                                        <div className="hidden lg:block">
                                            <div className="flex items-start justify-between">
                                                <div className="flex items-start gap-6 flex-1">
                                                    {/* Company Logo */}
                                                    <motion.div 
                                                        className="relative"
                                                        whileHover={{ scale: 1.1 }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        <div className="w-16 h-16 rounded-lg border-2 border-primary/20 flex items-center justify-center bg-gradient-to-br from-background to-primary/5 shadow-lg">
                                                            {companyLogos[job.company]?.logo}
                                                        </div>
                                                        <motion.div
                                                            className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background"
                                                            animate={{ scale: [1, 1.2, 1] }}
                                                            transition={{ duration: 2, repeat: Infinity }}
                                                        />
                                                    </motion.div>

                                                    {/* Job Details */}
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-3 mb-2">
                                                            <h3 className="text-2xl font-bold">{job.title}</h3>
                                                            <Badge variant="outline" className="text-xs animate-pulse">
                                                                {expandedExperience[index] ? 'Click to collapse' : 'Click to expand'}
                                                            </Badge>
                                                        </div>
                                                        
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <Building className="w-5 h-5 text-primary" />
                                                            <span className="font-semibold text-primary text-lg">{job.company}</span>
                                                            {companyLogos[job.company] && (
                                                                <motion.a
                                                                    href={companyLogos[job.company].website}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="text-muted-foreground hover:text-primary transition-colors"
                                                                    whileHover={{ scale: 1.1 }}
                                                                    whileTap={{ scale: 0.95 }}
                                                                    onClick={(e) => e.stopPropagation()}
                                                                >
                                                                    <ExternalLink className="w-5 h-5" />
                                                                </motion.a>
                                                            )}
                                                        </div>
                                                        
                                                        <div className="flex flex-wrap gap-6 text-muted-foreground">
                                                            <div className="flex items-center gap-2">
                                                                <Calendar className="w-4 h-4" />
                                                                <span>{job.period}</span>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <MapPin className="w-4 h-4" />
                                                                <span>{job.location}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Expand/Collapse Button */}
                                                <motion.div
                                                    className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                                                    animate={{ 
                                                        rotate: expandedExperience[index] ? 180 : 0,
                                                        scale: expandedExperience[index] ? 1.1 : 1
                                                    }}
                                                    transition={{ duration: 0.3 }}
                                                    whileHover={{ scale: 1.2 }}
                                                >
                                                    <ChevronDown className="h-6 w-6 text-primary" />
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Collapsible Content */}
                                    <motion.div
                                        initial={false}
                                        animate={{
                                            height: expandedExperience[index] ? 'auto' : 0,
                                            opacity: expandedExperience[index] ? 1 : 0,
                                        }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pt-6 space-y-6 border-t border-primary/20">
                                            {/* Achievements */}
                                            <div>
                                                <h4 className="font-semibold text-base sm:text-lg mb-4 flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                                    Key Achievements
                                                </h4>
                                                <div className="grid gap-3 sm:gap-4">
                                                    {job.achievements.map((achievement, i) => (
                                                        <motion.div
                                                            key={i}
                                                            initial={{ opacity: 0, x: -30 }}
                                                            animate={{
                                                                opacity: expandedExperience[index] ? 1 : 0,
                                                                x: 0,
                                                            }}
                                                            transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                                                            className="flex items-start gap-3 text-muted-foreground text-sm sm:text-base"
                                                        >
                                                            <motion.div 
                                                                className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
                                                                animate={{ scale: [1, 1.2, 1] }}
                                                                transition={{ delay: 0.2 + i * 0.05, duration: 0.5 }}
                                                            />
                                                            <span className="leading-relaxed">{achievement}</span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Technologies */}
                                            <div>
                                                <h4 className="font-semibold text-base sm:text-lg mb-4 flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                                    Technologies Used
                                                </h4>
                                                <motion.div 
                                                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: expandedExperience[index] ? 1 : 0 }}
                                                    transition={{ delay: 0.3 }}
                                                >
                                                    {job.technologies.map((tech, techIndex) => (
                                                        <motion.div
                                                            key={tech}
                                                            initial={{ opacity: 0, scale: 0, rotate: -180 }}
                                                            animate={{ 
                                                                opacity: expandedExperience[index] ? 1 : 0, 
                                                                scale: 1, 
                                                                rotate: 0 
                                                            }}
                                                            transition={{ 
                                                                delay: 0.4 + techIndex * 0.03,
                                                                type: "spring",
                                                                bounce: 0.4
                                                            }}
                                                        >
                                                            <Badge 
                                                                variant="secondary" 
                                                                className="w-full justify-start flex items-center gap-1 hover:bg-primary hover:text-white transition-all duration-200 cursor-default text-xs sm:text-sm p-2 sm:p-3"
                                                            >
                                                                {toolLogos[tech] && (
                                                                    <span className="inline-flex items-center flex-shrink-0">
                                                                        {toolLogos[tech]}
                                                                    </span>
                                                                )}
                                                                <span className="truncate">{tech}</span>
                                                            </Badge>
                                                        </motion.div>
                                                    ))}
                                                </motion.div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Upwork Reviews Slider */}
                <UpworkReviews />

                {/* Education Section */}
                <section>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
                        Education
                    </h2>
                    <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                        {education.length > 0
                            ? education.map((edu, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                  >
                                        <Card className="h-full">
                                            <CardContent className="p-4 sm:p-6">
                                                <h3 className="font-semibold text-sm sm:text-base mb-1">
                                                    {edu.degree}
                                                </h3>
                                                <p className="text-muted-foreground text-sm sm:text-base mb-2">
                                                    {edu.school}
                                                </p>
                                                <div className="flex flex-wrap gap-2 items-center">
                                                    <Badge variant="secondary" className="text-xs sm:text-sm">
                                                        {edu.year}
                                                    </Badge>
                                                    {edu.grade && (
                                                        <Badge variant="outline" className="text-xs sm:text-sm">
                                                            Grade: {edu.grade}
                                                        </Badge>
                                                    )}
                                                </div>
                                            </CardContent>
                                        </Card>
                                  </motion.div>
                                ))
                            : (
                                <Card className="md:col-span-2">
                                    <CardContent className="p-6">
                                        <p className="text-muted-foreground text-center">
                                            Please provide your actual education details from your CV.
                                        </p>
                                    </CardContent>
                                </Card>
                              )}
                    </div>
                </section>

                {/* Certifications Section */}
                <section>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
                        Certifications
                    </h2>
                    <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {certifications.length > 0
                            ? certifications.map((cert, index) => (
                                    <CertificationCard key={index} {...cert} index={index} />
                              ))
                            : (
                                <Card className="md:col-span-2 lg:col-span-3">
                                    <CardContent className="p-6">
                                        <p className="text-muted-foreground text-center">
                                            Please provide your actual certification details from your CV.
                                        </p>
                                    </CardContent>
                                </Card>
                              )}
                    </div>
                </section>

                {/* Enhanced Technical Skills Section */}
                <section>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="text-center mb-8">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                                Technical Skills
                            </h2>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '100px' }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
                            />
                        </div>
                        
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                            {skills.map((skill, index) => (
                                <EnhancedSkillCard key={index} skill={skill} index={index} />
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* Additional Information */}
                <section>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
                            Additional Information
                        </h2>
                        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                            <Card>
                                <CardContent className="p-4 sm:p-6">
                                    <h3 className="font-semibold text-sm sm:text-base mb-3">
                                        Languages
                                    </h3>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span className="text-sm">Hindi</span>
                                            <span className="text-sm text-muted-foreground">
                                                Native
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-sm">English</span>
                                            <span className="text-sm text-muted-foreground">
                                                Professional
                                            </span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-4 sm:p-6">
                                    <h3 className="font-semibold text-sm sm:text-base mb-3">
                                        Interests
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="outline">Cloud Computing</Badge>
                                        <Badge variant="outline">Open Source</Badge>
                                        <Badge variant="outline">Automation</Badge>
                                        <Badge variant="outline">Technology Blogs</Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </motion.div>
                </section>
            </motion.div>
        </div>
    );
}