import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Shield, Truck, Palette, Ruler, ChevronRight } from 'lucide-react';
import { siteData } from '../data/content';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[hsl(var(--tr-dark))] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)'
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
              {siteData.hero.title}
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
              {siteData.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/fasadnye-kassety"
                className="inline-flex items-center gap-2 bg-[hsl(var(--tr-accent))] text-white px-6 py-3 font-semibold rounded hover:bg-[hsl(var(--tr-accent))]/90 transition-colors"
              >
                {siteData.hero.ctaPrimary}
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/galereya"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 font-semibold rounded hover:bg-white/20 transition-colors"
              >
                {siteData.hero.ctaSecondary}
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[hsl(var(--background))] to-transparent" />
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl mb-4">Наши услуги</h2>
            <p className="text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
              Полный цикл работ — от проектирования и производства до доставки и монтажа
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {siteData.services.map((service) => (
              <Link
                key={service.link}
                to={service.link}
                className="group bg-white border border-[hsl(var(--border))] rounded-lg p-6 lg:p-8 hover:border-[hsl(var(--tr-accent))]/30 hover:shadow-lg transition-all"
              >
                <h3 className="font-heading font-semibold text-xl mb-3 group-hover:text-[hsl(var(--tr-accent))] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[hsl(var(--muted-foreground))] mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-1.5 mb-4">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[hsl(var(--foreground))]">
                      <span className="w-1.5 h-1.5 bg-[hsl(var(--tr-accent))] rounded-full shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-[hsl(var(--tr-accent))]">
                  Подробнее <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl mb-4">Почему выбирают нас</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Гарантия качества', desc: 'Сертифицированная продукция, контроль на всех этапах производства' },
              { icon: Truck, title: 'Доставка по России', desc: 'Собственный автопарк, отгрузка в любой регион РФ' },
              { icon: Palette, title: 'Любые цвета RAL', desc: 'Порошковая окраска в любой цвет по каталогу RAL и RR' },
              { icon: Ruler, title: 'Точность размеров', desc: 'Современное оборудование, погрешность не более 0,5 мм' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="w-14 h-14 bg-[hsl(var(--tr-accent))]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon size={28} className="text-[hsl(var(--tr-accent))]" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{title}</h3>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-[hsl(var(--tr-dark))] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl mb-4">Нужна консультация?</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Позвоните или напишите нам — расскажем о вариантах, рассчитаем стоимость и сроки под ваш проект
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+79856734656"
              className="inline-flex items-center gap-2 bg-[hsl(var(--tr-accent))] text-white px-6 py-3 font-semibold rounded hover:bg-[hsl(var(--tr-accent))]/90 transition-colors"
            >
              <Phone size={18} />
              +7 (985) 673-46-56
            </a>
            <a
              href="https://wa.me/79663274477"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 font-semibold rounded hover:bg-white/20 transition-colors"
            >
              Написать в WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
