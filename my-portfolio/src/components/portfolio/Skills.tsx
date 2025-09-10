import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Databases",
      skills: ["Python", "JavaScript/TypeScript", "Java", "C++", "SQL/NoSQL", "PostgreSQL", "Git", "Docker", "Cloud platforms (AWS/GCP/Azure)"]
    },
    {
      title: "Frameworks & Libraries", 
      skills: ["Flask", "Django", "Node.js", "Express.js", "React", "HTML/CSS", "MongoDB", "JSON", "Spring Boot", "Linux", "MERN"]
    },
    {
      title: "Core Competencies",
      skills: ["Data encryption", "Model evaluation", "SQL/NoSQL querying", "Problem solving", "Teamwork", "Project management", "Technical documentation", "Communication skills"]
    }
  ];

  const additionalSkills = [
    "Proven ability to communicate complex analytical findings to non-technical stakeholders"
  ];

  return (
    <section className="py-20 px-6 bg-gradient-forest/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-primary mb-6 text-3d">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-warm mx-auto shadow-glow"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="bg-card/90 backdrop-blur-sm shadow-deep border-border/50 hover:shadow-glow transition-3d card-3d hover-lift animate-slide-up stagger-animation"
            >
              <CardHeader className="pb-4">
                <CardTitle className="font-playfair text-xl text-primary text-center">
                  {category.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary" 
                      className="bg-gradient-cream border-accent/30 text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional Skills */}
        <div className="mt-12 animate-slide-up">
          <Card className="bg-card/90 backdrop-blur-sm shadow-deep border-border/50 pattern-dots card-3d hover-lift float-animation">
            <CardContent className="p-8">
              <h3 className="font-playfair text-2xl text-primary text-center mb-6">
                Professional Strengths
              </h3>
              <div className="text-center">
                {additionalSkills.map((skill, index) => (
                  <p key={index} className="text-cozy text-lg text-muted-foreground leading-relaxed">
                    {skill}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;