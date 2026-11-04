import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Phone, Mail, Clock, MapPin, Menu, X, ChevronRight } from 'lucide-react';

const navItems = [
  { label: 'Главная', path: '/' },
  { label: 'Фасадные кассеты', path: '/fasadnye-kassety' },
  { label: 'АКК', path: '/alyuminievye-kompozitnye-kassety' },
  { label: 'Покраска', path: '/poroshkovaya-pokraska' },
  { label: 'Профнастил', path: '/profnastil' },
  { label: 'Доборные элементы', path: '/dobornye-elementy' },
  { label: 'Корзины для кондиционеров', path: '/korziny-dlya-kondicionerov' },
  { label: 'Галерея', path: '/galereya' },
  { label: 'Контакты', path: '/kontakty' },
];

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--background))]">
      {/* Top bar */}
      <div className="bg-[hsl(var(--tr-dark))] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-4">
            <a href="tel:+79856734656" className="flex items-center gap-1.5 hover:text-[hsl(var(--tr-accent))] transition-colors">
              <Phone size={14} />
              <span>+7 (985) 673-46-56</span>
            </a>
            <a href="https://wa.me/79663274477" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[hsl(var(--tr-accent))] transition-colors">
              <Phone size={14} />
              <span>+7 (966) 327-44-77 (WhatsApp)</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:fasad14@bk.ru" className="flex items-center gap-1.5 hover:text-[hsl(var(--tr-accent))] transition-colors">
              <Mail size={14} />
              <span className="hidden sm:inline">fasad14@bk.ru</span>
            </a>
            <span className="hidden md:flex items-center gap-1.5 text-white/70">
              <Clock size={14} />
              9:00–21:00
            </span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-30 transition-shadow duration-300 ${scrolled ? 'shadow-lg' : ''} bg-white border-b border-[hsl(var(--border))]`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 bg-[hsl(var(--tr-accent))] rounded flex items-center justify-center">
                <span className="text-white font-heading font-bold text-xl">ТР</span>
              </div>
              <div className="leading-tight">
                <div className="font-heading font-bold text-lg tracking-tight text-[hsl(var(--tr-dark))]">ТЕХРЕАЛИТ</div>
                <div className="text-[10px] uppercase tracking-widest text-[hsl(var(--tr-gray))]">Фасадные системы</div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden xl:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                    location.pathname === item.path
                      ? 'text-[hsl(var(--tr-accent))] bg-[hsl(var(--tr-accent))]/5'
                      : 'text-[hsl(var(--foreground))] hover:text-[hsl(var(--tr-accent))] hover:bg-[hsl(var(--muted))]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="tel:+79856734656"
                className="hidden md:inline-flex items-center gap-2 bg-[hsl(var(--tr-accent))] text-white px-4 py-2 text-sm font-semibold rounded hover:bg-[hsl(var(--tr-accent))]/90 transition-colors"
              >
                <Phone size={16} />
                Позвонить
              </a>
              <button
                className="xl:hidden p-2 rounded hover:bg-[hsl(var(--muted))]"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? 'Закрыть меню' : 'Открыть меню'}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="xl:hidden border-t border-[hsl(var(--border))] bg-white">
            <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center justify-between px-3 py-2.5 rounded text-sm font-medium ${
                    location.pathname === item.path
                      ? 'text-[hsl(var(--tr-accent))] bg-[hsl(var(--tr-accent))]/5'
                      : 'text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))]'
                  }`}
                >
                  {item.label}
                  <ChevronRight size={16} className="opacity-50" />
                </Link>
              ))}
              <div className="pt-3 border-t border-[hsl(var(--border))] space-y-2">
                <a href="tel:+79856734656" className="flex items-center gap-2 text-sm">
                  <Phone size={14} className="text-[hsl(var(--tr-accent))]" />
                  +7 (985) 673-46-56
                </a>
                <a href="https://wa.me/79663274477" className="flex items-center gap-2 text-sm">
                  <Phone size={14} className="text-[hsl(var(--tr-accent))]" />
                  +7 (966) 327-44-77 (WhatsApp)
                </a>
                <a href="mailto:fasad14@bk.ru" className="flex items-center gap-2 text-sm">
                  <Mail size={14} className="text-[hsl(var(--tr-accent))]" />
                  fasad14@bk.ru
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[hsl(var(--tr-dark))] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[hsl(var(--tr-accent))] rounded flex items-center justify-center">
                  <span className="text-white font-heading font-bold text-xl">ТР</span>
                </div>
                <div>
                  <div className="font-heading font-bold text-lg">ТЕХРЕАЛИТ</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/60">Фасадные системы</div>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Производство фасадных кассет, порошковая покраска, профнастил и доборные элементы. Доставка по всей России.
              </p>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-base mb-4">Разделы</h4>
              <ul className="space-y-2">
                {navItems.slice(1).map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-white/70 text-sm hover:text-[hsl(var(--tr-accent))] transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-base mb-4">Контакты</h4>
              <ul className="space-y-3">
                <li>
                  <a href="tel:+79856734656" className="flex items-center gap-2 text-white/70 text-sm hover:text-[hsl(var(--tr-accent))] transition-colors">
                    <Phone size={14} />
                    +7 (985) 673-46-56
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/79663274477" className="flex items-center gap-2 text-white/70 text-sm hover:text-[hsl(var(--tr-accent))] transition-colors">
                    <Phone size={14} />
                    +7 (966) 327-44-77
                  </a>
                </li>
                <li>
                  <a href="mailto:fasad14@bk.ru" className="flex items-center gap-2 text-white/70 text-sm hover:text-[hsl(var(--tr-accent))] transition-colors">
                    <Mail size={14} />
                    fasad14@bk.ru
                  </a>
                </li>
                <li className="flex items-start gap-2 text-white/70 text-sm">
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  <span>129346, г. Москва, ул. 1-я Напрудная, д. 9, кв. 131</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-base mb-4">Режим работы</h4>
              <div className="flex items-center gap-2 text-white/70 text-sm mb-4">
                <Clock size={14} />
                <span>Пн–Вс: 9:00 – 21:00</span>
              </div>
              <p className="text-white/50 text-xs">
                ООО «Техреалит». Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
