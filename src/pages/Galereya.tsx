import { useState } from 'react';
import { siteData } from '../data/content';

const categories = ['Все', 'Фасадные кассеты', 'АКК', 'Профнастил', 'Доборные элементы', 'Порошковая покраска'];

export default function Galereya() {
  const [filter, setFilter] = useState('Все');
  const items = filter === 'Все'
    ? siteData.gallery.items
    : siteData.gallery.items.filter((i) => i.category === filter);

  return (
    <>
      <div className="bg-[hsl(var(--tr-dark))] text-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-3xl lg:text-5xl mb-4">{siteData.gallery.title}</h1>
          <p className="text-white/70 max-w-2xl text-lg">{siteData.gallery.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded border text-sm font-medium transition-colors ${
                filter === c
                  ? 'bg-[hsl(var(--tr-accent))] text-white border-[hsl(var(--tr-accent))]'
                  : 'bg-white text-[hsl(var(--foreground))] border-[hsl(var(--border))] hover:border-[hsl(var(--tr-accent))]'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <div key={item.id} className="bg-white border border-[hsl(var(--border))] rounded-lg overflow-hidden group">
              <div className="aspect-[4/3] bg-[hsl(var(--muted))] flex items-center justify-center relative">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[hsl(var(--muted))] border-2 border-dashed border-[hsl(var(--border))] rounded mx-auto mb-2" />
                  <span className="text-xs text-[hsl(var(--muted-foreground))]">[ЗАГЛУШКА]</span>
                </div>
                <div className="absolute inset-0 bg-[hsl(var(--tr-dark))]/0 group-hover:bg-[hsl(var(--tr-dark))]/10 transition-colors" />
              </div>
              <div className="p-4">
                <h3 className="font-heading font-medium text-base">{item.title}</h3>
                <span className="text-xs text-[hsl(var(--muted-foreground))]">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
