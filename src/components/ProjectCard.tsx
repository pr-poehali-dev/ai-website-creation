import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
}

const ProjectCard = ({ image, title, category }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden border-0 shadow-md">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img 
          src={image || "/placeholder.svg"} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <CardContent className="pt-4">
        <h3 className="font-medium text-lg mb-1">{title}</h3>
        <Badge variant="secondary" className="text-xs">{category}</Badge>
      </CardContent>
      <CardFooter className="pt-0 pb-4">
        <div className="text-sm text-muted-foreground">Создано с АйСайт</div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;