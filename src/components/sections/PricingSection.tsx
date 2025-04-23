import PricingCard from "@/components/PricingCard";

const PricingSection = () => {
  const pricingPlans = [
    {
      title: "Старт",
      price: "Бесплатно",
      description: "Идеально для знакомства с платформой",
      features: [
        { text: "1 проект" },
        { text: "Базовые шаблоны" },
        { text: "Стандартное хранилище" },
        { text: "Поддержка по email" }
      ]
    },
    {
      title: "Про",
      price: "1 490 ₽",
      description: "Для профессионального использования",
      features: [
        { text: "До 10 проектов" },
        { text: "Все шаблоны" },
        { text: "Расширенное хранилище" },
        { text: "Приоритетная поддержка" },
        { text: "Собственный домен" }
      ],
      popular: true
    },
    {
      title: "Бизнес",
      price: "3 990 ₽",
      description: "Для компаний и команд",
      features: [
        { text: "Неограниченные проекты" },
        { text: "Премиум шаблоны" },
        { text: "Расширенная аналитика" },
        { text: "API доступ" },
        { text: "Выделенная поддержка 24/7" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Тарифные планы</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Выберите план, который подходит для ваших задач
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard 
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              popular={plan.popular}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;