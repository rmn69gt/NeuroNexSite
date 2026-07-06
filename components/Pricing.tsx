const pricingPlans = [
  {
    id: 1,
    name: 'Стартап',
    price: '$99',
    period: 'в месяц',
    description: 'Для небольших компаний и стартапов',
    features: [
      'До 100K обработанных записей',
      'Базовая аналитика',
      'Email поддержка',
      '1 пользователь',
      'API доступ',
    ],
    cta: 'Начать',
    highlighted: false,
  },
  {
    id: 2,
    name: 'Профессиональный',
    price: '$499',
    period: 'в месяц',
    description: 'Для растущих компаний',
    features: [
      'До 1M обработанных записей',
      'Продвинутая аналитика',
      'Приоритетная поддержка',
      'До 5 пользователей',
      'Кастомные модели',
      'Интеграции',
      'История данных 90 дней',
    ],
    cta: 'Выбрать',
    highlighted: true,
  },
  {
    id: 3,
    name: 'Корпоративный',
    price: 'Custom',
    period: 'Свяжитесь с нами',
    description: 'Для крупных организаций',
    features: [
      'Неограниченные обработки',
      'Полная аналитика',
      'Круглосуточная поддержка',
      'Неограниченные пользователи',
      'Приватные модели',
      'Выделенный сервер',
      'История данных неограниченно',
      'SLA гарантии',
    ],
    cta: 'Написать',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-gray-light/30">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Простые и понятные тарифы
          </h2>
          <p className="text-lg text-gray max-w-2xl mx-auto">
            Выберите подходящий план для вашего бизнеса. Все планы включают 14 дней бесплатного пробного периода.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`card ${
                plan.highlighted
                  ? 'ring-2 ring-primary scale-105 md:scale-100'
                  : ''
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Популярный
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-black mb-2">
                {plan.name}
              </h3>
              <p className="text-gray text-sm mb-6">{plan.description}</p>

              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-black">
                    {plan.price}
                  </span>
                  <span className="text-gray text-sm">{plan.period}</span>
                </div>
              </div>

              <button
                className={`btn w-full mb-8 ${
                  plan.highlighted ? 'btn-primary' : 'btn-secondary'
                }`}
              >
                {plan.cta}
              </button>

              <div className="border-t border-gray-light pt-8">
                <h4 className="text-sm font-semibold text-black uppercase tracking-wide mb-6">
                  Включено
                </h4>
                <ul className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray text-sm"
                    >
                      <span className="text-primary font-bold mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
