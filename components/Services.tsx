const services = [
  {
    id: 1,
    title: 'Консалтинг AI',
    description: 'Наши эксперты помогут определить оптимальные AI решения для вашего бизнеса и разработают стратегию внедрения.',
    price: 'от $5,000',
  },
  {
    id: 2,
    title: 'Разработка кастомных моделей',
    description: 'Создаем специализированные модели машинного обучения, обученные на ваших данных и под ваши задачи.',
    price: 'от $15,000',
  },
  {
    id: 3,
    title: 'Интеграция и внедрение',
    description: 'Профессиональное подключение NeuroNex к вашим системам с минимальными простоями.',
    price: 'от $8,000',
  },
  {
    id: 4,
    title: 'Обучение команды',
    description: 'Обучим вашу команду эффективно работать с платформой и использовать все возможности AI.',
    price: 'от $3,000',
  },
  {
    id: 5,
    title: 'Поддержка 24/7',
    description: 'Круглосуточная техническая поддержка, мониторинг и оптимизация ваших AI решений.',
    price: 'от $999/мес',
  },
  {
    id: 6,
    title: 'Аудит данных',
    description: 'Анализ качества ваших данных и рекомендации по подготовке для эффективного обучения моделей.',
    price: 'от $4,000',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-gray-light/30">
      <div className="container">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Услуги и решения
          </h2>
          <p className="text-lg text-gray max-w-2xl">
            Мы предоставляем полный спектр услуг по внедрению, разработке и поддержке AI решений.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="card group">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-black">
                  {service.title}
                </h3>
                <span className="text-primary font-medium text-sm whitespace-nowrap ml-2">
                  {service.price}
                </span>
              </div>

              <p className="text-gray leading-relaxed mb-6">
                {service.description}
              </p>

              <button className="btn btn-text text-sm">
                Заказать услугу →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
