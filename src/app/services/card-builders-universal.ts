export interface CardData { name: string; message?: string; sender?: string; }

export function buildElegantLetter(data: CardData): string {
  const msg = data.message || 'Wishing you a day filled with happiness and a year filled with joy.';
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Georgia","Times New Roman",serif;background:#e8e4df;display:flex;justify-content:center;align-items:center;min-height:100vh}
.card{position:relative;width:600px;height:900px;background:#faf7f2;overflow:hidden;color:#3a3228;display:flex;flex-direction:column;align-items:center;padding:60px 50px}
.card::before{content:"";position:absolute;top:20px;left:20px;right:20px;bottom:20px;border:1px solid #c9b99a;border-radius:4px;pointer-events:none}
.card::after{content:"";position:absolute;top:30px;left:30px;right:30px;bottom:30px;border:1px solid #ddd5c5;border-radius:2px;pointer-events:none}
.ornament-top{font-size:48px;color:#c9b99a;margin-bottom:20px;letter-spacing:12px}
.greeting{font-size:14px;text-transform:uppercase;letter-spacing:6px;color:#a0937d;margin-top:40px}
.quote-mark{font-size:80px;color:#c9b99a;line-height:0.6;margin:20px 0}
.title{font-size:42px;font-weight:700;color:#3a3228;margin:10px 0;letter-spacing:2px}
.name{font-size:36px;color:#8b7355;margin:10px 0;font-style:italic}
.message{font-size:18px;line-height:1.8;text-align:center;color:#5a5042;margin:20px 0 30px;max-width:420px;font-style:italic}
.divider{width:120px;height:1px;background:#c9b99a;margin:10px 0}
.sender{position:absolute;bottom:80px;font-size:16px;color:#8b7355;letter-spacing:2px}
.footer{position:absolute;bottom:50px;font-size:12px;color:#c9b99a;letter-spacing:4px;text-transform:uppercase}
</style></head><body>
<div class="card">
  <div class="ornament-top">✦ ✦ ✦</div>
  <div class="greeting">A Special Message For You</div>
  <div class="divider"></div>
  <div class="quote-mark">\u201C</div>
  <div class="title">Happy Birthday</div>
  <div class="name">${data.name}</div>
  <div class="divider"></div>
  <div class="quote-mark">\u201D</div>
  <div class="message">${msg}</div>
  <div class="sender">With love, ${data.sender || 'Me'}</div>
  <div class="footer">✦ With Warmest Wishes ✦</div>
</div>
</body></html>`;
}

export function buildCelebrationClassic(data: CardData): string {
  const msg = data.message || 'Hope your day is filled with love, laughter, and everything that makes you happiest!';
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Segoe UI","Roboto",Arial,sans-serif;background:#2a2a3a;display:flex;justify-content:center;align-items:center;min-height:100vh}
.card{position:relative;width:600px;height:900px;background:#3f5166;overflow:hidden;color:white;display:flex;flex-direction:column;align-items:center}
.confetti{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}
.confetti-dot{position:absolute;border-radius:50%}
.cd1{width:10px;height:10px;background:#ff6b6b;top:80px;left:60px}
.cd2{width:8px;height:8px;background:#ffd93d;top:120px;right:80px}
.cd3{width:12px;height:12px;background:#6bcb77;top:200px;left:120px}
.cd4{width:9px;height:9px;background:#4d96ff;top:160px;right:140px}
.cd5{width:11px;height:11px;background:#ff6b6b;top:280px;right:60px}
.cd6{width:7px;height:7px;background:#ffd93d;top:320px;left:80px}
.cd7{width:10px;height:10px;background:#c084fc;top:100px;left:280px}
.cd8{width:8px;height:8px;background:#fb923c;top:240px;left:400px}
.cd9{width:12px;height:12px;background:#6bcb77;top:50px;right:200px}
.cd10{width:9px;height:9px;background:#f472b6;top:350px;right:250px}
.balloons{position:absolute;top:40px;width:100%;display:flex;justify-content:center;gap:40px}
.balloon{width:50px;height:65px;border-radius:50% 50% 50% 50%;position:relative}
.balloon::after{content:"";position:absolute;bottom:-40px;left:50%;transform:translateX(-50%);width:2px;height:40px;background:rgba(255,255,255,0.4)}
.balloon::before{content:"▾";position:absolute;bottom:-50px;left:50%;transform:translateX(-50%);font-size:10px;color:rgba(255,255,255,0.5)}
.b1{background:#ff6b6b;transform:rotate(-8deg)}
.b2{background:#ffd93d;transform:rotate(5deg)}
.b3{background:#6bcb77;transform:rotate(-3deg)}
.b4{background:#4d96ff;transform:rotate(7deg)}
.b5{background:#c084fc;transform:rotate(-5deg)}
.subtitle{position:absolute;top:260px;font-size:18px;letter-spacing:6px;text-transform:uppercase;color:#ffd93d}
.title{position:absolute;top:300px;font-size:54px;font-weight:800;text-align:center;line-height:1.1}
.title span{display:block;font-size:28px;font-weight:400;margin-top:8px;letter-spacing:2px}
.name{position:absolute;top:420px;font-size:40px;color:#ffd93d;font-weight:700}
.message{position:absolute;top:490px;font-size:18px;text-align:center;max-width:440px;line-height:1.7;color:rgba(255,255,255,0.9)}
.sender{position:absolute;bottom:60px;font-size:16px;color:rgba(255,255,255,0.7);letter-spacing:2px}
</style></head><body>
<div class="card">
  <div class="confetti">
    <div class="confetti-dot cd1"></div><div class="confetti-dot cd2"></div>
    <div class="confetti-dot cd3"></div><div class="confetti-dot cd4"></div>
    <div class="confetti-dot cd5"></div><div class="confetti-dot cd6"></div>
    <div class="confetti-dot cd7"></div><div class="confetti-dot cd8"></div>
    <div class="confetti-dot cd9"></div><div class="confetti-dot cd10"></div>
  </div>
  <div class="balloons">
    <div class="balloon b1"></div>
    <div class="balloon b2"></div>
    <div class="balloon b3"></div>
    <div class="balloon b4"></div>
    <div class="balloon b5"></div>
  </div>
  <div class="subtitle">Hip! Hip! Hurray!</div>
  <div class="title">Happy Birthday<span>to a wonderful person!</span></div>
  <div class="name">${data.name}</div>
  <div class="message">${msg}</div>
  <div class="sender">From ${data.sender || 'Me'} 🎉</div>
</div>
</body></html>`;
}

export function buildFloralCelebration(data: CardData): string {
  const msg = data.message || 'May your birthday be as beautiful and wonderful as you are!';
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Segoe UI","Roboto",Arial,sans-serif;background:#eef6f3;display:flex;justify-content:center;align-items:center;min-height:100vh}
.card{position:relative;width:600px;height:900px;background:#ffffff;overflow:hidden;color:#2d4a3e;display:flex;flex-direction:column;align-items:center;padding:40px}
.corner{position:absolute;font-size:40px;opacity:0.8}
.tl{top:20px;left:20px}.tr{top:20px;right:20px}.bl{bottom:20px;left:20px}.br{bottom:20px;right:20px}
.badge{background:#f8b4c8;color:#fff;padding:12px 36px;border-radius:30px;font-size:14px;text-transform:uppercase;letter-spacing:4px;margin-top:60px;font-weight:600}
.title{font-size:48px;font-weight:300;color:#2d4a3e;margin:30px 0 8px;letter-spacing:1px}
.name{font-size:36px;color:#e88fa0;font-weight:600;margin:8px 0}
.floral-line{display:flex;align-items:center;gap:15px;margin:20px 0}
.floral-line::before,.floral-line::after{content:"";width:60px;height:1px;background:#b8d4c8}
.floral-emoji{font-size:20px}
.message{font-size:17px;line-height:1.8;text-align:center;color:#5a7a6a;max-width:420px;margin:10px 0 30px}
.leaves{position:absolute;bottom:80px;font-size:14px;color:#a8c8b8;letter-spacing:8px}
.sender{position:absolute;bottom:40px;font-size:15px;color:#8bada0;letter-spacing:2px}
</style></head><body>
<div class="card">
  <div class="corner tl">🌷</div>
  <div class="corner tr">🌸</div>
  <div class="corner bl">🌹</div>
  <div class="corner br">🌺</div>
  <div class="badge">Celebrating You</div>
  <div class="title">Happy Birthday</div>
  <div class="name">${data.name}</div>
  <div class="floral-line"><span class="floral-emoji">🌿</span></div>
  <div class="message">${msg}</div>
  <div class="leaves">🍃 🌿 🍃 🌿 🍃</div>
  <div class="sender">With love, ${data.sender || 'Me'} 💐</div>
</div>
</body></html>`;
}

export function buildModernMinimal(data: CardData): string {
  const msg = data.message || 'Here\u2019s to another amazing year of being you. Cheers!';
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Segoe UI","Roboto","Helvetica Neue",sans-serif;background:#e8e8e8;display:flex;justify-content:center;align-items:center;min-height:100vh}
.card{position:relative;width:600px;height:900px;background:#ffffff;overflow:hidden;color:#2d2d2d;display:flex;flex-direction:column;align-items:center}
.top-band{width:100%;height:200px;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);position:relative}
.circle1{position:absolute;width:120px;height:120px;border-radius:50%;border:2px solid rgba(255,255,255,0.15);top:-30px;right:40px}
.circle2{position:absolute;width:80px;height:80px;border-radius:50%;background:rgba(255,255,255,0.08);top:60px;right:160px}
.circle3{position:absolute;width:60px;height:60px;border-radius:50%;border:2px solid rgba(255,255,255,0.1);top:20px;left:40px}
.avatar{width:100px;height:100px;border-radius:50%;background:linear-gradient(135deg,#667eea,#764ba2);border:4px solid #fff;position:absolute;top:150px;display:flex;align-items:center;justify-content:center;font-size:42px;color:#fff;font-weight:300;box-shadow:0 4px 20px rgba(102,126,234,0.4)}
.greeting{margin-top:70px;font-size:13px;text-transform:uppercase;letter-spacing:5px;color:#999}
.title{font-size:38px;font-weight:300;color:#2d2d2d;margin:16px 0 4px}
.name{font-size:28px;color:#667eea;font-weight:600;margin:4px 0 24px}
.msg-box{margin:0 60px;padding:24px 28px;border-left:3px solid #667ea;background:#f8f7fd;border-radius:0 8px 8px 0}
.message{font-size:16px;line-height:1.8;color:#555}
.sender{position:absolute;bottom:40px;font-size:14px;color:#aaa;letter-spacing:2px}
</style></head><body>
<div class="card">
  <div class="top-band">
    <div class="circle1"></div><div class="circle2"></div><div class="circle3"></div>
  </div>
  <div class="avatar">${data.name.charAt(0).toUpperCase()}</div>
  <div class="greeting">Happy Birthday</div>
  <div class="title">Cheers to You!</div>
  <div class="name">${data.name}</div>
  <div class="msg-box">
    <div class="message">${msg}</div>
  </div>
  <div class="sender">— ${data.sender || 'Me'}</div>
</div>
</body></html>`;
}

export function buildGoldenLuxury(data: CardData): string {
  const msg = data.message || 'May this year bring you extraordinary success, happiness, and unforgettable moments.';
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Georgia","Times New Roman",serif;background:#0a0a14;display:flex;justify-content:center;align-items:center;min-height:100vh}
.card{position:relative;width:600px;height:900px;background:linear-gradient(170deg,#1a1a2e 0%,#16213e 40%,#0f3460 100%);overflow:hidden;color:#d4af37;display:flex;flex-direction:column;align-items:center}
.stars{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}
.star{position:absolute;width:4px;height:4px;background:#d4af37;border-radius:50%;opacity:0.3}
.s1{top:60px;left:50px}.s2{top:100px;right:80px}.s3{top:180px;left:120px}
.s4{top:250px;right:40px}.s5{top:350px;left:60px}.s6{top:400px;right:120px}
.s7{top:480px;left:30px}.s8{top:520px;right:60px}.s9{top:600px;left:100px}
.s10{top:160px;left:260px}.s11{top:380px;right:200px}.s12{top:550px;right:160px}
.crown{font-size:56px;margin-top:50px;filter:drop-shadow(0 0 20px rgba(212,175,55,0.4))}
.border-top,.border-bottom{position:absolute;width:200px;height:1px;background:linear-gradient(90deg,transparent,#d4af37,transparent)}
.border-top{top:140px}.border-bottom{bottom:160px}
.greeting{font-size:13px;letter-spacing:8px;text-transform:uppercase;color:rgba(212,175,55,0.6);margin-top:20px}
.title{font-size:46px;font-weight:700;margin:16px 0 4px;text-shadow:0 0 30px rgba(212,175,55,0.3)}
.name{font-size:36px;color:#fff;margin:8px 0 20px;font-style:italic}
.stars-divider{font-size:14px;letter-spacing:12px;margin:10px 0;color:rgba(212,175,55,0.5)}
.message{font-size:17px;line-height:1.8;text-align:center;color:rgba(255,255,255,0.75);max-width:420px;margin:10px 0 30px}
.sender{position:absolute;bottom:80px;font-size:15px;color:rgba(212,175,55,0.7);letter-spacing:3px}
.footer{position:absolute;bottom:40px;font-size:11px;color:rgba(212,175,55,0.3);letter-spacing:6px;text-transform:uppercase}
</style></head><body>
<div class="card">
  <div class="stars">
    <div class="star s1"></div><div class="star s2"></div><div class="star s3"></div>
    <div class="star s4"></div><div class="star s5"></div><div class="star s6"></div>
    <div class="star s7"></div><div class="star s8"></div><div class="star s9"></div>
    <div class="star s10"></div><div class="star s11"></div><div class="star s12"></div>
  </div>
  <div class="crown">👑</div>
  <div class="border-top"></div>
  <div class="greeting">A Golden Celebration</div>
  <div class="title">Happy Birthday</div>
  <div class="name">${data.name}</div>
  <div class="stars-divider">✦ ✦ ✦</div>
  <div class="border-bottom"></div>
  <div class="message">${msg}</div>
  <div class="sender">With admiration, ${data.sender || 'Me'}</div>
  <div class="footer">✦ Est. ${new Date().getFullYear()} ✦</div>
</div>
</body></html>`;
}

export function buildPhotoStory(data: CardData): string {
  const msg = data.message || 'Every moment with you is a treasured memory. Here\u2019s to making many more!';
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Segoe UI","Roboto",Arial,sans-serif;background:#d5d5d5;display:flex;justify-content:center;align-items:center;min-height:100vh}
.card{position:relative;width:600px;height:900px;background:#f0f0f0;overflow:hidden;color:#333;display:flex;flex-direction:column;align-items:center;padding:30px}
.title-bar{font-size:12px;text-transform:uppercase;letter-spacing:5px;color:#999;margin:10px 0 16px}
.photo-area{width:440px;height:340px;background:linear-gradient(135deg,#c8c8c8,#e0e0e0);border-radius:12px;display:flex;flex-direction:column;align-items:center;justify-content:center;box-shadow:0 8px 30px rgba(0,0,0,0.1);position:relative}
.photo-area .cam{font-size:64px;margin-bottom:10px;opacity:0.4}
.photo-area .label{font-size:14px;color:#999;letter-spacing:2px}
.photo-strip{display:flex;gap:12px;margin-top:20px}
.strip-item{width:120px;padding:12px;background:#fff;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.06);text-align:center}
.strip-item .emoji{font-size:28px;margin-bottom:6px}
.strip-item .text{font-size:11px;color:#888;line-height:1.4}
.birthday-section{margin-top:24px;text-align:center}
.birthday-section .name{font-size:32px;font-weight:700;color:#2d2d2d}
.birthday-section .subtitle{font-size:15px;color:#888;margin-top:4px}
.message{font-size:15px;line-height:1.7;text-align:center;color:#666;max-width:400px;margin:16px 0 0}
.sender{position:absolute;bottom:40px;font-size:14px;color:#aaa;letter-spacing:2px}
</style></head><body>
<div class="card">
  <div class="title-bar">Memories & Wishes</div>
  <div class="photo-area">
    <div class="cam">📷</div>
    <div class="label">Place your favorite photo here</div>
  </div>
  <div class="photo-strip">
    <div class="strip-item"><div class="emoji">🎂</div><div class="text">Another year<br>of joy</div></div>
    <div class="strip-item"><div class="emoji">❤️</div><div class="text">Filled with<br>love</div></div>
    <div class="strip-item"><div class="emoji">⭐</div><div class="text">Shining<br>brighter</div></div>
  </div>
  <div class="birthday-section">
    <div class="name">Happy Birthday ${data.name}!</div>
    <div class="subtitle">Wishing you all the happiness in the world</div>
  </div>
  <div class="message">${msg}</div>
  <div class="sender">Forever yours, ${data.sender || 'Me'} 💕</div>
</div>
</body></html>`;
}

export function buildMemoryScrapbook(data: CardData): string {
  const msg = data.message || 'Life is a scrapbook of beautiful moments, and you fill every page with joy.';
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Segoe UI","Roboto",Arial,sans-serif;background:#c5beb3;display:flex;justify-content:center;align-items:center;min-height:100vh}
.card{position:relative;width:600px;height:900px;background:#f5f0e8;overflow:hidden;color:#4a4035}
.bg-pattern{position:absolute;top:0;left:0;width:100%;height:100%;background-image:radial-gradient(circle,#d5cfc3 1px,transparent 1px);background-size:20px 20px;opacity:0.5}
.polaroid{position:absolute;background:#fff;padding:10px 10px 30px 10px;box-shadow:0 4px 15px rgba(0,0,0,0.12)}
.p1{top:40px;left:50px;width:200px;height:160px;transform:rotate(-6deg);z-index:2}
.p2{top:30px;right:60px;width:180px;height:150px;transform:rotate(4deg);z-index:1}
.p3{top:230px;left:160px;width:220px;height:170px;transform:rotate(-2deg);z-index:3}
.polaroid .photo{width:100%;height:100%;background:linear-gradient(135deg,#e8dfd2,#d4c8b8);border-radius:2px;display:flex;align-items:center;justify-content:center;font-size:40px}
.tape{position:absolute;width:50px;height:20px;background:rgba(255,228,181,0.7);top:-8px;left:50%;transform:translateX(-50%) rotate(-2deg);border-radius:2px}
.title{position:absolute;top:300px;width:100%;text-align:center;font-size:44px;font-family:"Georgia",serif;color:#4a4035;z-index:10}
.name{position:absolute;top:360px;width:100%;text-align:center;font-size:30px;color:#b8860b;font-family:"Georgia",serif;font-style:italic;z-index:10}
.message{position:absolute;top:420px;left:80px;right:80px;font-size:16px;line-height:1.8;text-align:center;color:#7a6e5e;font-style:italic;z-index:10}
.washi-tape{position:absolute;bottom:120px;left:100px;right:100px;height:30px;background:repeating-linear-gradient(90deg,#e8b4b8 0px,#e8b4b8 10px,#f0c4c8 10px,#f0c4c8 20px);opacity:0.5;border-radius:2px;z-index:10}
.sender{position:absolute;bottom:50px;width:100%;text-align:center;font-size:15px;color:#b8860b;letter-spacing:2px;z-index:10}
</style></head><body>
<div class="card">
  <div class="bg-pattern"></div>
  <div class="polaroid p1"><div class="tape"></div><div class="photo">🎈</div></div>
  <div class="polaroid p2"><div class="tape"></div><div class="photo">🎂</div></div>
  <div class="polaroid p3"><div class="tape"></div><div class="photo">Memory ✨</div></div>
  <div class="title">Happy Birthday</div>
  <div class="name">${data.name}</div>
  <div class="message">${msg}</div>
  <div class="washi-tape"></div>
  <div class="sender">With love, ${data.sender || 'Me'} 📸</div>
</div>
</body></html>`;
}

export function buildWatercolourDreams(data: CardData): string {
  const msg = data.message || 'Like watercolors on canvas, you make the world more beautiful just by being in it.';
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Segoe UI","Roboto",Arial,sans-serif;background:#e8e0d8;display:flex;justify-content:center;align-items:center;min-height:100vh}
.card{position:relative;width:600px;height:900px;background:#faf8f5;overflow:hidden;color:#4a4040;display:flex;flex-direction:column;align-items:center}
.blob{position:absolute;border-radius:50%;filter:blur(40px)}
.b1{width:300px;height:300px;background:rgba(186,165,214,0.2);top:-60px;left:-60px}
.b2{width:250px;height:250px;background:rgba(167,199,179,0.2);top:40px;right:-40px}
.b3{width:350px;height:280px;background:rgba(214,181,186,0.2);bottom:80px;left:-80px}
.b4{width:200px;height:200px;background:rgba(181,201,224,0.25);bottom:20px;right:-30px}
.b5{width:180px;height:180px;background:rgba(224,206,168,0.2);top:300px;left:200px}
.greeting{margin-top:120px;font-size:14px;letter-spacing:6px;text-transform:uppercase;color:#b8a0c8;z-index:1}
.title{font-size:46px;font-weight:300;color:#5a4a6a;margin:16px 0 6px;z-index:1}
.name{font-size:34px;color:#a07898;font-weight:500;margin:6px 0 24px;z-index:1}
.leaf-row{font-size:18px;letter-spacing:12px;margin:8px 0;z-index:1;opacity:0.5}
.message{font-size:17px;line-height:1.8;text-align:center;color:#6a6068;max-width:420px;margin:10px 0 30px;z-index:1;font-style:italic}
.sender{position:absolute;bottom:60px;font-size:15px;color:#b8a0c8;letter-spacing:2px;z-index:1}
</style></head><body>
<div class="card">
  <div class="blob b1"></div><div class="blob b2"></div><div class="blob b3"></div>
  <div class="blob b4"></div><div class="blob b5"></div>
  <div class="greeting">Happy Birthday</div>
  <div class="title">Dream Big, Shine Bright</div>
  <div class="name">${data.name}</div>
  <div class="leaf-row">🌸 🌿 🌸 🌿 🌸</div>
  <div class="message">${msg}</div>
  <div class="sender">With gentle wishes, ${data.sender || 'Me'} 💜</div>
</div>
</body></html>`;
}

export function buildNatureEscape(data: CardData): string {
  const msg = data.message || 'May your birthday be as refreshing as a walk through nature on a perfect day.';
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Segoe UI","Roboto",Arial,sans-serif;background:#3a6b35;display:flex;justify-content:center;align-items:center;min-height:100vh}
.card{position:relative;width:600px;height:900px;background:linear-gradient(180deg,#87CEEB 0%,#87CEEB 50%,#5daa68 50%,#3a7d44 100%);overflow:hidden;color:#2d4a2e}
.sun{position:absolute;top:40px;right:80px;width:70px;height:70px;background:#ffd93d;border-radius:50%;box-shadow:0 0 40px rgba(255,217,61,0.5)}
.sun-ray{position:absolute;top:75px;right:115px;font-size:20px;color:#ffd93d}
.mountain{position:absolute;bottom:380px;width:0;height:0;border-left:150px solid transparent;border-right:150px solid transparent;border-bottom:200px solid #4a8c54}
.m1{left:-20px}.m2{left:180px;border-bottom-color:#3d7a46;border-left-width:180px;border-right-width:180px;border-bottom-width:240px}
.m3{right:-40px;border-left-width:120px;border-right-width:120px;border-bottom-color:#5a9a64;border-bottom-width:160px}
.snow{position:absolute;bottom:580px;left:155px;width:0;height:0;border-left:30px solid transparent;border-right:30px solid transparent;border-bottom:35px solid #fff}
.leaf1{position:absolute;bottom:440px;left:50px;font-size:36px}
.leaf2{position:absolute;bottom:460px;right:50px;font-size:30px}
.leaf3{position:absolute;bottom:420px;right:140px;font-size:24px}
.content{position:absolute;top:140px;width:100%;text-align:center;z-index:5}
.greeting{font-size:13px;letter-spacing:5px;text-transform:uppercase;color:rgba(255,255,255,0.8);margin-bottom:12px}
.title{font-size:46px;font-weight:700;color:#fff;text-shadow:0 2px 10px rgba(0,0,0,0.2)}
.name{font-size:32px;color:#fff;margin:10px 0;font-style:italic;text-shadow:0 2px 8px rgba(0,0,0,0.15)}
.leaf-emoji{font-size:24px;margin:12px 0;letter-spacing:8px}
.message{font-size:16px;line-height:1.8;text-align:center;color:#fff;max-width:420px;margin:12px auto;text-shadow:0 1px 4px rgba(0,0,0,0.2)}
.grass{position:absolute;bottom:340px;width:100%;font-size:20px;letter-spacing:4px;opacity:0.4}
.sender{position:absolute;bottom:40px;width:100%;text-align:center;font-size:15px;color:rgba(255,255,255,0.8);letter-spacing:2px;z-index:5}
</style></head><body>
<div class="card">
  <div class="sun"></div>
  <div class="sun-ray">☀️</div>
  <div class="mountain m1"></div><div class="mountain m2"></div><div class="mountain m3"></div>
  <div class="snow"></div>
  <div class="leaf1">🍃</div><div class="leaf2">🌿</div><div class="leaf3">🍃</div>
  <div class="content">
    <div class="greeting">Happy Birthday</div>
    <div class="title">Enjoy Your Day!</div>
    <div class="name">${data.name}</div>
    <div class="leaf-emoji">🍃 🌿 🍃</div>
    <div class="message">${msg}</div>
  </div>
  <div class="grass">🌿 🌱 🌿 🌱 🌿 🌱 🌿 🌱 🌿 🌱 🌿</div>
  <div class="sender">With nature\u2019s love, ${data.sender || 'Me'} 🌻</div>
</div>
</body></html>`;
}

export function buildNightSky(data: CardData): string {
  const msg = data.message || 'Under the same stars, we celebrate the wonderful light that is you. Happy Birthday!';
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Segoe UI","Roboto",Arial,sans-serif;background:#050818;display:flex;justify-content:center;align-items:center;min-height:100vh}
.card{position:relative;width:600px;height:900px;background:linear-gradient(180deg,#0a0e27 0%,#0f1535 50%,#1a1a40 100%);overflow:hidden;color:#e8e0f0;display:flex;flex-direction:column;align-items:center}
.glow{position:absolute;width:400px;height:400px;background:radial-gradient(circle,rgba(100,80,160,0.15) 0%,transparent 70%);top:200px;left:100px}
.star-field{position:absolute;top:0;left:0;width:100%;height:100%}
.star{position:absolute;background:#fff;border-radius:50%}
.st1{width:3px;height:3px;top:60px;left:100px;opacity:0.8}
.st2{width:2px;height:2px;top:100px;left:300px;opacity:0.5}
.st3{width:3px;height:3px;top:80px;right:120px;opacity:0.7}
.st4{width:2px;height:2px;top:200px;left:60px;opacity:0.4}
.st5{width:4px;height:4px;top:180px;right:80px;opacity:0.6}
.st6{width:2px;height:2px;top:300px;left:150px;opacity:0.5}
.st7{width:3px;height:3px;top:280px;right:200px;opacity:0.7}
.st8{width:2px;height:2px;top:400px;left:80px;opacity:0.4}
.st9{width:3px;height:3px;top:350px;right:50px;opacity:0.6}
.st10{width:2px;height:2px;top:450px;left:200px;opacity:0.5}
.st11{width:4px;height:4px;top:130px;left:400px;opacity:0.3}
.st12{width:2px;height:2px;top:500px;right:120px;opacity:0.5}
.st13{width:3px;height:3px;top:550px;left:120px;opacity:0.4}
.st14{width:2px;height:2px;top:480px;left:350px;opacity:0.6}
.st15{width:3px;height:3px;top:250px;left:250px;opacity:0.3}
.moon{position:absolute;top:50px;right:100px;width:70px;height:70px;background:radial-gradient(circle at 30% 30%,#ffeebb,#ffd93d,#e6b800);border-radius:50%;box-shadow:0 0 30px rgba(255,217,61,0.3),0 0 60px rgba(255,217,61,0.15)}
.moon-shadow{position:absolute;top:55px;right:115px;width:55px;height:55px;background:radial-gradient(circle at 70% 40%,#0f1535,#0a0e27);border-radius:50%}
.constellation{position:absolute;top:160px;left:120px;width:360px;height:120px}
.const-line{position:absolute;background:rgba(200,200,255,0.15);height:1px}
.cl1{width:80px;top:20px;left:20px;transform:rotate(30deg)}
.cl2{width:100px;top:40px;left:100px;transform:rotate(-15deg)}
.cl3{width:60px;top:80px;left:200px;transform:rotate(45deg)}
.cl4{width:90px;top:30px;left:260px;transform:rotate(-25deg)}
.const-star{position:absolute;width:6px;height:6px;background:#c8c8ff;border-radius:50%}
.cs1{top:14px;left:16px}.cs2{top:30px;left:96px}.cs3{top:22px;left:196px}
.cs4{top:74px;left:196px}.cs5{top:24px;left:346px}
.content{position:absolute;top:200px;width:100%;text-align:center;z-index:5}
.greeting{font-size:13px;letter-spacing:6px;text-transform:uppercase;color:rgba(200,200,255,0.5);margin-bottom:12px}
.title{font-size:46px;font-weight:300;color:#e8e0f0;text-shadow:0 0 30px rgba(180,160,255,0.3)}
.name{font-size:36px;color:#d4af37;margin:12px 0 20px;font-style:italic}
.stars-divider{font-size:14px;letter-spacing:10px;color:rgba(200,200,255,0.3);margin:8px 0}
.message{font-size:17px;line-height:1.8;text-align:center;color:rgba(232,224,240,0.7);max-width:420px;margin:8px auto}
.shooting-star{position:absolute;top:120px;right:160px;font-size:16px;transform:rotate(45deg);opacity:0.6}
.sender{position:absolute;bottom:60px;font-size:15px;color:rgba(212,175,55,0.6);letter-spacing:2px;z-index:5}
</style></head><body>
<div class="card">
  <div class="glow"></div>
  <div class="star-field">
    <div class="star st1"></div><div class="star st2"></div><div class="star st3"></div>
    <div class="star st4"></div><div class="star st5"></div><div class="star st6"></div>
    <div class="star st7"></div><div class="star st8"></div><div class="star st9"></div>
    <div class="star st10"></div><div class="star st11"></div><div class="star st12"></div>
    <div class="star st13"></div><div class="star st14"></div><div class="star st15"></div>
  </div>
  <div class="moon"></div><div class="moon-shadow"></div>
  <div class="constellation">
    <div class="const-line cl1"></div><div class="const-line cl2"></div>
    <div class="const-line cl3"></div><div class="const-line cl4"></div>
    <div class="const-star cs1"></div><div class="const-star cs2"></div>
    <div class="const-star cs3"></div><div class="const-star cs4"></div>
    <div class="const-star cs5"></div>
  </div>
  <div class="shooting-star">✨</div>
  <div class="content">
    <div class="greeting">Under the Stars</div>
    <div class="title">Happy Birthday</div>
    <div class="name">${data.name}</div>
    <div class="stars-divider">✦ ✦ ✦</div>
    <div class="message">${msg}</div>
  </div>
  <div class="sender">With starlight, ${data.sender || 'Me'} 🌙</div>
</div>
</body></html>`;
}

export function buildBalloonKingdom(data: CardData): string {
  const msg = data.message || 'Up, up, and away! Hope your birthday is the best one yet!';
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Comic Sans MS","Segoe UI",Arial,sans-serif;background:#87CEEB;display:flex;justify-content:center;align-items:center;min-height:100vh}
.card{position:relative;width:600px;height:900px;background:linear-gradient(180deg,#87CEEB 0%,#B0E0FF 100%);overflow:hidden;color:#2a2a5a;display:flex;flex-direction:column;align-items:center}
.cloud{position:absolute;background:#fff;border-radius:50px;opacity:0.8}
.cloud::before,.cloud::after{content:"";position:absolute;background:#fff;border-radius:50%}
.c1{width:120px;height:40px;top:100px;left:30px}
.c1::before{width:50px;height:50px;top:-25px;left:20px}
.c1::after{width:70px;height:60px;top:-30px;left:50px}
.c2{width:100px;height:35px;top:160px;right:40px}
.c2::before{width:45px;height:45px;top:-22px;left:15px}
.c2::after{width:60px;height:50px;top:-28px;left:40px}
.c3{width:90px;height:30px;top:60px;right:180px}
.c3::before{width:40px;height:40px;top:-20px;left:10px}
.c3::after{width:50px;height:45px;top:-25px;left:35px}
.balloon-row{position:absolute;display:flex;gap:20px}
.balloon{width:45px;height:58px;border-radius:50%;position:relative}
.balloon::after{content:"";position:absolute;bottom:-35px;left:50%;transform:translateX(-50%);width:2px;height:35px;background:rgba(0,0,0,0.15)}
.balloon::before{content:"▾";position:absolute;bottom:-44px;left:50%;transform:translateX(-50%);font-size:12px;color:rgba(0,0,0,0.15)}
.br1{top:50px;left:40px}.br2{top:70px;left:100px}.br3{top:30px;left:160px}
.br4{top:60px;left:220px}.br5{top:40px;left:280px}.br6{top:80px;left:340px}
.br7{top:50px;left:400px}.br8{top:70px;left:460px}.br9{top:45px;left:520px}
.bb1{background:#ff6b6b;transform:rotate(-5deg)}.bb2{background:#ffd93d;transform:rotate(3deg)}
.bb3{background:#6bcb77;transform:rotate(-8deg)}.bb4{background:#4d96ff;transform:rotate(6deg)}
.bb5{background:#c084fc;transform:rotate(-3deg)}.bb6{background:#fb923c;transform:rotate(7deg)}
.bb7{background:#f472b6;transform:rotate(-6deg)}.bb8{background:#34d399;transform:rotate(4deg)}
.bb9{background:#fbbf24;transform:rotate(-2deg)}
.confetti{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}
.cd{position:absolute;border-radius:2px}
.cd1{width:6px;height:14px;background:#ff6b6b;top:200px;left:80px;transform:rotate(25deg)}
.cd2{width:6px;height:14px;background:#ffd93d;top:240px;right:100px;transform:rotate(-15deg)}
.cd3{width:6px;height:14px;background:#6bcb77;top:280px;left:180px;transform:rotate(40deg)}
.cd4{width:6px;height:14px;background:#4d96ff;top:220px;right:200px;transform:rotate(-30deg)}
.cd5{width:6px;height:14px;background:#c084fc;top:300px;left:320px;transform:rotate(10deg)}
.cd6{width:6px;height:14px;background:#fb923c;top:260px;left:50px;transform:rotate(-45deg)}
.cd7{width:6px;height:14px;background:#f472b6;top:190px;right:60px;transform:rotate(20deg)}
.title{position:absolute;top:300px;font-size:50px;font-weight:900;color:#2a2a5a;text-align:center;line-height:1.1}
.title span{display:block;font-size:22px;font-weight:600;color:#ff6b6b;margin-top:10px}
.name{position:absolute;top:400px;font-size:38px;color:#4d96ff;font-weight:800}
.message{position:absolute;top:460px;font-size:17px;text-align:center;max-width:420px;line-height:1.7;color:#4a4a7a}
.sender{position:absolute;bottom:50px;font-size:16px;color:#6b6baa;letter-spacing:2px}
</style></head><body>
<div class="card">
  <div class="cloud c1"></div><div class="cloud c2"></div><div class="cloud c3"></div>
  <div class="balloon-row">
    <div class="balloon bb1 br1"></div><div class="balloon bb2 br2"></div>
    <div class="balloon bb3 br3"></div><div class="balloon bb4 br4"></div>
    <div class="balloon bb5 br5"></div><div class="balloon bb6 br6"></div>
    <div class="balloon bb7 br7"></div><div class="balloon bb8 br8"></div>
    <div class="balloon bb9 br9"></div>
  </div>
  <div class="confetti">
    <div class="cd cd1"></div><div class="cd cd2"></div><div class="cd cd3"></div>
    <div class="cd cd4"></div><div class="cd cd5"></div><div class="cd cd6"></div>
    <div class="cd cd7"></div>
  </div>
  <div class="title">Happy Birthday!<span>🎈 It\u2019s Your Big Day! 🎈</span></div>
  <div class="name">${data.name}</div>
  <div class="message">${msg}</div>
  <div class="sender">From ${data.sender || 'Me'} 🎈🎉</div>
</div>
</body></html>`;
}

export function buildCartoonAdventure(data: CardData): string {
  const msg = data.message || 'Every birthday is a new adventure! May this one be the greatest quest yet!';
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Comic Sans MS","Segoe UI",Arial,sans-serif;background:#c5b896;display:flex;justify-content:center;align-items:center;min-height:100vh}
.card{position:relative;width:600px;height:900px;background:#f4e8c1;overflow:hidden;color:#4a3728;display:flex;flex-direction:column;align-items:center}
.map-border{position:absolute;top:15px;left:15px;right:15px;bottom:15px;border:3px dashed #c4a265;border-radius:8px}
.map-corner{position:absolute;font-size:24px;color:#c4a265}
.mc1{top:8px;left:8px}.mc2{top:8px;right:8px}.mc3{bottom:8px;left:8px}.mc4{bottom:8px;right:8px}
.compass{position:absolute;top:50px;right:60px;font-size:48px;transform:rotate(15deg)}
.emblems{position:absolute;top:60px;left:60px;display:flex;gap:16px;font-size:32px}
.explorer{font-size:40px;margin-top:60px}
.greeting{font-size:14px;letter-spacing:5px;text-transform:uppercase;color:#a08a5a;margin-top:20px}
.title{font-size:46px;font-weight:800;color:#4a3728;margin:10px 0;text-shadow:2px 2px 0 rgba(196,162,101,0.3)}
.name{font-size:34px;color:#c4a265;font-weight:700;margin:6px 0 20px}
.map-line{display:flex;align-items:center;gap:10px;margin:8px 0}
.map-line::before,.map-line::after{content:"";width:50px;height:2px;background:repeating-linear-gradient(90deg,#c4a265 0,#c4a265 4px,transparent 4px,transparent 8px)}
.message{font-size:17px;line-height:1.8;text-align:center;color:#5a4a38;max-width:420px;margin:10px 0 20px}
.treasure{font-size:44px;margin:10px 0}
.trail{font-size:12px;color:#c4a265;letter-spacing:6px;margin:8px 0}
.sender{position:absolute;bottom:45px;font-size:15px;color:#a08a5a;letter-spacing:2px}
</style></head><body>
<div class="card">
  <div class="map-border"></div>
  <div class="map-corner mc1">🗺</div><div class="map-corner mc2">🧭</div>
  <div class="map-corner mc3">⭐</div><div class="map-corner mc4">🗝</div>
  <div class="compass">🧭</div>
  <div class="emblems"><span>🗺</span><span>🧭</span><span>⭐</span></div>
  <div class="explorer">🏴‍☠️</div>
  <div class="greeting">A Grand Adventure Awaits</div>
  <div class="title">Happy Birthday!</div>
  <div class="name">${data.name}</div>
  <div class="map-line"></div>
  <div class="message">${msg}</div>
  <div class="treasure">🎁 🗝 💎</div>
  <div class="trail">✦ · ✦ · ✦ · ✦</div>
  <div class="sender">Your fellow explorer, ${data.sender || 'Me'} 🗺</div>
</div>
</body></html>`;
}

export function buildRainbowCelebration(data: CardData): string {
  const msg = data.message || 'You bring color to every day! Wishing you the brightest, most beautiful birthday!';
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Comic Sans MS","Segoe UI",Arial,sans-serif;background:#b0d8f0;display:flex;justify-content:center;align-items:center;min-height:100vh}
.card{position:relative;width:600px;height:900px;background:linear-gradient(180deg,#87CEEB 0%,#B0E0FF 100%);overflow:hidden;color:#2a2a5a;display:flex;flex-direction:column;align-items:center}
.cloud{position:absolute;background:#fff;border-radius:40px;opacity:0.9}
.cloud::before,.cloud::after{content:"";position:absolute;background:#fff;border-radius:50%}
.cw1{width:140px;height:45px;top:50px;left:20px}
.cw1::before{width:55px;height:55px;top:-28px;left:25px}
.cw1::after{width:75px;height:65px;top:-32px;left:60px}
.cw2{width:110px;height:38px;top:70px;right:30px}
.cw2::before{width:50px;height:50px;top:-25px;left:18px}
.cw2::after{width:65px;height:55px;top:-30px;left:45px}
.cw3{width:90px;height:32px;top:120px;right:160px}
.cw3::before{width:40px;height:40px;top:-20px;left:12px}
.cw3::after{width:55px;height:48px;top:-26px;left:35px}
.rainbow{position:absolute;top:280px;left:50%;transform:translateX(-50%)}
.arc{position:absolute;border-radius:50%;border-style:solid;border-width:14px;border-bottom:none;left:50%;transform:translateX(-50%)}
.a1{width:500px;height:250px;top:-120px;border-color:#ff0000}
.a2{width:472px;height:236px;top:-108px;border-color:#ff7f00}
.a3{width:444px;height:222px;top:-96px;border-color:#ffff00}
.a4{width:416px;height:208px;top:-84px;border-color:#00ff00}
.a5{width:388px;height:194px;top:-72px;border-color:#0000ff}
.a6{width:360px;height:180px;top:-60px;border-color:#4b0082}
.a7{width:332px;height:166px;top:-48px;border-color:#9400d3}
.sun{position:absolute;top:40px;right:100px;font-size:50px}
.stars{position:absolute;top:180px;left:0;width:100%;display:flex;justify-content:space-around;font-size:24px}
.title{position:absolute;top:340px;width:100%;text-align:center;font-size:50px;font-weight:900;background:linear-gradient(90deg,#ff0000,#ff7f00,#ffff00,#00ff00,#0000ff,#9400d3);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.name{position:absolute;top:410px;font-size:36px;color:#ff6b6b;font-weight:700}
.message{position:absolute;top:470px;font-size:17px;text-align:center;max-width:420px;line-height:1.7;color:#4a4a7a}
.emoji-row{position:absolute;bottom:100px;font-size:28px;letter-spacing:16px}
.sender{position:absolute;bottom:50px;font-size:16px;color:#7a6a9a;letter-spacing:2px}
</style></head><body>
<div class="card">
  <div class="cloud cw1"></div><div class="cloud cw2"></div><div class="cloud cw3"></div>
  <div class="sun">☀️</div>
  <div class="stars"><span>⭐</span><span>✨</span><span>⭐</span><span>✨</span><span>⭐</span></div>
  <div class="rainbow">
    <div class="arc a1"></div><div class="arc a2"></div><div class="arc a3"></div>
    <div class="arc a4"></div><div class="arc a5"></div><div class="arc a6"></div>
    <div class="arc a7"></div>
  </div>
  <div class="title">Happy Birthday!</div>
  <div class="name">${data.name} 🌈</div>
  <div class="message">${msg}</div>
  <div class="emoji-row">🎂 🎈 🎉 🎁 🎊</div>
  <div class="sender">With all colors of love, ${data.sender || 'Me'} 🌈</div>
</div>
</body></html>`;
}

export function buildDinosaurParty(data: CardData): string {
  const msg = data.message || 'ROAR! Hope your birthday is as epic as a T-Rex and as cool as a Triceratops!';
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Comic Sans MS","Segoe UI",Arial,sans-serif;background:#1a4a1a;display:flex;justify-content:center;align-items:center;min-height:100vh}
.card{position:relative;width:600px;height:900px;background:linear-gradient(180deg,#3a7a3a 0%,#2d5a27 60%,#1a4a1a 100%);overflow:hidden;color:#e8f5e0;display:flex;flex-direction:column;align-items:center}
.palm{position:absolute;font-size:48px}
.p1{top:20px;left:20px;transform:rotate(-20deg)}.p2{top:10px;right:20px;transform:rotate(15deg)}
.p3{bottom:200px;left:10px;transform:rotate(-10deg)}.p4{bottom:180px;right:10px;transform:rotate(20deg)}
.volcano{position:absolute;bottom:280px;left:50%;transform:translateX(-50%)}
.volcano-body{width:0;height:0;border-left:100px solid transparent;border-right:100px solid transparent;border-bottom:120px solid #5a3a1a;position:relative}
.volcano-top{position:absolute;top:-10px;left:-10px;width:0;height:0;border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:16px solid #ff6b35}
.volcano-smoke{position:absolute;top:-30px;left:-6px;font-size:20px;opacity:0.6}
.dinos{position:absolute;top:40px;width:100%;display:flex;justify-content:center;gap:24px;font-size:48px}
.eggs{position:absolute;bottom:250px;display:flex;gap:16px;font-size:24px}
.title{position:absolute;top:320px;width:100%;text-align:center;font-size:48px;font-weight:900;color:#ffd93d;text-shadow:3px 3px 0 rgba(0,0,0,0.3)}
.subtitle{position:absolute;top:380px;font-size:16px;letter-spacing:4px;color:rgba(232,245,224,0.6)}
.name{position:absolute;top:420px;font-size:38px;color:#6bcb77;font-weight:800}
.message{position:absolute;top:490px;font-size:17px;text-align:center;max-width:420px;line-height:1.7;color:rgba(232,245,224,0.85)}
.footprints{position:absolute;bottom:100px;font-size:18px;letter-spacing:8px;opacity:0.3}
.sender{position:absolute;bottom:40px;font-size:15px;color:#8bce8b;letter-spacing:2px}
</style></head><body>
<div class="card">
  <div class="palm p1">🌴</div><div class="palm p2">🌴</div>
  <div class="palm p3">🌿</div><div class="palm p4">🌿</div>
  <div class="dinos"><span>🦕</span><span>🦖</span><span>🦕</span></div>
  <div class="volcano">
    <div class="volcano-smoke">💨</div>
    <div class="volcano-body">
      <div class="volcano-top"></div>
    </div>
  </div>
  <div class="eggs"><span>🥚</span><span>🥚</span><span>🥚</span><span>🥚</span></div>
  <div class="title">ROAR! 🦖</div>
  <div class="subtitle">HAPPY BIRTHDAY</div>
  <div class="name">${data.name}</div>
  <div class="message">${msg}</div>
  <div class="footprints">🐾 🦕 🐾 🦖 🐾 🦕 🐾</div>
  <div class="sender">From ${data.sender || 'Me'} 🦖🌋</div>
</div>
</body></html>`;
}

export function buildSpaceExplorer(data: CardData): string {
  const msg = data.message || 'The universe is vast, but today we celebrate the brightest star in it — you! Happy Birthday!';
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Segoe UI","Roboto",Arial,sans-serif;background:#06081a;display:flex;justify-content:center;align-items:center;min-height:100vh}
.card{position:relative;width:600px;height:900px;background:linear-gradient(180deg,#0b0d2e 0%,#12153a 50%,#1a1a50 100%);overflow:hidden;color:#e0e0ff;display:flex;flex-direction:column;align-items:center}
.star-field{position:absolute;top:0;left:0;width:100%;height:100%}
.sf{position:absolute;background:#fff;border-radius:50%}
.sf1{width:3px;height:3px;top:50px;left:80px;opacity:0.7}.sf2{width:2px;height:2px;top:90px;left:200px;opacity:0.4}
.sf3{width:3px;height:3px;top:60px;right:100px;opacity:0.6}.sf4{width:2px;height:2px;top:150px;left:50px;opacity:0.5}
.sf5{width:4px;height:4px;top:200px;right:60px;opacity:0.3}.sf6{width:2px;height:2px;top:280px;left:120px;opacity:0.5}
.sf7{width:3px;height:3px;top:320px;right:140px;opacity:0.4}.sf8{width:2px;height:2px;top:400px;left:80px;opacity:0.6}
.sf9{width:3px;height:3px;top:480px;right:100px;opacity:0.5}.sf10{width:2px;height:2px;top:550px;left:200px;opacity:0.4}
.sf11{width:3px;height:3px;top:130px;left:350px;opacity:0.3}.sf12{width:2px;height:2px;top:450px;right:200px;opacity:0.5}
.sf13{width:4px;height:4px;top:600px;left:100px;opacity:0.3}.sf14{width:2px;height:2px;top:380px;left:300px;opacity:0.4}
.planet{position:absolute;border-radius:50%}
.p1{width:60px;height:60px;background:radial-gradient(circle at 30% 30%,#8b5cf6,#4c1d95);top:60px;left:60px;box-shadow:0 0 20px rgba(139,92,246,0.3)}
.p2{width:40px;height:40px;background:radial-gradient(circle at 30% 30%,#f97316,#c2410c);top:120px;right:80px;box-shadow:0 0 15px rgba(249,115,22,0.3)}
.p2-ring{position:absolute;top:130px;right:70px;width:60px;height:14px;border:2px solid rgba(249,185,118,0.4);border-radius:50%;transform:rotate(-20deg)}
.p3{width:30px;height:30px;background:radial-gradient(circle at 30% 30%,#3b82f6,#1e40af);bottom:200px;right:60px;box-shadow:0 0 12px rgba(59,130,246,0.3)}
.orbit{position:absolute;width:140px;height:140px;border:1px solid rgba(255,255,255,0.06);border-radius:50%;top:45px;left:35px}
.orbit-dot{position:absolute;width:8px;height:8px;background:#8b5cf6;border-radius:50%;top:-4px;left:50%;box-shadow:0 0 8px rgba(139,92,246,0.5)}
.astronaut{position:absolute;top:30px;right:160px;font-size:40px}
.rocket{position:absolute;top:200px;left:60px;font-size:40px;transform:rotate(-30deg)}
.content{position:absolute;top:280px;width:100%;text-align:center;z-index:5}
.greeting{font-size:13px;letter-spacing:6px;text-transform:uppercase;color:rgba(200,200,255,0.5);margin-bottom:10px}
.title{font-size:46px;font-weight:300;color:#e0e0ff;text-shadow:0 0 30px rgba(139,92,246,0.3)}
.name{font-size:36px;color:#8b5cf6;margin:10px 0 16px;font-weight:600}
.orbit-divider{position:relative;width:100px;height:100px;margin:8px auto}
.orbit-divider .ring{position:absolute;border:1px solid rgba(139,92,246,0.2);border-radius:50%}
.orbit-divider .r1{width:100px;height:100px;top:0;left:0}
.orbit-divider .r2{width:70px;height:70px;top:15px;left:15px}
.orbit-divider .r3{width:40px;height:40px;top:30px;left:30px;border-color:rgba(139,92,246,0.3)}
.orbit-divider .center{position:absolute;width:8px;height:8px;background:#8b5cf6;border-radius:50%;top:46px;left:46px;box-shadow:0 0 10px rgba(139,92,246,0.5)}
.message{font-size:17px;line-height:1.8;text-align:center;color:rgba(224,224,255,0.75);max-width:420px;margin:0 auto}
.sender{position:absolute;bottom:50px;font-size:15px;color:rgba(139,92,246,0.6);letter-spacing:2px;z-index:5}
</style></head><body>
<div class="card">
  <div class="star-field">
    <div class="sf sf1"></div><div class="sf sf2"></div><div class="sf sf3"></div>
    <div class="sf sf4"></div><div class="sf sf5"></div><div class="sf sf6"></div>
    <div class="sf sf7"></div><div class="sf sf8"></div><div class="sf sf9"></div>
    <div class="sf sf10"></div><div class="sf sf11"></div><div class="sf sf12"></div>
    <div class="sf sf13"></div><div class="sf sf14"></div>
  </div>
  <div class="planet p1"></div><div class="orbit"><div class="orbit-dot"></div></div>
  <div class="planet p2"></div><div class="p2-ring"></div>
  <div class="planet p3"></div>
  <div class="astronaut">👨‍🚀</div>
  <div class="rocket">🚀</div>
  <div class="content">
    <div class="greeting">Mission: Birthday</div>
    <div class="title">Happy Birthday!</div>
    <div class="name">${data.name}</div>
    <div class="orbit-divider">
      <div class="ring r1"></div><div class="ring r2"></div><div class="ring r3"></div>
      <div class="center"></div>
    </div>
    <div class="message">${msg}</div>
  </div>
  <div class="sender">From Mission Control, ${data.sender || 'Me'} 🚀✨</div>
</div>
</body></html>`;
}

export function buildAnimalFriends(data: CardData): string {
  const msg = data.message || 'Sending you a whole zoo full of love and birthday wishes! You deserve all the hugs!';
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Comic Sans MS","Segoe UI",Arial,sans-serif;background:#f5d5d5;display:flex;justify-content:center;align-items:center;min-height:100vh}
.card{position:relative;width:600px;height:900px;background:#fff0f5;overflow:hidden;color:#5a3a4a;display:flex;flex-direction:column;align-items:center}
.balloon-deco{position:absolute;top:0;width:100%;display:flex;justify-content:center;gap:24px}
.bd{width:38px;height:50px;border-radius:50%;position:relative}
.bd::after{content:"";position:absolute;bottom:-30px;left:50%;transform:translateX(-50%);width:2px;height:30px;background:rgba(0,0,0,0.1)}
.bd::before{content:"▾";position:absolute;bottom:-38px;left:50%;transform:translateX(-50%);font-size:10px;color:rgba(0,0,0,0.1)}
.bd1{background:#ff9eb5;transform:rotate(-4deg)}.bd2{background:#ffd93d;transform:rotate(3deg)}
.bd3{background:#7ecfc0;transform:rotate(-6deg)}.bd4{background:#a8d8ea;transform:rotate(5deg)}
.bd5{background:#c084fc;transform:rotate(-2deg)}.bd6{background:#fb923c;transform:rotate(4deg)}
.animals{position:absolute;top:100px;width:100%;display:flex;justify-content:center;gap:28px;font-size:48px}
.party-hats{position:absolute;top:200px;width:100%;display:flex;justify-content:center;gap:40px;font-size:28px}
.greeting{position:absolute;top:260px;font-size:13px;letter-spacing:5px;text-transform:uppercase;color:#d4899a}
.title{position:absolute;top:300px;font-size:48px;font-weight:900;color:#e8708a;text-align:center}
.name{position:absolute;top:380px;font-size:36px;color:#c4608a;font-weight:700}
.cake{position:absolute;top:440px;font-size:52px}
.message{position:absolute;top:520px;font-size:17px;text-align:center;max-width:420px;line-height:1.7;color:#7a5a6a}
.confetti-row{position:absolute;bottom:120px;width:100%;display:flex;justify-content:space-around;font-size:22px;opacity:0.5}
.sender{position:absolute;bottom:50px;font-size:15px;color:#d4899a;letter-spacing:2px}
</style></head><body>
<div class="card">
  <div class="balloon-deco">
    <div class="bd bd1"></div><div class="bd bd2"></div><div class="bd bd3"></div>
    <div class="bd bd4"></div><div class="bd bd5"></div><div class="bd bd6"></div>
  </div>
  <div class="animals"><span>🐶</span><span>🐱</span><span>🐰</span><span>🐻</span><span>🦊</span></div>
  <div class="party-hats"><span>🎉</span><span>🎊</span><span>🎉</span></div>
  <div class="greeting">Happy Birthday</div>
  <div class="title">Party Time!</div>
  <div class="name">${data.name}</div>
  <div class="cake">🎂</div>
  <div class="message">${msg}</div>
  <div class="confetti-row"><span>🎈</span><span>✨</span><span>🎀</span><span>💫</span><span>🎈</span></div>
  <div class="sender">With paws & love, ${data.sender || 'Me'} 🐾💕</div>
</div>
</body></html>`;
}
