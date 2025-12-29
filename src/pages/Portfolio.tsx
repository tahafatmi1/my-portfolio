import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Palette, Brain, Terminal, Rocket } from 'lucide-react';

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
    'Programming Languages': [
      { name: 'JavaScript', icon: '🟨' },
      { name: 'Python', icon: '🐍' },
      { name: 'C++', icon: '⚡' },
      { name: 'SQL', icon: '🗄️' }
    ],
    'Frontend Technologies': [
      { name: 'React.js', icon: '⚛️' },
      { name: 'Vite', icon: '⚡' },
      { name: 'HTML', icon: '🌐' },
      { name: 'CSS', icon: '🎨' },
      { name: 'Tailwind', icon: '💨' }
    ],
    'Data and AI': [
      { name: 'Pandas', icon: '🐼' },
      { name: 'NumPy', icon: '🔢' },
      { name: 'Matplotlib', icon: '📊' },
      { name: 'Machine Learning', icon: '🤖' }
    ],
    'Development Tools': [
      { name: 'Git', icon: '📦' },
      { name: 'GitHub', icon: '🐙' },
      { name: 'VS Code', icon: '💻' },
      { name: 'MySQL', icon: '🗃️' }
    ]
  };

  const projects = [
    {
      title: 'AI-Powered Data Analytics Dashboard',
      description: 'Built an interactive dashboard using React and Python for real-time data visualization and predictive analytics.',
      tech: ['React', 'Python', 'Pandas', 'Machine Learning'],
      link: 'https://github.com',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/44ebc796-736d-40db-ab5d-37d106a5c35b.jpg'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Developed a full-stack e-commerce website with user authentication, product management, and payment integration.',
      tech: ['React', 'Node.js', 'MySQL', 'Tailwind'],
      link: 'https://github.com',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/2e33ff90-8e5d-4573-8ef8-c28ceea5f14d.jpg'
    },
    {
      title: 'Machine Learning Model Trainer',
      description: 'Created a web application for training and evaluating ML models with custom datasets and hyperparameter tuning.',
      tech: ['Python', 'NumPy', 'Matplotlib', 'JavaScript'],
      link: 'https://github.com',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/10f6eab7-0c7e-4cd7-b805-acdb463978d0.jpg'
    },
    {
      title: 'Portfolio Website Builder',
      description: 'Designed a drag-and-drop portfolio builder with customizable templates and responsive design.',
      tech: ['React', 'Vite', 'Tailwind', 'TypeScript'],
      link: 'https://github.com',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/0ab57174-362e-407c-bc06-9fd6085c6f22.jpg'
    }
  ];

  const experiences = [
    {
      title: 'Data Analytics Intern',
      company: 'Tech Solutions Inc.',
      period: 'Summer 2024',
      description: 'Analyzed large datasets to identify trends and patterns, created visualizations for stakeholder presentations.',
      icon: Database
    },
    {
      title: 'Frontend Developer',
      company: 'University Web Team',
      period: '2023 - Present',
      description: 'Developed and maintained university department websites using React and modern web technologies.',
      icon: Code2
    },
    {
      title: 'AI Research Assistant',
      company: 'CS Department',
      period: '2023 - 2024',
      description: 'Assisted in machine learning research projects, implemented algorithms, and documented findings.',
      icon: Brain
    }
  ];

  const achievements = [
    '🏆 Dean\'s List - 3 consecutive semesters',
    '🥇 First Place - University Hackathon 2024',
    '📜 AWS Certified Cloud Practitioner',
    '🎓 Google Data Analytics Professional Certificate',
    '💡 Published research paper on ML optimization'
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
                <span className="gradient-text">Your Name</span>
              </h1>
              <p className="text-2xl xl:text-3xl text-muted-foreground font-medium">
                Data Analyst | AI Enthusiast | Front End Developer
              </p>
              <p className="text-lg xl:text-xl text-muted-foreground">
                Currently pursuing BS in Computer Science
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
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                <Github className="h-8 w-8" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                <Linkedin className="h-8 w-8" />
              </a>
              <a href="mailto:your.email@example.com" className="text-foreground hover:text-primary transition-colors">
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
                  Hello! I'm a passionate Computer Science student with a deep interest in <span className="text-primary font-semibold">Data Analytics</span>, <span className="text-primary font-semibold">Artificial Intelligence</span>, and <span className="text-primary font-semibold">Web Development</span>.
                </p>
                <p>
                  Throughout my academic journey, I've gained hands-on experience building real-world projects that solve practical problems. From developing interactive web applications to implementing machine learning algorithms, I love bringing ideas to life through code.
                </p>
                <p>
                  My approach to problem-solving combines analytical thinking with creative design. I believe in writing clean, efficient code and continuously learning new technologies to stay at the forefront of the tech industry.
                </p>
                <p>
                  I'm actively seeking internship opportunities where I can apply my skills, contribute to meaningful projects, and grow as a developer. Let's build something amazing together!
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
                    {category === 'Programming Languages' && <Terminal className="h-6 w-6 text-primary" />}
                    {category === 'Frontend Technologies' && <Palette className="h-6 w-6 text-primary" />}
                    {category === 'Data and AI' && <Brain className="h-6 w-6 text-primary" />}
                    {category === 'Development Tools' && <Code2 className="h-6 w-6 text-primary" />}
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
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="mailto:your.email@example.com"
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
              © 2025 Personal Portfolio. All rights reserved.
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
