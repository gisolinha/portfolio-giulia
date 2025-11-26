import React from 'react';
import { Project } from '../types';
import { Gamepad2, Code2, Trello } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const getIcon = () => {
    if (project.tags.includes("Unity") || project.tags.includes("Construct 2")) return <Gamepad2 size={20} />;
    if (project.tags.includes("Scrum")) return <Trello size={20} />;
    return <Code2 size={20} />;
  };

  return (
    <motion.div 
      whileHover={{ y: -5, borderColor: '#FF91AF' }}
      transition={{ duration: 0.2 }}
      className="bg-gh-card border border-gh-border rounded-lg p-5 flex flex-col h-full transition-colors duration-300"
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3 text-gh-pink">
          {getIcon()}
          <h3 className="text-sm md:text-base text-gh-text leading-tight">{project.title}</h3>
        </div>
        <span className={`text-[10px] px-2 py-0.5 rounded border font-console uppercase tracking-wider ${
          project.status === 'Completed' 
            ? 'border-gh-green text-gh-green bg-gh-green/10' 
            : 'border-gh-purple text-gh-purple bg-gh-purple/10'
        }`}>
          {project.status}
        </span>
      </div>
      
      <div className="text-sm font-bold text-gh-pink mb-2 font-console">
        {project.role}
      </div>
      
      <p className="text-gh-muted text-base mb-4 flex-grow leading-relaxed font-console">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map(tag => (
          <span key={tag} className="text-xs text-gh-text bg-gh-bg border border-gh-border px-2 py-1 rounded font-console">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;