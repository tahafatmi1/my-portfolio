import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Palette, Brain, Rocket } from 'lucide-react';

export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = {
    'Data Analytics & AI': [
      { name: 'Python', icon: '🐍' },
      { name: 'Pandas', icon: '🐼' },
      { name: 'NumPy', icon: '🔢' },
      { name: 'Matplotlib', icon: '📊' },
      { name: 'Scikit-learn', icon: '🤖' },
      { name: 'Power BI', icon: '📈' },
      { name: 'SAP Analytics Cloud', icon: '☁️' },
      { name: 'Excel', icon: '📑' }
    ],
    'Web Development': [
      { name: 'HTML', icon: '🌐' },
      { name: 'CSS', icon: '🎨' },
      { name: 'JavaScript', icon: '🟨' },
      { name: 'React.js', icon: '⚛️' },
      { name: 'Vite', icon: '⚡' },
      { name: 'Tailwind CSS', icon: '💨' }
    ],
    'Databases': [
      { name: 'SQL', icon: '🗄️' },
      { name: 'MySQL', icon: '🗃️' }
    ],
    'Tools & Platforms': [
      { name: 'Git', icon: '📦' },
      { name: 'GitHub', icon: '🐙' },
      { name: 'WordPress', icon: '📝' },
      { name: 'QT Creator', icon: '🔧' }
    ]
  };

  const projects = [
    {
      title: 'Research Paper Recommendation System',
      description: 'AI-based paper recommendation system using similarity scoring algorithms to suggest relevant academic papers based on user preferences and research interests.',
      tech: ['Python', 'AI', 'Machine Learning', 'NLP'],
      link: 'https://github.com/tahafatmi1',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/44ebc796-736d-40db-ab5d-37d106a5c35b.jpg'
    },
    {
      title: 'SAP Analytics Cloud Dashboard',
      description: 'Built comprehensive backlog dashboard consolidating 27,000+ rows into 200 actionable records with interactive KPIs and performance metrics.',
      tech: ['SAP Analytics Cloud', 'Data Analytics', 'Power BI'],
      link: 'https://github.com/tahafatmi1',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/2e33ff90-8e5d-4573-8ef8-c28ceea5f14d.jpg'
    },
    {
      title: 'Airplane Ticketing System',
      description: 'Desktop flight booking system with complete database integration, user authentication, and real-time seat availability management.',
      tech: ['C++', 'MySQL', 'QT Creator'],
      link: 'https://github.com/tahafatmi1',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/10f6eab7-0c7e-4cd7-b805-acdb463978d0.jpg'
    },
    {
      title: 'Two Good Co Clone',
      description: 'Fully responsive website clone with modern design, smooth animations, and optimized performance. Live production website.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://two-good-co-clone-indol.vercel.app',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/0ab57174-362e-407c-bc06-9fd6085c6f22.jpg'
    },
    {
      title: 'Crash Claim Website',
      description: 'Lead generation application with Trusted Form integration, form validation, and responsive design for optimal user experience.',
      tech: ['React.js', 'JavaScript', 'Tailwind CSS'],
      link: 'https://www.crash-claim.org',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/2e33ff90-8e5d-4573-8ef8-c28ceea5f14d.jpg'
    },
    {
      title: 'PublisherX Platform',
      description: 'Professional publishing platform with content management, SEO optimization, and responsive design for multiple device types.',
      tech: ['WordPress', 'PHP', 'JavaScript'],
      link: 'https://www.publisherx.org',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/0ab57174-362e-407c-bc06-9fd6085c6f22.jpg'
    }
  ];

  const experiences = [
    {
      title: 'IT Intern - SAP MDM & Analytics Cloud',
      company: 'Lucky Cement Ltd.',
      period: 'Aug 2024 - Sept 2024',
      description: 'Built SAP Analytics Cloud backlog dashboard consolidating 27,000+ rows into 200 actionable records. Improved data accuracy and supported SAP MDM data standardization.',
      icon: Database
    },
    {
      title: 'Data Analytics Intern',
      company: 'CodeAlpha',
      period: 'March 2025 - April 2025',
      description: 'Performed exploratory data analysis, data cleaning, and sentiment analysis using Python and SQL on real-world datasets.',
      icon: Brain
    },
    {
      title: 'WordPress Developer Intern',
      company: 'Donati Tech',
      period: 'Sept 2023 - Oct 2023',
      description: 'Built and optimized 5+ responsive websites focusing on performance and SEO. Delivered high-quality solutions for client projects.',
      icon: Code2
    },
    {
      title: 'Front-End Developer',
      company: 'Academic Projects',
      period: '2023 - Present',
      description: 'Developed React.js applications with reusable components, validated forms, integrated third-party scripts, and resolved production issues.',
      icon: Palette
    }
  ];

  const achievements = [
    '🎓 3rd Year BS Computer Science - Dawood University of Engineering and Technology',
    '📊 Built SAP Analytics Cloud dashboard with 27,000+ data records',
    '💼 Completed 3 professional internships in Data Analytics and Web Development',
    '🌐 Developed and deployed 5+ live production websites',
    '🤖 Created AI-based Research Paper Recommendation System',
    '📈 Expertise in Power BI and SAP Analytics Cloud dashboards',
    '⚛️ Proficient in React.js with multiple production applications'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-chart-2/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl xl:text-7xl font-bold tracking-tight">
                <span className="gradient-text">Syed Taha Fatmi</span>
              </h1>
              <p className="text-2xl xl:text-3xl text-muted-foreground font-medium">
                Data Analyst | AI Enthusiast | Front End Developer
              </p>
              <p className="text-lg xl:text-xl text-muted-foreground">
                3rd Year BS Computer Science Student
              </p>
            </div>

            <div className="flex flex-col xl:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 glow-effect"
                onClick={() => scrollToSection('projects')}
              >
                <Rocket className="mr-2 h-5 w-5" />
                View Projects
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </div>

            <div className="flex gap-6 justify-center pt-8">
              <a href="https://github.com/tahafatmi1" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                <Github className="h-8 w-8" />
              </a>
              <a href="https://linkedin.com/in/taha-fatmi" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                <Linkedin className="h-8 w-8" />
              </a>
              <a href="mailto:tahafatmi689@gmail.com" className="text-foreground hover:text-primary transition-colors">
                <Mail className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl xl:text-5xl font-bold text-center mb-12">
            About <span className="gradient-text">Me</span>
          </h2>
          <Card className="hover-lift">
            <CardContent className="p-8 xl:p-12">
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  Hello! I'm Syed Taha Fatmi, a passionate 3rd year BS Computer Science student at <span className="text-primary font-semibold">Dawood University of Engineering and Technology</span>, focused on <span className="text-primary font-semibold">Data Analytics</span> and <span className="text-primary font-semibold">Artificial Intelligence</span>.
                </p>
                <p>
                  I have practical experience in data cleaning, visualization, AI-based systems, and <span className="text-primary font-semibold">SAP Analytics Cloud</span>. Through my internship at Lucky Cement Ltd., I built a comprehensive dashboard consolidating over 27,000 rows of data into actionable insights, significantly improving data accuracy and decision-making processes.
                </p>
                <p>
                  My supporting skills in <span className="text-primary font-semibold">Web Development</span> allow me to build responsive front-end applications using React.js, JavaScript, and modern frameworks. I've successfully developed and deployed multiple live production websites, combining aesthetic design with functional excellence.
                </p>
                <p>
                  I'm experienced through internships at Lucky Cement Ltd., CodeAlpha, and Donati Tech, along with numerous academic projects and work with real-world datasets. I'm actively seeking opportunities to apply my skills in data analytics, AI, and web development to solve meaningful problems and contribute to innovative projects.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl xl:text-5xl font-bold text-center mb-12">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category} className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    {category === 'Data Analytics & AI' && <Brain className="h-6 w-6 text-primary" />}
                    {category === 'Web Development' && <Palette className="h-6 w-6 text-primary" />}
                    {category === 'Databases' && <Database className="h-6 w-6 text-primary" />}
                    {category === 'Tools & Platforms' && <Code2 className="h-6 w-6 text-primary" />}
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {items.map((skill) => (
                      <Badge key={skill.name} variant="secondary" className="text-base px-4 py-2">
                        <span className="mr-2">{skill.icon}</span>
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl xl:text-5xl font-bold text-center mb-12">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.title} className="hover-lift overflow-hidden">
                <div className="h-48 bg-muted overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline">{tech}</Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl xl:text-5xl font-bold text-center mb-12">
            Experience & <span className="gradient-text">Achievements</span>
          </h2>
          
          <div className="space-y-8 mb-12">
            {experiences.map((exp) => (
              <Card key={exp.title} className="hover-lift">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <exp.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl">{exp.title}</CardTitle>
                      <CardDescription className="text-base mt-1">
                        {exp.company} • {exp.period}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle className="text-2xl">Notable Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="text-lg flex items-center gap-3">
                    <span className="text-2xl">{achievement.split(' ')[0]}</span>
                    <span>{achievement.substring(achievement.indexOf(' ') + 1)}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl xl:text-5xl font-bold text-center mb-12">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl">Send Me a Message</CardTitle>
              <CardDescription>
                I'm always open to discussing new opportunities, projects, or just having a chat about technology!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="flex gap-8 justify-center mt-12">
            <a 
              href="https://github.com/tahafatmi1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/taha-fatmi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="mailto:tahafatmi689@gmail.com"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col xl:flex-row justify-between items-center gap-6">
            <p className="text-muted-foreground">
              © 2025 Syed Taha Fatmi. All rights reserved.
            </p>
            <nav className="flex flex-wrap gap-6 justify-center">
              <button onClick={() => scrollToSection('hero')} className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-primary transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-muted-foreground hover:text-primary transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-muted-foreground hover:text-primary transition-colors">
                Experience
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </button>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
