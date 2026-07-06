'use client';

import { useState } from 'react';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Имитируем отправку
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="container max-w-2xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Готовы трансформировать ваш бизнес?
        </h2>

        <p className="text-lg text-white/80 mb-12">
          Присоединяйтесь к тысячам компаний, которые уже используют NeuroNex для автоматизации и анализа данных. Начните бесплатно прямо сейчас.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="email"
            placeholder="Введите ваш email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-6 py-4 rounded text-black placeholder-gray"
          />
          <button type="submit" className="btn bg-white text-primary hover:bg-gray-light px-8 py-4">
            Начать
          </button>
        </form>

        {submitted && (
          <p className="text-white/80 text-sm">
            ✓ Спасибо! Проверьте вашу почту.
          </p>
        )}

        <p className="text-white/60 text-sm">
          14 дней бесплатного доступа. Кредитная карта не требуется.
        </p>
      </div>
    </section>
  );
}
