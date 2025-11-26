import React from 'react';

interface SectionProps {
  title: string;
  id: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, id, children, icon }) => {
  return (
    <section id={id} className="mb-12 scroll-mt-24">
      <div className="flex items-center gap-3 mb-6 pb-2 border-b border-gh-border">
        {icon && <span className="text-gh-pink">{icon}</span>}
        <h2 className="text-xl md:text-2xl text-gh-text tracking-tight">{title}</h2>
      </div>
      {children}
    </section>
  );
};

export default Section;