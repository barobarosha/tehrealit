import ArticleSection from '../components/ArticleSection';
import { Check, Ruler } from 'lucide-react';
import { siteData } from '../data/content';

export default function AKK() {
  return (
    <>
      <div className="bg-[hsl(var(--tr-dark))] text-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-3xl lg:text-5xl mb-4">{siteData.akk.title}</h1>
          <p className="text-white/70 max-w-3xl text-lg leading-relaxed whitespace-pre-line">
            {siteData.akk.intro}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
        <section>
          <h2 className="font-heading font-bold text-2xl mb-6">Технические характеристики</h2>
          <div className="bg-white border border-[hsl(var(--border))] rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {siteData.akk.features.map((f, i) => (
                  <tr key={f.label} className={i !== siteData.akk.features.length - 1 ? 'border-b border-[hsl(var(--border))]' : ''}>
                    <td className="px-6 py-4 font-medium bg-[hsl(var(--muted))]/50">{f.label}</td>
                    <td className="px-6 py-4">{f.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="font-heading font-bold text-2xl mb-6">Преимущества АКК</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {siteData.akk.advantages.map((a) => (
              <div key={a} className="flex items-start gap-3 bg-white border border-[hsl(var(--border))] rounded-lg p-4">
                <Check size={20} className="text-[hsl(var(--tr-accent))] mt-0.5 shrink-0" />
                <span className="text-sm">{a}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[hsl(var(--tr-dark))] text-white rounded-lg p-8 lg:p-12 text-center">
          <Ruler size={40} className="mx-auto mb-4 text-[hsl(var(--tr-accent))]" />
          <h2 className="font-heading font-bold text-2xl mb-4">Нужен расчёт на АКК?</h2>
          <p className="text-white/70 mb-6 max-w-xl mx-auto">
            Отправьте размеры и требования — наш инженер рассчитает стоимость и подберёт оптимальную толщину и тип крепления
          </p>
          <a
            href="mailto:fasad14@bk.ru?subject=Расчет АКК"
            className="inline-flex items-center gap-2 bg-[hsl(var(--tr-accent))] text-white px-6 py-3 font-semibold rounded hover:bg-[hsl(var(--tr-accent))]/90 transition-colors"
          >
            Запросить расчёт
          </a>
        </section>
            <ArticleSection id="akk" />    
      </div>
    </>
  );
}
