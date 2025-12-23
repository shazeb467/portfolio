import { ArrowRight, ExternalLink, GithubIcon } from "lucide-react";
import { projects } from "../utils/constants";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            return (
              <div
                key={project.id}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4 justify-center items-center">
                    {project.tags.map((tag) => {
                      return (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-medium border-2 border-primary/50 rounded-full text-muted-foreground"
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  {/* <div className="flex justify-between items-center"> */}
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary
                      transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary
                      transition-colors duration-300"
                    >
                      <GithubIcon size={20} />
                    </a>
                  </div>
                  {/* </div> */}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 mb-2">
          <a
            href="https://github.com/shazeb467"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
