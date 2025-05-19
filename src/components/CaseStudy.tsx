
import { useRef, useEffect, useState } from 'react';
import HeroSection from './case-study/HeroSection';
import OverviewSection from './case-study/OverviewSection';
import FinalProductSection from './case-study/MockupsSection';
import ProcessSection from './case-study/ProcessSection';
import TakeawaysSection from './case-study/TakeawaysSection';
import BackButton from './case-study/BackButton';
import { projectData } from './case-study/constants';
import { useIsMobile } from "@/hooks/use-mobile";

interface CaseStudyProps {
  project: {
    title: string;
    category: string;
    description: string;
    image: string;
  };
  onClose: () => void;
  projectIndex: number;
  onNextProject: (index: number) => void;
  totalProjects: number;
}

const CaseStudy = ({
  project,
  onClose,
  projectIndex,
  onNextProject,
  totalProjects
}: CaseStudyProps) => {
  const studyRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [initialLoad, setInitialLoad] = useState(true);
  
  // Calculate the next project index
  const nextProjectIndex = (projectIndex + 1) % totalProjects;
  
  // Get project-specific data based on the index
  const getProjectDataKey = (index: number): keyof typeof projectData => {
    const keys = Object.keys(projectData) as Array<keyof typeof projectData>;
    return keys[index % keys.length];
  };
  
  const projectKey = getProjectDataKey(projectIndex);
  const currentProjectData = projectData[projectKey];
  
  // Get case study specific hero image if available, otherwise use the portfolio image
  // Use optional chaining to safely access heroImage which might not exist on all projects
  const caseStudyHeroImage = currentProjectData?.heroImage || project.image;
  
  // Handle project navigation with forced scroll reset
  const handleProjectChange = (newIndex: number) => {
    // First update the index
    onNextProject(newIndex);
    
    // Force scroll reset in multiple ways to ensure it works
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };
  
  useEffect(() => {
    // Force scroll to top with multiple approaches to ensure it works
    window.scrollTo({top: 0, left: 0, behavior: 'instant'});
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    if (studyRef.current) {
      studyRef.current.scrollTop = 0;
    }
    
    // Add animation to sections
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, {
      threshold: 0.1
    });
    
    const sections = studyRef.current?.querySelectorAll('section');
    sections?.forEach(section => {
      observer.observe(section);
    });
    
    // This timeout ensures the scroll reset happens after React has finished rendering
    setTimeout(() => {
      window.scrollTo({top: 0, left: 0, behavior: 'instant'});
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      if (studyRef.current) {
        studyRef.current.scrollTop = 0;
      }
    }, 50);
    
    return () => {
      sections?.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, [projectIndex]); // Keep projectIndex as a dependency to re-run the effect when it changes
  
  // Handle closure and cleanup
  const handleClose = () => {
    // Ensure scrolling is re-enabled
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    
    // Call the provided onClose function
    onClose();
  };
  
  return (
    <div 
      ref={studyRef} 
      className="fixed inset-0 bg-white z-50 overflow-y-auto" 
      style={{top: 0, scrollBehavior: 'auto'}}
    >
      <BackButton onClose={handleClose} />
      
      <HeroSection 
        title={project.title}
        category={project.category}
        description={project.description}
        image={caseStudyHeroImage}
      />
      
      <OverviewSection 
        challenge={currentProjectData.overview.challenge}
        challengeMore={currentProjectData.overview.challengeMore}
        solution={currentProjectData.overview.solution}
        solutionPoints={currentProjectData.overview.solutionPoints}
      />
      
      <ProcessSection 
        processImages={currentProjectData.processImages} 
        projectKey={projectKey}
      />
      
      <FinalProductSection images={currentProjectData.mockupImages} />
      
      <TakeawaysSection 
        onClose={onClose} 
        isMobile={isMobile} 
        nextProjectIndex={nextProjectIndex}
        onNextProject={handleProjectChange}
        takeaways={currentProjectData.takeaways}
        projectKey={projectKey}
      />
    </div>
  );
};

export default CaseStudy;
