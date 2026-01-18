import { Mail, Phone, MapPin, Linkedin, Github, Globe } from "lucide-react";

const Resume = () => {
  return (
    <div className="resume-container max-w-[850px] mx-auto bg-card p-8 md:p-12 shadow-sm">
      {/* Header */}
      <header className="text-center pb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-resume-heading mb-2">
          Jay (Geoffrey) De Kleijn
        </h1>
        <p className="text-lg text-resume-subheading font-medium mb-4">
          Platform Architect
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-resume-body">
          <ContactItem icon={<Mail className="w-4 h-4" />} text="mail@jaysphoto.me" />
          <ContactItem icon={<Phone className="w-4 h-4" />} text="+34 6 903 555 07" />
          <ContactItem icon={<MapPin className="w-4 h-4" />} text="Málaga" />
          <ContactItem icon={<Linkedin className="w-4 h-4" />} text="linkedin.com/in/jaysphoto" isLink />
          {/* <ContactItem icon={<Github className="w-4 h-4" />} text="github.com/jaysphoto" isLink /> */}
        </div>
      </header>

      {/* Professional Summary */}
      <Section title="Professional Summary">
        <p className="text-resume-body leading-relaxed">
          Results-driven Platform Engineer with 8+ years of experience architecting, migrating and maintaining
          performanant, scalable cloud infrastructure. Expert in AWS, IaC, CI/CD automation and observability solutions.
          Passionate about enabling ownership and productivity with DevOps. 
        </p>
      </Section>

      {/* Technical Skills */}
      <Section title="Technical Skills">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SkillCategory 
            title="Cloud & Infrastructure" 
            skills={["AWS", "CDK", "CloudFormation", "Docker", "Hashicorp", "Terraform", "VMware"]} 
          />
          <SkillCategory 
            title="CI/CD & Automation" 
            skills={["Atlassian Bamboo", "Chef", "CircleCI", "GitHub Actions", "Jenkins", "Puppet"]} 
          />
          <SkillCategory 
            title="Observability" 
            skills={["CloudWatch", "Grafana", "Datadog", "ELK Stack", "New Relic", "PagerDuty", "Splunk", "AWS X-Ray"]} 
          />
          <SkillCategory 
            title="Languages & Tools" 
            skills={["Bash", "Git", "Linux", "Python", "TypeScript", "SQL"]} 
          />
        </div>
      </Section>

      {/* Professional Experience */}
      <Section title="Professional Experience">
        <ExperienceItem
          title="Senior Architect // Principal Site Reliability Engineer"
          company="Eventbrite"
          location="Madrid, Spain"
          dates="Jan 2020 – Mar 2023 · 3 yrs 3 mos"
          achievements={[
            "Technical lead on strategic key-initiatives, examples: platform-wide 1.5X performance optimization, vulnerability reduction of 6X, DNS Route53 migration, 15% AWS Cost reduction.",
            "Drove mindset change operations -> SRE, adopting DevOps and AWS multi-account architecture.",
            "Demonstrated best practices on leveraging (AWS) managed services and IaC, building self-healing fault-tolerant services and reviewing operational readiness.",
          ]}
        />
        <ExperienceItem
          title="Software Eng Team Lead // Lead Architect // Chief Architect"
          company="ticketscript by Eventbrite"
          location="Amsterdam, Netherlands"
          dates="Feb 2012 – Dec 2019 · 7 yrs 10 mos"
          achievements={[
            "Technical lead on ticketscript platform acquisition, then subsidiary compliance for NYSE:EB IPO.",
            "Platform design & migration to resilient, high-performance service-oriented architecture.",
          ]}
        />
      </Section>

      {/* Education */}
      {/*
      <Section title="Education">
        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
          <div>
            <h3 className="text-base font-semibold text-resume-heading">
              Telematics at University of Applied Sciences Utrecht
            </h3>
            <p className="text-resume-body">Hogeschool Utrecht</p>
          </div>
          <p className="text-resume-body text-sm mt-1 md:mt-0">1997 – 2000</p>
        </div>
      </Section>
      */}

      {/* Certifications */}
      <Section title="Certifications">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-resume-body">
          <li>• AWS Solutions Architect Associate</li>
          <li>• AWS DevOps Professional</li>
        </ul>
      </Section>
    </div>
  );
};

const ContactItem = ({ 
  icon, 
  text, 
  isLink = false 
}: { 
  icon: React.ReactNode; 
  text: string; 
  isLink?: boolean;
}) => (
  <span className="flex items-center gap-1.5">
    {icon}
    {isLink ? (
      <a href={`https://${text}`} className="text-resume-link hover:underline">
        {text}
      </a>
    ) : (
      <span>{text}</span>
    )}
  </span>
);

const Section = ({ 
  title, 
  children 
}: { 
  title: string; 
  children: React.ReactNode;
}) => (
  <section className="mb-6">
    <h2 className="text-lg font-semibold text-resume-subheading uppercase tracking-wide mb-3 pb-1 border-b border-resume-divider">
      {title}
    </h2>
    {children}
  </section>
);

const SkillCategory = ({ 
  title, 
  skills 
}: { 
  title: string; 
  skills: string[];
}) => (
  <div>
    <h3 className="text-sm font-semibold text-resume-heading mb-2">{title}</h3>
    <div className="flex flex-wrap gap-1.5">
      {skills.map((skill) => (
        <span 
          key={skill} 
          className="skill-tag px-2 py-0.5 bg-resume-tag-bg text-resume-tag-text text-sm rounded"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const ExperienceItem = ({
  title,
  company,
  location,
  dates,
  achievements,
}: {
  title: string;
  company: string;
  location: string;
  dates: string;
  achievements: string[];
}) => (
  <div className="mb-5 last:mb-0">
    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
      <h3 className="text-base font-semibold text-resume-heading">{title}</h3>
      <span className="text-sm text-resume-body">{dates}</span>
    </div>
    <p className="text-resume-subheading font-medium mb-2">
      {company} — {location}
    </p>
    <ul className="list-disc list-outside ml-5 text-resume-body space-y-1">
      {achievements.map((achievement, index) => (
        <li key={index} className="leading-relaxed">{achievement}</li>
      ))}
    </ul>
  </div>
);

export default Resume;
