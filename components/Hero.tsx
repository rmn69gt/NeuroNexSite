export default function Hero() {
  return (
    <section className="hero bg-gradient-to-br from-white to-gray-light pt-40 pb-20 md:pt-48 md:pb-32">
      <div className="container">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
            Искусственный интеллект для вашего бизнеса
          </h1>

          <p className="text-lg md:text-xl text-gray mb-8 leading-relaxed max-w-2xl">
            NeuroNex — это платформа на базе современных AI алгоритмов, которая автоматизирует рутинные процессы, анализирует большие объемы данных и предоставляет умные решения для принятия решений.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <button className="btn btn-primary px-8 py-4 text-base">
              Начать бесплатно
            </button>
            <button className="btn btn-secondary px-8 py-4 text-base">
              Смотреть демо
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 mt-16 pt-16 border-t border-gray-light/50">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-black">10K+</p>
              <p className="text-gray text-sm mt-2">активных компаний</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-black">99.9%</p>
              <p className="text-gray text-sm mt-2">аптайм</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-black">24/7</p>
              <p className="text-gray text-sm mt-2">техническая поддержка</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
