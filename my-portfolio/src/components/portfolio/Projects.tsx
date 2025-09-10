import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "MedLogix Connect",
      description: "Developed a secure database system to store and manage patient medical records using unique patient IDs, ensuring easy retrieval of medical history, previous diagnoses, and ongoing treatments.",
      features: [
        "Robust user authentication and secure data handling with advanced security protocols",
        "Intuitive dashboard for healthcare providers with comprehensive patient data management",
        "Secure operations of the MedLogix Connect system"
      ],
      technologies: ["Database Management", "Security Protocols", "Healthcare IT", "User Authentication"]
    },
    {
      title: "Cypher Shield",
      description: "Built 'Cypher Shield', a cross-platform app with 256-bit AES encryption, used to securely encrypt/decrypt text and files, achieving 99.9% success rate in integrity checks during testing.",
      features: [
        "Advanced encryption/decryption with real-time encryption maintaining >200ms latency",
        "Developed Python scripts using Pandas and NumPy to clean, transform, and analyze large datasets",
        "Improving data processing efficiency by 30%"
      ],
      technologies: ["Python", "AES Encryption", "Pandas", "NumPy", "Cross-platform Development"]
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-primary mb-6 text-3d">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-warm mx-auto shadow-glow"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card/90 backdrop-blur-sm shadow-deep border-border/50 hover:shadow-glow transition-3d h-full card-3d hover-lift animate-slide-up stagger-animation"
            >
              <CardHeader className="pb-4">
                <CardTitle className="font-playfair text-2xl text-primary mb-3">
                  {project.title}
                </CardTitle>
                <p className="text-cozy text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 text-cozy text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary" 
                        className="bg-gradient-cream border-accent/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary/30 text-primary hover:bg-primary/10 button-3d transition-3d"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-accent/30 text-accent hover:bg-accent/10 button-3d transition-3d"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;