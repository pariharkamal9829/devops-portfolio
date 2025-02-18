import { IconCloud } from "@/components/magicui/icon-cloud";

const slugs = [
  // DevOps Tools
  "kubernetes", "terraform", "jenkins", "ansible", "circleci", "gitlabci", 
  "docker", "prometheus", "grafana", "vagrant", "vault", "helm", "puppet", 
  "chef", "travisci", "azuredevops", "bitbucket", "octopusdeploy", "artifactory", 
  "splunk", "newrelic", "cloudwatch", "datadog", "rundeck", "slack", "mattermost",

  // Cloud Providers
  "amazonaws", "googlecloud", "azure", "gcp", "hashicorp", 

  // Linux-related Tools
  "linux", "ubuntu", "centos", "debian", "redhat", "fedora", "suse", "archlinux", 

  // Java & Related Tools
  "java", "maven", "gradle", "spring", "jdk", "javadev", 

  // Programming Languages & Frameworks
  "typescript", "javascript", "dart", "java", "react", "flutter", "html5", "css3", 
  "nodedotjs", "express", "nextdotjs", "prisma", "postgresql", "firebase", 
  "nginx", "vercel", "testinglibrary", "jest", "cypress", "git", "jira", "github", 
  "gitlab", "visualstudiocode", "androidstudio", "sonarqube", "figma",
];

const images = slugs.map(
  (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
);

export function IconCloudDemo() {
  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
