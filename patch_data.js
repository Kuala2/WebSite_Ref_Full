const fs = require('fs');

let data = fs.readFileSync('src/constants/data.ts', 'utf8');

// 1. Fix Phone just in case
data = data.replace(/8 \(831\) 000-00-00/g, '8 (831) 283-54-12');

// 2. Fix Services 'okrashivanie' (Chanel -> hair coloring)
data = data.replace(
  /"https:\/\/images\.unsplash\.com\/photo-1595425970377-c9703cf48b6d\?auto=format&fit=crop&q=80&w=800"/,
  '"https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=800"'
);

// 3. Fix Masters (6 neutral studio portraits)
// Yulia
data = data.replace(
  /"https:\/\/images\.unsplash\.com\/photo-1580618672591-eb180b1a973f\?auto=format&fit=crop&q=80&w=600"/,
  '"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600"'
);
// Ekaterina
data = data.replace(
  /"https:\/\/images\.unsplash\.com\/photo-1531746020798-e6953c6e8e04\?auto=format&fit=crop&q=80&w=600"/,
  '"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600"'
);
// Kristina
data = data.replace(
  /"https:\/\/images\.unsplash\.com\/photo-1554151228-14d9def656e4\?auto=format&fit=crop&q=80&w=600"/,
  '"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=600"'
);
// Alena (already 1573496359142)
// Anastasia (already 1580489944761)
// Olga (already 1554727242)

fs.writeFileSync('src/constants/data.ts', data, 'utf8');
console.log('data.ts bug fixes applied!');
