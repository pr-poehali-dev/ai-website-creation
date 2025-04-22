import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full py-4 px-6 md:px-8 bg-background border-b">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary"></div>
          <span className="text-xl font-bold">АйСайт</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
            Главная
          </Link>
          <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
            Возможности
          </Link>
          <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
            Примеры
          </Link>
          <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
            Тарифы
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost">Войти</Button>
          <Button>Создать сайт</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;