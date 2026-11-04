import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { siteData } from '../data/content';

export default function Kontakty() {
  return (
    <>
      <div className="bg-[hsl(var(--tr-dark))] text-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-3xl lg:text-5xl mb-4">Контакты</h1>
          <p className="text-white/70 max-w-2xl text-lg">
            Свяжитесь с нами удобным способом — ответим на вопросы, рассчитаем стоимость и подберём решение под ваш проект
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="bg-white border border-[hsl(var(--border))] rounded-lg p-6">
              <h2 className="font-heading font-semibold text-xl mb-6">Контактная информация</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[hsl(var(--tr-accent))]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-[hsl(var(--tr-accent))]" />
                  </div>
                  <div>
                    <div className="text-sm text-[hsl(var(--muted-foreground))] mb-1">Основной телефон</div>
                    <a href="tel:+79856734656" className="font-semibold text-lg hover:text-[hsl(var(--tr-accent))] transition-colors">
                      +7 (985) 673-46-56
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[hsl(var(--tr-accent))]/10 rounded-lg flex items-center justify-center shrink-0">
                    <MessageCircle size={18} className="text-[hsl(var(--tr-accent))]" />
                  </div>
                  <div>
                    <div className="text-sm text-[hsl(var(--muted-foreground))] mb-1">WhatsApp</div>
                    <a
                      href="https://wa.me/79663274477"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-lg hover:text-[hsl(var(--tr-accent))] transition-colors"
                    >
                      +7 (966) 327-44-77
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[hsl(var(--tr-accent))]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-[hsl(var(--tr-accent))]" />
                  </div>
                  <div>
                    <div className="text-sm text-[hsl(var(--muted-foreground))] mb-1">Email</div>
                    <a href="mailto:fasad14@bk.ru" className="font-semibold text-lg hover:text-[hsl(var(--tr-accent))] transition-colors">
                      fasad14@bk.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[hsl(var(--tr-accent))]/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-[hsl(var(--tr-accent))]" />
                  </div>
                  <div>
                    <div className="text-sm text-[hsl(var(--muted-foreground))] mb-1">Адрес</div>
                    <p className="font-medium">{siteData.company.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[hsl(var(--tr-accent))]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-[hsl(var(--tr-accent))]" />
                  </div>
                  <div>
                    <div className="text-sm text-[hsl(var(--muted-foreground))] mb-1">Режим работы</div>
                    <p className="font-medium">{siteData.company.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[hsl(var(--tr-dark))] text-white rounded-lg p-6">
              <h3 className="font-heading font-semibold text-lg mb-3">Быстрый заказ</h3>
              <p className="text-white/70 text-sm mb-4">
                Отправьте заявку — мы перезвоним и рассчитаем стоимость в течение рабочего дня
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+79856734656"
                  className="inline-flex items-center gap-2 bg-[hsl(var(--tr-accent))] text-white px-5 py-2.5 font-semibold rounded hover:bg-[hsl(var(--tr-accent))]/90 transition-colors"
                >
                  <Phone size={16} /> Позвонить
                </a>
                <a
                  href="https://wa.me/79663274477"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-5 py-2.5 font-semibold rounded hover:bg-white/20 transition-colors"
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="bg-white border border-[hsl(var(--border))] rounded-lg p-6">
            <h2 className="font-heading font-semibold text-xl mb-4">Как нас найти</h2>
            <div className="aspect-[4/3] bg-[hsl(var(--muted))] rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin size={32} className="mx-auto mb-2 text-[hsl(var(--muted-foreground))]" />
                <p className="text-sm text-[hsl(var(--muted-foreground))]">[ЗАГЛУШКА: Яндекс.Карты]</p>
                <p className="text-xs text-[hsl(var(--muted-foreground))] mt-1">
                  г. Москва, ул. 1-я Напрудная, д. 9, кв. 131
                </p>
              </div>
            </div>
            <p className="text-sm text-[hsl(var(--muted-foreground))] mt-4">
              До нас можно добраться на общественном транспорте от станции метро «Бабушкинская» или «Медведково».
              Предварительно договоритесь о визите по телефону.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
