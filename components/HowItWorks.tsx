const steps = [
  {
    id: 1,
    title: 'Консультация',
    description: 'Обсуждаем ваши задачи, боли и цели для определения оптимального решения.',
  },
  {
    id: 2,
    title: 'Подготовка данных',
    description: 'Анализируем и подготавливаем ваши данные для обучения моделей.',
  },
  {
    id: 3,
    title: 'Интеграция',
    description: 'Интегрируем платформу с вашими существующими системами и приложениями.',
  },
  {
    id: 4,
    title: 'Тестирование',
    description: 'Проводим тестирование, оптимизацию и настройку под ваши требования.',
  },
  {
    id: 5,
    title: 'Запуск',
    description: 'Запускаем решение в продакшене с полной поддержкой наших специалистов.',
  },
  {
    id: 6,
    title: 'Поддержка',
    description: 'Обеспечиваем постоянный мониторинг, обновления и улучшения системы.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-white">
      <div className="container">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Как это работает
          </h2>
          <p className="text-lg text-gray max-w-2xl">
            Простой и прозрачный процесс внедрения AI решений в ваш бизнес.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Номер шага */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-lg">
                  {step.id}
                </div>
                {index !== steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-16 right-0 h-1 bg-gradient-to-r from-primary to-transparent"></div>
                )}
              </div>

              {/* Содержимое */}
              <h3 className="text-2xl font-bold text-black mb-3">
                {step.title}
              </h3>
              <p className="text-gray leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Временная шкала для мобильных */}
        <div className="lg:hidden mt-12 relative">
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
