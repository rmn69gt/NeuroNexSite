export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: 'Возможности', href: '#' },
      { label: 'Тарифы', href: '#' },
      { label: 'Безопасность', href: '#' },
      { label: 'API', href: '#' },
    ],
    company: [
      { label: 'О нас', href: '#' },
      { label: 'Блог', href: '#' },
      { label: 'Карьера', href: '#' },
      { label: 'Пресса', href: '#' },
    ],
    support: [
      { label: 'Помощь', href: '#' },
      { label: 'Документация', href: '#' },
      { label: 'Контакты', href: '#' },
      { label: 'Статус', href: '#' },
    ],
    legal: [
      { label: 'Политика конфиденциальности', href: '#' },
      { label: 'Условия использования', href: '#' },
      { label: 'Cookies', href: '#' },
    ],
  };

  return (
    <footer className="bg-black text-white py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Логотип и описание */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">NeuroNex</h3>
            <p className="text-gray text-sm leading-relaxed">
              Революционные AI решения для вашего бизнеса. Автоматизация, анализ данных и интеллектуальная аналитика в одной платформе.
            </p>
          </div>

          {/* Ссылки - Продукт */}
          <div>
            <h4 className="font-semibold text-white mb-6 uppercase text-sm tracking-wide">Продукт</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray hover:text-white transition-colors duration-250 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ссылки - Компания */}
          <div>
            <h4 className="font-semibold text-white mb-6 uppercase text-sm tracking-wide">Компания</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray hover:text-white transition-colors duration-250 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ссылки - Поддержка */}
          <div>
            <h4 className="font-semibold text-white mb-6 uppercase text-sm tracking-wide">Поддержка</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray hover:text-white transition-colors duration-250 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Разделитель */}
        <hr className="border-gray-dark mb-8" />

        {/* Нижняя часть */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray">
          <p>&copy; {currentYear} NeuroNex. Все права защищены.</p>

          <div className="flex gap-8">
            {footerLinks.legal.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors duration-250"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Соцсети */}
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors duration-250">Twitter</a>
            <a href="#" className="hover:text-primary transition-colors duration-250">LinkedIn</a>
            <a href="#" className="hover:text-primary transition-colors duration-250">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
