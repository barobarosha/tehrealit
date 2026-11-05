import ArticleSection from '../components/ArticleSection';
import { siteData } from '../data/content';

export default function Profnastil() {
  return (
    <>
      <div className="bg-[hsl(var(--tr-dark))] text-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-3xl lg:text-5xl mb-4">{siteData.profnastil.title}</h1>
          <p className="text-white/70 max-w-3xl text-lg leading-relaxed whitespace-pre-line">
            {siteData.profnastil.intro}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
        <section>
          <h2 className="font-heading font-bold text-2xl mb-6">Профили и применение</h2>
          <div className="bg-white border border-[hsl(var(--border))] rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[hsl(var(--border))] bg-[hsl(var(--muted))]/50">
                  <th className="text-left px-6 py-3 font-medium">Профиль</th>
                  <th className="text-left px-6 py-3 font-medium">Высота волны</th>
                  <th className="text-left px-6 py-3 font-medium">Толщина</th>
                  <th className="text-left px-6 py-3 font-medium">Применение</th>
                </tr>
              </thead>
              <tbody>
                {siteData.profnastil.profiles.map((p, i) => (
                  <tr key={p.name} className={i !== siteData.profnastil.profiles.length - 1 ? 'border-b border-[hsl(var(--border))]' : ''}>
                    <td className="px-6 py-4 font-semibold">{p.name}</td>
                    <td className="px-6 py-4">{p.height}</td>
                    <td className="px-6 py-4">{p.thickness}</td>
                    <td className="px-6 py-4">{p.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white border border-[hsl(var(--border))] rounded-lg p-6 lg:p-8">
          <h2 className="font-heading font-bold text-xl mb-4">Покрытия</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: 'Оцинкованный', desc: 'Экономичный вариант для технических построек и временных сооружений' },
              { title: 'Полимерное покрытие', desc: 'Декоративная окраска в любой цвет RAL, гарантия до 15 лет' },
              { title: 'Декоративный', desc: 'Текстуры «под дерево», «под камень», «под кирпич» для фасадов' },
            ].map((c) => (
              <div key={c.title} className="p-4 bg-[hsl(var(--muted))]/50 rounded-lg">
                <h3 className="font-medium mb-1">{c.title}</h3>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
