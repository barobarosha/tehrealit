import { Check, Phone, Ruler } from 'lucide-react';
import { siteData } from '../data/content';

export default function KorzinyDlyaKondicionerov() {
  return (
    <>
      <div className="bg-[hsl(var(--tr-dark))] text-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-3xl lg:text-5xl mb-4">{siteData.korziny.title}</h1>
          <p className="text-white/70 max-w-3xl text-lg leading-relaxed whitespace-pre-line">
            {siteData.korziny.intro}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
        <section>
          <h2 className="font-heading font-bold text-2xl mb-6">Виды корзин</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {siteData.korziny.types.map((t) => (
              <div key={t.name} className="bg-white border border-[hsl(var(--border))] rounded-lg p-6">
                <h3 className="font-heading font-semibold text-xl mb-3">{t.name}</h3>
                <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-heading font-bold text-2xl mb-6">Преимущества</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {siteData.korziny.advantages.map((a) => (
              <div key={a} className="flex items-start gap-3 bg-white border border-[hsl(var(--border))] rounded-lg p-4">
                <Check size={20} className="text-[hsl(var(--tr-accent))] mt-0.5 shrink-0" />
                <span className="text-sm">{a}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white border border-[hsl(var(--border))] rounded-lg p-6">
            <h3 className="font-heading font-semibold text-xl mb-4">Объекты применения</h3>
            <ul className="space-y-2">
              {siteData.korziny.objects.map((o) => (
                <li key={o} className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 bg-[hsl(var(--tr-accent))] rounded-full shrink-0" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[hsl(var(--tr-dark))] text-white rounded-lg p-6 flex flex-col justify-center">
            <Ruler size={32} className="mb-4 text-[hsl(var(--tr-accent))]" />
            <h3 className="font-heading font-semibold text-xl mb-2">Как заказать</h3>
            <ol className="space-y-2 text-sm text-white/80 mb-6">
              <li>1. Пришлите модель кондиционера или размеры блока</li>
              <li>2. Мы рассчитаем стоимость за 1 день</li>
              <li>3. Изготовим с окраской в выбранный цвет</li>
              <li>4. Доставим по всей России</li>
            </ol>
            <a
              href="tel:+79856734656"
              className="inline-flex items-center gap-2 bg-[hsl(var(--tr-accent))] text-white px-5 py-2.5 font-semibold rounded hover:bg-[hsl(var(--tr-accent))]/90 transition-colors w-fit"
            >
              <Phone size={16} /> Позвонить
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
