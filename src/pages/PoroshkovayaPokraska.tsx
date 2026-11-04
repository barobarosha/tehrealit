import { Check, Flame } from 'lucide-react';
import { siteData } from '../data/content';

export default function PoroshkovayaPokraska() {
  return (
    <>
      <div className="bg-[hsl(var(--tr-dark))] text-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-3xl lg:text-5xl mb-4">{siteData.poroshkovayaPokraska.title}</h1>
          <p className="text-white/70 max-w-3xl text-lg leading-relaxed whitespace-pre-line">
            {siteData.poroshkovayaPokraska.intro}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
        <section>
          <h2 className="font-heading font-bold text-2xl mb-8">Технологический процесс</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {siteData.poroshkovayaPokraska.process.map((p) => (
              <div key={p.step} className="bg-white border border-[hsl(var(--border))] rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-[hsl(var(--tr-accent))] text-white rounded-full flex items-center justify-center font-heading font-bold text-xl mx-auto mb-4">
                  {p.step}
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-heading font-bold text-2xl mb-6">Преимущества порошковой покраски</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {siteData.poroshkovayaPokraska.advantages.map((a) => (
              <div key={a} className="flex items-start gap-3 bg-white border border-[hsl(var(--border))] rounded-lg p-4">
                <Check size={20} className="text-[hsl(var(--tr-accent))] mt-0.5 shrink-0" />
                <span className="text-sm">{a}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white border border-[hsl(var(--border))] rounded-lg p-6 lg:p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[hsl(var(--tr-accent))]/10 rounded-lg flex items-center justify-center shrink-0">
              <Flame size={24} className="text-[hsl(var(--tr-accent))]" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-xl mb-2">Покрасочная камера</h3>
              <p className="text-[hsl(var(--muted-foreground))] mb-4">
                Размеры камеры позволяют окрашивать изделия до 715×200×180 см. Это значит, что мы можем покрасить практически любые фасадные панели, строительные конструкции и металлоизделия без разборки.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-[hsl(var(--muted))] rounded text-sm">715 см — длина</span>
                <span className="px-3 py-1 bg-[hsl(var(--muted))] rounded text-sm">200 см — ширина</span>
                <span className="px-3 py-1 bg-[hsl(var(--muted))] rounded text-sm">180 см — высота</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
