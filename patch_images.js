const fs = require('fs');

let data = fs.readFileSync('src/constants/data.ts', 'utf8');

// 1. TOP_SERVICES: Сложное окрашивание
data = data.replace(
  /"https:\/\/images\.unsplash\.com\/photo-1522337360788-8b13dee7a37e\?auto=format&fit=crop&q=80&w=800"/,
  '"https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=800"'
);

// 2. MASTERS: Alena (1502823403499-6ccfcf4fb453)
data = data.replace(
  /"https:\/\/images\.unsplash\.com\/photo-1502823403499-6ccfcf4fb453\?auto=format&fit=crop&q=80&w=600"/,
  '"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"'
);

// 3. MASTERS: Anastasia (1491349174775-aaafddd81942)
data = data.replace(
  /"https:\/\/images\.unsplash\.com\/photo-1491349174775-aaafddd81942\?auto=format&fit=crop&q=80&w=600"/,
  '"https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600"'
);

// 4. MASTERS: Olga (1544005313-94ddf0286df2)
data = data.replace(
  /"https:\/\/images\.unsplash\.com\/photo-1544005313-94ddf0286df2\?auto=format&fit=crop&q=80&w=600"/,
  '"https://images.unsplash.com/photo-1554727242-741c14fa561c?auto=format&fit=crop&q=80&w=600"'
);

// 5. SERVICES_DATA: Брови и Перманент (1616683693504-3ea7e9ad6fec)
data = data.replace(
  /"https:\/\/images\.unsplash\.com\/photo-1616683693504-3ea7e9ad6fec\?auto=format&fit=crop&q=80&w=800"/,
  '"https://images.unsplash.com/photo-1599580456185-1d02c918a099?auto=format&fit=crop&q=80&w=800"'
);

// 6. GALLERY_WORKS: AirTouch окрашивание (1522337360788-8b13dee7a37e)
data = data.replace(
  /"https:\/\/images\.unsplash\.com\/photo-1522337360788-8b13dee7a37e\?auto=format&fit=crop&q=80&w=600"/,
  '"https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=600"'
);

// 7. GALLERY_WORKS: Тотальный холодный блонд (1595425970377-c9703cf48b6d)
data = data.replace(
  /"https:\/\/images\.unsplash\.com\/photo-1595425970377-c9703cf48b6d\?auto=format&fit=crop&q=80&w=600"/,
  '"https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=600"'
);

// 8. GALLERY_WORKS: Мужская стрижка кроп (1621605815971-fbc98d665033)
data = data.replace(
  /"https:\/\/images\.unsplash\.com\/photo-1621605815971-fbc98d665033\?auto=format&fit=crop&q=80&w=600"/,
  '"https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=600"'
);

// 9. GALLERY_WORKS: Нюдовый минимализм (1519014816548-bf5fe059798b)
data = data.replace(
  /"https:\/\/images\.unsplash\.com\/photo-1519014816548-bf5fe059798b\?auto=format&fit=crop&q=80&w=600"/,
  '"https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=600"'
);

// 10. GALLERY_WORKS: Пудровые брови (1512496015851-a90fb38ba796)
data = data.replace(
  /"https:\/\/images\.unsplash\.com\/photo-1512496015851-a90fb38ba796\?auto=format&fit=crop&q=80&w=600"/,
  '"https://images.unsplash.com/photo-1599580456185-1d02c918a099?auto=format&fit=crop&q=80&w=600"'
);

// 11. GALLERY_WORKS: Ламинирование ресниц (1597223557154-721c1cecc4b0)
data = data.replace(
  /"https:\/\/images\.unsplash\.com\/photo-1597223557154-721c1cecc4b0\?auto=format&fit=crop&q=80&w=600"/,
  '"https://images.unsplash.com/photo-1583001931096-959e9a5a62fe?auto=format&fit=crop&q=80&w=600"'
);

fs.writeFileSync('src/constants/data.ts', data, 'utf8');
console.log('Images updated in data.ts!');
