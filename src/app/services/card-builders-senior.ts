import { CardData } from './card-builders-universal';

export function buildTimelessElegance(data: CardData): string {
  const msg = data.message || 'Wishing you a birthday as graceful and beautiful as you are, filled with peace and joy.';
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Georgia","Times New Roman",serif;background:#f0ece4}
.card{position:relative;width:600px;height:900px;background:#faf7f2;overflow:hidden;color:#4a3f35}
.card::before,.card::after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none}
.card::before{border:2px solid #c9a96e;margin:14px;border-radius:4px}
.card::after{border:1px solid #c9a96e;margin:24px;border-radius:2px}
.lace-border{position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none}
.lace-border::before{content:"";position:absolute;top:8px;left:8px;right:8px;bottom:8px;
background:repeating-linear-gradient(90deg,transparent,transparent 18px,#c9a96e22 18px,#c9a96e22 20px),
repeating-linear-gradient(0deg,transparent,transparent 18px,#c9a96e22 18px,#c9a96e22 20px)}
.pearl{position:absolute;width:12px;height:12px;border-radius:50%;background:radial-gradient(circle at 35% 35%,#fff,#e8e0d4,#d4c9b8);border:1px solid #d4c9b888;pointer-events:none}
.dove{position:absolute;font-size:48px;top:80px;left:50%;transform:translateX(-50%);filter:drop-shadow(0 2px 4px rgba(0,0,0,0.1))}
.title{position:absolute;top:200px;width:100%;text-align:center;font-size:20px;letter-spacing:6px;text-transform:uppercase;color:#c9a96e;font-weight:400}
.name{position:absolute;top:260px;width:100%;text-align:center;font-size:56px;color:#4a3f35;font-weight:700;letter-spacing:2px}
.message{position:absolute;top:370px;left:60px;right:60px;text-align:center;font-size:19px;line-height:1.8;color:#6b5e4f;font-style:italic}
.sender{position:absolute;bottom:60px;width:100%;text-align:center;font-size:16px;color:#c9a96e;letter-spacing:4px;text-transform:uppercase}
.gold-line{position:absolute;top:340px;left:50%;transform:translateX(-50%);width:120px;height:1px;background:#c9a96e}
.birthday-text{position:absolute;top:150px;width:100%;text-align:center;font-size:14px;letter-spacing:8px;text-transform:uppercase;color:#c9a96e}
</style></head><body>
<div class="card">
<div class="lace-border"></div>
<div class="pearl" style="top:30px;left:30px"></div>
<div class="pearl" style="top:30px;left:54px"></div>
<div class="pearl" style="top:30px;left:78px"></div>
<div class="pearl" style="top:30px;right:30px"></div>
<div class="pearl" style="top:30px;right:54px"></div>
<div class="pearl" style="top:30px;right:78px"></div>
<div class="pearl" style="bottom:30px;left:30px"></div>
<div class="pearl" style="bottom:30px;left:54px"></div>
<div class="pearl" style="bottom:30px;left:78px"></div>
<div class="pearl" style="bottom:30px;right:30px"></div>
<div class="pearl" style="bottom:30px;right:54px"></div>
<div class="pearl" style="bottom:30px;right:78px"></div>
<div class="pearl" style="top:54px;left:30px"></div>
<div class="pearl" style="top:78px;left:30px"></div>
<div class="pearl" style="top:54px;right:30px"></div>
<div class="pearl" style="top:78px;right:30px"></div>
<div class="pearl" style="bottom:54px;left:30px"></div>
<div class="pearl" style="bottom:78px;left:30px"></div>
<div class="pearl" style="bottom:54px;right:30px"></div>
<div class="pearl" style="bottom:78px;right:30px"></div>
<div class="dove">🕊️</div>
<div class="birthday-text">Birthday</div>
<div class="title">Happy Birthday</div>
<div class="name">${data.name}</div>
<div class="gold-line"></div>
<div class="message">${msg}</div>
<div class="sender">With love, ${data.sender || 'Me'}</div>
</div></body></html>`;
}

export function buildVintageMemories(data: CardData): string {
  const msg = data.message || 'Every year adds another beautiful page to the story of your wonderful life.';
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Georgia",serif;background:#c9b896}
.card{position:relative;width:600px;height:900px;background:linear-gradient(135deg,#f5e6c8 0%,#eddcb1 40%,#e8d4a2 100%);overflow:hidden;color:#5a4a32}
.frame{position:absolute;top:20px;left:20px;right:20px;bottom:20px;border:4px double #8b6914;pointer-events:none}
.frame-inner{position:absolute;top:30px;left:30px;right:30px;bottom:30px;border:2px solid #8b691466;pointer-events:none}
.corner{position:absolute;width:40px;height:40px;border-color:#8b6914;border-style:solid;border-width:0}
.corner-tl{top:14px;left:14px;border-top-width:3px;border-left-width:3px;border-radius:4px 0 0 0}
.corner-tr{top:14px;right:14px;border-top-width:3px;border-right-width:3px;border-radius:0 4px 0 0}
.corner-bl{bottom:14px;left:14px;border-bottom-width:3px;border-left-width:3px;border-radius:0 0 0 4px}
.corner-br{bottom:14px;right:14px;border-bottom-width:3px;border-right-width:3px;border-radius:0 0 4px 0}
.ornament{position:absolute;font-size:28px}
.reel{position:absolute;top:60px;left:50%;transform:translateX(-50%);font-size:56px;filter:drop-shadow(0 2px 6px rgba(0,0,0,0.15))}
.label{position:absolute;top:160px;width:100%;text-align:center;font-size:13px;letter-spacing:6px;text-transform:uppercase;color:#8b6914}
.title{position:absolute;top:200px;width:100%;text-align:center;font-size:48px;color:#5a4a32;font-weight:700}
.name{position:absolute;top:280px;width:100%;text-align:center;font-size:42px;color:#8b6914;font-style:italic;font-weight:700}
.sep-line{position:absolute;top:340px;left:50%;transform:translateX(-50%);width:200px;height:2px;
background:linear-gradient(90deg,transparent,#8b6914,transparent)}
.message{position:absolute;top:370px;left:70px;right:70px;text-align:center;font-size:18px;line-height:1.9;color:#6b5a3a}
.vintage-badge{position:absolute;top:430px;left:50%;transform:translateX(-50%);width:80px;height:80px;border-radius:50%;border:2px solid #8b6914;display:flex;align-items:center;justify-content:center;font-size:12px;letter-spacing:2px;color:#8b6914;text-transform:uppercase}
.sender{position:absolute;bottom:60px;width:100%;text-align:center;font-size:15px;color:#8b6914;letter-spacing:3px;text-transform:uppercase}
.grain{position:absolute;top:0;left:0;right:0;bottom:0;
background:repeating-conic-gradient(#8b691408 0% 25%,transparent 0% 50%) 0 0/4px 4px;pointer-events:none}
</style></head><body>
<div class="card">
<div class="frame"></div>
<div class="frame-inner"></div>
<div class="corner corner-tl"></div>
<div class="corner corner-tr"></div>
<div class="corner corner-bl"></div>
<div class="corner corner-br"></div>
<div class="grain"></div>
<div class="ornament" style="top:40px;left:50px">🎞️</div>
<div class="ornament" style="top:40px;right:50px">🎬</div>
<div class="reel">🎞️</div>
<div class="label">A Celebration Of</div>
<div class="title">Happy Birthday</div>
<div class="name">${data.name}</div>
<div class="sep-line"></div>
<div class="message">${msg}</div>
<div class="sender">From ${data.sender || 'Me'}</div>
</div></body></html>`;
}

export function buildHeritageCelebration(data: CardData): string {
  const msg = data.message || 'Honouring a legacy of strength, wisdom, and pride. May this day celebrate all that you are.';
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Georgia","Times New Roman",serif;background:#3a0e0e}
.card{position:relative;width:600px;height:900px;background:#5c1a1a;overflow:hidden;color:#f5e6c8}
.gold-border{position:absolute;top:12px;left:12px;right:12px;bottom:12px;border:2px solid #c9a96e;pointer-events:none}
.geo-pattern{position:absolute;top:20px;left:20px;right:20px;bottom:20px;pointer-events:none;
background:repeating-linear-gradient(45deg,transparent,transparent 20px,#c9a96e08 20px,#c9a96e08 21px),
repeating-linear-gradient(-45deg,transparent,transparent 20px,#c9a96e08 20px,#c9a96e08 21px)}
.corner-motif{position:absolute;font-size:36px;filter:drop-shadow(0 0 8px #c9a96e44)}
.motif{position:absolute;font-size:48px;top:70px;left:50%;transform:translateX(-50%)}
.label{position:absolute;top:150px;width:100%;text-align:center;font-size:13px;letter-spacing:8px;text-transform:uppercase;color:#c9a96e}
.title{position:absolute;top:190px;width:100%;text-align:center;font-size:52px;color:#f5e6c8;font-weight:700;text-shadow:0 2px 10px #00000044}
.name{position:absolute;top:280px;width:100%;text-align:center;font-size:44px;color:#c9a96e;font-weight:700}
.ornate-line{position:absolute;top:345px;left:50%;transform:translateX(-50%);width:260px;height:3px;background:linear-gradient(90deg,transparent,#c9a96e,transparent)}
.message{position:absolute;top:380px;left:60px;right:60px;text-align:center;font-size:18px;line-height:1.9;color:#e8d4a2}
.motifs-bottom{position:absolute;bottom:100px;width:100%;text-align:center;font-size:36px;letter-spacing:20px}
.sender{position:absolute;bottom:55px;width:100%;text-align:center;font-size:15px;color:#c9a96e;letter-spacing:4px;text-transform:uppercase}
.top-ornament{position:absolute;top:25px;width:100%;text-align:center;font-size:18px;letter-spacing:16px;color:#c9a96e55}
</style></head><body>
<div class="card">
<div class="gold-border"></div>
<div class="geo-pattern"></div>
<div class="corner-motif" style="top:28px;left:28px">🏛️</div>
<div class="corner-motif" style="top:28px;right:28px">⚱️</div>
<div class="corner-motif" style="bottom:28px;left:28px">🎭</div>
<div class="corner-motif" style="bottom:28px;right:28px">🏛️</div>
<div class="top-ornament">✦ ✦ ✦ ✦ ✦</div>
<div class="motif">🎭</div>
<div class="label">Heritage &amp; Pride</div>
<div class="title">Happy Birthday</div>
<div class="name">${data.name}</div>
<div class="ornate-line"></div>
<div class="message">${msg}</div>
<div class="motifs-bottom">🏛 ⚱ 🎭</div>
<div class="sender">With respect &amp; love, ${data.sender || 'Me'}</div>
</div></body></html>`;
}

export function buildGoldenYears(data: CardData): string {
  const msg = data.message || 'Like the sunrise, each year brings new light and warmth. Wishing you a radiant birthday.';
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Georgia",serif;background:#8b6508}
.card{position:relative;width:600px;height:900px;background:linear-gradient(180deg,#b8860b 0%,#daa520 50%,#f0c040 100%);overflow:hidden;color:#3a2a00}
.sunburst{position:absolute;top:-200px;left:50%;transform:translateX(-50%);width:800px;height:800px;border-radius:50%;
background:conic-gradient(from 0deg,#ffd70000,#ffd70022,#ffd70000,#ffd70022,#ffd70000,#ffd70022,#ffd70000,#ffd70022,
#ffd70000,#ffd70022,#ffd70000,#ffd70022,#ffd70000,#ffd70022,#ffd70000,#ffd70022);pointer-events:none;opacity:0.6}
.glow{position:absolute;top:50px;left:50%;transform:translateX(-50%);width:120px;height:120px;border-radius:50%;
background:radial-gradient(circle,#fff8 0%,#ffd70044 40%,transparent 70%);pointer-events:none}
.sunrise{position:absolute;top:60px;left:50%;transform:translateX(-50%);font-size:64px;filter:drop-shadow(0 4px 12px #ffd70066)}
.label{position:absolute;top:170px;width:100%;text-align:center;font-size:14px;letter-spacing:6px;text-transform:uppercase;color:#5a3e00}
.title{position:absolute;top:220px;width:100%;text-align:center;font-size:54px;color:#3a2a00;font-weight:700}
.name{position:absolute;top:300px;width:100%;text-align:center;font-size:48px;color:#5a3e00;font-weight:700;text-shadow:0 1px 4px #ffd70044}
.gold-line{position:absolute;top:370px;left:50%;transform:translateX(-50%);width:140px;height:2px;background:#5a3e00}
.message{position:absolute;top:400px;left:60px;right:60px;text-align:center;font-size:18px;line-height:1.9;color:#4a3500}
.wisdom{position:absolute;top:520px;left:50%;transform:translateX(-50%);font-size:13px;letter-spacing:4px;text-transform:uppercase;color:#5a3e0088}
.sender{position:absolute;bottom:60px;width:100%;text-align:center;font-size:15px;color:#5a3e00;letter-spacing:3px;text-transform:uppercase}
.bottom-glow{position:absolute;bottom:0;left:0;right:0;height:100px;background:linear-gradient(0deg,#ffd70033,transparent);pointer-events:none}
</style></head><body>
<div class="card">
<div class="sunburst"></div>
<div class="glow"></div>
<div class="sunrise">🌅</div>
<div class="label">Celebrating</div>
<div class="title">Happy Birthday</div>
<div class="name">${data.name}</div>
<div class="gold-line"></div>
<div class="message">${msg}</div>
<div class="wisdom">✦ Golden Years ✦</div>
<div class="sender">From ${data.sender || 'Me'}</div>
<div class="bottom-glow"></div>
</div></body></html>`;
}

export function buildMilestone1(data: CardData): string {
  const msg = data.message || 'One year of pure joy, giggles, and endless love. What an amazing first trip around the sun!';
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Segoe UI","Comic Sans MS",sans-serif;background:#fce4ec}
.card{position:relative;width:600px;height:900px;background:linear-gradient(180deg,#fce4ec 0%,#f8bbd0 50%,#fce4ec 100%);overflow:hidden;color:#880e4f}
.balloon{position:absolute;font-size:48px;filter:drop-shadow(0 4px 8px rgba(0,0,0,0.1))}
.big-number{position:absolute;top:120px;width:100%;text-align:center;font-size:200px;font-weight:900;color:#e91e63;
text-shadow:4px 4px 0 #f48fb1,8px 8px 0 #f8bbd0;opacity:0.9}
.baby-icons{position:absolute;top:100px;width:100%;text-align:center;font-size:40px;letter-spacing:20px}
.happy{position:absolute;top:370px;width:100%;text-align:center;font-size:28px;color:#ad1457;font-weight:700}
.name{position:absolute;top:430px;width:100%;text-align:center;font-size:50px;color:#880e4f;font-weight:900}
.first{position:absolute;top:500px;width:100%;text-align:center;font-size:16px;letter-spacing:6px;text-transform:uppercase;color:#c2185b}
.message{position:absolute;top:550px;left:60px;right:60px;text-align:center;font-size:18px;line-height:1.8;color:#ad1457}
.confetti{position:absolute;width:8px;height:8px;border-radius:50%;pointer-events:none}
.sender{position:absolute;bottom:55px;width:100%;text-align:center;font-size:15px;color:#c2185b;letter-spacing:3px}
</style></head><body>
<div class="card">
<div class="baby-icons">🍼 🎈 🧸 🍼</div>
<div class="balloon" style="top:160px;left:50px">🎈</div>
<div class="balloon" style="top:200px;left:100px">🎀</div>
<div class="balloon" style="top:140px;right:50px">🎈</div>
<div class="balloon" style="top:190px;right:100px">✨</div>
<div class="big-number">1</div>
<div class="happy">Happy Birthday</div>
<div class="name">${data.name}</div>
<div class="first">✦ First Birthday ✦</div>
<div class="message">${msg}</div>
<div class="confetti" style="top:200px;left:80px;background:#e91e63"></div>
<div class="confetti" style="top:250px;left:150px;background:#f48fb1"></div>
<div class="confetti" style="top:180px;right:120px;background:#ff80ab"></div>
<div class="confetti" style="top:300px;right:80px;background:#e91e63"></div>
<div class="confetti" style="top:350px;left:100px;background:#f48fb1"></div>
<div class="confetti" style="top:280px;right:150px;background:#ff80ab"></div>
<div class="sender">With love, ${data.sender || 'Me'}</div>
</div></body></html>`;
}

export function buildMilestone5(data: CardData): string {
  const msg = data.message || 'Five years of curiosity, adventure, and endless discovery. The world is your playground!';
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Segoe UI",sans-serif;background:#c8e6c9}
.card{position:relative;width:600px;height:900px;background:linear-gradient(180deg,#e8f5e9 0%,#c8e6c9 50%,#a5d6a7 100%);overflow:hidden;color:#1b5e20}
.tree{position:absolute;bottom:0;left:0;right:0;height:180px;
background:linear-gradient(0deg,#4caf5022 0%,transparent 100%);pointer-events:none}
.big-number{position:absolute;top:120px;width:100%;text-align:center;font-size:200px;font-weight:900;color:#2e7d32;
text-shadow:4px 4px 0 #66bb6a,8px 8px 0 #a5d6a7}
.explorer-icons{position:absolute;top:90px;width:100%;text-align:center;font-size:40px;letter-spacing:16px}
.compass{position:absolute;top:380px;left:50%;transform:translateX(-50%);width:70px;height:70px;border-radius:50%;border:3px solid #2e7d32;display:flex;align-items:center;justify-content:center;font-size:32px;background:#e8f5e9}
.happy{position:absolute;top:180px;width:100%;text-align:center;font-size:28px;color:#2e7d32;font-weight:700}
.name{position:absolute;top:470px;width:100%;text-align:center;font-size:48px;color:#1b5e20;font-weight:900}
.explore{position:absolute;top:540px;width:100%;text-align:center;font-size:16px;letter-spacing:6px;text-transform:uppercase;color:#388e3c}
.message{position:absolute;top:580px;left:60px;right:60px;text-align:center;font-size:18px;line-height:1.8;color:#2e7d32}
.stars{position:absolute;width:20px;height:20px;font-size:20px;pointer-events:none}
.sender{position:absolute;bottom:55px;width:100%;text-align:center;font-size:15px;color:#388e3c;letter-spacing:3px}
</style></head><body>
<div class="card">
<div class="tree"></div>
<div class="explorer-icons">🎩 🔍 ⭐ 🧭</div>
<div class="happy">Happy Birthday</div>
<div class="big-number">5</div>
<div class="compass">🧭</div>
<div class="name">${data.name}</div>
<div class="explore">✦ Explorer Turns Five ✦</div>
<div class="message">${msg}</div>
<div class="stars" style="top:200px;left:80px">⭐</div>
<div class="stars" style="top:160px;right:80px">⭐</div>
<div class="stars" style="top:320px;left:60px">🌟</div>
<div class="stars" style="top:300px;right:60px">✨</div>
<div class="sender">From ${data.sender || 'Me'}</div>
</div></body></html>`;
}

export function buildMilestone10(data: CardData): string {
  const msg = data.message || 'Double digits! Ten years of awesome. Here\'s to a decade of memories and a lifetime ahead!';
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Segoe UI",sans-serif;background:#bbdefb}
.card{position:relative;width:600px;height:900px;background:linear-gradient(135deg,#e3f2fd 0%,#bbdefb 50%,#90caf9 100%);overflow:hidden;color:#0d47a1}
.confetti-dot{position:absolute;width:10px;height:10px;border-radius:50%;pointer-events:none}
.big-number{position:absolute;top:130px;width:100%;text-align:center;font-size:220px;font-weight:900;color:#1565c0;
text-shadow:4px 4px 0 #42a5f5,8px 8px 0 #90caf9}
.party-icons{position:absolute;top:90px;width:100%;text-align:center;font-size:44px;letter-spacing:14px}
.popper{position:absolute;font-size:52px;filter:drop-shadow(0 3px 8px rgba(0,0,0,0.15))}
.happy{position:absolute;top:400px;width:100%;text-align:center;font-size:28px;color:#1565c0;font-weight:700}
.name{position:absolute;top:460px;width:100%;text-align:center;font-size:50px;color:#0d47a1;font-weight:900}
.double{position:absolute;top:530px;width:100%;text-align:center;font-size:16px;letter-spacing:6px;text-transform:uppercase;color:#1976d2}
.message{position:absolute;top:570px;left:60px;right:60px;text-align:center;font-size:18px;line-height:1.8;color:#1565c0}
.sender{position:absolute;bottom:55px;width:100%;text-align:center;font-size:15px;color:#1976d2;letter-spacing:3px}
</style></head><body>
<div class="card">
<div class="party-icons">🎉 🎊 🎈 🎉</div>
<div class="confetti-dot" style="top:120px;left:60px;background:#e91e63"></div>
<div class="confetti-dot" style="top:180px;left:120px;background:#ff9800"></div>
<div class="confetti-dot" style="top:150px;right:100px;background:#4caf50"></div>
<div class="confetti-dot" style="top:220px;right:60px;background:#2196f3"></div>
<div class="confetti-dot" style="top:260px;left:80px;background:#9c27b0"></div>
<div class="confetti-dot" style="top:300px;right:120px;background:#f44336"></div>
<div class="confetti-dot" style="top:340px;left:140px;background:#ffeb3b"></div>
<div class="confetti-dot" style="top:280px;left:200px;background:#00bcd4"></div>
<div class="confetti-dot" style="top:360px;right:80px;background:#e91e63"></div>
<div class="confetti-dot" style="top:400px;left:60px;background:#ff9800"></div>
<div class="confetti-dot" style="top:140px;left:300px;background:#4caf50"></div>
<div class="confetti-dot" style="top:380px;right:200px;background:#2196f3"></div>
<div class="confetti-dot" style="top:240px;left:40px;background:#9c27b0"></div>
<div class="confetti-dot" style="top:320px;left:50px;background:#ffeb3b"></div>
<div class="big-number">10</div>
<div class="popper" style="top:200px;left:40px">🎉</div>
<div class="popper" style="top:200px;right:40px">🎊</div>
<div class="happy">Happy Birthday</div>
<div class="name">${data.name}</div>
<div class="double">✦ Double Digits ✦</div>
<div class="message">${msg}</div>
<div class="sender">From ${data.sender || 'Me'}</div>
</div></body></html>`;
}

export function buildMilestone13(data: CardData): string {
  const msg = data.message || 'Welcome to the teenage years! Level 13 unlocked — the adventure is just getting started.';
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Segoe UI",sans-serif;background:#5c6bc0}
.card{position:relative;width:600px;height:900px;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);overflow:hidden;color:#fff}
.grid{position:absolute;top:0;left:0;right:0;bottom:0;
background:repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(255,255,255,0.03) 40px,rgba(255,255,255,0.03) 41px),
repeating-linear-gradient(90deg,transparent,transparent 40px,rgba(255,255,255,0.03) 40px,rgba(255,255,255,0.03) 41px);pointer-events:none}
.glow-circle{position:absolute;width:300px;height:300px;border-radius:50%;
background:radial-gradient(circle,rgba(255,255,255,0.1) 0%,transparent 70%);pointer-events:none}
.big-number{position:absolute;top:130px;width:100%;text-align:center;font-size:220px;font-weight:900;color:#fff;
text-shadow:0 0 40px rgba(255,255,255,0.3),4px 4px 0 rgba(0,0,0,0.2)}
.teen-icons{position:absolute;top:80px;width:100%;text-align:center;font-size:44px;letter-spacing:16px}
.unlock{position:absolute;top:390px;width:100%;text-align:center;font-size:22px;letter-spacing:3px;color:#e8d5ff;font-weight:700}
.happy{position:absolute;top:440px;width:100%;text-align:center;font-size:28px;color:#fff;font-weight:700}
.name{position:absolute;top:500px;width:100%;text-align:center;font-size:48px;color:#fff;font-weight:900}
.level{position:absolute;top:570px;width:100%;text-align:center;font-size:16px;letter-spacing:4px;color:#d1c4e9}
.message{position:absolute;top:610px;left:60px;right:60px;text-align:center;font-size:18px;line-height:1.8;color:#e8d5ff}
.sender{position:absolute;bottom:55px;width:100%;text-align:center;font-size:15px;color:#d1c4e9;letter-spacing:3px}
.pixel{position:absolute;width:6px;height:6px;background:rgba(255,255,255,0.15);pointer-events:none}
</style></head><body>
<div class="card">
<div class="grid"></div>
<div class="glow-circle" style="top:100px;left:50%;transform:translateX(-50%)"></div>
<div class="teen-icons">📱 🎮 💜 ⚡</div>
<div class="big-number">13</div>
<div class="unlock">🔓 Level 13 Unlocked!</div>
<div class="happy">Happy Birthday</div>
<div class="name">${data.name}</div>
<div class="level">✦ Teen Mode Activated ✦</div>
<div class="message">${msg}</div>
<div class="pixel" style="top:150px;left:80px"></div>
<div class="pixel" style="top:180px;left:140px"></div>
<div class="pixel" style="top:200px;right:100px"></div>
<div class="pixel" style="top:260px;right:60px"></div>
<div class="pixel" style="top:300px;left:100px"></div>
<div class="sender">From ${data.sender || 'Me'}</div>
</div></body></html>`;
}

export function buildMilestone16(data: CardData): string {
  const msg = data.message || 'Sixteen and absolutely stunning. May this year be filled with magic, laughter, and unforgettable moments.';
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Segoe UI",sans-serif;background:#f8bbd0}
.card{position:relative;width:600px;height:900px;background:linear-gradient(180deg,#fce4ec 0%,#f8bbd0 40%,#f48fb1 100%);overflow:hidden;color:#880e4f}
.sparkle{position:absolute;font-size:24px;pointer-events:none;filter:drop-shadow(0 0 4px #ffd70088)}
.tiara{position:absolute;top:70px;left:50%;transform:translateX(-50%);font-size:64px;filter:drop-shadow(0 4px 12px #ffd70066)}
.gold-bar{position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,#ffd700,#ffecb3,#ffd700)}
.gold-bar-bottom{position:absolute;bottom:0;left:0;right:0;height:4px;background:linear-gradient(90deg,#ffd700,#ffecb3,#ffd700)}
.big-number{position:absolute;top:160px;width:100%;text-align:center;font-size:200px;font-weight:900;color:#c2185b;
text-shadow:4px 4px 0 #f48fb1,0 0 30px #e91e6333}
.happy{position:absolute;top:380px;width:100%;text-align:center;font-size:28px;color:#ad1457;font-weight:700}
.name{position:absolute;top:440px;width:100%;text-align:center;font-size:48px;color:#880e4f;font-weight:900}
.sweet{position:absolute;top:510px;width:100%;text-align:center;font-size:16px;letter-spacing:6px;text-transform:uppercase;color:#c2185b}
.message{position:absolute;top:550px;left:60px;right:60px;text-align:center;font-size:18px;line-height:1.8;color:#ad1457}
.crown{position:absolute;font-size:32px}
.sender{position:absolute;bottom:55px;width:100%;text-align:center;font-size:15px;color:#c2185b;letter-spacing:3px}
</style></head><body>
<div class="card">
<div class="gold-bar"></div>
<div class="gold-bar-bottom"></div>
<div class="tiara">👑</div>
<div class="sparkle" style="top:80px;left:60px">✨</div>
<div class="sparkle" style="top:100px;right:60px">💫</div>
<div class="sparkle" style="top:160px;left:80px">✨</div>
<div class="sparkle" style="top:180px;right:80px">⭐</div>
<div class="sparkle" style="top:350px;left:50px">💫</div>
<div class="sparkle" style="top:370px;right:50px">✨</div>
<div class="big-number">16</div>
<div class="happy">Happy Birthday</div>
<div class="name">${data.name}</div>
<div class="sweet">✦ Sweet Sixteen ✦</div>
<div class="message">${msg}</div>
<div class="crown" style="bottom:100px;left:80px">👑</div>
<div class="crown" style="bottom:100px;right:80px">💎</div>
<div class="sender">With love, ${data.sender || 'Me'}</div>
</div></body></html>`;
}

export function buildMilestone18(data: CardData): string {
  const msg = data.message || 'Eighteen and unlimited possibilities ahead. The road is open and the future is yours to write.';
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Segoe UI",sans-serif;background:#ff9800}
.card{position:relative;width:600px;height:900px;background:linear-gradient(180deg,#ff9800 0%,#ffb74d 30%,#ffe0b2 60%,#90caf9 100%);overflow:hidden;color:#1a237e}
.sun{position:absolute;top:-80px;left:50%;transform:translateX(-50%);width:300px;height:300px;border-radius:50%;
background:radial-gradient(circle,#ffecb3 0%,#ff980044 50%,transparent 70%);pointer-events:none}
.ray{position:absolute;top:0;left:50%;width:2px;height:200px;background:linear-gradient(180deg,#ffecb366,transparent);transform-origin:top center;pointer-events:none}
.road{position:absolute;bottom:0;left:0;right:0;height:160px;
background:linear-gradient(180deg,transparent 0%,#37474f33 30%,#37474f55 100%);pointer-events:none}
.road-line{position:absolute;bottom:60px;left:50%;transform:translateX(-50%);width:4px;height:100px;background:repeating-linear-gradient(180deg,#fff 0px,#fff 12px,transparent 12px,transparent 24px)}
.grad{position:absolute;top:60px;left:50%;transform:translateX(-50%);font-size:56px;filter:drop-shadow(0 3px 8px rgba(0,0,0,0.15))}
.big-number{position:absolute;top:160px;width:100%;text-align:center;font-size:220px;font-weight:900;color:#1a237e;
text-shadow:4px 4px 0 #5c6bc0,8px 8px 0 #90caf9}
.happy{position:absolute;top:410px;width:100%;text-align:center;font-size:28px;color:#283593;font-weight:700}
.name{position:absolute;top:470px;width:100%;text-align:center;font-size:48px;color:#1a237e;font-weight:900}
.adult{position:absolute;top:540px;width:100%;text-align:center;font-size:16px;letter-spacing:6px;text-transform:uppercase;color:#3949ab}
.message{position:absolute;top:580px;left:60px;right:60px;text-align:center;font-size:18px;line-height:1.8;color:#283593}
.sender{position:absolute;bottom:50px;width:100%;text-align:center;font-size:15px;color:#3949ab;letter-spacing:3px}
</style></head><body>
<div class="card">
<div class="sun"></div>
<div class="ray" style="transform:rotate(-30deg)"></div>
<div class="ray" style="transform:rotate(-15deg)"></div>
<div class="ray" style="transform:rotate(0deg)"></div>
<div class="ray" style="transform:rotate(15deg)"></div>
<div class="ray" style="transform:rotate(30deg)"></div>
<div class="road"></div>
<div class="road-line"></div>
<div class="grad">🎓</div>
<div class="big-number">18</div>
<div class="happy">Happy Birthday</div>
<div class="name">${data.name}</div>
<div class="adult">✦ New Beginnings ✦</div>
<div class="message">${msg}</div>
<div class="sender">From ${data.sender || 'Me'}</div>
</div></body></html>`;
}

export function buildMilestone21(data: CardData): string {
  const msg = data.message || 'Twenty-one and iconic. Here\'s to the beginning of your greatest chapter yet. Cheers!';
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Segoe UI",sans-serif;background:#0a0a1a}
.card{position:relative;width:600px;height:900px;background:linear-gradient(180deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%);overflow:hidden;color:#d4af37}
.starfield{position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none}
.star{position:absolute;width:2px;height:2px;background:#fff;border-radius:50%;opacity:0.6}
.starburst{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:500px;height:500px;border-radius:50%;
background:conic-gradient(from 0deg,#d4af3700,#d4af3711,#d4af3700,#d4af3711,#d4af3700,#d4af3711,
#d4af3700,#d4af3711,#d4af3700,#d4af3711,#d4af3700,#d4af3711);pointer-events:none}
.glow{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:200px;height:200px;border-radius:50%;
background:radial-gradient(circle,#d4af3733 0%,transparent 70%);pointer-events:none}
.champagne{position:absolute;top:70px;left:50%;transform:translateX(-50%);font-size:56px;filter:drop-shadow(0 4px 12px #d4af3766)}
.big-number{position:absolute;top:170px;width:100%;text-align:center;font-size:220px;font-weight:900;color:#d4af37;
text-shadow:0 0 30px #d4af3744,4px 4px 0 #b8860b}
.happy{position:absolute;top:420px;width:100%;text-align:center;font-size:28px;color:#f0d060;font-weight:700}
.name{position:absolute;top:480px;width:100%;text-align:center;font-size:48px;color:#d4af37;font-weight:900}
.legal{position:absolute;top:550px;width:100%;text-align:center;font-size:16px;letter-spacing:6px;text-transform:uppercase;color:#b8860b}
.message{position:absolute;top:590px;left:60px;right:60px;text-align:center;font-size:18px;line-height:1.8;color:#e8c860}
.sender{position:absolute;bottom:55px;width:100%;text-align:center;font-size:15px;color:#b8860b;letter-spacing:3px}
</style></head><body>
<div class="card">
<div class="starfield">
<div class="star" style="top:40px;left:60px"></div>
<div class="star" style="top:80px;left:200px"></div>
<div class="star" style="top:120px;right:100px"></div>
<div class="star" style="top:60px;right:180px"></div>
<div class="star" style="top:200px;left:40px"></div>
<div class="star" style="top:300px;right:60px"></div>
<div class="star" style="top:400px;left:100px"></div>
<div class="star" style="top:500px;right:120px"></div>
<div class="star" style="top:600px;left:80px"></div>
<div class="star" style="top:700px;right:80px"></div>
<div class="star" style="top:150px;left:400px"></div>
<div class="star" style="top:350px;left:50px"></div>
<div class="star" style="top:450px;right:40px"></div>
<div class="star" style="top:550px;left:180px"></div>
<div class="star" style="top:650px;right:200px"></div>
</div>
<div class="starburst"></div>
<div class="glow"></div>
<div class="champagne">🥂</div>
<div class="big-number">21</div>
<div class="happy">Happy Birthday</div>
<div class="name">${data.name}</div>
<div class="legal">✦ Iconic Celebration ✦</div>
<div class="message">${msg}</div>
<div class="sender">Cheers, ${data.sender || 'Me'}</div>
</div></body></html>`;
}

export function buildMilestone30(data: CardData): string {
  const msg = data.message || 'Thirty and thriving. You\'ve built something beautiful — here\'s to the next chapter of greatness.';
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Segoe UI",sans-serif;background:#e8f5e9}
.card{position:relative;width:600px;height:900px;background:linear-gradient(180deg,#e8f5e9 0%,#c8e6c9 50%,#a5d6a7 100%);overflow:hidden;color:#2e7d32}
.leaf{position:absolute;font-size:32px;pointer-events:none;opacity:0.4}
.accent-line{position:absolute;top:0;left:50%;transform:translateX(-50%);width:2px;height:100%;background:linear-gradient(180deg,transparent,#81c78433,transparent);pointer-events:none}
.foliage{position:absolute;font-size:28px;pointer-events:none}
.big-number{position:absolute;top:140px;width:100%;text-align:center;font-size:220px;font-weight:900;color:#2e7d32;
text-shadow:4px 4px 0 #66bb6a,8px 8px 0 #a5d6a7}
.happy{position:absolute;top:390px;width:100%;text-align:center;font-size:28px;color:#388e3c;font-weight:700}
.name{position:absolute;top:450px;width:100%;text-align:center;font-size:48px;color:#1b5e20;font-weight:900}
.thirty{position:absolute;top:520px;width:100%;text-align:center;font-size:16px;letter-spacing:6px;text-transform:uppercase;color:#43a047}
.message{position:absolute;top:560px;left:60px;right:60px;text-align:center;font-size:18px;line-height:1.8;color:#2e7d32}
.sender{position:absolute;bottom:55px;width:100%;text-align:center;font-size:15px;color:#43a047;letter-spacing:3px}
.minimal-dot{position:absolute;width:6px;height:6px;border-radius:50%;background:#81c78455;pointer-events:none}
</style></head><body>
<div class="card">
<div class="accent-line"></div>
<div class="leaf" style="top:60px;left:50px">🌿</div>
<div class="leaf" style="top:80px;right:50px">🍃</div>
<div class="leaf" style="top:400px;left:40px">🌿</div>
<div class="leaf" style="top:420px;right:40px">🍃</div>
<div class="foliage" style="bottom:120px;left:60px">🌿</div>
<div class="foliage" style="bottom:140px;right:60px">🌿</div>
<div class="big-number">30</div>
<div class="happy">Happy Birthday</div>
<div class="name">${data.name}</div>
<div class="thirty">✦ Confident &amp; Stylish ✦</div>
<div class="message">${msg}</div>
<div class="minimal-dot" style="top:200px;left:100px"></div>
<div class="minimal-dot" style="top:250px;right:100px"></div>
<div class="minimal-dot" style="top:350px;left:80px"></div>
<div class="minimal-dot" style="top:600px;right:80px"></div>
<div class="sender">From ${data.sender || 'Me'}</div>
</div></body></html>`;
}

export function buildMilestone40(data: CardData): string {
  const msg = data.message || 'Forty, fabulous, and fearless. You\'re a masterpiece still being painted. Cheers to brilliance!';
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Segoe UI",sans-serif;background:#1a1a1a}
.card{position:relative;width:600px;height:900px;background:#000;overflow:hidden;color:#d4af37}
.deco-line{position:absolute;pointer-events:none;background:#d4af37}
.deco-h{height:1px}
.deco-v{width:1px}
.deco-pattern{position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none}
.deco-corner{position:absolute;width:60px;height:60px;pointer-events:none}
.deco-corner::before,.deco-corner::after{content:"";position:absolute;background:#d4af37}
.deco-corner-tl{top:30px;left:30px}
.deco-corner-tl::before{top:0;left:0;width:60px;height:1px}
.deco-corner-tl::after{top:0;left:0;width:1px;height:60px}
.deco-corner-tr{top:30px;right:30px}
.deco-corner-tr::before{top:0;right:0;width:60px;height:1px}
.deco-corner-tr::after{top:0;right:0;width:1px;height:60px}
.deco-corner-bl{bottom:30px;left:30px}
.deco-corner-bl::before{bottom:0;left:0;width:60px;height:1px}
.deco-corner-bl::after{bottom:0;left:0;width:1px;height:60px}
.deco-corner-br{bottom:30px;right:30px}
.deco-corner-br::before{bottom:0;right:0;width:60px;height:1px}
.deco-corner-br::after{bottom:0;right:0;width:1px;height:60px}
.fan{position:absolute;top:50px;left:50%;transform:translateX(-50%);
width:200px;height:100px;border-top-left-radius:100px;border-top-right-radius:100px;border:1px solid #d4af3755;border-bottom:none;pointer-events:none}
.big-number{position:absolute;top:160px;width:100%;text-align:center;font-size:220px;font-weight:900;color:#d4af37;
text-shadow:0 0 30px #d4af3744,4px 4px 0 #8b6508}
.happy{position:absolute;top:410px;width:100%;text-align:center;font-size:28px;color:#f0d060;font-weight:700}
.name{position:absolute;top:470px;width:100%;text-align:center;font-size:48px;color:#d4af37;font-weight:900}
.fabulous{position:absolute;top:540px;width:100%;text-align:center;font-size:16px;letter-spacing:8px;text-transform:uppercase;color:#b8860b}
.message{position:absolute;top:580px;left:60px;right:60px;text-align:center;font-size:18px;line-height:1.8;color:#e8c860}
.art-deco{position:absolute;width:40px;height:40px;border:1px solid #d4af3733;transform:rotate(45deg);pointer-events:none}
.sender{position:absolute;bottom:55px;width:100%;text-align:center;font-size:15px;color:#b8860b;letter-spacing:3px}
</style></head><body>
<div class="card">
<div class="deco-corner deco-corner-tl"></div>
<div class="deco-corner deco-corner-tr"></div>
<div class="deco-corner deco-corner-bl"></div>
<div class="deco-corner deco-corner-br"></div>
<div class="deco-line deco-h" style="top:30px;left:90px;width:calc(100% - 180px)"></div>
<div class="deco-line deco-h" style="bottom:30px;left:90px;width:calc(100% - 180px)"></div>
<div class="deco-line deco-v" style="top:90px;left:30px;height:calc(100% - 180px)"></div>
<div class="deco-line deco-v" style="top:90px;right:30px;height:calc(100% - 180px)"></div>
<div class="fan"></div>
<div class="art-deco" style="top:100px;left:100px"></div>
<div class="art-deco" style="top:100px;right:100px"></div>
<div class="art-deco" style="bottom:100px;left:100px"></div>
<div class="art-deco" style="bottom:100px;right:100px"></div>
<div class="big-number">40</div>
<div class="happy">Happy Birthday</div>
<div class="name">${data.name}</div>
<div class="fabulous">✦ Bold &amp; Fabulous ✦</div>
<div class="message">${msg}</div>
<div class="sender">From ${data.sender || 'Me'}</div>
</div></body></html>`;
}

export function buildMilestone50(data: CardData): string {
  const msg = data.message || 'Fifty years of brilliance and counting. A golden life deserves a golden celebration!';
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Georgia",serif;background:#8b6508}
.card{position:relative;width:600px;height:900px;background:linear-gradient(180deg,#b8860b 0%,#cd9b1d 50%,#daa520 100%);overflow:hidden;color:#3a2200}
.gold-texture{position:absolute;top:0;left:0;right:0;bottom:0;
background:repeating-linear-gradient(45deg,transparent,transparent 30px,rgba(255,255,255,0.03) 30px,rgba(255,255,255,0.03) 31px);pointer-events:none}
.gold-border{position:absolute;top:16px;left:16px;right:16px;bottom:16px;border:2px solid #3a220044;pointer-events:none}
.crown{position:absolute;top:60px;left:50%;transform:translateX(-50%);font-size:64px;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.2))}
.leaf-deco{position:absolute;font-size:28px;pointer-events:none;opacity:0.6}
.big-number{position:absolute;top:170px;width:100%;text-align:center;font-size:220px;font-weight:900;color:#3a2200;
text-shadow:4px 4px 0 #8b6508,0 0 20px rgba(255,215,0,0.3)}
.happy{position:absolute;top:420px;width:100%;text-align:center;font-size:28px;color:#4a3000;font-weight:700}
.name{position:absolute;top:480px;width:100%;text-align:center;font-size:48px;color:#3a2200;font-weight:900}
.jubilee{position:absolute;top:550px;width:100%;text-align:center;font-size:16px;letter-spacing:8px;text-transform:uppercase;color:#5a3e00}
.message{position:absolute;top:590px;left:60px;right:60px;text-align:center;font-size:18px;line-height:1.8;color:#4a3000}
.trophy{position:absolute;font-size:32px}
.sender{position:absolute;bottom:55px;width:100%;text-align:center;font-size:15px;color:#5a3e00;letter-spacing:3px}
</style></head><body>
<div class="card">
<div class="gold-texture"></div>
<div class="gold-border"></div>
<div class="crown">👑</div>
<div class="leaf-deco" style="top:130px;left:60px">🏆</div>
<div class="leaf-deco" style="top:130px;right:60px">✨</div>
<div class="leaf-deco" style="top:380px;left:50px">🌿</div>
<div class="leaf-deco" style="top:380px;right:50px">🌿</div>
<div class="big-number">50</div>
<div class="happy">Happy Birthday</div>
<div class="name">${data.name}</div>
<div class="jubilee">✦ Golden Jubilee ✦</div>
<div class="message">${msg}</div>
<div class="trophy" style="bottom:100px;left:80px">🏆</div>
<div class="trophy" style="bottom:100px;right:80px">👑</div>
<div class="sender">With admiration, ${data.sender || 'Me'}</div>
</div></body></html>`;
}

export function buildMilestone60(data: CardData): string {
  const msg = data.message || 'Sixty years of brilliance, like a diamond forged through time. You shine brighter than ever.';
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Segoe UI",sans-serif;background:#b0bec5}
.card{position:relative;width:600px;height:900px;background:linear-gradient(135deg,#eceff1 0%,#cfd8dc 30%,#b0bec5 60%,#90a4ae 100%);overflow:hidden;color:#263238}
.facet{position:absolute;border:1px solid rgba(0,0,0,0.06);pointer-events:none}
.sparkle{position:absolute;font-size:24px;pointer-events:none;filter:drop-shadow(0 0 6px rgba(255,255,255,0.8))}
.diamond-border{position:absolute;top:20px;left:20px;right:20px;bottom:20px;pointer-events:none;
border:1px solid #78909c44;clip-path:polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)}
.crystal{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:400px;height:400px;border-radius:50%;
background:radial-gradient(circle,rgba(255,255,255,0.3) 0%,rgba(255,255,255,0.1) 40%,transparent 70%);pointer-events:none}
.big-number{position:absolute;top:150px;width:100%;text-align:center;font-size:220px;font-weight:900;color:#37474f;
text-shadow:4px 4px 0 #78909c,0 0 20px rgba(255,255,255,0.3)}
.gem{position:absolute;top:100px;left:50%;transform:translateX(-50%);font-size:48px;filter:drop-shadow(0 2px 8px rgba(0,0,0,0.15))}
.happy{position:absolute;top:400px;width:100%;text-align:center;font-size:28px;color:#455a64;font-weight:700}
.name{position:absolute;top:460px;width:100%;text-align:center;font-size:48px;color:#263238;font-weight:900}
.diamond{position:absolute;top:530px;width:100%;text-align:center;font-size:16px;letter-spacing:6px;text-transform:uppercase;color:#546e7a}
.message{position:absolute;top:570px;left:60px;right:60px;text-align:center;font-size:18px;line-height:1.8;color:#455a64}
.sender{position:absolute;bottom:55px;width:100%;text-align:center;font-size:15px;color:#546e7a;letter-spacing:3px}
</style></head><body>
<div class="card">
<div class="diamond-border"></div>
<div class="crystal"></div>
<div class="facet" style="top:60px;left:100px;width:200px;height:100px;transform:rotate(30deg)"></div>
<div class="facet" style="top:200px;right:80px;width:150px;height:80px;transform:rotate(-20deg)"></div>
<div class="facet" style="bottom:200px;left:80px;width:180px;height:90px;transform:rotate(15deg)"></div>
<div class="gem">💎</div>
<div class="sparkle" style="top:120px;left:80px">💠</div>
<div class="sparkle" style="top:140px;right:80px">✨</div>
<div class="sparkle" style="top:350px;left:60px">💎</div>
<div class="sparkle" style="top:370px;right:60px">✨</div>
<div class="big-number">60</div>
<div class="happy">Happy Birthday</div>
<div class="name">${data.name}</div>
<div class="diamond">✦ Brilliant &amp; Precious ✦</div>
<div class="message">${msg}</div>
<div class="sender">With love, ${data.sender || 'Me'}</div>
</div></body></html>`;
}

export function buildMilestone70(data: CardData): string {
  const msg = data.message || 'Seventy years of a life well-lived. Your legacy branches out and touches everyone around you.';
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Georgia",serif;background:#bcaaa4}
.card{position:relative;width:600px;height:900px;background:linear-gradient(180deg,#d7ccc8 0%,#bcaaa4 50%,#a1887f 100%);overflow:hidden;color:#3e2723}
.frame{position:absolute;top:24px;left:24px;right:24px;bottom:24px;border:2px solid #5d403733;pointer-events:none}
.branch{position:absolute;width:2px;background:linear-gradient(180deg,#5d403744,transparent);pointer-events:none}
.leaf-node{position:absolute;font-size:18px;pointer-events:none;opacity:0.4}
.legacy-frame{position:absolute;top:80px;left:50%;transform:translateX(-50%);width:100px;height:120px;
border:2px solid #5d403733;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:40px;
background:rgba(255,255,255,0.2)}
.big-number{position:absolute;top:230px;width:100%;text-align:center;font-size:220px;font-weight:900;color:#4e342e;
text-shadow:4px 4px 0 #8d6e63,8px 8px 0 #bcaaa4}
.happy{position:absolute;top:470px;width:100%;text-align:center;font-size:28px;color:#5d4037;font-weight:700}
.name{position:absolute;top:530px;width:100%;text-align:center;font-size:48px;color:#3e2723;font-weight:900}
.honour{position:absolute;top:600px;width:100%;text-align:center;font-size:16px;letter-spacing:6px;text-transform:uppercase;color:#6d4c41}
.message{position:absolute;top:640px;left:60px;right:60px;text-align:center;font-size:18px;line-height:1.8;color:#5d4037}
.tree-base{position:absolute;bottom:40px;left:50%;transform:translateX(-50%);width:4px;height:60px;background:linear-gradient(180deg,#5d403744,transparent)}
.sender{position:absolute;bottom:55px;width:100%;text-align:center;font-size:15px;color:#6d4c41;letter-spacing:3px}
</style></head><body>
<div class="card">
<div class="frame"></div>
<div class="branch" style="top:100px;left:200px;height:120px"></div>
<div class="branch" style="top:100px;right:200px;height:120px"></div>
<div class="branch" style="top:140px;left:160px;height:80px;transform:rotate(30deg)"></div>
<div class="branch" style="top:140px;right:160px;height:80px;transform:rotate(-30deg)"></div>
<div class="leaf-node" style="top:90px;left:180px">🍃</div>
<div class="leaf-node" style="top:90px;right:180px">🍃</div>
<div class="leaf-node" style="top:130px;left:140px">🍂</div>
<div class="leaf-node" style="top:130px;right:140px">🍂</div>
<div class="legacy-frame">🏅</div>
<div class="big-number">70</div>
<div class="happy">Happy Birthday</div>
<div class="name">${data.name}</div>
<div class="honour">✦ Honourable Legacy ✦</div>
<div class="message">${msg}</div>
<div class="tree-base"></div>
<div class="sender">With deep respect, ${data.sender || 'Me'}</div>
</div></body></html>`;
}

export function buildMilestone80(data: CardData): string {
  const msg = data.message || 'Eighty years of grace and wisdom. Like soft light at dawn, you illuminate every life you touch.';
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Georgia","Times New Roman",serif;background:#e1bee7}
.card{position:relative;width:600px;height:900px;background:linear-gradient(180deg,#f3e5f5 0%,#e1bee7 40%,#ce93d8 100%);overflow:hidden;color:#4a148c}
.light-ray{position:absolute;top:0;left:50%;width:2px;height:100%;background:linear-gradient(180deg,rgba(255,255,255,0.4),transparent);transform-origin:top center;pointer-events:none}
.soft-glow{position:absolute;top:20px;left:50%;transform:translateX(-50%);width:300px;height:300px;border-radius:50%;
background:radial-gradient(circle,rgba(255,255,255,0.5) 0%,rgba(255,255,255,0.2) 30%,transparent 60%);pointer-events:none}
.dove{position:absolute;top:60px;left:50%;transform:translateX(-50%);font-size:56px;filter:drop-shadow(0 3px 10px rgba(0,0,0,0.1))}
.big-number{position:absolute;top:170px;width:100%;text-align:center;font-size:220px;font-weight:900;color:#6a1b9a;
text-shadow:4px 4px 0 #ba68c8,0 0 20px rgba(206,147,216,0.3)}
.happy{position:absolute;top:420px;width:100%;text-align:center;font-size:28px;color:#7b1fa2;font-weight:700}
.name{position:absolute;top:480px;width:100%;text-align:center;font-size:48px;color:#4a148c;font-weight:900}
.graceful{position:absolute;top:550px;width:100%;text-align:center;font-size:16px;letter-spacing:6px;text-transform:uppercase;color:#8e24aa}
.message{position:absolute;top:590px;left:60px;right:60px;text-align:center;font-size:18px;line-height:1.8;color:#6a1b9a}
.calligraphy-line{position:absolute;top:560px;left:50%;transform:translateX(-50%);width:160px;height:1px;
background:linear-gradient(90deg,transparent,#8e24aa66,transparent)}
.sender{position:absolute;bottom:55px;width:100%;text-align:center;font-size:15px;color:#8e24aa;letter-spacing:3px}
</style></head><body>
<div class="card">
<div class="soft-glow"></div>
<div class="light-ray" style="transform:rotate(-20deg)"></div>
<div class="light-ray" style="transform:rotate(-10deg)"></div>
<div class="light-ray" style="transform:rotate(0deg)"></div>
<div class="light-ray" style="transform:rotate(10deg)"></div>
<div class="light-ray" style="transform:rotate(20deg)"></div>
<div class="dove">🕊️</div>
<div class="big-number">80</div>
<div class="happy">Happy Birthday</div>
<div class="name">${data.name}</div>
<div class="graceful">✦ Graceful &amp; Wise ✦</div>
<div class="calligraphy-line"></div>
<div class="message">${msg}</div>
<div class="sender">With love and reverence, ${data.sender || 'Me'}</div>
</div></body></html>`;
}

export function buildMilestone90(data: CardData): string {
  const msg = data.message || 'Ninety years of a timeless journey. Every moment is a treasure, every memory a gift.';
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Georgia",serif;background:#bcaaa4}
.card{position:relative;width:600px;height:900px;background:linear-gradient(180deg,#efebe9 0%,#d7ccc8 50%,#bcaaa4 100%);overflow:hidden;color:#3e2723}
.scroll-border{position:absolute;top:14px;left:14px;right:14px;bottom:14px;
border:2px solid #8d6e6333;border-radius:8px;pointer-events:none}
.scroll-top{position:absolute;top:14px;left:50%;transform:translateX(-50%);width:200px;height:20px;
border-radius:10px 10px 0 0;border:2px solid #8d6e6333;border-bottom:none;background:#efebe944}
.scroll-bottom{position:absolute;bottom:14px;left:50%;transform:translateX(-50%);width:200px;height:20px;
border-radius:0 0 10px 10px;border:2px solid #8d6e6333;border-top:none;background:#efebe944}
.golden-glow{position:absolute;top:30%;left:50%;transform:translate(-50%,-50%);width:300px;height:300px;border-radius:50%;
background:radial-gradient(circle,#daa52022 0%,transparent 70%);pointer-events:none}
.hourglass{position:absolute;top:60px;left:50%;transform:translateX(-50%);font-size:56px;filter:drop-shadow(0 3px 10px rgba(0,0,0,0.15))}
.big-number{position:absolute;top:170px;width:100%;text-align:center;font-size:220px;font-weight:900;color:#5d4037;
text-shadow:4px 4px 0 #a1887f,8px 8px 0 #d7ccc8}
.happy{position:absolute;top:420px;width:100%;text-align:center;font-size:28px;color:#4e342e;font-weight:700}
.name{position:absolute;top:480px;width:100%;text-align:center;font-size:48px;color:#3e2723;font-weight:900}
.timeless{position:absolute;top:550px;width:100%;text-align:center;font-size:16px;letter-spacing:6px;text-transform:uppercase;color:#6d4c41}
.message{position:absolute;top:590px;left:60px;right:60px;text-align:center;font-size:18px;line-height:1.8;color:#5d4037}
.vintage-badge{position:absolute;top:530px;left:50%;transform:translateX(-50%);width:60px;height:60px;border-radius:50%;
border:1px solid #8d6e6344;display:flex;align-items:center;justify-content:center;font-size:24px}
.sender{position:absolute;bottom:55px;width:100%;text-align:center;font-size:15px;color:#6d4c41;letter-spacing:3px}
</style></head><body>
<div class="card">
<div class="scroll-border"></div>
<div class="scroll-top"></div>
<div class="scroll-bottom"></div>
<div class="golden-glow"></div>
<div class="hourglass">⏳</div>
<div class="big-number">90</div>
<div class="happy">Happy Birthday</div>
<div class="name">${data.name}</div>
<div class="timeless">✦ Timeless &amp; Cherished ✦</div>
<div class="message">${msg}</div>
<div class="sender">With eternal love, ${data.sender || 'Me'}</div>
</div></body></html>`;
}

export function buildMilestone100(data: CardData): string {
  const msg = data.message || 'One hundred years of an extraordinary life. A century of love, laughter, and legendary memories!';
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Segoe UI",sans-serif;background:#e0e0e0}
.card{position:relative;width:600px;height:900px;background:linear-gradient(180deg,#fafafa 0%,#f5f5f5 30%,#eeeeee 60%,#e0e0e0 100%);overflow:hidden;color:#212121}
.gold-border{position:absolute;top:12px;left:12px;right:12px;bottom:12px;border:2px solid #d4af37;pointer-events:none}
.gold-inner{position:absolute;top:20px;left:20px;right:20px;bottom:20px;border:1px solid #d4af3766;pointer-events:none}
.firework{position:absolute;font-size:32px;pointer-events:none;filter:drop-shadow(0 2px 6px rgba(0,0,0,0.15))}
.laurel{position:absolute;top:50px;left:50%;transform:translateX(-50%);font-size:52px;filter:drop-shadow(0 2px 8px rgba(0,0,0,0.1))}
.premium-glow{position:absolute;top:30%;left:50%;transform:translate(-50%,-50%);width:400px;height:400px;border-radius:50%;
background:radial-gradient(circle,#d4af3711 0%,transparent 60%);pointer-events:none}
.big-number{position:absolute;top:150px;width:100%;text-align:center;font-size:180px;font-weight:900;color:#d4af37;
text-shadow:4px 4px 0 #b8860b,0 0 30px #d4af3744}
.happy{position:absolute;top:370px;width:100%;text-align:center;font-size:28px;color:#424242;font-weight:700}
.name{position:absolute;top:430px;width:100%;text-align:center;font-size:46px;color:#212121;font-weight:900}
.century{position:absolute;top:500px;width:100%;text-align:center;font-size:16px;letter-spacing:8px;text-transform:uppercase;color:#d4af37}
.message{position:absolute;top:540px;left:60px;right:60px;text-align:center;font-size:18px;line-height:1.8;color:#424242}
.medal{position:absolute;font-size:32px}
.sender{position:absolute;bottom:55px;width:100%;text-align:center;font-size:15px;color:#d4af37;letter-spacing:3px}
.sparkle-particle{position:absolute;width:3px;height:3px;background:#d4af37;border-radius:50%;pointer-events:none}
</style></head><body>
<div class="card">
<div class="gold-border"></div>
<div class="gold-inner"></div>
<div class="premium-glow"></div>
<div class="firework" style="top:80px;left:60px">🎆</div>
<div class="firework" style="top:80px;right:60px">🎇</div>
<div class="firework" style="top:200px;left:40px">✨</div>
<div class="firework" style="top:220px;right:40px">✨</div>
<div class="firework" style="top:350px;left:30px">🎆</div>
<div class="firework" style="top:350px;right:30px">🎇</div>
<div class="laurel">🏅</div>
<div class="big-number">100</div>
<div class="happy">Happy Birthday</div>
<div class="name">${data.name}</div>
<div class="century">✦ Legendary Celebration ✦</div>
<div class="message">${msg}</div>
<div class="medal" style="bottom:100px;left:80px">🏅</div>
<div class="medal" style="bottom:100px;right:80px">🥇</div>
<div class="sparkle-particle" style="top:160px;left:100px"></div>
<div class="sparkle-particle" style="top:200px;right:100px"></div>
<div class="sparkle-particle" style="top:300px;left:80px"></div>
<div class="sparkle-particle" style="top:450px;right:80px"></div>
<div class="sparkle-particle" style="top:500px;left:120px"></div>
<div class="sparkle-particle" style="top:550px;right:120px"></div>
<div class="sender">With legendary love, ${data.sender || 'Me'}</div>
</div></body></html>`;
}
