import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Check, Send, FileText, User, Phone, MessageCircle } from 'lucide-react';
import { siteData } from '../data/content';

const priceMap: Record<string, Record<string, number>> = {
  'open': { '0.7': 549, '1.0': 830, '1.2': 940 },
  'closed': { '1.0': 990, '1.2': 1140 },
};

export default function FasadnyeKassety() {
  const [calc, setCalc] = useState({
    area: '',
    type: 'open',
    thickness: '0.7',
    options: [] as string[],
    tz: 'no',
    showForm: false,
  });

  const [formData, setFormData] = useState({
    name: '',
    channel: 'phone',
    phone: '',
    agree: false,
  });
  const [sent, setSent] = useState(false);

  const calcPrice = () => {
    const area = parseFloat(calc.area) || 0;
    if (area <= 0) return 0;
    let base = priceMap[calc.type][calc.thickness] || 0;
    let total = base * area;
    siteData.fasadnyeKassety.options.forEach((opt) => {
      if (calc.options.includes(opt.name)) total += opt.price * area;
    });
    return Math.round(total);
  };

  const calcPerMeter = () => {
    const area = parseFloat(calc.area) || 0;
    if (area <= 0) return 0;
    return Math.round(calcPrice() / area);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    if (window.ym) window.ym(Number(window.YANDEX_METRIKA_ID), 'reachGoal', 'quote_submit');
  };

  const area = parseFloat(calc.area) || 0;
  const totalPrice = calcPrice();
  const perMeter = calcPerMeter();

  return (
    <>
      {/* Header */}
      <div className="bg-[hsl(var(--tr-dark))] text-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-3xl lg:text-5xl mb-4">{siteData.fasadnyeKassety.title}</h1>
          <p className="text-white/70 max-w-3xl text-lg leading-relaxed whitespace-pre-line">
            {siteData.fasadnyeKassety.intro}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
        {/* Types & Prices */}
        <section>
          <h2 className="font-heading font-bold text-2xl mb-8">Виды кассет и цены</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {siteData.fasadnyeKassety.types.map((t) => (
              <div key={t.name} className="bg-white border border-[hsl(var(--border))] rounded-lg p-6">
                <h3 className="font-heading font-semibold text-xl mb-2">{t.name}</h3>
                <p className="text-[hsl(var(--muted-foreground))] mb-4">{t.description}</p>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[hsl(var(--border))]">
                      <th className="text-left py-2 font-medium">Толщина</th>
                      <th className="text-right py-2 font-medium">Цена с покраской</th>
                    </tr>
                  </thead>
                  <tbody>
                    {t.prices.map((p) => (
                      <tr key={p.thickness} className="border-b border-[hsl(var(--border))]/50">
                        <td className="py-2">{p.thickness}</td>
                        <td className="py-2 text-right font-semibold">{p.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-[hsl(var(--tr-accent))]/5 border border-[hsl(var(--tr-accent))]/20 rounded-lg">
            <p className="font-medium text-[hsl(var(--tr-accent))]">
              {siteData.fasadnyeKassety.turnkey.label}: <span className="font-bold">{siteData.fasadnyeKassety.turnkey.price}</span>
            </p>
          </div>
        </section>

        {/* Unified Calculator */}
        <section className="bg-white border border-[hsl(var(--border))] rounded-lg p-6 lg:p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-[hsl(var(--tr-accent))]/10 rounded-lg flex items-center justify-center">
              <Calculator size={20} className="text-[hsl(var(--tr-accent))]" />
            </div>
            <h2 className="font-heading font-bold text-2xl">Калькулятор стоимости</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left: Parameters */}
            <div className="lg:col-span-3 space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1.5">Площадь фасада, м²</label>
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  value={calc.area}
                  onChange={(e) => setCalc({ ...calc, area: e.target.value })}
                  placeholder="Например: 150"
                  className="w-full px-4 py-2.5 border border-[hsl(var(--border))] rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--tr-accent))]/30"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">Тип кассет</label>
                <div className="flex gap-2">
                  {[
                    { value: 'open', label: 'Открытого типа' },
                    { value: 'closed', label: 'Закрытого типа' },
                  ].map((t) => (
                    <button
                      key={t.value}
                      onClick={() => setCalc({ ...calc, type: t.value, thickness: t.value === 'open' ? '0.7' : '1.0' })}
                      className={`flex-1 px-4 py-2.5 rounded border text-sm font-medium transition-colors ${
                        calc.type === t.value
                          ? 'bg-[hsl(var(--tr-accent))] text-white border-[hsl(var(--tr-accent))]'
                          : 'bg-white text-[hsl(var(--foreground))] border-[hsl(var(--border))] hover:border-[hsl(var(--tr-accent))]'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">Толщина металла</label>
                <select
                  value={calc.thickness}
                  onChange={(e) => setCalc({ ...calc, thickness: e.target.value })}
                  className="w-full px-4 py-2.5 border border-[hsl(var(--border))] rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--tr-accent))]/30 bg-white"
                >
                  {calc.type === 'open' ? (
                    <>
                      <option value="0.7">0,7 мм</option>
                      <option value="1.0">1,0 мм</option>
                      <option value="1.2">1,2 мм</option>
                    </>
                  ) : (
                    <>
                      <option value="1.0">1,0 мм</option>
                      <option value="1.2">1,2 мм</option>
                    </>
                  )}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Дополнительные опции</label>
                <div className="space-y-2">
                  {siteData.fasadnyeKassety.options.map((opt) => (
                    <label key={opt.name} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={calc.options.includes(opt.name)}
                        onChange={(e) => {
                          const next = e.target.checked
                            ? [...calc.options, opt.name]
                            : calc.options.filter((o) => o !== opt.name);
                          setCalc({ ...calc, options: next });
                        }}
                        className="w-4 h-4 accent-[hsl(var(--tr-accent))]"
                      />
                      <span className="text-sm">{opt.name} (+{opt.price} ₽/{opt.unit})</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">У вас есть техническое задание?</label>
                <div className="flex gap-2">
                  {['no', 'yes'].map((v) => (
                    <button
                      key={v}
                      onClick={() => setCalc({ ...calc, tz: v })}
                      className={`flex-1 px-4 py-2.5 rounded border text-sm font-medium transition-colors ${
                        calc.tz === v
                          ? 'bg-[hsl(var(--tr-accent))] text-white border-[hsl(var(--tr-accent))]'
                          : 'bg-white text-[hsl(var(--foreground))] border-[hsl(var(--border))] hover:border-[hsl(var(--tr-accent))]'
                      }`}
                    >
                      {v === 'no' ? 'НЕТ ТЗ' : 'ЕСТЬ ТЗ'}
                    </button>
                  ))}
                </div>
                {calc.tz === 'yes' && (
                  <div className="mt-3 border-2 border-dashed border-[hsl(var(--border))] rounded-lg p-6 text-center hover:border-[hsl(var(--tr-accent))]/40 transition-colors cursor-pointer">
                    <FileText size={24} className="mx-auto mb-2 text-[hsl(var(--muted-foreground))]" />
                    <p className="text-sm text-[hsl(var(--muted-foreground))]">Загрузите файл или перетащите сюда</p>
                    <input type="file" className="hidden" />
                  </div>
                )}
              </div>
            </div>

            {/* Right: Result */}
            <div className="lg:col-span-2">
              <div className="bg-[hsl(var(--muted))] rounded-lg p-6 h-full flex flex-col">
                <div className="text-sm text-[hsl(var(--muted-foreground))] mb-2">Предварительная стоимость материалов</div>
                <div className="font-heading font-bold text-4xl text-[hsl(var(--tr-accent))] mb-2">
                  {totalPrice.toLocaleString('ru-RU')} ₽
                </div>
                {area > 0 && (
                  <div className="text-sm text-[hsl(var(--muted-foreground))] mb-6">
                    ≈ {perMeter.toLocaleString('ru-RU')} ₽/м²
                  </div>
                )}

                {/* Calculation summary */}
                {area > 0 && (
                  <div className="space-y-2 mb-6 text-sm">
                    <div className="flex justify-between py-1 border-b border-[hsl(var(--border))]/50">
                      <span className="text-[hsl(var(--muted-foreground))]">Площадь</span>
                      <span>{area} м²</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[hsl(var(--border))]/50">
                      <span className="text-[hsl(var(--muted-foreground))]">Тип</span>
                      <span>{calc.type === 'open' ? 'Открытый' : 'Закрытый'}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[hsl(var(--border))]/50">
                      <span className="text-[hsl(var(--muted-foreground))]">Толщина</span>
                      <span>{calc.thickness} мм</span>
                    </div>
                    {calc.options.length > 0 && (
                      <div className="flex justify-between py-1 border-b border-[hsl(var(--border))]/50">
                        <span className="text-[hsl(var(--muted-foreground))]">Опции</span>
                        <span>{calc.options.length} шт.</span>
                      </div>
                    )}
                    <div className="flex justify-between py-1">
                      <span className="text-[hsl(var(--muted-foreground))]">ТЗ</span>
                      <span>{calc.tz === 'yes' ? 'Прикреплено' : 'Нет'}</span>
                    </div>
                  </div>
                )}

                <div className="mt-auto space-y-3">
                  <button
                    onClick={() => setCalc({ ...calc, showForm: true })}
                    disabled={area <= 0}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[hsl(var(--tr-accent))] text-white px-6 py-3 font-semibold rounded hover:bg-[hsl(var(--tr-accent))]/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <Send size={18} />
                    Отправить заявку с расчётом
                  </button>
                  <div className="text-xs text-center text-[hsl(var(--muted-foreground))]">
                    Мы перезвоним и уточним детали
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (appears when button clicked) */}
          {calc.showForm && (
            <div className="mt-8 pt-8 border-t border-[hsl(var(--border))]">
              {sent ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={32} className="text-green-600" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">Заявка отправлена</h3>
                  <p className="text-[hsl(var(--muted-foreground))]">Мы свяжемся с вами в ближайшее время</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="max-w-xl">
                  <h3 className="font-heading font-semibold text-lg mb-5 flex items-center gap-2">
                    <User size={20} className="text-[hsl(var(--tr-accent))]" />
                    Укажите контакты для связи
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Ваше имя</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Иван"
                        className="w-full px-4 py-2.5 border border-[hsl(var(--border))] rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--tr-accent))]/30"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Способ связи</label>
                      <div className="flex gap-2">
                        {[
                          { value: 'phone', label: 'Телефон', icon: Phone },
                          { value: 'telegram', label: 'Telegram', icon: MessageCircle },
                          { value: 'whatsapp', label: 'WhatsApp', icon: MessageCircle },
                        ].map((c) => (
                          <button
                            key={c.value}
                            type="button"
                            onClick={() => setFormData({ ...formData, channel: c.value })}
                            className={`flex-1 px-3 py-2 rounded border text-sm font-medium transition-colors flex items-center justify-center gap-1.5 ${
                              formData.channel === c.value
                                ? 'bg-[hsl(var(--tr-accent))] text-white border-[hsl(var(--tr-accent))]'
                                : 'bg-white text-[hsl(var(--foreground))] border-[hsl(var(--border))] hover:border-[hsl(var(--tr-accent))]'
                            }`}
                          >
                            <c.icon size={14} />
                            {c.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1.5">Телефон</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+7 (000) 000-00-00"
                        className="w-full px-4 py-2.5 border border-[hsl(var(--border))] rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--tr-accent))]/30"
                      />
                    </div>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={formData.agree}
                        onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                        className="mt-1 w-4 h-4 accent-[hsl(var(--tr-accent))]"
                      />
                      <span className="text-sm text-[hsl(var(--muted-foreground))]">
                        Я даю согласие на обработку персональных данных в соответствии с{' '}
                        <Link to="/kontakty" className="text-[hsl(var(--tr-accent))] underline">политикой конфиденциальности</Link>
                      </span>
                    </label>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[hsl(var(--tr-accent))] text-white px-6 py-3 font-semibold rounded hover:bg-[hsl(var(--tr-accent))]/90 transition-colors"
                    >
                      <Send size={18} /> Отправить заявку
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </section>

        {/* Advantages */}
        <section>
          <h2 className="font-heading font-bold text-2xl mb-6">Преимущества фасадных кассет</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {siteData.fasadnyeKassety.advantages.map((a) => (
              <div key={a} className="flex items-start gap-3 bg-white border border-[hsl(var(--border))] rounded-lg p-4">
                <Check size={20} className="text-[hsl(var(--tr-accent))] mt-0.5 shrink-0" />
                <span className="text-sm">{a}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
