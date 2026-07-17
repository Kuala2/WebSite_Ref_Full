const fs = require('fs');

let data = fs.readFileSync('src/constants/data.ts', 'utf8');

// Clear all unsplash images
data = data.replace(/"https:\/\/images\.unsplash\.com\/[^"]+"/g, (match) => {
  // Let's manually replace them based on context in the string
  return match;
});

// Instead of doing it dynamically with regex, let's just write the specific replacements
// Wait, regex might be easier if I just replace all `image: "https...unsplash..."` with the specific paths based on the surrounding block.

// TOP SERVICES & SERVICES_DATA
data = data.replace(/slug: "okrashivanie"[\s\S]*?image: "[^"]+"/g, 'slug: "okrashivanie",\n    image: "/images/service-color.jpg"');
data = data.replace(/title: "Сложное окрашивание",[\s\S]*?image: "[^"]+"/g, 'title: "Сложное окрашивание",\n    description: "AirTouch, шатуш, балаяж и идеальный тотальный блонд без повреждения структуры волос.",\n    priceFrom: "6 500 ₽",\n    image: "/images/service-color.jpg"');
data = data.replace(/title: "Окрашивание волос",[\s\S]*?image: "[^"]+"/g, 'title: "Окрашивание волос",\n    slug: "okrashivanie",\n    description: "Сложные техники AirTouch, балаяж, шатуш, тотальный блонд и бережный уход за волосами от ведущих брендов.",\n    longDescription: "Специалисты колористики салона «Стенс» работают на премиальных брендах Wella Professionals и Lebel. Мы бережно относимся к здоровью ваших волос, поэтому любое осветление сопровождается защитными комплексами Plex. Специализируемся на исправлении сложных случаев (пятна, полосы, нежелательные оттенки) и выводе из темного бытового красителя в чистый блонд.",\n    image: "/images/service-color.jpg"');

data = data.replace(/title: "Стрижки и укладки",[\s\S]*?image: "[^"]+"/g, 'title: "Стрижки и укладки",\n    description: "Умные стрижки, которые не требуют долгой укладки, и стильные вечерние образы.",\n    priceFrom: "1 500 ₽",\n    image: "/images/service-haircut.jpg"');
data = data.replace(/title: "Стрижки и уход",[\s\S]*?image: "[^"]+"/g, 'title: "Стрижки и уход",\n    slug: "strizhki",\n    description: "Умные стрижки, которые не требуют долгой укладки, и стильные вечерние образы.",\n    longDescription: "Наши мастера создают персонализированные стрижки с учетом анатомии лица и структуры волос. Основной принцип — «умная стрижка», которая отлично лежит даже после домашней сушки феном без брашинга.",\n    image: "/images/service-haircut.jpg"');

data = data.replace(/title: "Маникюр и педикюр",[\s\S]*?image: "[^"]+"/g, 'title: "Маникюр и педикюр",\n    description: "Безупречная обработка, выравнивание ногтевой пластины и стойкое покрытие гель-лаком.",\n    priceFrom: "1 900 ₽",\n    image: "/images/service-nails.jpg"');
data = data.replace(/title: "Ногтевой сервис",[\s\S]*?image: "[^"]+"/g, 'title: "Ногтевой сервис",\n    slug: "manikyur-pedikyur",\n    description: "Безупречная аппаратная и комбинированная обработка, выравнивание ногтевой пластины и стойкое покрытие.",\n    longDescription: "Стерильность — наш главный приоритет. Все инструменты проходят 4-ступенчатую обработку по нормам СанПиН. Мы используем только одноразовые пилки, бафы и апельсиновые палочки. Наши мастера виртуозно владеют техникой аппаратного маникюра без порезов и смарт-педикюра для идеальной гладкости стоп.",\n    image: "/images/service-nails.jpg"');

data = data.replace(/title: "Перманентный макияж",[\s\S]*?image: "[^"]+"/g, 'title: "Перманентный макияж",\n    description: "Естественный перманент бровей, губ и межресничного пространства на срок до 2 лет.",\n    priceFrom: "9 000 ₽",\n    image: "/images/service-brows.jpg"');
data = data.replace(/title: "Брови и Перманент",[\s\S]*?image: "[^"]+"/g, 'title: "Брови и Перманент",\n    slug: "permanent",\n    description: "Пудровые брови, акварельные губы, межресничка. Оформление бровей и ламинирование ресниц.",\n    longDescription: "Перманентный макияж в салоне «Стенс» — это ювелирная работа с вашей естественной красотой. Мы против неестественных плотных «татуировок» на лице. Алена Волкова создает деликатные теневые растушевки (пудровое напыление бровей) и акварельные бесконтурные губы. Используем только гипоаллергенные сертифицированные пигменты премиум-класса. Также предлагаем услуги бровиста: архитектура, окрашивание и ламинирование.",\n    image: "/images/service-brows.jpg"');

