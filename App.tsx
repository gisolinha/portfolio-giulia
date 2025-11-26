import React, { useState, useEffect } from 'react';
import { HERO_DATA, PROJECTS, EXPERIENCE, SKILLS, TECH_STACK } from './constants';
import GitHubStats from './components/GitHubStats';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import { Github, Linkedin, Mail, MapPin, Terminal, User, ChevronDown, ChevronUp, Gamepad2, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Component for the Typing Effect
const Typewriter = ({ texts }: { texts: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink(!blink);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  // Typing logic
  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000); // Wait before deleting
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 100); // Typing speed

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts]);

  return (
    <div className="h-8 font-console text-gh-pink text-lg md:text-xl">
      {texts[index].substring(0, subIndex)}
      <span className={`${blink ? "opacity-100" : "opacity-0"}`}>|</span>
    </div>
  );
};

const WavyHeader = () => (
  <div className="w-full bg-gh-pink h-24 relative overflow-hidden">
    <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-full w-full">
        <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#0d1117' }}></path>
    </svg>
  </div>
);

const WavyFooter = () => (
    <div className="w-full h-24 relative overflow-hidden mt-20">
      <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-full w-full">
        <path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{ stroke: 'none', fill: '#0d1117' }}></path>
        <path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#FF91AF' }}></path>
      </svg>
    </div>
);

const App: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="min-h-screen font-console selection:bg-gh-pink selection:text-gh-bg flex flex-col">
      
      <WavyHeader />

      {/* Main Container */}
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 z-10 relative">
        
        {/* Header / Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-gh-card border border-gh-border text-xs px-3 py-1 rounded text-gh-text mb-6 font-pixel shadow-lg">
            {HERO_DATA.japanese}
          </div>
          
          <div className="font-console text-lg text-gh-text mb-2">
            Hi there! I'm <span className="font-pixel text-xl md:text-3xl block md:inline mt-2 md:mt-0 md:ml-2 text-white">{HERO_DATA.name}</span>
          </div>

          {/* Typing Effect */}
          <div className="my-6 min-h-[40px]">
             <Typewriter texts={HERO_DATA.typingLines} />
          </div>

          <div className="inline-flex items-center gap-2 bg-gh-pink text-gh-bg px-3 py-1 rounded font-bold text-xs shadow-[0_0_10px_rgba(255,145,175,0.5)]">
            <span>{HERO_DATA.badge}</span>
          </div>

        </motion.div>

        {/* GitHub Style Stats */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.2 }}
        >
          <GitHubStats />
        </motion.div>

        {/* Tech Stack Grid (Images) */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16 max-w-2xl mx-auto">
             {TECH_STACK.map((tech, i) => (
                <motion.div 
                    key={tech.name} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + (i * 0.05) }}
                    className="p-2 bg-gh-card border border-gh-border rounded hover:border-gh-pink transition-colors duration-300 group relative"
                >
                    <img src={tech.url} alt={tech.name} className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-110" />
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] bg-gh-bg border border-gh-border px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none">
                        {tech.name}
                    </span>
                </motion.div>
             ))}
        </div>

        {/* Toggle Details */}
        <div className="flex justify-center mb-12">
            <button 
                onClick={() => setShowMore(!showMore)}
                className="flex flex-col items-center gap-2 text-gh-text hover:text-gh-pink transition-colors group"
            >
                <span className="font-pixel text-xs group-hover:underline decoration-gh-pink underline-offset-4">
                    {showMore ? 'HIDE INFO' : 'MORE INFO'}
                </span>
                {showMore ? <ChevronUp size={24} /> : <ChevronDown size={24} className="animate-bounce" />}
            </button>
        </div>

        {/* Content Sections - Toggleable */}
        <AnimatePresence>
        {showMore && (
            <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
            >
                <div className="grid md:grid-cols-3 gap-8 pt-4">
                    {/* Left Column: About & Skills */}
                    <div className="md:col-span-1 space-y-8">
                         {/* Contact Links */}
                        <div className="bg-gh-card border border-gh-border rounded-lg p-6">
                            <div className="flex items-center gap-2 mb-4 text-gh-pink">
                                <User size={18} />
                                <h3 className="font-pixel text-xs">Contact</h3>
                            </div>
                            <div className="flex flex-col gap-3">
                                <a href="mailto:giulia.aragao@ccc.ufcg.edu.br" className="flex items-center gap-3 text-gh-text hover:text-white transition-colors text-base break-all">
                                    <Mail size={16} className="text-gh-pink shrink-0" />
                                    <span>giulia.aragao@ccc.ufcg.edu.br</span>
                                </a>
                                <a href="https://www.linkedin.com/in/devsgiulia/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gh-text hover:text-white transition-colors text-base">
                                    <Linkedin size={16} className="text-gh-pink shrink-0" />
                                    <span>LinkedIn</span>
                                </a>
                                <a href="https://github.com/gisolinha" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gh-text hover:text-white transition-colors text-base">
                                    <Github size={16} className="text-gh-pink shrink-0" />
                                    <span>GitHub</span>
                                </a>
                                <div className="flex items-center gap-3 text-gh-text text-base">
                                    <MapPin size={16} className="text-gh-pink shrink-0" />
                                    <span>Brazil</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gh-card border border-gh-border rounded-lg p-6">
                            <div className="flex items-center gap-2 mb-4 text-gh-pink">
                                <Terminal size={18} />
                                <h3 className="font-pixel text-xs">Top Skills</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {SKILLS.slice(0, 6).map(skill => (
                                    <span key={skill.name} className="text-sm px-2 py-1 rounded bg-gh-bg border border-gh-border text-gh-text">
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Projects & Experience */}
                    <div className="md:col-span-2 space-y-12">
                        
                        <Section title="Game Dev & Projects" id="projects" icon={<Gamepad2 size={24} />}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {PROJECTS.map(project => (
                                    <ProjectCard key={project.id} project={project} />
                                ))}
                            </div>
                        </Section>

                        <Section title="Experience" id="experience" icon={<Briefcase size={24} />}>
                            <div className="relative border-l-2 border-gh-border ml-3 space-y-10 pl-8 py-2">
                                {EXPERIENCE.map((exp, index) => (
                                    <div key={exp.id} className="relative group">
                                        <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-gh-bg bg-gh-pink group-hover:scale-125 transition-transform"></span>
                                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                                            <h3 className="text-lg font-bold text-gh-text">{exp.role}</h3>
                                            <span className="text-sm font-bold text-gh-pink bg-gh-pink/10 px-2 py-0.5 rounded border border-gh-pink/20">{exp.period}</span>
                                        </div>
                                        <h4 className="text-gh-muted text-base font-medium mb-2">{exp.company}</h4>
                                        <p className="text-gh-text text-lg leading-relaxed opacity-80">
                                            {exp.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </Section>
                    </div>
                </div>
            </motion.div>
        )}
        </AnimatePresence>

      </main>

      <WavyFooter />
      
      <div className="bg-gh-pink text-gh-bg text-center py-4 font-bold text-sm font-pixel">
        &copy; {new Date().getFullYear()} {HERO_DATA.name}
      </div>
    </div>
  );
};

export default App;