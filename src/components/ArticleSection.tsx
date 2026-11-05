import { useState } from 'react';
import { ChevronDown, BookOpen } from 'lucide-react';
import { articles } from '../data/articles';

interface ArticleBlock {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  numbered?: boolean;
  table?: { headers: string[]; rows: string[][] };
  note?: string;
}

export default function ArticleSection({ id }: { id: string }) {
  const article = articles[id];
  const [open, setOpen] = useState(false);

  if (!article) return null;

  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-[hsl(var(--tr-accent))]/10 rounded-lg flex items-center justify-center shrink-0">
          <BookOpen size={20} className="text-[hsl(var(--tr-accent))]" />
        </div>
        <h2 className="font-heading font-bold text-2xl">{article.title}</h2>
      </div>

      <div
        className={`relative overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          open ? 'max-h-[20000px]' : 'max-h-[420px]'
        }`}
      >
        <div className="space-y-8 max-w-3xl">
          {article.blocks.map((block: ArticleBlock, i: number) => (
            <div key={i}>
              {block.heading && (
                <h3 className="font-heading font-semibold text-lg mb-3 text-[hsl(var(--foreground))]">
                  {block.heading}
                </h3>
              )}
              {block.paragraphs?.map((p: string, j: number) => (
                <p
                  key={j}
                  className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-3 last:mb-0"
                >
                  {p}
                </p>
              ))}
              {block.list && (
                <ul className="space-y-2 mt-1">
                  {block.list.map((item: string, j: number) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="text-[hsl(var(--tr-accent))] mt-0.5 shrink-0">
                        {block.numbered ? `${j + 1}.` : '—'}
                      </span>
                      <span className="text-[hsl(var(--muted-foreground))] leading-relaxed text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              {block.table && (
                <div className="overflow-x-auto mt-3">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[hsl(var(--border))]">
                        {block.table.headers.map((h: string, j: number) => (
                          <th
                            key={j}
                            className="text-left py-2 pr-4 font-medium text-[hsl(var(--foreground))]"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.table.rows.map((row: string[], j: number) => (
                        <tr key={j} className="border-b border-[hsl(var(--border))]/50">
                          {row.map((cell: string, k: number) => (
                            <td
                              key={k}
                              className="py-2 pr-4 text-[hsl(var(--muted-foreground))] whitespace-nowrap"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {block.note && (
                <p className="text-xs text-[hsl(var(--muted-foreground))]/80 italic mt-3">{block.note}</p>
              )}
            </div>
          ))}
        </div>

        {!open && (
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[hsl(var(--background))] to-transparent pointer-events-none" />
        )}
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="mt-4 inline-flex items-center gap-2 text-[hsl(var(--tr-accent))] font-medium text-sm hover:underline"
      >
        {open ? 'Свернуть' : 'Читать подробнее'}
        <ChevronDown size={16} className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
    </section>
  );
}