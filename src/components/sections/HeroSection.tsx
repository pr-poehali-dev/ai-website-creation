import { Button } from "@/components/ui/button";
import { Wand2, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-20 md:py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Создавайте сайты с&nbsp;помощью
              <span className="bg-gradient-to-r from-primary to-accent-foreground text-transparent bg-clip-text"> искусственного интеллекта</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Опишите свой сайт текстом и получите готовый дизайн за считанные минуты
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full">
                Попробовать бесплатно
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                Демонстрация
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-secondary rounded-lg p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-3 w-3 rounded-full bg-destructive"></div>
                <div className="h-3 w-3 rounded-full bg-amber-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-400"></div>
              </div>
              <div className="space-y-4">
                <div className="h-8 bg-background rounded w-1/3"></div>
                <div className="h-40 bg-background rounded"></div>
                <div className="h-8 bg-background rounded w-full"></div>
                <div className="h-8 bg-background rounded w-2/3"></div>
              </div>
              <div className="absolute -top-6 -right-6 h-14 w-14 bg-primary rounded-full flex items-center justify-center text-white">
                <Wand2 size={24} />
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 bg-accent p-4 rounded-lg shadow-lg">
              <div className="flex gap-3 items-center">
                <div className="h-8 w-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <Zap size={18} className="text-primary" />
                </div>
                <p className="text-sm font-medium">Дизайн готов за 2 минуты!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;