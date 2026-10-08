/* =========================================================
   LUS — Leather & Upholstery Solutions
   i18n (RU / EN), theme (Day / Night), audio "Vibe", UI
   ========================================================= */
(function () {
  'use strict';

  /* ---------- Storage helpers (safe in private mode) ---------- */
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }
  };

  /* ---------- Translations ---------- */
  var translations = {
    en: {
      'meta.title': 'Leather & Upholstery Solutions — Tampa Bay',
      'meta.desc': 'Mobile leather and vinyl restoration, recoloring and reupholstery in Tampa Bay, FL.',
      'skip': 'Skip to content',

      'nav.services': 'Services',
      'nav.why': 'Why Us',
      'nav.about': 'About',
      'nav.gallery': 'Transformations',
      'nav.info': 'Info',
      'nav.contact': 'Contact',

      'hdr.call': 'Call (813) 344-6686',
      'hdr.lang': 'Language',
      'hdr.theme': 'Switch Day / Night mode',
      'hdr.vibe': 'Toggle ambient music',
      'hdr.menu': 'Menu',
      'vibe': 'Vibe',

      'hero.eyebrow': 'Tampa Bay · Mobile Leather & Vinyl Specialists',
      'hero.title': 'Timeless leather. Flawlessly restored.',
      'hero.sub': 'Furniture, automotive and marine interiors — restored, recolored and reupholstered with atelier-grade craftsmanship, right at your door.',
      'hero.cta': 'Get Your Free Quote',
      'hero.cta2': 'See Transformations',

      'services.eyebrow': 'What we do',
      'services.title': 'Services',
      'services.sub': 'Six disciplines, one standard: flawless, durable and discreet.',
      'badge.popular': 'MOST POPULAR',
      's1.title': 'Furniture Restoration',
      's1.text': 'Sofas, armchairs and sectionals returned to their original grandeur. We deep-clean, repair cracks and tears, rebuild the finish and restore a supple, even sheen — preserving the character of the piece while erasing fading, wear and years of use.',
      's2.title': 'Automotive Interiors',
      's2.text': 'Seats, door panels, consoles and dashboards restored to showroom condition. Cracks, scuffs and sun-faded surfaces are repaired and refinished by hand, with a precise color match and a durable, soft factory feel.',
      's3.title': 'Marine (Boats & Yachts)',
      's3.text': 'Specialist restoration for boat and yacht upholstery and marine vinyl. We repair, refinish and protect against UV, salt and humidity, so your helm and lounge seating look immaculate season after season.',
      's4.title': 'Recoloring',
      's4.text': 'A fresh color, flawlessly applied. We prepare, match and apply professional-grade flexible dyes — to revive worn leather or transform it entirely — for an even, durable finish that never feels painted.',
      's5.title': 'Reupholstery',
      's5.text': 'A complete second life for your piece. Fully re-covered in premium leather or marine-grade vinyl, hand-cut and stitched to your pattern, with refreshed padding and precise, crisp seams.',
      's6.title': 'Vinyl & Quick Repairs',
      's6.text': 'Tears, burns, punctures, split seams and scuffs — repaired quickly and invisibly, often the same day, right at your location. The fastest way to save a piece before damage spreads.',

      'why.eyebrow': 'Why choose us',
      'why.title': 'Craftsmanship you can trust',
      'w1.title': 'Save vs. Replace',
      'w1.text': 'Restore what you love for a fraction of the cost.',
      'w2.title': 'Licensed & Insured',
      'w2.text': 'Fully covered, including care & custody.',
      'w3.title': 'Precise Color Match',
      'w3.text': 'Professional-grade dyes matched seamlessly.',
      'w4.title': 'Fast & Mobile',
      'w4.text': 'We come to you on-site whenever possible.',

      'about.eyebrow': 'About us',
      'about.title': 'Quiet excellence, born in Tampa Bay.',
      'about.p1': 'Leather & Upholstery Solutions was born from a simple conviction: the finest pieces in your home, car or yacht deserve to be restored, not discarded. From our base in Tampa Bay, we bring the discipline of a traditional atelier to your doorstep — treating every sofa, seat and helm with the care of a bespoke commission.',
      'about.p2': 'Everything is done by hand. We clean, prepare, repair, color-match and seal each surface ourselves, using professional-grade materials chosen to look refined and last for years. We never rush a finish and never settle for ‘good enough’ — if it is not flawless, it is not done.',
      'about.p3': 'Our mobile service means no trucks, no disruption and no risk to your piece: we arrive fully insured, work discreetly on-site across Tampa and the surrounding communities, and leave you with something that feels new — backed by our workmanship guarantee.',
      'a1.v': 'Tampa Bay',
      'a1.l': 'Home base & service area',
      'a2.v': '7 / 7',
      'a2.l': 'Open every day, 8 AM – 8 PM',
      'a3.v': 'Guarantee',
      'a3.l': 'Every restoration is backed by our warranty',

      'gallery.eyebrow': 'Transformations',
      'gallery.title': 'Before & After Showcase',
      'gallery.sub': 'Real pieces, real results. Move across any card to compare.',
      'ba.before': 'Before',
      'ba.after': 'After',
      'ba.aria': 'Before and after comparison. Use left and right arrow keys.',
      'c1': 'Leather sofa · recolor & refinish',
      'c2': 'Classic rolled-arm sofa · full restoration',
      'c3': 'Luxury car seat · scratch & scuff repair',
      'c4': 'Automotive seat · crack repair & recolor',
      'c5': 'Vehicle seat · tear repair & color match',
      'c6': 'Club chair · restoration & recolor',

      'info.eyebrow': 'Good to know',
      'info.title': 'Everything before you ask',
      'info.sub': 'Tap any tile for details.',
      'i1.title': 'On-site visits',
      'i1.short': 'We come to you — home, office, marina or garage.',
      'i1.more': 'Most work is done at your location, so there is no need to move heavy furniture or a vehicle. For larger projects we may take a piece to our workshop and bring it back to you.',
      'i2.title': 'Pricing',
      'i2.short': 'Free photo quote. Fair price.',
      'i2.more': 'The cost depends on size, condition and material. Send us a photo and we will quote you — typically a fraction of what replacement would cost.',
      'i3.title': 'Timeline',
      'i3.short': 'Most repairs in a day.',
      'i3.more': 'Small repairs are often finished the same day. Recoloring and larger restorations take a few days, including curing. We confirm the schedule with your quote.',
      'i4.title': 'Color matching',
      'i4.short': 'Matched to your original.',
      'i4.more': 'We custom-mix professional-grade dyes to your existing color — or help you choose a new one — and test on a hidden spot first.',
      'i5.title': 'What we repair',
      'i5.short': 'Leather, vinyl and more.',
      'i5.more': 'Cracks, tears, burns, scuffs, fading, dye transfer and worn seams — on sofas, car seats, boat seats, bar stools, headboards and more.',
      'i6.title': 'Tampa Bay coverage',
      'i6.short': 'Tampa Bay and surrounding areas.',
      'i6.more': 'Tampa, St. Petersburg, Clearwater, Sarasota, Bradenton, Brandon, Wesley Chapel, Riverview — and nearby communities. Not sure if we cover you? Just ask.',

      'contact.eyebrow': 'Contact',
      'contact.title': 'Send a Photo – Get Your Quote Today',
      'contact.sub': 'Tell us about your piece. We reply with a free, no-obligation quote.',
      'form.name': 'Name',
      'form.name.ph': 'Your name',
      'form.phone': 'Phone',
      'form.phone.ph': '(813) 344-6686',
      'form.email': 'Email',
      'form.email.ph': 'you@email.com',
      'form.msg': 'Message',
      'form.msg.ph': 'Tell us about your leather or vinyl item — and attach a photo if you can',
      'form.file': 'Choose File',
      'form.nofile': 'No file chosen',
      'form.submit': 'Request My Free Quote',
      'form.prefer': 'Prefer to text? Send us an <a href="sms:+18133446686">SMS</a> or <a href="https://wa.me/18133446686" target="_blank" rel="noopener">WhatsApp</a> a photo.',
      'form.error': 'Please fill in your name, phone and a short message.',
      'form.sent': 'Your email app is opening. Attach your photo there — or text it to (813) 344-6686.',
      'form.mail.subject': 'Quote request',
      'form.mail.name': 'Name',
      'form.mail.phone': 'Phone',
      'form.mail.email': 'Email',
      'form.mail.city': 'City',
      'form.mail.photo': 'Photo to attach',

      'ci.call': 'Call or Text',
      'ci.email': 'Email',
      'ci.hours': 'Hours',
      'ci.hours.v': 'Monday – Sunday · 8 AM – 8 PM',
      'ci.address': 'Address',
      'ci.area': 'Service Area',
      'ci.area.v': 'Tampa Bay & surrounding areas',
      'city.tampa': 'Tampa',
      'city.stpete': 'St. Petersburg',
      'city.clearwater': 'Clearwater',
      'city.sarasota': 'Sarasota',
      'city.bradenton': 'Bradenton',
      'city.brandon': 'Brandon',
      'city.wesley': 'Wesley Chapel',
      'city.riverview': 'Riverview',

      'footer.tag': 'Restoring leather. Elevating spaces.',
      'footer.rights': 'All rights reserved.',
      'footer.proud': 'Proudly American · Serving Tampa Bay, Florida'
    },

    ru: {
      'meta.title': 'Leather & Upholstery Solutions — Тампа-Бэй',
      'meta.desc': 'Выездная реставрация, перекраска и перетяжка кожи и винила в Тампа-Бэй, Флорида.',
      'skip': 'Перейти к содержимому',

      'nav.services': 'Услуги',
      'nav.why': 'Почему мы',
      'nav.about': 'О нас',
      'nav.gallery': 'Трансформации',
      'nav.info': 'Важно знать',
      'nav.contact': 'Контакты',

      'hdr.call': 'Позвонить: (813) 344-6686',
      'hdr.lang': 'Язык',
      'hdr.theme': 'Переключить тему День / Ночь',
      'hdr.vibe': 'Включить атмосферную музыку',
      'hdr.menu': 'Меню',
      'vibe': 'Vibe',

      'hero.eyebrow': 'Тампа-Бэй · Выездная реставрация кожи и винила',
      'hero.title': 'Вечная кожа. Безупречное восстановление.',
      'hero.sub': 'Мебель, автомобильные и морские интерьеры — реставрация, перекраска и перетяжка с мастерством ателье, прямо у вас на месте.',
      'hero.cta': 'Получить бесплатный расчёт',
      'hero.cta2': 'Смотреть работы',

      'services.eyebrow': 'Что мы делаем',
      'services.title': 'Услуги',
      'services.sub': 'Шесть направлений — один стандарт: безупречно, долговечно и незаметно.',
      'badge.popular': 'ПОПУЛЯРНОЕ',
      's1.title': 'Реставрация мебели',
      's1.text': 'Диваны, кресла и модульные секции возвращают былое величие. Глубокая очистка, ремонт трещин и порезов, восстановление покрытия и ровного мягкого блеска — мы сохраняем характер изделия и стираем следы времени, выцветание и износ.',
      's2.title': 'Автомобильные интерьеры',
      's2.text': 'Сиденья, дверные панели, консоли и торпедо — как в автосалоне. Трещины, потёртости и выгоревшие поверхности восстанавливаются вручную с точным подбором цвета и фактурой, приятной на ощупь.',
      's3.title': 'Морской сегмент (катера и яхты)',
      's3.text': 'Специализированная реставрация обивки катеров и яхт и морского винила. Ремонт, обновление покрытия и защита от УФ, соли и влажности — чтобы кресла и диваны выглядели безупречно сезон за сезоном.',
      's4.title': 'Перекраска',
      's4.text': 'Свежий цвет, нанесённый безупречно. Мы готовим поверхность, подбираем оттенок и наносим профессиональные эластичные красители — чтобы оживить потёртую кожу или полностью сменить цвет. Результат ровный, стойкий и не похож на краску.',
      's5.title': 'Перетяжка',
      's5.text': 'Полноценная вторая жизнь вашего изделия. Перетяжка в премиальную кожу или морской винил: ручной раскрой и пошив по вашей выкройке, обновлённый наполнитель и чёткие аккуратные швы.',
      's6.title': 'Винил и экспресс-ремонт',
      's6.text': 'Порезы, прожоги, проколы, разошедшиеся швы и потёртости — устраняем быстро и незаметно, часто в тот же день и прямо у вас. Лучший способ спасти изделие, пока повреждение не разрослось.',

      'why.eyebrow': 'Почему выбирают нас',
      'why.title': 'Мастерство, которому можно доверять',
      'w1.title': 'Восстановить выгоднее, чем заменить',
      'w1.text': 'Верните любимую вещь за малую долю стоимости замены.',
      'w2.title': 'Лицензия и страховка',
      'w2.text': 'Полное страховое покрытие, включая сохранность вашего имущества (care & custody).',
      'w3.title': 'Точный подбор цвета',
      'w3.text': 'Профессиональные красители подбираются так, что переход незаметен.',
      'w4.title': 'Быстро и с выездом',
      'w4.text': 'Приезжаем к вам, когда это возможно.',

      'about.eyebrow': 'О нас',
      'about.title': 'Тихое совершенство из Тампа-Бэй.',
      'about.p1': 'Leather & Upholstery Solutions родилась из простой убеждённости: лучшие вещи вашего дома, автомобиля или яхты заслуживают реставрации, а не замены. Из нашей базы в Тампа-Бэй мы привозим дисциплину классического ателье к вашему порогу — и относимся к каждому дивану, сиденью и штурвальному креслу как к эксклюзивному заказу.',
      'about.p2': 'Всё делается вручную. Мы сами очищаем, готовим, ремонтируем, подбираем цвет и защищаем каждую поверхность, используя профессиональные материалы, которые выглядят благородно и служат годами. Мы никогда не торопим отделку и не довольствуемся «сойдёт» — если не безупречно, значит, работа не закончена.',
      'about.p3': 'Выездной формат — это никаких грузовиков, суеты и риска для вашего изделия: мы приезжаем застрахованными, работаем деликатно на месте по всей Тампе и окрестностям и оставляем вещь, которая ощущается как новая — с гарантией на нашу работу.',
      'a1.v': 'Тампа-Бэй',
      'a1.l': 'Наша база и зона обслуживания',
      'a2.v': '7 / 7',
      'a2.l': 'Работаем каждый день, 8:00 – 20:00',
      'a3.v': 'Гарантия',
      'a3.l': 'Каждая реставрация подкреплена нашей гарантией',

      'gallery.eyebrow': 'Трансформации',
      'gallery.title': 'До и После',
      'gallery.sub': 'Реальные изделия — реальный результат. Проведите курсором по карточке, чтобы сравнить.',
      'ba.before': 'До',
      'ba.after': 'После',
      'ba.aria': 'Сравнение до и после. Используйте стрелки влево и вправо.',
      'c1': 'Кожаный диван · перекраска и обновление покрытия',
      'c2': 'Классический диван с валиками · полная реставрация',
      'c3': 'Автокресло премиум-класса · устранение царапин и потёртостей',
      'c4': 'Автомобильное сиденье · ремонт трещин и перекраска',
      'c5': 'Сиденье авто · ремонт повреждения и подбор цвета',
      'c6': 'Клубное кресло · реставрация и перекраска',

      'info.eyebrow': 'Важно знать',
      'info.title': 'Ответы ещё до вопросов',
      'info.sub': 'Нажмите на плитку, чтобы узнать подробности.',
      'i1.title': 'Выезд на дом',
      'i1.short': 'Приезжаем сами — домой, в офис, на марину или в гараж.',
      'i1.more': 'Большая часть работ выполняется на вашей территории: не нужно перевозить тяжёлую мебель или автомобиль. Для крупных проектов мы можем забрать изделие в мастерскую и вернуть его вам.',
      'i2.title': 'Стоимость',
      'i2.short': 'Бесплатный расчёт по фото. Честная цена.',
      'i2.more': 'Цена зависит от размера, состояния и материала. Пришлите фото — и мы назовём стоимость, как правило, это малая часть цены замены.',
      'i3.title': 'Сроки',
      'i3.short': 'Большинство ремонтов — за один день.',
      'i3.more': 'Небольшой ремонт часто делаем в тот же день. Перекраска и крупная реставрация занимают несколько дней с учётом высыхания. Сроки согласуем вместе с расчётом.',
      'i4.title': 'Подбор цвета',
      'i4.short': 'В точности как оригинал.',
      'i4.more': 'Мы смешиваем профессиональные красители под ваш текущий цвет — или помогаем выбрать новый — и сначала проверяем на незаметном участке.',
      'i5.title': 'Что мы ремонтируем',
      'i5.short': 'Кожа, винил и не только.',
      'i5.more': 'Трещины, порезы, прожоги, потёртости, выцветание, перенос краски и изношенные швы — на диванах, автокреслах, сиденьях лодок, барных стульях, изголовьях и других изделиях.',
      'i6.title': 'География: Тампа-Бэй',
      'i6.short': 'Тампа-Бэй и окрестности.',
      'i6.more': 'Tampa, St. Petersburg, Clearwater, Sarasota, Bradenton, Brandon, Wesley Chapel, Riverview — и ближайшие города. Не уверены, работаем ли мы у вас? Просто спросите.',

      'contact.eyebrow': 'Контакты',
      'contact.title': 'Пришлите фото — получите расчёт сегодня',
      'contact.sub': 'Расскажите о вашем изделии. Мы ответим бесплатным расчётом без обязательств.',
      'form.name': 'Имя',
      'form.name.ph': 'Ваше имя',
      'form.phone': 'Телефон',
      'form.phone.ph': '(813) 344-6686',
      'form.email': 'Email',
      'form.email.ph': 'you@email.com',
      'form.msg': 'Сообщение',
      'form.msg.ph': 'Расскажите о вашем изделии из кожи или винила — и приложите фото, если можете',
      'form.file': 'Выбрать файл',
      'form.nofile': 'Файл не выбран',
      'form.submit': 'Получить бесплатный расчёт',
      'form.prefer': 'Удобнее текстом? Напишите нам в <a href="sms:+18133446686">SMS</a> или отправьте фото в <a href="https://wa.me/18133446686" target="_blank" rel="noopener">WhatsApp</a>.',
      'form.error': 'Пожалуйста, укажите имя, телефон и краткое сообщение.',
      'form.sent': 'Открывается ваша почтовая программа. Прикрепите фото там — или отправьте его SMS на (813) 344-6686.',
      'form.mail.subject': 'Запрос расчёта',
      'form.mail.name': 'Имя',
      'form.mail.phone': 'Телефон',
      'form.mail.email': 'Email',
      'form.mail.city': 'Город',
      'form.mail.photo': 'Фото для вложения',

      'ci.call': 'Позвоните или напишите',
      'ci.email': 'Email',
      'ci.hours': 'Часы работы',
      'ci.hours.v': 'Понедельник – Воскресенье · 8:00 – 20:00',
      'ci.address': 'Адрес',
      'ci.area': 'Зона обслуживания',
      'ci.area.v': 'Тампа-Бэй и окрестности',
      'city.tampa': 'Тампа',
      'city.stpete': 'Сент-Питерсберг',
      'city.clearwater': 'Клируотер',
      'city.sarasota': 'Сарасота',
      'city.bradenton': 'Брейдентон',
      'city.brandon': 'Брэндон',
      'city.wesley': 'Уэсли-Чапел',
      'city.riverview': 'Ривервью',

      'footer.tag': 'Возрождаем кожу. Возвышаем интерьеры.',
      'footer.rights': 'Все права защищены.',
      'footer.proud': 'С гордостью американские · Работаем в Тампа-Бэй, Флорида'
    }
  };

  var root = document.documentElement;
  var currentLang = 'en';
  var selectedCity = '';

  function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) || translations.en[key] || key;
  }

  /* ---------- Language ---------- */
  function applyLang(lang) {
    if (!translations[lang]) lang = 'en';
    currentLang = lang;
    root.setAttribute('lang', lang);
    store.set('lus-lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(function (el) { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) { el.innerHTML = t(el.dataset.i18nHtml); });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) { el.setAttribute('placeholder', t(el.dataset.i18nPh)); });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });

    document.title = t('meta.title');
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', t('meta.desc'));

    document.querySelectorAll('.lang-switch [data-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
    });

    // dynamic bits that depend on state
    var file = document.getElementById('f-file');
    if (file && !file.files.length) document.getElementById('fileName').textContent = t('form.nofile');
    var status = document.getElementById('formStatus');
    if (status) { status.textContent = ''; status.classList.remove('error'); }
  }

  document.querySelectorAll('.lang-switch [data-lang]').forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.dataset.lang); });
  });

  var savedLang = store.get('lus-lang');
  var initialLang = savedLang || ((navigator.language || '').toLowerCase().indexOf('ru') === 0 ? 'ru' : 'en');
  applyLang(initialLang);

  /* ---------- Theme ---------- */
  var themeMeta = document.querySelector('meta[name="theme-color"]');
  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    store.set('lus-theme', theme);
    if (themeMeta) themeMeta.setAttribute('content', theme === 'day' ? '#FBFBFD' : '#0A0A0A');
  }
  applyTheme(root.getAttribute('data-theme') === 'day' ? 'day' : 'night');
  document.getElementById('themeToggle').addEventListener('click', function () {
    applyTheme(root.getAttribute('data-theme') === 'day' ? 'night' : 'day');
  });

  /* ---------- Header: scrolled state, mobile menu, active link ---------- */
  var header = document.querySelector('.site-header');
  function onScroll() { header.classList.toggle('scrolled', window.scrollY > 40); }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  function closeMenu() { nav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
  burger.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
  });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });

  if ('IntersectionObserver' in window) {
    var links = {};
    nav.querySelectorAll('a').forEach(function (a) { links[a.getAttribute('href').slice(1)] = a; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && links[en.target.id]) {
          Object.keys(links).forEach(function (k) { links[k].classList.remove('active'); });
          links[en.target.id].classList.add('active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(links).forEach(function (id) { var s = document.getElementById(id); if (s) spy.observe(s); });
  }

  /* ---------- Audio "Vibe" ---------- */
  var audio = document.getElementById('bgAudio');
  var vibe = document.getElementById('vibeBtn');
  audio.volume = 0.45;
  function setVibe(on) { vibe.setAttribute('aria-pressed', String(on)); }
  vibe.addEventListener('click', function () {
    if (audio.paused) {
      var p = audio.play();
      setVibe(true);
      if (p && p.catch) p.catch(function () { setVibe(false); });
    } else {
      audio.pause();
      setVibe(false);
    }
  });
  audio.addEventListener('pause', function () { setVibe(false); });
  audio.addEventListener('play', function () { setVibe(true); });

  /* ---------- Hero video: respect reduced motion ---------- */
  var heroVideo = document.querySelector('.hero-video');
  if (heroVideo && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    heroVideo.removeAttribute('autoplay');
    heroVideo.pause();
  }

  /* ---------- Scroll reveal ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- Cursor spotlight on cards ---------- */
  document.querySelectorAll('.spot').forEach(function (el) {
    el.addEventListener('pointermove', function (e) {
      var r = el.getBoundingClientRect();
      el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      el.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });

  /* ---------- Before / After compare ---------- */
  document.querySelectorAll('.ba').forEach(function (ba) {
    function setPos(p) {
      p = Math.max(0, Math.min(100, p));
      ba.style.setProperty('--pos', p + '%');
      ba.setAttribute('aria-valuenow', String(Math.round(p)));
    }
    function fromEvent(e) {
      var r = ba.getBoundingClientRect();
      setPos(((e.clientX - r.left) / r.width) * 100);
    }
    ba.addEventListener('pointerenter', function (e) { ba.classList.add('tracking'); fromEvent(e); });
    ba.addEventListener('pointermove', function (e) { ba.classList.add('tracking'); fromEvent(e); });
    ba.addEventListener('pointerleave', function () {
      ba.classList.remove('tracking');
      setPos(50);
    });
    ba.addEventListener('keydown', function (e) {
      var cur = parseFloat(ba.getAttribute('aria-valuenow')) || 50;
      if (e.key === 'ArrowLeft') { ba.classList.remove('tracking'); setPos(cur - 8); e.preventDefault(); }
      if (e.key === 'ArrowRight') { ba.classList.remove('tracking'); setPos(cur + 8); e.preventDefault(); }
    });
  });

  /* ---------- Bento tiles ---------- */
  document.querySelectorAll('.tile').forEach(function (tile) {
    function toggle() {
      var open = tile.classList.toggle('open');
      tile.setAttribute('aria-expanded', String(open));
    }
    tile.addEventListener('click', toggle);
    tile.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
  });

  /* ---------- City chips ---------- */
  var chipWrap = document.getElementById('cityChips');
  chipWrap.addEventListener('click', function (e) {
    var chip = e.target.closest('.chip');
    if (!chip) return;
    var wasOn = chip.getAttribute('aria-pressed') === 'true';
    chipWrap.querySelectorAll('.chip').forEach(function (c) { c.setAttribute('aria-pressed', 'false'); });
    chip.setAttribute('aria-pressed', String(!wasOn));
    selectedCity = wasOn ? '' : chip.dataset.city;
  });

  /* ---------- Form ---------- */
  var form = document.getElementById('quoteForm');
  var fileInput = document.getElementById('f-file');
  var fileName = document.getElementById('fileName');
  var status = document.getElementById('formStatus');

  fileInput.addEventListener('change', function () {
    fileName.textContent = fileInput.files.length ? fileInput.files[0].name : t('form.nofile');
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = form.elements.name.value.trim();
    var phone = form.elements.phone.value.trim();
    var email = form.elements.email.value.trim();
    var message = form.elements.message.value.trim();

    ['name', 'phone', 'message'].forEach(function (n) {
      var el = form.elements[n];
      el.closest('.field').classList.toggle('invalid', !el.value.trim());
    });

    if (!name || !phone || !message) {
      status.textContent = t('form.error');
      status.classList.add('error');
      return;
    }

    var lines = [
      t('form.mail.name') + ': ' + name,
      t('form.mail.phone') + ': ' + phone
    ];
    if (email) lines.push(t('form.mail.email') + ': ' + email);
    if (selectedCity) lines.push(t('form.mail.city') + ': ' + selectedCity);
    if (fileInput.files.length) lines.push(t('form.mail.photo') + ': ' + fileInput.files[0].name);
    lines.push('', message);

    var href = 'mailto:leather.solutions.bay@gmail.com' +
      '?subject=' + encodeURIComponent(t('form.mail.subject') + ' — ' + name) +
      '&body=' + encodeURIComponent(lines.join('\n'));

    status.textContent = t('form.sent');
    status.classList.remove('error');
    window.location.href = href;
  });

  form.addEventListener('input', function (e) {
    var f = e.target.closest('.field');
    if (f) f.classList.remove('invalid');
  });

  /* ---------- AI Concierge (demo mode) ---------- */
  (function () {
    var widget = document.getElementById('aiWidget');
    var fab = document.getElementById('aiFab');
    var panel = document.getElementById('aiPanel');
    var feed = document.getElementById('aiFeed');
    var aiForm = document.getElementById('aiForm');
    var aiText = document.getElementById('aiText');
    var aiFile = document.getElementById('aiFile');
    var busy = false;

    /* Neural background: drifting glowing particles + faint synapse lines (runs only while open) */
    var cvs = document.getElementById('aiNeural');
    var cx = cvs.getContext('2d');
    var pts = [], raf = 0, W = 0, H = 0;
    var still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    function sizeNeural() {
      var d = Math.min(window.devicePixelRatio || 1, 2);
      W = panel.clientWidth; H = panel.clientHeight;
      cvs.width = W * d; cvs.height = H * d;
      cx.setTransform(d, 0, 0, d, 0, 0);
      var n = Math.round(W * H / 6500);
      while (pts.length < n) pts.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .22, vy: (Math.random() - .5) * .22, r: .7 + Math.random() * 1.7, p: Math.random() * 6.28, h: Math.random() });
      pts.length = n;
    }
    function frame(t) {
      cx.clearRect(0, 0, W, H);
      var i, j, a, b, dx, dy, dist, k, col;
      for (i = 0; i < pts.length; i++) {
        a = pts[i];
        a.x += a.vx; a.y += a.vy;
        if (a.x < -10) a.x = W + 10; else if (a.x > W + 10) a.x = -10;
        if (a.y < -10) a.y = H + 10; else if (a.y > H + 10) a.y = -10;
        for (j = i + 1; j < pts.length; j++) {
          b = pts[j]; dx = a.x - b.x; dy = a.y - b.y; dist = dx * dx + dy * dy;
          if (dist < 9600) {
            k = (1 - dist / 9600) * .22;
            cx.strokeStyle = 'rgba(214,182,122,' + k + ')';
            cx.lineWidth = .6;
            cx.beginPath(); cx.moveTo(a.x, a.y); cx.lineTo(b.x, b.y); cx.stroke();
          }
        }
      }
      for (i = 0; i < pts.length; i++) {
        a = pts[i];
        k = .35 + .65 * (.5 + .5 * Math.sin(t / 1400 + a.p));      // slow breathing glow
        col = (a.h + t / 24000) % 1 < .5 ? '226,196,132' : '150,190,255'; // sand <-> soft ice, slowly shifting
        cx.fillStyle = 'rgba(' + col + ',' + (k * .85) + ')';
        cx.shadowColor = 'rgba(' + col + ',.9)'; cx.shadowBlur = 9;
        cx.beginPath(); cx.arc(a.x, a.y, a.r, 0, 6.2832); cx.fill();
      }
      cx.shadowBlur = 0;
      if (!still) raf = requestAnimationFrame(frame);
    }
    function neural(on) {
      cancelAnimationFrame(raf);
      if (!on) return;
      sizeNeural();
      raf = requestAnimationFrame(frame);
    }
    window.addEventListener('resize', function () { if (widget.classList.contains('open')) sizeNeural(); });

    function setOpen(open) {
      neural(open);
      widget.classList.toggle('open', open);
      fab.setAttribute('aria-expanded', String(open));
      panel.setAttribute('aria-hidden', String(!open));
      if (open) setTimeout(function () { aiText.focus({ preventScroll: true }); }, 500);
    }
    fab.addEventListener('click', function () { setOpen(!widget.classList.contains('open')); });
    document.getElementById('aiClose').addEventListener('click', function () { setOpen(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });

    function toBottom() { feed.scrollTop = feed.scrollHeight; }
    function add(html, cls) {
      var el = document.createElement('div');
      el.className = cls;
      el.innerHTML = html;
      feed.appendChild(el);
      requestAnimationFrame(toBottom);
      return el;
    }
    function esc(s) { return s.replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

    var steps = ['Analyzing leather surface', 'Estimating wear & material', 'Matching color profile', 'Locating nearest technician'];

    function run(userHtml, firstStep) {
      if (busy) return;
      busy = true;
      add('<p>' + userHtml + '</p>', 'ai-msg user');
      var scan = add('<span class="lbl"></span><div class="bar"></div>', 'ai-scan');
      var lbl = scan.querySelector('.lbl');
      var list = [firstStep || steps[0]].concat(steps.filter(function (s) { return s !== firstStep; })).slice(0, 3);
      var n = 0;
      lbl.textContent = list[0] + '…';
      var tick = setInterval(function () { n++; if (n < list.length) { lbl.textContent = list[n] + '…'; toBottom(); } }, 900);
      setTimeout(function () {
        clearInterval(tick);
        scan.classList.add('done');
        add('<p><b>🔒 Neural Core Locked:</b> Full AI multi-agent integration and automated photo diagnostics are exclusively unlocked in the production release.</p>' +
            '<a href="#contact" class="ai-connect">Connect to Activate<svg class="ic"><use href="#i-arrow"/></svg></a>', 'ai-lock');
        busy = false;
      }, 2900);
    }

    feed.addEventListener('click', function (e) {
      var chip = e.target.closest('.ai-chip');
      if (chip) { run(esc(chip.textContent), chip.dataset.scan); return; }
      if (e.target.closest('.ai-connect')) setOpen(false);
    });
    aiForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var v = aiText.value.trim();
      if (!v) return;
      aiText.value = '';
      run(esc(v));
    });
    aiFile.addEventListener('change', function () {
      if (!aiFile.files.length) return;
      var name = aiFile.files[0].name;
      aiFile.value = '';
      run('📷 ' + esc(name), 'Analyzing leather surface');
    });
  })();

  /* ---------- Footer year ---------- */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
