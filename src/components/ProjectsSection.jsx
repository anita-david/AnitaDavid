import { ArrowRight } from "lucide-react";
import { Github } from "lucide-react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Studex (Collaboration)",
    description: "A student marketplace for selling and buying items",
    image: "/projects/Project1.png",
    tags: ["React", "TailwindCSS", "Python"],
    demoUrl: "https://studdex.vercel.app/",
    githubUrl: "https://github.com/Studex-Product/studex-frontend.git",
  },
  {
    id: 2,
    title: "Space Tourism",
    description: "A multi page space tourism website",
    image: "/projects/Project2.png",
    tags: ["React", "TailwindCSS", ],
    demoUrl: "https://anita-space-tourism.vercel.app/",
    githubUrl: "https://github.com/anita-david/Space-Tourism.git",
  },
  {
    id: 3,
    title: "E-commerce",
    description: "A simple e-commerce web app",
    image: "/projects/Project3.png",
    tags: ["React", "Typescript", "TailwindCSS", ],
    demoUrl: "https://anita-e-commerce-page.vercel.app/",
    githubUrl: "https://github.com/anita-david/E-Commerce-Page.git",
  },
  {
    id: 4,
    title: "InstaSpots",
    description: "A web app for uploading and sharing pictures",
    image: "/projects/Project4.png",
    tags: ["React", "TailwindCSS", ],
    demoUrl: "https://insta-spots-eta.vercel.app/",
    githubUrl: "https://github.com/anita-david/Insta-Spots.git",
  },
  {
    id: 5,
    title: "Todo List",
    description: "A todo list app with authentication and full CRUD functionality and local storage persistence",
    image: "/projects/Project5.png",
    tags: ["React", "TailwindCSS", "Typescript"],
    demoUrl: "https://anita-david-todo-exam.vercel.app/",
    githubUrl: "https://github.com/anita-david/Exam-Todo.git",
  },
  {
    id: 6,
    title: "React Quiz",
    description: "A fun react quiz to test your basic knowledge of react",
    image: "/projects/Project6.png",
    tags: ["React", "TailwindCSS", ],
    demoUrl: "https://anita-react-quiz.vercel.app/",
    githubUrl: "https://github.com/anita-david/React-Quiz.git",
  },
];

function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured<span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, user experience and performance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 "
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 ">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/anita-david"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
