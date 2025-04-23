import { Lightbulb, PaintBucket, Zap, Code, Rocket, Wand2 } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";

const FeaturesSection = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Генерация контента",
      description: "ИИ создаст тексты и подберет изображения на основе вашего описания и целевой аудитории"
    },
    {
      icon: PaintBucket,
      title: "Адаптивный дизайн",
      description: "Ваш сайт будет отлично выглядеть на всех устройствах - от смартфонов до больших экранов"
    },
    {
      icon: Zap,
      title: "Быстрая публикация",
      description: "От идеи до готового сайта за считанные минуты с нашей технологией мгновенного деплоя"
    },
    {
      icon: Code,
      title: "Без кода",
      description: "Никаких навыков программирования не требуется. Всё управление через простой интерфейс"
    },
    {
      icon: Rocket,
      title: "SEO-оптимизация",
      description: "Встроенные инструменты для оптимизации сайта под поисковые системы"
    },
    {
      icon: Wand2,
      title: "Персонализация",
      description: "Легко настраивайте любые элементы сайта под свой бренд и стиль"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Почему АйСайт?</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Наши инструменты на базе ИИ помогают создавать профессиональные веб-сайты без дизайнера и программиста
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;