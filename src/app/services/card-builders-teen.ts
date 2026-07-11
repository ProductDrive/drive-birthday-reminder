import { CardData } from './card-builders-universal';

export function buildNeonParty(data: CardData): string {
  const msg = data.message || "Let's make this year glow brighter than ever! Time to shine! ✨";
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Segoe UI",sans-serif;background:#1a0a2e}
.card{position:relative;width:600px;height:900px;background:#1a0a2e;overflow:hidden;color:white;display:flex;flex-direction:column;align-items:center;justify-content:center}
.neon-border{position:absolute;inset:12px;border:3px solid #ff00ff;box-shadow:0 0 15px #ff00ff,inset 0 0 15px rgba(255,0,255,.15);border-radius:12px}
.neon-border2{position:absolute;inset:24px;border:2px solid #00ffff;box-shadow:0 0 12px #00ffff,inset 0 0 12px rgba(0,255,255,.1);border-radius:8px}
.title{font-size:62px;font-weight:900;letter-spacing:4px;text-shadow:0 0 10px #ff00ff,0 0 20px #ff00ff,0 0 40px #ff00ff,0 0 80px #ff1493;color:#fff;margin-bottom:8px;z-index:1}
.name{font-size:72px;font-weight:900;text-shadow:0 0 10px #00ffff,0 0 20px #00ffff,0 0 40px #00ffff;color:#fff;margin-bottom:16px;z-index:1}
.message{font-size:22px;text-align:center;max-width:440px;line-height:1.6;text-shadow:0 0 8px #ff1493;z-index:1;padding:0 20px}
.sender{position:absolute;bottom:50px;font-size:18px;letter-spacing:3px;text-shadow:0 0 8px #00ffff;z-index:1}
.splash1{position:absolute;top:60px;left:50px;width:80px;height:80px;background:radial-gradient(circle,#ff00ff 0%,transparent 70%);border-radius:50%;opacity:.4}
.splash2{position:absolute;top:180px;right:60px;width:60px;height:60px;background:radial-gradient(circle,#00ffff 0%,transparent 70%);border-radius:50%;opacity:.35}
.splash3{position:absolute;bottom:140px;left:80px;width:50px;height:50px;background:radial-gradient(circle,#ff1493 0%,transparent 70%);border-radius:50%;opacity:.3}
.splash4{position:absolute;bottom:200px;right:40px;width:100px;height:100px;background:radial-gradient(circle,#ff6600 0%,transparent 70%);border-radius:50%;opacity:.25}
.strip1{position:absolute;top:0;left:200px;width:4px;height:100%;background:linear-gradient(180deg,transparent,#ff00ff,#00ffff,transparent);opacity:.3}
.strip2{position:absolute;top:0;right:180px;width:3px;height:100%;background:linear-gradient(180deg,transparent,#00ffff,#ff1493,transparent);opacity:.25}
.emoji-row{font-size:36px;margin-bottom:20px;z-index:1;text-shadow:0 0 15px #fff}
</style></head><body>
<div class="card">
<div class="neon-border"></div>
<div class="neon-border2"></div>
<div class="splash1"></div>
<div class="splash2"></div>
<div class="splash3"></div>
<div class="splash4"></div>
<div class="strip1"></div>
<div class="strip2"></div>
<div class="emoji-row">🎂 🪩 🎉 🪩 🎂</div>
<div class="title">HAPPY BIRTHDAY</div>
<div class="name">${data.name}</div>
<div class="message">${msg}</div>
<div class="sender">From ${data.sender || 'Me'}</div>
</div></body></html>`;
}

export function buildSocialMediaStory(data: CardData): string {
  const msg = data.message || "Another amazing year of posts, stories, and memories! Here's to the best content creator I know! 📸";
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Segoe UI",sans-serif;background:#f0f0f0}
.card{position:relative;width:600px;height:900px;background:#fafafa;overflow:hidden;color:#262626;display:flex;flex-direction:column;padding:0}
.header{display:flex;align-items:center;padding:16px 20px;border-bottom:1px solid #efefef;background:#fff}
.profile-circle{width:44px;height:44px;border-radius:50%;background:linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888);display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:18px;flex-shrink:0}
.profile-info{margin-left:12px;flex:1}
.profile-name{font-weight:600;font-size:15px}
.profile-sub{font-size:12px;color:#8e8e8e}
.dots{font-size:20px;letter-spacing:2px;color:#262626}
.post-image{width:100%;height:440px;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;color:white;position:relative}
.post-emoji{font-size:100px;margin-bottom:10px}
.post-overlay-text{font-size:28px;font-weight:700;text-align:center;padding:0 30px;line-height:1.4}
.post-actions{display:flex;align-items:center;padding:14px 18px;border-bottom:1px solid #efefef;background:#fff}
.action-icons{display:flex;gap:18px;font-size:26px;flex:1}
.action-icons span{cursor:pointer}
.bookmark{font-size:26px}
.likes{padding:10px 18px;font-weight:600;font-size:15px;background:#fff}
.comments-area{flex:1;padding:14px 18px;background:#fff;display:flex;flex-direction:column;justify-content:flex-start}
.comment{display:flex;align-items:flex-start;margin-bottom:10px}
.comment-avatar{width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,#43e97b,#38f9d7);display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;font-weight:700;flex-shrink:0;margin-right:10px}
.comment-text{font-size:14px;line-height:1.4}
.comment-text strong{font-weight:600}
.birthday-badge{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(255,255,255,.92);border-radius:16px;padding:20px 30px;text-align:center;box-shadow:0 4px 24px rgba(0,0,0,.15)}
.birthday-badge h2{font-size:28px;color:#262626;margin-bottom:4px}
.birthday-badge p{font-size:16px;color:#8e8e8e}
.add-comment{display:flex;align-items:center;padding:12px 18px;border-top:1px solid #efefef;background:#fff;margin-top:auto}
.add-comment .avatar-sm{width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#f09433,#e6683c);display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700;flex-shrink:0;margin-right:10px}
.add-comment span{color:#8e8e8e;font-size:14px}
.sender{position:absolute;bottom:56px;right:18px;font-size:13px;color:#8e8e8e}
</style></head><body>
<div class="card">
<div class="header">
<div class="profile-circle">${(data.sender || 'M')[0].toUpperCase()}</div>
<div class="profile-info">
<div class="profile-name">${data.sender || 'Me'}</div>
<div class="profile-sub">Birthday vibes ✨</div>
</div>
<div class="dots">•••</div>
</div>
<div class="post-image">
<div class="post-emoji">🎂</div>
<div class="post-overlay-text">Celebrating ${data.name} Today!</div>
<div class="birthday-badge">
<h2>Happy Birthday!</h2>
<p>${data.name}'s Special Day</p>
</div>
</div>
<div class="post-actions">
<div class="action-icons"><span>❤️</span><span>💬</span><span>↗️</span></div>
<div class="bookmark">🔖</div>
</div>
<div class="likes">365 likes</div>
<div class="comments-area">
<div class="comment">
<div class="comment-avatar">${(data.sender || 'M')[0]}</div>
<div class="comment-text"><strong>${data.sender || 'Me'}</strong> ${msg}</div>
</div>
<div class="comment">
<div class="comment-avatar" style="background:linear-gradient(135deg,#667eea,#764ba2)">🎂</div>
<div class="comment-text"><strong>world</strong> Happy Birthday ${data.name}! 🎉🥳</div>
</div>
</div>
<div class="add-comment">
<div class="avatar-sm">${(data.sender || 'M')[0]}</div>
<span>Add a comment...</span>
</div>
</div></body></html>`;
}

export function buildMusicFestival(data: CardData): string {
  const msg = data.message || "May your life's soundtrack be nothing but bangers! Turn it up to eleven! 🎶";
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Segoe UI",sans-serif;background:#1a1a2e}
.card{position:relative;width:600px;height:900px;background:#1a1a2e;overflow:hidden;color:white;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}
.beam1{position:absolute;top:0;left:100px;width:120px;height:600px;background:linear-gradient(180deg,rgba(255,0,128,.4),transparent);transform:rotate(-12deg);transform-origin:top center;filter:blur(8px)}
.beam2{position:absolute;top:0;left:240px;width:100px;height:650px;background:linear-gradient(180deg,rgba(0,200,255,.35),transparent);transform:rotate(-3deg);transform-origin:top center;filter:blur(8px)}
.beam3{position:absolute;top:0;right:220px;width:110px;height:600px;background:linear-gradient(180deg,rgba(255,200,0,.4),transparent);transform:rotate(5deg);transform-origin:top center;filter:blur(8px)}
.beam4{position:absolute;top:0;right:100px;width:100px;height:620px;background:linear-gradient(180deg,rgba(128,0,255,.35),transparent);transform:rotate(14deg);transform-origin:top center;filter:blur(8px)}
.stage{position:absolute;bottom:0;left:0;right:0;height:120px;background:linear-gradient(180deg,#0d0d1a,#000);z-index:5}
.crowd{position:absolute;bottom:100px;left:0;right:0;height:80px;display:flex;justify-content:center;gap:0;z-index:4}
.head{width:18px;height:18px;border-radius:50%;background:#222;display:inline-block;margin:0 3px}
.bodies{display:flex;justify-content:center;gap:2px;margin-top:-4px}
.body-seg{width:14px;height:30px;border-radius:6px 6px 0 0;background:#1a1a1a;display:inline-block;margin:0 2px}
.speakers{position:absolute;bottom:120px;left:30px;right:30px;display:flex;justify-content:space-between;z-index:3}
.speaker{width:80px;height:60px;background:#111;border:2px solid #333;border-radius:8px;display:flex;align-items:center;justify-content:center}
.speaker-circle{width:30px;height:30px;border-radius:50%;border:3px solid #444;background:#222}
.notes{position:absolute;top:0;left:0;right:0;bottom:0;z-index:2}
.note{position:absolute;font-size:36px;opacity:.5}
.n1{top:80px;left:40px;transform:rotate(-15deg)}
.n2{top:140px;right:50px;transform:rotate(10deg)}
.n3{top:240px;left:30px;transform:rotate(-8deg);font-size:28px}
.n4{top:320px;right:70px;transform:rotate(15deg);font-size:40px}
.n5{top:180px;left:50%;transform:rotate(-5deg);font-size:30px}
.content{position:relative;z-index:6;text-align:center;margin-top:80px;padding:0 30px}
.festival-tag{font-size:14px;letter-spacing:6px;text-transform:uppercase;color:#ffcc00;margin-bottom:12px}
.title{font-size:54px;font-weight:900;letter-spacing:2px;margin-bottom:6px;text-shadow:0 0 20px rgba(255,255,255,.3)}
.name{font-size:64px;font-weight:900;color:#ff6600;text-shadow:0 0 20px rgba(255,102,0,.5);margin-bottom:16px}
.message{font-size:20px;line-height:1.6;max-width:440px;margin:0 auto 30px;opacity:.85}
.lineup{display:flex;justify-content:center;gap:20px;margin-bottom:20px;font-size:32px}
.sender{position:absolute;bottom:135px;font-size:16px;letter-spacing:3px;opacity:.6;z-index:6}
</style></head><body>
<div class="card">
<div class="beam1"></div><div class="beam2"></div><div class="beam3"></div><div class="beam4"></div>
<div class="notes">
<div class="note n1">🎵</div><div class="note n2">🎶</div><div class="note n3">🎸</div><div class="note n4">🎤</div><div class="note n5">🎵</div>
</div>
<div class="content">
<div class="festival-tag">★ Live Festival ★</div>
<div class="title">HAPPY BIRTHDAY</div>
<div class="name">${data.name}</div>
<div class="message">${msg}</div>
<div class="lineup">🎵 🎸 🎤 🥁 🎶</div>
</div>
<div class="speakers">
<div class="speaker"><div class="speaker-circle"></div></div>
<div class="speaker"><div class="speaker-circle"></div></div>
</div>
<div class="sender">From ${data.sender || 'Me'}</div>
<div class="crowd">
<div class="bodies"><div class="body-seg"></div><div class="body-seg"></div><div class="body-seg"></div><div class="body-seg"></div><div class="body-seg"></div><div class="body-seg"></div><div class="body-seg"></div><div class="body-seg"></div><div class="body-seg"></div><div class="body-seg"></div><div class="body-seg"></div><div class="body-seg"></div><div class="body-seg"></div><div class="body-seg"></div><div class="body-seg"></div><div class="body-seg"></div><div class="body-seg"></div><div class="body-seg"></div><div class="body-seg"></div><div class="body-seg"></div></div>
</div>
<div class="stage"></div>
</div></body></html>`;
}

export function buildGamerUniverse(data: CardData): string {
  const msg = data.message || "Level up! You've unlocked another year of amazing adventures. Ready Player One! 🕹️";
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Courier New",monospace;background:#0a1a0a}
.card{position:relative;width:600px;height:900px;background:#0a1a0a;overflow:hidden;color:#00ff41;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;border:4px solid #00ff41;image-rendering:pixelated}
.scanline{position:absolute;inset:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.08) 2px,rgba(0,0,0,.08) 4px);z-index:10;pointer-events:none}
.pixel-border{position:absolute;inset:8px;border:3px dashed #00ff41;opacity:.4}
.top-bar{width:100%;display:flex;justify-content:space-between;align-items:center;padding:16px 24px;border-bottom:2px solid #00ff41;z-index:1}
.player-tag{font-size:14px;letter-spacing:4px;text-transform:uppercase}
.lives{font-size:18px;letter-spacing:2px}
.health-bar-container{width:calc(100% - 48px);margin:16px 24px 0;height:28px;border:2px solid #00ff41;background:#0a1a0a;position:relative;z-index:1}
.health-fill{height:100%;width:100%;background:linear-gradient(90deg,#00ff41,#00cc33);position:relative}
.health-text{position:absolute;right:8px;top:50%;transform:translateY(-50%);font-size:13px;color:#0a1a0a;font-weight:700}
.center-content{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:1;padding:0 30px}
.stars{font-size:40px;margin-bottom:10px;letter-spacing:8px}
.birthday-text{font-size:18px;letter-spacing:8px;margin-bottom:8px;color:#33ff66}
.title{font-size:52px;font-weight:700;color:#00ff41;text-shadow:0 0 15px #00ff41;margin-bottom:6px;letter-spacing:3px}
.name{font-size:58px;font-weight:700;color:#ffff00;text-shadow:0 0 15px #ffff00;margin-bottom:16px}
.message{font-size:19px;color:#33ff99;text-align:center;max-width:440px;line-height:1.6;margin-bottom:20px}
.controller{font-size:70px;margin-bottom:10px}
.stats{display:flex;gap:30px;margin-bottom:16px;font-size:14px;color:#00cc33;letter-spacing:2px}
.stat{display:flex;flex-direction:column;align-items:center}
.stat-val{font-size:22px;color:#00ff41;font-weight:700}
.power-ups{font-size:28px;letter-spacing:10px;margin-bottom:10px}
.level-badge{padding:8px 24px;border:2px solid #ffff00;color:#ffff00;font-size:14px;letter-spacing:4px;margin-bottom:20px}
.sender{position:absolute;bottom:24px;font-size:14px;letter-spacing:3px;color:#33ff66;z-index:1}
.corner{position:absolute;width:20px;height:20px;border-color:#ffff00;z-index:1}
.corner-tl{top:20px;left:20px;border-top:3px solid;border-left:3px solid}
.corner-tr{top:20px;right:20px;border-top:3px solid;border-right:3px solid}
.corner-bl{bottom:20px;left:20px;border-bottom:3px solid;border-left:3px solid}
.corner-br{bottom:20px;right:20px;border-bottom:3px solid;border-right:3px solid}
</style></head><body>
<div class="card">
<div class="scanline"></div>
<div class="pixel-border"></div>
<div class="corner corner-tl"></div>
<div class="corner corner-tr"></div>
<div class="corner corner-bl"></div>
<div class="corner corner-br"></div>
<div class="top-bar">
<div class="player-tag">▶ PLAYER 1</div>
<div class="lives">❤️❤️❤️</div>
</div>
<div class="health-bar-container">
<div class="health-fill"></div>
<div class="health-text">HP 99/99</div>
</div>
<div class="center-content">
<div class="stars">⭐ ⭐ ⭐</div>
<div class="birthday-text">— INSERT COIN —</div>
<div class="title">HAPPY</div>
<div class="title" style="margin-top:-10px">BIRTHDAY</div>
<div class="name">${data.name}</div>
<div class="message">${msg}</div>
<div class="controller">🎮</div>
<div class="stats">
<div class="stat"><span class="stat-val">∞</span>POINTS</div>
<div class="stat"><span class="stat-val">99</span>LEVEL</div>
<div class="stat"><span class="stat-val">♥♥♥</span>LIVES</div>
</div>
<div class="power-ups">⭐ 🏆 ⭐</div>
<div class="level-badge">LEVEL ${new Date().getFullYear()} UNLOCKED</div>
</div>
<div class="sender">From ${data.sender || 'Me'}</div>
</div></body></html>`;
}

export function buildStreetArt(data: CardData): string {
  const msg = data.message || "Another year of making the world your canvas! Stay bold, stay you! 🎨";
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Arial Black",sans-serif;background:#8B4513}
.card{position:relative;width:600px;height:900px;background:#8B4513;overflow:hidden;color:white;display:flex;flex-direction:column;align-items:center;justify-content:center}
.brick{position:absolute;inset:0;background:repeating-linear-gradient(0deg,transparent,transparent 38px,rgba(0,0,0,.3) 38px,rgba(0,0,0,.3) 40px),repeating-linear-gradient(90deg,transparent,transparent 78px,rgba(0,0,0,.2) 78px,rgba(0,0,0,.2) 80px);opacity:.5;z-index:0}
.splatter1{position:absolute;top:30px;left:20px;width:140px;height:100px;background:radial-gradient(ellipse,#ff1493 0%,transparent 70%);opacity:.5;transform:rotate(-10deg);z-index:1}
.splatter2{position:absolute;bottom:80px;right:30px;width:160px;height:120px;background:radial-gradient(ellipse,#00ff00 0%,transparent 70%);opacity:.4;transform:rotate(15deg);z-index:1}
.splatter3{position:absolute;top:200px;right:60px;width:100px;height:80px;background:radial-gradient(ellipse,#ffff00 0%,transparent 70%);opacity:.45;transform:rotate(-5deg);z-index:1}
.splatter4{position:absolute;bottom:200px;left:40px;width:120px;height:90px;background:radial-gradient(ellipse,#00ccff 0%,transparent 70%);opacity:.35;transform:rotate(8deg);z-index:1}
.drip{position:absolute;width:4px;background:#ff1493;opacity:.5;z-index:2;border-radius:0 0 4px 4px}
.drip1{top:100px;left:160px;height:80px}
.drip2{top:180px;right:140px;height:60px;background:#00ff00}
.drip3{top:120px;left:400px;height:90px;background:#ffff00}
.content{position:relative;z-index:3;text-align:center;padding:0 30px}
.birthday-tag{font-size:16px;letter-spacing:10px;text-transform:uppercase;color:#ffff00;margin-bottom:10px;transform:rotate(-3deg);text-shadow:2px 2px 0 #000}
.title{font-size:72px;font-weight:900;color:#ff1493;text-shadow:4px 4px 0 #000,-2px -2px 0 #ffff00,3px -1px 0 #00ff00;transform:rotate(-4deg);line-height:1;margin-bottom:6px}
.name{font-size:68px;font-weight:900;color:#00ff00;text-shadow:4px 4px 0 #000,-2px -2px 0 #ff1493,3px 1px 0 #ffff00;transform:rotate(2deg);line-height:1;margin-bottom:20px}
.message{font-size:22px;max-width:440px;line-height:1.6;text-shadow:2px 2px 0 #000;transform:rotate(-1deg);margin-bottom:20px}
.tags{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-bottom:16px;z-index:3;position:relative}
.tag{padding:6px 16px;border:2px solid #ffff00;color:#ffff00;font-size:13px;letter-spacing:2px;transform:rotate(-2deg);text-shadow:1px 1px 0 #000}
.sender{position:absolute;bottom:40px;right:30px;font-size:16px;letter-spacing:3px;color:#ffff00;text-shadow:2px 2px 0 #000;z-index:3;transform:rotate(-2deg)}
.stars-deco{font-size:30px;z-index:3;position:relative;margin-bottom:10px;letter-spacing:10px}
</style></head><body>
<div class="card">
<div class="brick"></div>
<div class="splatter1"></div>
<div class="splatter2"></div>
<div class="splatter3"></div>
<div class="splatter4"></div>
<div class="drip drip1"></div>
<div class="drip drip2"></div>
<div class="drip drip3"></div>
<div class="content">
<div class="stars-deco">⭐ 🎨 ✨ 🖌️ ⭐</div>
<div class="birthday-tag">★ STREET ART ★</div>
<div class="title">HAPPY<br>BIRTHDAY</div>
<div class="name">${data.name}</div>
<div class="message">${msg}</div>
<div class="tags">
<div class="tag">#BORN TO BE WILD</div>
<div class="tag">#LEGEND</div>
<div class="tag">#STAY BOLD</div>
</div>
</div>
<div class="sender">From ${data.sender || 'Me'}</div>
</div></body></html>`;
}

export function buildLuxuryMagazine(data: CardData): string {
  const msg = data.message || "Another year of elegance, grace, and timeless beauty. You never go out of style.";
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Georgia","Times New Roman",serif;background:#000}
.card{position:relative;width:600px;height:900px;background:#000;overflow:hidden;color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}
.frame{position:absolute;inset:16px;border:1px solid rgba(255,255,255,.3);z-index:1}
.frame-inner{position:absolute;inset:22px;border:1px solid rgba(255,255,255,.15);z-index:1}
.masthead{position:relative;z-index:2;text-align:center;margin-top:50px}
.masthead-title{font-size:58px;font-weight:400;letter-spacing:18px;text-transform:uppercase;border-bottom:1px solid rgba(255,255,255,.4);padding-bottom:10px;margin-bottom:8px}
.issue{font-size:11px;letter-spacing:6px;color:rgba(255,255,255,.5);text-transform:uppercase}
.cover-image{position:relative;z-index:2;width:calc(100% - 80px);height:380px;margin:20px 40px;background:linear-gradient(135deg,#1a1a1a 0%,#2d2d2d 50%,#1a1a1a 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;border:1px solid rgba(255,255,255,.1)}
.cover-emoji{font-size:90px;margin-bottom:8px}
.cover-headline{font-size:42px;font-weight:400;letter-spacing:6px;text-align:center;line-height:1.2}
.cover-subhead{font-size:16px;letter-spacing:8px;color:rgba(255,255,255,.6);margin-top:10px;text-transform:uppercase}
.content-area{position:relative;z-index:2;flex:1;width:100%;padding:16px 40px;display:flex;flex-direction:column;align-items:center}
.name{font-size:54px;font-weight:400;letter-spacing:10px;margin-bottom:10px;text-align:center}
.message{font-size:17px;text-align:center;max-width:420px;line-height:1.7;color:rgba(255,255,255,.75);font-style:italic;margin-bottom:12px}
.divider{width:80px;height:1px;background:rgba(255,255,255,.3);margin-bottom:12px}
.sender{font-size:13px;letter-spacing:6px;color:rgba(255,255,255,.5);text-transform:uppercase;z-index:2;position:absolute;bottom:60px}
.barcode{position:absolute;bottom:30px;right:40px;display:flex;gap:2px;z-index:2}
.bar{background:rgba(255,255,255,.4)}
.issue-badge{position:absolute;top:50px;right:40px;z-index:2;text-align:right}
.issue-num{font-size:28px;font-weight:400;color:rgba(255,255,255,.6)}
.issue-label{font-size:9px;letter-spacing:4px;color:rgba(255,255,255,.35);text-transform:uppercase}
</style></head><body>
<div class="card">
<div class="frame"></div>
<div class="frame-inner"></div>
<div class="masthead">
<div class="masthead-title">LIFE</div>
<div class="issue">Volume ${new Date().getFullYear()} · Special Edition</div>
</div>
<div class="cover-image">
<div class="cover-emoji">👑</div>
<div class="cover-headline">${data.name}</div>
<div class="cover-subhead">The Birthday Issue</div>
</div>
<div class="content-area">
<div class="divider"></div>
<div class="name">${data.name}</div>
<div class="message">${msg}</div>
<div class="divider"></div>
</div>
<div class="sender">From ${data.sender || 'Me'}</div>
<div class="issue-badge">
<div class="issue-num">${new Date().getFullYear()}</div>
<div class="issue-label">Edition</div>
</div>
<div class="barcode">
<div class="bar" style="width:2px;height:30px"></div>
<div class="bar" style="width:1px;height:30px"></div>
<div class="bar" style="width:3px;height:30px"></div>
<div class="bar" style="width:1px;height:30px"></div>
<div class="bar" style="width:2px;height:30px"></div>
<div class="bar" style="width:1px;height:30px"></div>
<div class="bar" style="width:3px;height:30px"></div>
<div class="bar" style="width:1px;height:30px"></div>
<div class="bar" style="width:2px;height:30px"></div>
<div class="bar" style="width:1px;height:30px"></div>
<div class="bar" style="width:3px;height:30px"></div>
<div class="bar" style="width:1px;height:30px"></div>
<div class="bar" style="width:2px;height:30px"></div>
<div class="bar" style="width:3px;height:30px"></div>
<div class="bar" style="width:1px;height:30px"></div>
<div class="bar" style="width:2px;height:30px"></div>
<div class="bar" style="width:1px;height:30px"></div>
<div class="bar" style="width:3px;height:30px"></div>
</div>
</div></body></html>`;
}

export function buildTravelPassport(data: CardData): string {
  const msg = data.message || "Here's to another year of exploring new horizons and making unforgettable memories around the world! ✈️";
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Georgia",serif;background:#1a237e}
.card{position:relative;width:600px;height:900px;background:#1a237e;overflow:hidden;color:#d4af37;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}
.gold-border{position:absolute;inset:20px;border:2px solid #d4af37;z-index:1}
.gold-border-inner{position:absolute;inset:28px;border:1px solid rgba(212,175,55,.4);z-index:1}
.emblem{position:relative;z-index:2;margin-top:50px;text-align:center}
.emblem-circle{width:100px;height:100px;border-radius:50%;border:2px solid #d4af37;display:flex;align-items:center;justify-content:center;margin:0 auto 12px;font-size:44px}
.country-name{font-size:13px;letter-spacing:8px;text-transform:uppercase;color:#d4af37}
.passport-title{font-size:32px;letter-spacing:12px;text-transform:uppercase;margin-top:6px;color:#d4af37}
.content{position:relative;z-index:2;flex:1;width:100%;display:flex;flex-direction:column;align-items:center;padding:20px 40px}
.stamp{position:absolute;width:110px;height:110px;border-radius:50%;border:3px solid;display:flex;flex-direction:column;align-items:center;justify-content:center;opacity:.5;font-size:11px;letter-spacing:2px;text-transform:uppercase;font-weight:700}
.stamp1{top:200px;left:40px;border-color:#ff6b35;transform:rotate(-15deg);color:#ff6b35}
.stamp2{top:240px;right:50px;border-color:#c0392b;transform:rotate(12deg);color:#c0392b}
.stamp3{bottom:260px;left:60px;border-color:#27ae60;transform:rotate(-8deg);color:#27ae60}
.stamp4{bottom:220px;right:40px;border-color:#8e44ad;transform:rotate(18deg);color:#8e44ad}
.stamp-date{font-size:14px;font-weight:700;margin-top:2px}
.birthday-section{margin-top:40px;text-align:center;z-index:2}
.birthday-section .label{font-size:14px;letter-spacing:6px;color:rgba(212,175,55,.6);margin-bottom:6px}
.birthday-section .title{font-size:44px;letter-spacing:4px;color:#d4af37;margin-bottom:6px}
.birthday-section .name{font-size:54px;color:#fff;margin-bottom:16px}
.message{font-size:18px;text-align:center;max-width:420px;line-height:1.7;color:rgba(212,175,55,.75);font-style:italic;margin-bottom:16px}
.compass{font-size:50px;margin-bottom:12px;z-index:2;position:relative}
.airplane{position:absolute;top:120px;right:80px;font-size:40px;z-index:2;transform:rotate(20deg)}
.airplane2{position:absolute;bottom:300px;left:60px;font-size:30px;z-index:2;transform:rotate(-30deg) scaleX(-1)}
.sender{position:absolute;bottom:40px;font-size:13px;letter-spacing:5px;color:rgba(212,175,55,.5);z-index:2}
.dotted-line{width:300px;border-bottom:1px dashed rgba(212,175,55,.3);margin-bottom:12px}
</style></head><body>
<div class="card">
<div class="gold-border"></div>
<div class="gold-border-inner"></div>
<div class="stamp stamp1">PARIS<div class="stamp-date">${new Date().getFullYear()}</div></div>
<div class="stamp stamp2">TOKYO<div class="stamp-date">${new Date().getFullYear()}</div></div>
<div class="stamp stamp3">ROME<div class="stamp-date">${new Date().getFullYear()}</div></div>
<div class="stamp stamp4">NEW YORK<div class="stamp-date">${new Date().getFullYear()}</div></div>
<div class="airplane">✈️</div>
<div class="airplane2">✈️</div>
<div class="emblem">
<div class="emblem-circle">🌍</div>
<div class="country-name">Birthday</div>
<div class="passport-title">PASSPORT</div>
</div>
<div class="content">
<div class="birthday-section">
<div class="label">★ Celebrating ★</div>
<div class="title">HAPPY BIRTHDAY</div>
<div class="name">${data.name}</div>
</div>
<div class="dotted-line"></div>
<div class="compass">🧭</div>
<div class="message">${msg}</div>
</div>
<div class="sender">From ${data.sender || 'Me'}</div>
</div></body></html>`;
}

export function buildFutureVisionBoard(data: CardData): string {
  const msg = data.message || "Dream big, shine bright, and make every goal a reality this year! The future is yours! ✨";
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Segoe UI",sans-serif;background:#1a0a2e}
.card{position:relative;width:600px;height:900px;background:linear-gradient(160deg,#2d1b69 0%,#8e2de2 30%,#e91e8c 60%,#ff6b6b 100%);overflow:hidden;color:white;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}
.sparkles{position:absolute;inset:0;z-index:0}
.sparkle{position:absolute;width:4px;height:4px;background:#fff;border-radius:50%;opacity:.6}
.sp1{top:60px;left:80px}.sp2{top:120px;right:100px}.sp3{top:200px;left:140px}
.sp4{top:300px;right:60px}.sp5{top:400px;left:60px}.sp6{top:500px;right:120px}
.sp7{top:150px;left:300px}.sp8{top:550px;left:200px}.sp9{top:80px;left:400px}
.sp10{top:650px;right:80px}.sp11{top:700px;left:100px}.sp12{top:450px;left:350px}
.header{position:relative;z-index:2;text-align:center;margin-top:40px;margin-bottom:10px}
.header h1{font-size:20px;letter-spacing:12px;text-transform:uppercase;opacity:.8}
.content{position:relative;z-index:2;width:100%;padding:0 30px;flex:1;display:flex;flex-direction:column;align-items:center}
.main-title{font-size:52px;font-weight:800;text-align:center;margin-bottom:4px;text-shadow:0 2px 20px rgba(0,0,0,.3)}
.name{font-size:60px;font-weight:800;text-align:center;margin-bottom:10px;text-shadow:0 2px 20px rgba(0,0,0,.3)}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;width:100%;max-width:480px;margin-bottom:16px}
.grid-item{background:rgba(255,255,255,.12);backdrop-filter:blur(4px);border-radius:12px;padding:16px 10px;text-align:center;border:1px solid rgba(255,255,255,.15)}
.grid-item .icon{font-size:32px;margin-bottom:6px}
.grid-item .label{font-size:12px;letter-spacing:3px;text-transform:uppercase;opacity:.8}
.message{font-size:18px;text-align:center;max-width:420px;line-height:1.6;opacity:.85;margin-bottom:12px;padding:0 10px}
.motivational{font-size:16px;letter-spacing:6px;text-transform:uppercase;opacity:.6;margin-bottom:8px}
.stars-row{font-size:28px;letter-spacing:14px;margin-bottom:10px}
.sender{position:absolute;bottom:40px;font-size:14px;letter-spacing:4px;opacity:.6;z-index:2}
</style></head><body>
<div class="card">
<div class="sparkles">
<div class="sparkle sp1"></div><div class="sparkle sp2"></div><div class="sparkle sp3"></div>
<div class="sparkle sp4"></div><div class="sparkle sp5"></div><div class="sparkle sp6"></div>
<div class="sparkle sp7"></div><div class="sparkle sp8"></div><div class="sparkle sp9"></div>
<div class="sparkle sp10"></div><div class="sparkle sp11"></div><div class="sparkle sp12"></div>
</div>
<div class="header"><h1>✨ Vision Board ✨</h1></div>
<div class="content">
<div class="main-title">HAPPY BIRTHDAY</div>
<div class="name">${data.name}</div>
<div class="stars-row">✨ 🌟 ✨</div>
<div class="grid">
<div class="grid-item"><div class="icon">💭</div><div class="label">Dream</div></div>
<div class="grid-item"><div class="icon">🎯</div><div class="label">Goals</div></div>
<div class="grid-item"><div class="icon">🌟</div><div class="label">Shine</div></div>
<div class="grid-item"><div class="icon">💪</div><div class="label">Strength</div></div>
<div class="grid-item"><div class="icon">🚀</div><div class="label">Launch</div></div>
<div class="grid-item"><div class="icon">💎</div><div class="label">Growth</div></div>
</div>
<div class="message">${msg}</div>
<div class="motivational">✨ Dream · Goals · Shine ✨</div>
</div>
<div class="sender">From ${data.sender || 'Me'}</div>
</div></body></html>`;
}

export function buildCityLights(data: CardData): string {
  const msg = data.message || "Another year of reaching new heights and lighting up the skyline. Keep shining! 🌃";
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Segoe UI",sans-serif;background:#1a1a3e}
.card{position:relative;width:600px;height:900px;background:linear-gradient(180deg,#1a1a3e 0%,#2d1b69 40%,#4a2c8a 70%,#1a1a3e 100%);overflow:hidden;color:white;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}
.moon{position:absolute;top:70px;right:100px;width:80px;height:80px;border-radius:50%;background:radial-gradient(circle at 35% 35%,#fff9c4,#ffd54f,#ffb300);box-shadow:0 0 40px rgba(255,213,79,.4),0 0 80px rgba(255,179,0,.2);z-index:1}
.stars-bg{position:absolute;inset:0;z-index:0}
.star{position:absolute;width:3px;height:3px;background:#fff;border-radius:50%;opacity:.5}
.s1{top:40px;left:60px}.s2{top:100px;left:200px}.s3{top:60px;right:200px}
.s4{top:150px;left:100px}.s5{top:180px;right:150px}.s6{top:220px;left:300px}
.skyline{position:absolute;bottom:0;left:0;right:0;z-index:2}
.building{position:absolute;bottom:0;background:#0d0d2b}
.b1{left:20px;width:50px;height:280px}.b2{left:80px;width:35px;height:200px}
.b3{left:120px;width:60px;height:340px}.b4{left:190px;width:40px;height:240px}
.b5{left:240px;width:55px;height:300px}.b6{left:300px;width:45px;height:260px}
.b7{left:350px;width:70px;height:360px}.b8{left:430px;width:40px;height:220px}
.b9{left:475px;width:55px;height:310px}.b10{left:540px;width:40px;height:250px}
.window-row{display:flex;justify-content:space-around;padding:4px 6px}
.window{width:6px;height:8px;background:rgba(255,213,79,.6);border-radius:1px}
.window.off{background:rgba(255,213,79,.1)}
.antenna{position:absolute;top:-20px;left:50%;transform:translateX(-50%);width:2px;height:20px;background:#333}
.antenna-dot{position:absolute;top:-24px;left:50%;transform:translateX(-50%);width:4px;height:4px;border-radius:50%;background:#ff1744}
.content{position:relative;z-index:3;text-align:center;margin-top:60px;padding:0 30px;width:100%}
.birthday-label{font-size:14px;letter-spacing:10px;text-transform:uppercase;color:rgba(255,255,255,.5);margin-bottom:10px}
.title{font-size:50px;font-weight:300;letter-spacing:6px;margin-bottom:6px}
.name{font-size:60px;font-weight:700;color:#ffd54f;text-shadow:0 0 30px rgba(255,213,79,.4);margin-bottom:16px}
.message{font-size:19px;max-width:420px;line-height:1.7;opacity:.8;margin-bottom:14px}
.divider{width:60px;height:1px;background:rgba(255,255,255,.3);margin-bottom:14px}
.city-emoji{font-size:36px;margin-bottom:10px;letter-spacing:12px}
.sender{position:absolute;bottom:40px;font-size:13px;letter-spacing:4px;color:rgba(255,255,255,.4);z-index:3}
</style></head><body>
<div class="card">
<div class="stars-bg">
<div class="star s1"></div><div class="star s2"></div><div class="star s3"></div>
<div class="star s4"></div><div class="star s5"></div><div class="star s6"></div>
</div>
<div class="moon"></div>
<div class="content">
<div class="birthday-label">★ City Lights ★</div>
<div class="title">HAPPY BIRTHDAY</div>
<div class="name">${data.name}</div>
<div class="divider"></div>
<div class="message">${msg}</div>
<div class="city-emoji">🏙️ 🌃 🌆</div>
</div>
<div class="skyline">
<div class="building b1"><div class="antenna"><div class="antenna-dot"></div></div><div class="window-row"><div class="window"></div><div class="window off"></div><div class="window"></div></div><div class="window-row"><div class="window off"></div><div class="window"></div><div class="window"></div></div><div class="window-row"><div class="window"></div><div class="window"></div><div class="window off"></div></div><div class="window-row"><div class="window"></div><div class="window off"></div><div class="window"></div></div><div class="window-row"><div class="window off"></div><div class="window"></div><div class="window"></div></div></div>
<div class="building b3"><div class="antenna"><div class="antenna-dot"></div></div><div class="window-row"><div class="window"></div><div class="window off"></div><div class="window"></div><div class="window"></div></div><div class="window-row"><div class="window off"></div><div class="window"></div><div class="window off"></div><div class="window"></div></div><div class="window-row"><div class="window"></div><div class="window"></div><div class="window"></div><div class="window off"></div></div><div class="window-row"><div class="window off"></div><div class="window"></div><div class="window"></div><div class="window"></div></div><div class="window-row"><div class="window"></div><div class="window off"></div><div class="window"></div><div class="window"></div></div><div class="window-row"><div class="window"></div><div class="window"></div><div class="window off"></div><div class="window"></div></div></div>
<div class="building b5"><div class="window-row"><div class="window"></div><div class="window off"></div><div class="window"></div></div><div class="window-row"><div class="window off"></div><div class="window"></div><div class="window"></div></div><div class="window-row"><div class="window"></div><div class="window"></div><div class="window off"></div></div><div class="window-row"><div class="window"></div><div class="window off"></div><div class="window"></div></div><div class="window-row"><div class="window off"></div><div class="window"></div><div class="window"></div></div></div>
<div class="building b7"><div class="antenna"><div class="antenna-dot"></div></div><div class="window-row"><div class="window"></div><div class="window off"></div><div class="window"></div><div class="window"></div><div class="window"></div></div><div class="window-row"><div class="window off"></div><div class="window"></div><div class="window"></div><div class="window off"></div><div class="window"></div></div><div class="window-row"><div class="window"></div><div class="window"></div><div class="window off"></div><div class="window"></div><div class="window"></div></div><div class="window-row"><div class="window"></div><div class="window off"></div><div class="window"></div><div class="window"></div><div class="window off"></div></div><div class="window-row"><div class="window off"></div><div class="window"></div><div class="window"></div><div class="window"></div><div class="window"></div></div><div class="window-row"><div class="window"></div><div class="window"></div><div class="window"></div><div class="window off"></div><div class="window"></div></div></div>
<div class="building b9"><div class="window-row"><div class="window"></div><div class="window off"></div><div class="window"></div></div><div class="window-row"><div class="window off"></div><div class="window"></div><div class="window"></div></div><div class="window-row"><div class="window"></div><div class="window"></div><div class="window off"></div></div><div class="window-row"><div class="window"></div><div class="window off"></div><div class="window"></div></div><div class="window-row"><div class="window off"></div><div class="window"></div><div class="window"></div></div><div class="window-row"><div class="window"></div><div class="window"></div><div class="window off"></div></div></div>
<div class="building b2"></div>
<div class="building b4"></div>
<div class="building b6"></div>
<div class="building b8"></div>
<div class="building b10"></div>
</div>
<div class="sender">From ${data.sender || 'Me'}</div>
</div></body></html>`;
}

export function buildCoffeeBooks(data: CardData): string {
  const msg = data.message || "Wishing you a year filled with warmth, wisdom, and all the little things that make life beautiful. Happy Birthday! ☕";
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:Georgia,"Times New Roman",serif;background:#f5e6d3}
.card{position:relative;width:600px;height:900px;background:linear-gradient(180deg,#f5e6d3 0%,#ede0d4 50%,#f5e6d3 100%);overflow:hidden;color:#4a3728;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}
.top-deco{width:100%;height:6px;background:repeating-linear-gradient(90deg,#8B6914,#8B6914 10px,transparent 10px,transparent 20px)}
.content{position:relative;z-index:2;text-align:center;padding:0 40px;width:100%}
.coffee-area{margin-top:30px;margin-bottom:6px}
.cup{font-size:80px;display:block}
.steam{display:flex;justify-content:center;gap:12px;margin-bottom:-10px}
.steam-line{width:3px;height:30px;background:linear-gradient(180deg,transparent,rgba(139,105,20,.2),transparent);border-radius:2px;transform:rotate(5deg)}
.steam-line:nth-child(2){transform:rotate(-3deg);height:35px}
.steam-line:nth-child(3){transform:rotate(7deg);height:25px}
.tagline{font-size:12px;letter-spacing:8px;text-transform:uppercase;color:#8B6914;margin-bottom:8px}
.title{font-size:44px;font-weight:400;font-style:italic;color:#4a3728;margin-bottom:4px}
.title-regular{font-size:44px;font-weight:400;color:#4a3728;margin-bottom:4px}
.name{font-size:52px;font-weight:700;color:#6b4226;margin-bottom:12px}
.divider{display:flex;align-items:center;justify-content:center;gap:12px;margin-bottom:12px}
.div-line{width:60px;height:1px;background:#8B6914}
.div-icon{font-size:20px}
.message{font-size:18px;max-width:420px;line-height:1.8;color:#6b5744;font-style:italic;margin-bottom:16px}
.book-section{display:flex;justify-content:center;gap:20px;margin-bottom:10px}
.book-emoji{font-size:40px}
.quote{font-size:14px;color:#8B6914;letter-spacing:3px;font-style:italic;margin-bottom:12px}
.bottom-deco{display:flex;gap:8px;margin-bottom:8px}
.leaf{font-size:20px}
.sender{position:absolute;bottom:40px;font-size:13px;letter-spacing:4px;color:#8B6914}
.cafe-border{position:absolute;inset:14px;border:1px solid rgba(139,105,20,.2);z-index:1}
</style></head><body>
<div class="card">
<div class="top-deco"></div>
<div class="cafe-border"></div>
<div class="content">
<div class="steam">
<div class="steam-line"></div><div class="steam-line"></div><div class="steam-line"></div>
</div>
<div class="coffee-area"><span class="cup">☕</span></div>
<div class="tagline">A Cozy Birthday Wish</div>
<div class="title">Happy</div>
<div class="title-regular">Birthday</div>
<div class="name">${data.name}</div>
<div class="divider">
<div class="div-line"></div>
<div class="div-icon">📖</div>
<div class="div-line"></div>
</div>
<div class="message">${msg}</div>
<div class="quote">"Life is like a good book — best enjoyed with coffee"</div>
<div class="book-section">
<div class="book-emoji">📚</div>
<div class="book-emoji">☕</div>
<div class="book-emoji">📖</div>
</div>
<div class="bottom-deco">
<div class="leaf">🍂</div><div class="leaf">🌿</div><div class="leaf">🍂</div>
</div>
</div>
<div class="sender">From ${data.sender || 'Me'}</div>
</div></body></html>`;
}

export function buildFamilyTree(data: CardData): string {
  const msg = data.message || "Rooted in love, branching out in joy — so grateful to celebrate you today! Happy Birthday! 🌿";
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Segoe UI",sans-serif;background:#e8f5e9}
.card{position:relative;width:600px;height:900px;background:linear-gradient(180deg,#e8f5e9 0%,#c8e6c9 60%,#a5d6a7 100%);overflow:hidden;color:#2e4a1e;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}
.tree-trunk{position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:40px;height:300px;background:linear-gradient(90deg,#5d4037,#795548,#5d4037);border-radius:4px 4px 0 0;z-index:1}
.branch{position:absolute;background:#795548;border-radius:4px;z-index:1}
.br1{bottom:250px;left:50%;transform:translateX(-50%) rotate(-35deg);width:120px;height:6px;transform-origin:left center}
.br2{bottom:280px;left:50%;transform:translateX(-50%) rotate(35deg);width:120px;height:6px;transform-origin:right center}
.br3{bottom:220px;left:50%;transform:translateX(-50%) rotate(-25deg);width:100px;height:5px;transform-origin:left center}
.br4{bottom:240px;left:50%;transform:translateX(-50%) rotate(25deg);width:100px;height:5px;transform-origin:right center}
.leaves{position:absolute;z-index:2}
.leaf{position:absolute;font-size:30px}
.l1{top:140px;left:80px}.l2{top:100px;left:160px}.l3{top:120px;right:140px}
.l4{top:150px;right:80px}.l5{top:80px;left:240px}.l6{top:90px;right:200px}
.l7{top:160px;left:200px}.l8{top:170px;right:180px}.l9{top:60px;left:300px}
.content{position:relative;z-index:3;text-align:center;margin-top:40px;padding:0 30px;width:100%}
.family-emoji{font-size:40px;margin-bottom:8px;letter-spacing:10px}
.birthday-label{font-size:12px;letter-spacing:8px;text-transform:uppercase;color:#4a7c2e;margin-bottom:8px}
.title{font-size:46px;font-weight:700;color:#2e7d32;margin-bottom:4px}
.name{font-size:56px;font-weight:800;color:#1b5e20;margin-bottom:12px}
.message{font-size:18px;max-width:420px;line-height:1.7;color:#33691e;margin-bottom:14px}
.family-icons{font-size:30px;margin-bottom:8px;letter-spacing:8px}
.connected{font-size:12px;letter-spacing:6px;color:#4a7c2e;text-transform:uppercase;margin-bottom:8px}
.sender{position:absolute;bottom:36px;font-size:13px;letter-spacing:4px;color:#4a7c2e;z-index:3}
.root-label{position:absolute;bottom:10px;left:50%;transform:translateX(-50%);font-size:11px;letter-spacing:4px;color:#795548;z-index:2}
</style></head><body>
<div class="card">
<div class="leaves">
<div class="leaf l1">🍃</div><div class="leaf l2">🌿</div><div class="leaf l3">🍃</div>
<div class="leaf l4">🌿</div><div class="leaf l5">🍃</div><div class="leaf l6">🌿</div>
<div class="leaf l7">🍃</div><div class="leaf l8">🌿</div><div class="leaf l9">🍃</div>
</div>
<div class="branch br1"></div><div class="branch br2"></div>
<div class="branch br3"></div><div class="branch br4"></div>
<div class="tree-trunk"></div>
<div class="content">
<div class="family-emoji">👨‍👩‍👧‍👦 🌳 👨‍👩‍👧‍👦</div>
<div class="birthday-label">★ Family Tree ★</div>
<div class="title">HAPPY BIRTHDAY</div>
<div class="name">${data.name}</div>
<div class="message">${msg}</div>
<div class="family-icons">❤️ 🏡 ❤️</div>
<div class="connected">★ Rooted in Love ★</div>
</div>
<div class="root-label">— ROOTED IN LOVE —</div>
<div class="sender">From ${data.sender || 'Me'}</div>
</div></body></html>`;
}

export function buildBlessingsGratitude(data: CardData): string {
  const msg = data.message || "May this new year overflow with blessings, joy, and divine favor. You are deeply loved and appreciated! 🙏";
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:Georgia,"Times New Roman",serif;background:#fff8e1}
.card{position:relative;width:600px;height:900px;background:linear-gradient(180deg,#fff8e1 0%,#fff3e0 30%,#fff8e1 60%,#fffde7 100%);overflow:hidden;color:#5d4037;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}
.rays{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:600px;height:600px;z-index:0}
.ray{position:absolute;top:50%;left:50%;width:300px;height:3px;background:linear-gradient(90deg,rgba(212,175,55,.3),transparent);transform-origin:left center}
.r1{transform:rotate(0deg)}.r2{transform:rotate(30deg)}.r3{transform:rotate(60deg)}
.r4{transform:rotate(90deg)}.r5{transform:rotate(120deg)}.r6{transform:rotate(150deg)}
.r7{transform:rotate(180deg)}.r8{transform:rotate(210deg)}.r9{transform:rotate(240deg)}
.r10{transform:rotate(270deg)}.r11{transform:rotate(300deg)}.r12{transform:rotate(330deg)}
.glow{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:200px;height:200px;background:radial-gradient(circle,rgba(255,215,0,.2),transparent 70%);border-radius:50%;z-index:0}
.frame{position:absolute;inset:24px;border:2px solid rgba(212,175,55,.3);z-index:1}
.frame-inner{position:absolute;inset:32px;border:1px solid rgba(212,175,55,.15);z-index:1}
.content{position:relative;z-index:2;text-align:center;padding:0 40px;width:100%;flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center}
.pray-hands{font-size:60px;margin-bottom:6px}
.birthday-label{font-size:12px;letter-spacing:8px;color:#8d6e63;margin-bottom:8px}
.title{font-size:44px;font-weight:400;color:#5d4037;margin-bottom:4px}
.name{font-size:56px;font-weight:700;color:#3e2723;margin-bottom:14px}
.divider{display:flex;align-items:center;gap:10px;margin-bottom:14px}
.div-line{width:50px;height:1px;background:#d4af37}
.div-star{color:#d4af37;font-size:16px}
.message{font-size:18px;max-width:420px;line-height:1.8;color:#6d4c41;font-style:italic;margin-bottom:14px}
.blessing-words{font-size:13px;letter-spacing:5px;color:#8d6e63;text-transform:uppercase;margin-bottom:8px}
.scripture{font-size:14px;font-style:italic;color:#a1887f;max-width:380px;line-height:1.5;margin-bottom:10px}
.bottom-icons{font-size:28px;letter-spacing:12px;margin-bottom:10px}
.sender{position:absolute;bottom:36px;font-size:13px;letter-spacing:4px;color:#a1887f;z-index:2}
</style></head><body>
<div class="card">
<div class="rays">
<div class="ray r1"></div><div class="ray r2"></div><div class="ray r3"></div><div class="ray r4"></div>
<div class="ray r5"></div><div class="ray r6"></div><div class="ray r7"></div><div class="ray r8"></div>
<div class="ray r9"></div><div class="ray r10"></div><div class="ray r11"></div><div class="ray r12"></div>
</div>
<div class="glow"></div>
<div class="frame"></div>
<div class="frame-inner"></div>
<div class="content">
<div class="pray-hands">🙏</div>
<div class="birthday-label">★ Blessings & Gratitude ★</div>
<div class="title">Happy Birthday</div>
<div class="name">${data.name}</div>
<div class="divider">
<div class="div-line"></div>
<div class="div-star">✦</div>
<div class="div-line"></div>
</div>
<div class="message">${msg}</div>
<div class="blessing-words">✦ Peace · Joy · Grace ✦</div>
<div class="scripture">"The Lord bless you and keep you; the Lord make his face shine on you."</div>
<div class="bottom-icons">🕊️ ✨ 🕊️</div>
</div>
<div class="sender">From ${data.sender || 'Me'}</div>
</div></body></html>`;
}

export function buildSundayGarden(data: CardData): string {
  const msg = data.message || "May your special day bloom with happiness and your year ahead be filled with beautiful moments! Happy Birthday! 🌸";
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Segoe UI",sans-serif;background:#f1f8e9}
.card{position:relative;width:600px;height:900px;background:linear-gradient(180deg,#f1f8e9 0%,#dcedc8 40%,#c5e1a5 80%,#aed581 100%);overflow:hidden;color:#33691e;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}
.sunlight{position:absolute;top:-100px;left:50%;transform:translateX(-50%);width:400px;height:300px;background:radial-gradient(ellipse,rgba(255,235,59,.25),transparent 70%);z-index:0}
.garden-path{position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:0;height:0;border-left:100px solid transparent;border-right:100px solid transparent;border-bottom:200px solid rgba(139,119,42,.15);z-index:0}
.flowers{position:absolute;z-index:2}
.flower{position:absolute;font-size:32px}
.f1{bottom:200px;left:30px}.f2{bottom:220px;right:40px}.f3{bottom:240px;left:100px}
.f4{bottom:250px;right:110px}.f5{bottom:180px;left:160px}.f6{bottom:190px;right:170px}
.f7{bottom:280px;left:60px}.f8{bottom:290px;right:70px}
.butterflies{position:absolute;z-index:3}
.bf{position:absolute;font-size:24px}
.bf1{top:200px;left:60px}.bf2{top:150px;right:80px}.bf3{top:300px;left:120px}
.grass{position:absolute;bottom:0;left:0;right:0;height:100px;background:linear-gradient(180deg,transparent,rgba(76,175,80,.3));z-index:0}
.content{position:relative;z-index:3;text-align:center;margin-top:50px;padding:0 30px;width:100%}
.garden-tag{font-size:12px;letter-spacing:8px;text-transform:uppercase;color:#558b2f;margin-bottom:8px}
.flower-row{font-size:36px;letter-spacing:8px;margin-bottom:8px}
.title{font-size:48px;font-weight:700;color:#33691e;margin-bottom:4px}
.name{font-size:58px;font-weight:800;color:#1b5e20;margin-bottom:14px}
.message{font-size:18px;max-width:420px;line-height:1.7;color:#558b2f;margin-bottom:14px}
.garden-deco{font-size:28px;letter-spacing:12px;margin-bottom:10px}
.quote{font-size:13px;font-style:italic;color:#689f38;letter-spacing:2px;margin-bottom:10px}
.sender{position:absolute;bottom:30px;font-size:13px;letter-spacing:4px;color:#558b2f;z-index:3}
</style></head><body>
<div class="card">
<div class="sunlight"></div>
<div class="garden-path"></div>
<div class="grass"></div>
<div class="flowers">
<div class="flower f1">🌻</div><div class="flower f2">🌷</div><div class="flower f3">🌹</div>
<div class="flower f4">🌺</div><div class="flower f5">🌼</div><div class="flower f6">🌸</div>
<div class="flower f7">🌷</div><div class="flower f8">🌻</div>
</div>
<div class="butterflies">
<div class="bf bf1">🦋</div><div class="bf bf2">🦋</div><div class="bf bf3">🦋</div>
</div>
<div class="content">
<div class="garden-tag">★ Sunday Garden ★</div>
<div class="flower-row">🌻 🌷 🌹 🌺 🌻</div>
<div class="title">Happy Birthday</div>
<div class="name">${data.name}</div>
<div class="message">${msg}</div>
<div class="garden-deco">🌱 🦋 🌸</div>
<div class="quote">"Bloom where you are planted"</div>
</div>
<div class="sender">From ${data.sender || 'Me'}</div>
</div></body></html>`;
}

export function buildHomeWarmth(data: CardData): string {
  const msg = data.message || "Home is where the heart is, and our hearts are celebrating you today! Have the coziest birthday ever! ❤️";
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Segoe UI",sans-serif;background:#fff3e0}
.card{position:relative;width:600px;height:900px;background:linear-gradient(180deg,#fff3e0 0%,#ffe0b2 40%,#ffcc80 80%,#ffb74d 100%);overflow:hidden;color:#4e342e;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}
.warm-glow{position:absolute;top:40%;left:50%;transform:translate(-50%,-50%);width:400px;height:400px;background:radial-gradient(circle,rgba(255,235,59,.3),rgba(255,183,77,.15),transparent 70%);border-radius:50%;z-index:0}
.house-scene{position:absolute;bottom:0;left:0;right:0;height:180px;z-index:1}
.house{position:absolute;bottom:40px;left:50%;transform:translateX(-50%)}
.house-body{width:120px;height:80px;background:#8d6e63;border-radius:4px;position:relative}
.house-roof{width:0;height:0;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:50px solid #6d4c41;position:absolute;top:-50px;left:-10px}
.house-door{position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:28px;height:40px;background:#4e342e;border-radius:4px 4px 0 0}
.house-window{position:absolute;width:22px;height:22px;background:#fff9c4;border:2px solid #5d4037;border-radius:2px}
.hw1{top:12px;left:12px}.hw2{top:12px;right:12px}
.house-light{position:absolute;top:-10px;left:50%;transform:translateX(-50%);width:16px;height:16px;background:radial-gradient(circle,#ffd54f,#ffb300);border-radius:50%;box-shadow:0 0 20px rgba(255,213,79,.6),0 0 40px rgba(255,179,0,.3)}
.ground{position:absolute;bottom:0;left:0;right:0;height:40px;background:linear-gradient(180deg,#a5d6a7,#81c784)}
.family-silhouettes{position:absolute;bottom:40px;display:flex;gap:6px;z-index:2}
.person{display:flex;flex-direction:column;align-items:center}
.p-head{width:14px;height:14px;border-radius:50%;background:#5d4037}
.p-body{width:18px;height:26px;background:#5d4037;border-radius:6px 6px 0 0;margin-top:2px}
.p-body-sm{width:14px;height:20px}
.content{position:relative;z-index:3;text-align:center;margin-top:40px;padding:0 30px;width:100%}
.home-emoji{font-size:50px;margin-bottom:6px}
.birthday-label{font-size:12px;letter-spacing:8px;text-transform:uppercase;color:#8d6e63;margin-bottom:8px}
.title{font-size:46px;font-weight:700;color:#4e342e;margin-bottom:4px}
.name{font-size:56px;font-weight:800;color:#3e2723;margin-bottom:12px}
.message{font-size:18px;max-width:420px;line-height:1.7;color:#6d4c41;margin-bottom:14px}
.hearts{font-size:30px;letter-spacing:10px;margin-bottom:8px}
.cozy-text{font-size:13px;letter-spacing:6px;color:#8d6e63;text-transform:uppercase;margin-bottom:8px}
.sender{position:absolute;bottom:195px;font-size:13px;letter-spacing:4px;color:#8d6e63;z-index:3}
</style></head><body>
<div class="card">
<div class="warm-glow"></div>
<div class="content">
<div class="home-emoji">🏠</div>
<div class="birthday-label">★ Home Warmth ★</div>
<div class="title">Happy Birthday</div>
<div class="name">${data.name}</div>
<div class="message">${msg}</div>
<div class="hearts">❤️ 🏡 ❤️</div>
<div class="cozy-text">★ Warmth · Love · Home ★</div>
</div>
<div class="house-scene">
<div class="ground"></div>
<div class="house">
<div class="house-roof"></div>
<div class="house-body">
<div class="house-window hw1"></div>
<div class="house-window hw2"></div>
<div class="house-door"></div>
</div>
<div class="house-light"></div>
</div>
<div class="family-silhouettes" style="left:calc(50% + 90px)">
<div class="person"><div class="p-head"></div><div class="p-body"></div></div>
<div class="person"><div class="p-head"></div><div class="p-body p-body-sm"></div></div>
<div class="person"><div class="p-head"></div><div class="p-body"></div></div>
</div>
</div>
<div class="sender">From ${data.sender || 'Me'}</div>
</div></body></html>`;
}
