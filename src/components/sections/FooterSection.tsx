const FooterSection = () => {
  return (
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
  );
};

export default FooterSection;