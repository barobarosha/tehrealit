import ArticleSection from '../components/ArticleSection';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/content';

export default function DobornyeElementy() {
  return (
    <>
      <div className="bg-[hsl(var(--tr-dark))] text-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-3xl lg:text-5xl mb-4">{siteData.dobornyeElementy.title}</h1>
          <p className="text-white/70 max-w-3xl text-lg leading-relaxed whitespace-pre-line">
            {siteData.dobornyeElementy.intro}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {siteData.dobornyeElementy.items.map((item) => (
            <div key={item.name} className="bg-white border border-[hsl(var(--border))] rounded-lg p-5 flex items-start gap-4">
              <div className="w-2 h-2 bg-[hsl(var(--tr-accent))] rounded-full mt-2 shrink-0" />
              <div>
                <h3 className="font-heading font-semibold text-base mb-1">{item.name}</h3>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-[hsl(var(--tr-accent))]/5 border border-[hsl(var(--tr-accent))]/20 rounded-lg text-center">
          <h3 className="font-heading font-semibold text-xl mb-2">Не нашли нужный элемент?</h3>
          <p className="text-[hsl(var(--muted-foreground))] mb-4">
            Пришлите чертёж или эскиз — изготовим любой доборный элемент по вашим размерам
          </p>
          <Link
            to="/kontakty"
            className="inline-flex items-center gap-2 bg-[hsl(var(--tr-accent))] text-white px-6 py-2.5 font-semibold rounded hover:bg-[hsl(var(--tr-accent))]/90 transition-colors"
          >
            Связаться <ArrowRight size={16} />
          </Link>
        </div>
                    <ArticleSection id="<dobornye-elementy>" />
      </div>
    </>
  );
}
