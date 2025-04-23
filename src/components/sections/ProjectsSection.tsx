import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      image: "/placeholder.svg",
      title: "Eco Store",
      category: "Интернет-магазин"
    },
    {
      image: "/placeholder.svg",
      title: "Yoga Studio",
      category: "Фитнес и здоровье"
    },
    {
      image: "/placeholder.svg",
      title: "Tech Blog",
      category: "Блог"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Примеры проектов</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl">
              Вдохновитесь работами, созданными с помощью нашей платформы
            </p>
          </div>
          <Button variant="outline">Смотреть все примеры</Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              image={project.image}
              title={project.title}
              category={project.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;