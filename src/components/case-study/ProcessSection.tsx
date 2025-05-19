
import React from 'react';
import { Search, LayoutDashboard, TestTube } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProcessImages {
  research: string[];
  wireframes: string[];
  lowFidelity: string[];
  highFidelity: string[];
}

interface ProcessDetails {
  research: {
    title: string;
    description: string;
    shortDescription: string;
  };
  wireframes: {
    title: string;
    description: string;
    shortDescription: string;
  };
  testing: {
    title: string;
    description: string;
    shortDescription: string;
  };
}

interface ProcessSectionProps {
  processImages: ProcessImages;
  projectKey: string;
}

const ProcessSection = ({ processImages, projectKey }: ProcessSectionProps) => {
  // Project-specific process details
  const processDetailsByProject: Record<string, ProcessDetails> = {
    canadaCollege: {
      research: {
        title: "Research",
        description: "My research phase involved extensive competitive analysis and market research to understand user needs and expectations. I gathered insights that informed my design decisions and helped me create a product that truly resonates with the target audience, prospective students.",
        shortDescription: "Extensive competitive analysis to understand the market needs and user expectations."
      },
      wireframes: {
        title: "Wireframes",
        description: "My wireframing process involved creating a low-fidelity design to establish the core functionality and user flows. This allowed me to iterate quickly and get feedback from students and instructors before moving to the visual design phase. I created multiple versions to test different navigation patterns.",
        shortDescription: "Creating low-fidelity designs to establish core functionality and user flows before visual design."
      },
      testing: {
        title: "Testing",
        description: "My testing phase involved multiple rounds of user testing with participants from my target demographic. I observed users interacting with my prototypes, collected feedback, and made iterative improvements to address pain points and improve the overall user experience before development.",
        shortDescription: "Iterative user testing to refine the experience and address pain points throughout development."
      }
    },
    csmQrCode: {
      research: {
        title: "Research",
        description: "For the QR Code system, my research involved interviewing students, staff, and faculty to understand pain points with the current check-in process. I collected data on usage patterns and identified key areas where technology could streamline the experience.",
        shortDescription: "Interviews and data collection to identify pain points in the athletic center check-in process."
      },
      wireframes: {
        title: "Wireframes",
        description: "I created wireframes that mapped the entire user journey from entering the athletic center to accessing equipment. These low-fidelity sketches helped visualize multiple potential solutions before committing to the QR code approach.",
        shortDescription: "Mapping user journeys and exploring multiple check-in solutions through low-fidelity sketches."
      },
      testing: {
        title: "Testing",
        description: "I conducted extensive testing of the QR code system with different devices and lighting conditions to ensure consistent scanning. User testing with students of varying technological familiarity helped refine the instructions and interface.",
        shortDescription: "Device compatibility testing and user sessions to ensure the system works reliably for everyone."
      }
    },
    csmDgmeWebsite: {
      research: {
        title: "Research",
        description: "For the DGME website redesign, I analyzed user behavior data, conducted interviews with current students and faculty, and reviewed competitor websites to identify best practices and opportunities for improvement.",
        shortDescription: "User behavior analysis and competitive research to inform the redesign strategy."
      },
      wireframes: {
        title: "Wireframes",
        description: "I created an extensive set of wireframes covering all key pages and user flows. These wireframes focused on information architecture and content hierarchy, ensuring that the most important information was easily accessible.",
        shortDescription: "Creating detailed wireframes focused on information architecture and user flows."
      },
      testing: {
        title: "Testing",
        description: "I conducted usability testing sessions with students and faculty to validate the new design. This testing revealed several navigation improvements that were incorporated into the final design.",
        shortDescription: "Usability testing with actual users to validate and refine the navigation system."
      }
    },
    quillJournalingApp: {
      research: {
        title: "Research",
        description: "For Quill, I conducted extensive research on journaling habits, interviewing both regular journal keepers and those who struggled to maintain the practice. I analyzed competing journaling apps to identify gaps and opportunities in the market.",
        shortDescription: "User interviews and market analysis to understand journaling habits and pain points."
      },
      wireframes: {
        title: "Wireframes",
        description: "I created wireframes exploring different approaches to the journaling interface, focusing on minimizing friction and maximizing writing space. I tested multiple navigation patterns and entry mechanisms before settling on the final approach.",
        shortDescription: "Exploring friction-free interfaces through multiple wireframe iterations and user feedback."
      },
      testing: {
        title: "Testing",
        description: "I conducted prototype testing with various user groups, focusing especially on those who had abandoned journaling apps in the past. This testing provided crucial insights about reminder frequency, prompt types, and privacy concerns.",
        shortDescription: "Targeted prototype testing with users who had previously abandoned journaling apps."
      }
    }
  };

  // Default to first project if key not found
  const processDetails = processDetailsByProject[projectKey] || processDetailsByProject.canadaCollege;

  return (
    <section className="py-24 bg-black text-white opacity-0 translate-y-4 transition-all duration-700">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-playfair text-4xl font-bold mb-12 relative">
          Design Process
          <span className="absolute -bottom-4 left-0 h-0.5 w-24 bg-burgundy"></span>
        </h2>
        
        {/* Research Phase - Image left, text right */}
        <div className="mb-20">
          <h3 className="font-playfair text-2xl font-bold mb-8 flex items-center">
            <Search className="mr-2" /> Research Phase
          </h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="overflow-hidden rounded-md shadow-xl">
              {processImages.research.length > 0 && (
                <div className="max-h-[800px] flex items-center justify-center">
                  <img 
                    src={processImages.research[0]} 
                    alt="Research process" 
                    className="w-full h-auto object-contain max-h-[800px]"
                    loading="eager"
                  />
                </div>
              )}
            </div>
            <div>
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <p className="text-gray-200">
                    {processDetails.research.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Wireframes Phase - Text left, image right */}
        <div className="mb-20">
          <h3 className="font-playfair text-2xl font-bold mb-8 flex items-center">
            <LayoutDashboard className="mr-2" /> Wireframes Phase
          </h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <p className="text-gray-200">
                    {processDetails.wireframes.description}
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="overflow-hidden rounded-md shadow-xl">
              {processImages.wireframes.length > 0 && (
                <div className="max-h-[800px] flex items-center justify-center">
                  <img 
                    src={processImages.wireframes[0]} 
                    alt="Wireframe process" 
                    className="w-full h-auto object-contain max-h-[800px]" 
                    loading="eager"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Mockups - Low Fidelity: image left, text right */}
        <div className="mb-20">
          <h3 className="font-playfair text-2xl font-bold mb-8 flex items-center">
            <TestTube className="mr-2" /> Mockups - Low-Fidelity
          </h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="overflow-hidden rounded-md shadow-xl">
              {processImages.lowFidelity.length > 0 && (
                <div className="max-h-[1200px] flex items-center justify-center">
                  <img 
                    src={processImages.lowFidelity[0]} 
                    alt="Low fidelity mockup" 
                    className="w-full h-auto object-contain max-h-[1200px]"
                    loading="eager" 
                  />
                </div>
              )}
            </div>
            <div>
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <p className="text-gray-200">
                    The first round of mockups allowed me to visualize the core user interface elements and test the visual hierarchy. These designs incorporated feedback from the wireframing phase and started to establish the brand identity and color palette.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Mockups - High Fidelity: text left, image right */}
        <div>
          <h3 className="font-playfair text-2xl font-bold mb-8 flex items-center">
            <LayoutDashboard className="mr-2" /> Mockups - High Fidelity
          </h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <p className="text-gray-200">
                    After conducting user testing with the initial mockups, I refined the designs to address usability issues and feedback. The final iteration shows significant improvements in visual clarity, accessibility, and alignment with user expectations.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="overflow-hidden rounded-md shadow-xl">
              {processImages.highFidelity.length > 0 && (
                <div className="max-h-[1600px] flex items-center justify-center">
                  <img 
                    src={processImages.highFidelity[0]} 
                    alt="High fidelity mockup" 
                    className="w-full h-auto object-contain max-h-[1600px]" 
                    loading="eager"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
