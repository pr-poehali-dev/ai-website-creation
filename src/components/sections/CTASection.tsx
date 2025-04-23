import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
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
  );
};

export default CTASection;