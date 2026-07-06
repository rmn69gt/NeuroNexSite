'use client';

import { useState } from 'react';

const features = [
  {
    id: 1,
    title: 'Автоматизация процессов',
    description: 'Сократите время выполнения задач на 80% благодаря умной автоматизации рутинных операций.',
    icon: '⚡',
  },
  {
    id: 2,
    title: 'Анализ данных в реальном времени',
    description: 'Получайте моментальные инсайты и аналитику из ваших данных с помощью мощных AI алгоритмов.',
    icon: '📊',
  },
  {
    id: 3,
    title: 'Предсказательная аналитика',
    description: 'Прогнозируйте тренды рынка и поведение клиентов с точностью до 95%.',
    icon: '🔮',
  },
  {
    id: 4,
    title: 'Интеграция с вашими системами',
    description: 'Легко интегрируйте NeuroNex с существующими приложениями и базами данных.',
    icon: '🔗',
  },
  {
    id: 5,
    title: 'Машинное обучение на основе ваших данных',
    description: 'Модели обучаются на ваших данных и становятся умнее с каждым взаимодействием.',
    icon: '🧠',
  },
  {
    id: 6,
    title: 'Безопасность и конфиденциальность',
    description: 'Ваши данные защищены с помощью военного уровня шифрования и соответствуют GDPR.',
    icon: '🔒',
  },
];

export default function Features() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="features" className="py-20 md:py-32 bg-white">
      <div className="container">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Мощные возможности AI
          </h2>
          <p className="text-lg text-gray max-w-2xl">
            NeuroNex предоставляет комплексный набор инструментов для трансформации вашего бизнеса с помощью искусственного интеллекта.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="card cursor-pointer"
              onMouseEnter={() => setHoveredId(feature.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-black mb-4">
                {feature.title}
              </h3>
              <p className="text-gray leading-relaxed">
                {feature.description}
              </p>

              {hoveredId === feature.id && (
                <div className="mt-6 flex items-center text-primary font-medium text-sm">
                  Узнать больше →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
