
import { useEffect, useRef, useState } from 'react';
import ProjectCard from './ProjectCard';
import CaseStudy from './CaseStudy';

const projects = [
  {
    title: "Cañada College Digital Art & Animation Website",
    category: "Web Design",
    image: "images/Canada_mockup_2.png",
    link: "#",
    description: "Redesign of the home page of Cañada College Digital Art & Animation program website. This project focused on improving the user experience while showcasing the creative work of students in the program."
  },
  {
    title: "CSM Athletic Center: QR Code System",
    category: "UX Design",
    image: "images/Qr_code_1.png",
    link: "#",
    description: "Design and implementation of a QR code system for the CSM Athletic Center to streamline check-in procedures and improve facility management. The solution provides real-time data on facility usage."
  },
  {
    title: "CSM DGME Website",
    category: "Web Design and Development",
    image: "images/Dgme_mockup_1.png",
    link: "#",
    description: "Complete visual redesign and development of the DGME website, focusing on responsive design, accessibility standards, and an improved content management system for easier updates by staff."
  },
  {
    title: "Quill: A Journaling App Webpage",
    category: "Web Design and Development",
    image: "images/Quill_1.png",
    link: "#",
    description: "Design of a mobile shopping application focused on creating an intuitive and delightful shopping experience. The project involved extensive user research, wireframing, and prototyping to ensure optimal usability."
  }
];

const ProjectsSection = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleProjectClick = (index: number) => {
    // Set state first
    setSelectedProjectIndex(index);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // Force scroll reset immediately
    window.scrollTo({top: 0, left: 0, behavior: 'instant'});
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  const handleCloseCase = () => {
    setSelectedProjectIndex(null);
    document.body.style.overflow = ''; // Re-enable scrolling
  };
  
  const handleNextProject = (nextIndex: number) => {
    // Reset scroll position first
    window.scrollTo({top: 0, left: 0, behavior: 'instant'});
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Update state
    setSelectedProjectIndex(nextIndex);
    
    // Force scroll reset again after state update
    setTimeout(() => {
      window.scrollTo({top: 0, left: 0, behavior: 'instant'});
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 10);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.animate-fade-in');
          elements.forEach(el => {
            el.classList.add('opacity-100');
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="work" className="py-20 bg-burgundy burgundy-bg relative" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title text-white text-center mb-16">My Portfolio</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              category={project.category}
              image={project.image}
              link={project.link}
              description={project.description}
              index={index}
              onProjectClick={handleProjectClick}
              className="project-card"
            />
          ))}
        </div>
      </div>

      {/* Render case study if a project is selected */}
      {selectedProjectIndex !== null && (
        <CaseStudy 
          project={projects[selectedProjectIndex]} 
          onClose={handleCloseCase}
          projectIndex={selectedProjectIndex}
          onNextProject={handleNextProject}
          totalProjects={projects.length}
        />
      )}
    </section>
  );
};

export default ProjectsSection;