// MASTERS
data = data.replace(/name: "Юлия Морозова",[\s\S]*?image: "[^"]+"/g, 'name: "Юлия Морозова",\n    role: "Ведущий стилист-колорист",\n    experience: "11 лет",\n    bio: "Эксперт в сложных техниках окрашивания: AirTouch, шатуш и исправлении чужих ошибок. Сделает безупречный блонд, сохранив качество волос.",\n    image: "/images/team-1.jpg"');
data = data.replace(/name: "Екатерина Соколова",[\s\S]*?image: "[^"]+"/g, 'name: "Екатерина Соколова",\n    role: "Топ-стилист, парикмахер",\n    experience: "9 лет",\n    bio: "Создает умные женские стрижки, идеально подходящие под ваш тип лица и текстуру волос. Специалист по уходам и восстановлению Lebel.",\n    image: "/images/team-2.jpg"');
data = data.replace(/name: "Кристина Лебедева",[\s\S]*?image: "[^"]+"/g, 'name: "Кристина Лебедева",\n    role: "Мастер ногтевого сервиса",\n    experience: "8 лет",\n    bio: "Специализируется на чистом аппаратном маникюре, идеальных бликах и смарт-педикюре. Воплотит любой дизайн от минимализма до френча.",\n    image: "/images/team-3.jpg"');
data = data.replace(/name: "Алена Волкова",[\s\S]*?image: "[^"]+"/g, 'name: "Алена Волкова",\n    role: "Мастер перманентного макияжа и бровист",\n    experience: "8 лет",\n    bio: "Сторонница естественного результата. Делает воздушный перманент бровей в пудровой технике и сочные акварельные губы без эффекта пластилина.",\n    image: "/images/team-4.jpg"');
data = data.replace(/name: "Анастасия Новикова",[\s\S]*?image: "[^"]+"/g, 'name: "Анастасия Новикова",\n    role: "Стилист по волосам",\n    experience: "10 лет",\n    bio: "Мастер вечерних причесок и укладок любой сложности. Знает все секреты объема, который держится весь день и всю ночь.",\n    image: "/images/team-5.jpg"');
data = data.replace(/name: "Ольга Смирнова",[\s\S]*?image: "[^"]+"/g, 'name: "Ольга Смирнова",\n    role: "Топ-мастер ногтевого сервиса",\n    experience: "10 лет",\n    bio: "Профессионал в моделировании ногтей и решении эстетических проблем. Работает быстро и качественно, экономит ваше время.",\n    image: "/images/team-6.jpg"');

// GALLERY
data = data.replace(/title: "AirTouch окрашивание",[\s\S]*?image: "[^"]+"/g, 'title: "AirTouch окрашивание",\n    category: "Окрашивание",\n    image: "/images/service-color.jpg"');
data = data.replace(/title: "Тотальный холодный блонд",[\s\S]*?image: "[^"]+"/g, 'title: "Тотальный холодный блонд",\n    category: "Окрашивание",\n    image: "/images/service-color.jpg"');
data = data.replace(/title: "Мужская стрижка кроп",[\s\S]*?image: "[^"]+"/g, 'title: "Мужская стрижка кроп",\n    category: "Стрижки",\n    image: "/images/work-1.jpg"');
data = data.replace(/title: "Нюдовый минимализм",[\s\S]*?image: "[^"]+"/g, 'title: "Нюдовый минимализм",\n    category: "Маникюр",\n    image: "/images/service-nails.jpg"');
data = data.replace(/title: "Свадебный образ",[\s\S]*?image: "[^"]+"/g, 'title: "Свадебный образ",\n    category: "Укладки",\n    image: "/images/work-2.jpg"');
data = data.replace(/title: "Пудровые брови",[\s\S]*?image: "[^"]+"/g, 'title: "Пудровые брови",\n    category: "Перманент",\n    image: "/images/service-brows.jpg"');
data = data.replace(/title: "Ламинирование ресниц с ботоксом",[\s\S]*?image: "[^"]+"/g, 'title: "Ламинирование ресниц с ботоксом",\n    category: "Брови и ресницы",\n    image: "/images/work-3.jpg"');

fs.writeFileSync('src/constants/data.ts', data, 'utf8');
console.log('Images in data.ts migrated successfully');
