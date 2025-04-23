import { Button } from "@/components/ui/button";
import { Wand2, Lightbulb, Zap, PaintBucket, Rocket, Code } from "lucide-react";
import Navbar from "@/components/Navbar";
import FeatureCard from "@/components/FeatureCard";
import ProjectCard from "@/components/ProjectCard";
import PricingCard from "@/components/PricingCard";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
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

      {/* Features */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Почему АйСайт?</h2>
            <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
              Наши инструменты на базе ИИ помогают создавать профессиональные веб-сайты без дизайнера и программиста
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Lightbulb}
              title="Генерация контента"
              description="ИИ создаст тексты и подберет изображения на основе вашего описания и целевой аудитории"
            />
            <FeatureCard 
              icon={PaintBucket}
              title="Адаптивный дизайн"
              description="Ваш сайт будет отлично выглядеть на всех устройствах - от смартфонов до больших экранов"
            />
            <FeatureCard 
              icon={Zap}
              title="Быстрая публикация"
              description="От идеи до готового сайта за считанные минуты с нашей технологией мгновенного деплоя"
            />
            <FeatureCard 
              icon={Code}
              title="Без кода"
              description="Никаких навыков программирования не требуется. Всё управление через простой интерфейс"
            />
            <FeatureCard 
              icon={Rocket}
              title="SEO-оптимизация"
              description="Встроенные инструменты для оптимизации сайта под поисковые системы"
            />
            <FeatureCard 
              icon={Wand2}
              title="Персонализация"
              description="Легко настраивайте любые элементы сайта под свой бренд и стиль"
            />
          </div>
        </div>
      </section>

      {/* Projects */}
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
            <ProjectCard 
              image="/placeholder.svg"
              title="Eco Store"
              category="Интернет-магазин"
            />
            <ProjectCard 
              image="/placeholder.svg"
              title="Yoga Studio"
              category="Фитнес и здоровье"
            />
            <ProjectCard 
              image="/placeholder.svg"
              title="Tech Blog"
              category="Блог"
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Тарифные планы</h2>
            <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите план, который подходит для ваших задач
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard 
              title="Старт"
              price="Бесплатно"
              description="Идеально для знакомства с платформой"
              features={[
                { text: "1 проект" },
                { text: "Базовые шаблоны" },
                { text: "Стандартное хранилище" },
                { text: "Поддержка по email" }
              ]}
            />
            <PricingCard 
              title="Про"
              price="1 490 ₽"
              description="Для профессионального использования"
              features={[
                { text: "До 10 проектов" },
                { text: "Все шаблоны" },
                { text: "Расширенное хранилище" },
                { text: "Приоритетная поддержка" },
                { text: "Собственный домен" }
              ]}
              popular
            />
            <PricingCard 
              title="Бизнес"
              price="3 990 ₽"
              description="Для компаний и команд"
              features={[
                { text: "Неограниченные проекты" },
                { text: "Премиум шаблоны" },
                { text: "Расширенная аналитика" },
                { text: "API доступ" },
                { text: "Выделенная поддержка 24/7" }
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="bg-gradient-to-r from-primary/10 to-accent p-8 md:p-12 rounded-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы создать свой сайт?</h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к тысячам пользователей, которые уже используют АйСайт для создания своих проектов
            </p>
            <Button size="lg" className="rounded-full">
              Начать бесплатно
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary mt-auto py-12">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="md:max-w-xs">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-full bg-primary"></div>
                <span className="text-xl font-bold">АйСайт</span>
              </div>
              <p className="text-muted-foreground">
                Платформа для создания сайтов с помощью искусственного интеллекта
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-medium mb-4">Платформа</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Возможности</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Шаблоны</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Тарифы</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-4">Компания</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">О нас</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Блог</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Контакты</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-4">Поддержка</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Документация</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">FAQ</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Сообщество</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between gap-4">
            <p className="text-sm text-muted-foreground">© 2023 АйСайт. Все права защищены</p>
            <div className="flex gap-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Условия использования</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Политика конфиденциальности</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;