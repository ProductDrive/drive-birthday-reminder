import { Injectable } from '@angular/core';
import { toPng } from 'html-to-image';

export interface CardData {
  name: string;
  message?: string;
  sender?: string;
}

interface TemplateDef {
  width: number;
  height: number;
  maxMessageLength: number;
  builder: (data: CardData) => string;
}

@Injectable({ providedIn: 'root' })
export class BirthdayCardService {

  private templates: Record<string, TemplateDef> = {
    'classic-balloon': { width: 600, height: 900, maxMessageLength: 150, builder: this.buildClassicBalloon },
    'floral-elegant': { width: 850, height: 1200, maxMessageLength: 200, builder: this.buildFloralElegant },
    'golden-celebration': { width: 600, height: 900, maxMessageLength: 200, builder: this.buildGoldenCelebration },
    'modern-minimal': { width: 600, height: 900, maxMessageLength: 250, builder: this.buildModernMinimal },
  };

  getTemplateKeys(): string[] {
    return Object.keys(this.templates);
  }

  getMaxMessageLength(templateShortName: string): number {
    return this.templates[templateShortName]?.maxMessageLength ?? 150;
  }

  private buildClassicBalloon(data: CardData): string {
    const msg = data.message || 'Wishing you a wonderful day filled with joy, laughter, success and God\'s abundant blessings.';
    return `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Segoe UI","Roboto",Arial,sans-serif;background:#f5f5f5}
.card{position:relative;width:600px;height:900px;background:#3f5166;overflow:hidden;color:white}
.balloon{position:absolute;width:90px;height:110px;border-radius:50%;top:-40px}
.balloon:after{content:'';position:absolute;width:2px;height:50px;background:rgba(255,255,255,0.3);left:50%;top:100%}
.b1{left:10px;background:#6ea8dc}.b2{left:80px;background:#7dc6c9}.b3{left:160px;background:#f4d03f}
.b4{left:240px;background:#dc5a48}.b5{left:330px;background:#79c8d0}.b6{left:420px;background:#dc5a48}
.b7{left:500px;background:#f4d03f}
.confetti{position:absolute;border-radius:50%}
.c1{width:8px;height:8px;background:#f4d03f;top:180px;left:90px}
.c2{width:8px;height:8px;background:#7dc6c9;top:250px;left:80px}
.c3{width:8px;height:8px;background:#ff7b72;top:320px;left:95px}
.c4{width:8px;height:8px;background:#fff;top:430px;left:110px}
.c5{width:8px;height:8px;background:#6ea8dc;top:520px;left:120px}
.c6{width:8px;height:8px;background:#7dc6c9;top:180px;right:90px}
.c7{width:8px;height:8px;background:#f39c12;top:240px;right:70px}
.c8{width:8px;height:8px;background:#fff;top:310px;right:80px}
.c9{width:8px;height:8px;background:#f4d03f;top:390px;right:70px}
.c10{width:8px;height:8px;background:#ff7b72;top:500px;right:60px}
.sender{position:absolute;top:160px;left:70px;font-size:26px}
.subtitle{position:absolute;top:230px;width:100%;text-align:center;font-size:32px}
.title{position:absolute;top:320px;width:100%;text-align:center;font-size:64px;font-weight:300}
.name{position:absolute;top:460px;width:100%;text-align:center;font-size:56px;font-weight:300}
.message{position:absolute;top:560px;width:80%;left:10%;text-align:center;font-size:24px;line-height:1.6;color:rgba(255,255,255,0.9)}
</style></head><body>
<div class="card">
<div class="balloon b1"></div><div class="balloon b2"></div><div class="balloon b3"></div>
<div class="balloon b4"></div><div class="balloon b5"></div><div class="balloon b6"></div><div class="balloon b7"></div>
<div class="confetti c1"></div><div class="confetti c2"></div><div class="confetti c3"></div>
<div class="confetti c4"></div><div class="confetti c5"></div>
<div class="confetti c6"></div><div class="confetti c7"></div><div class="confetti c8"></div>
<div class="confetti c9"></div><div class="confetti c10"></div>
<div class="sender">From ${data.sender || 'Me'}</div>
<div class="subtitle">Hip! Hip! Hip! Hurray!</div>
<div class="title">Happy Birthday</div>
<div class="name">${data.name}</div>
<div class="message">${msg}</div>
</div>
</body></html>`;
  }

  private buildFloralElegant(data: CardData): string {
    const msg = data.message || 'May your birthday be filled with moments that make you smile, people who make you feel loved, and blessings that remind you how special you are. As you celebrate another year, may happiness surround you, peace guide you, and success follow you wherever life leads. Wishing you a truly wonderful birthday and a year ahead filled with beautiful opportunities.';
    return `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#eef6f3;display:flex;justify-content:center;align-items:center;min-height:100vh;font-family:'Segoe UI',sans-serif}
.card{width:850px;min-height:1200px;background:white;border-radius:30px;overflow:hidden;position:relative;box-shadow:0 25px 70px rgba(0,0,0,.12)}
.flower{position:absolute;font-size:90px}
.f1{top:20px;left:20px}.f2{top:20px;right:20px}.f3{bottom:20px;left:20px}.f4{bottom:20px;right:20px}
.header{padding:100px 80px 60px;text-align:center}
.badge{display:inline-block;background:#ffe8f0;color:#d6336c;padding:15px 35px;border-radius:50px;font-size:22px;margin-bottom:30px}
.title{font-size:70px;color:#495057;font-weight:300}
.name{margin-top:25px;font-size:50px;color:#2f9e44}
.divider{width:200px;height:4px;background:#fcc2d7;margin:40px auto;border-radius:5px}
.message{margin:0 60px;background:#f8f9fa;border-radius:0 20px 20px 0;border-left:6px solid #fcc2d7;padding:50px 60px;line-height:2;font-size:28px;color:#495057;position:relative}
.close-quote{text-align:right;font-size:50px;color:#fcc2d7;margin-top:10px;line-height:1}
.footer{padding:70px;text-align:center}
.footer h3{font-size:36px;color:#d6336c;margin-bottom:20px}
.footer p{color:#868e96;font-size:24px}
</style></head><body>
<div class="card">
<div class="flower f1">🌷</div><div class="flower f2">🌸</div><div class="flower f3">🌺</div><div class="flower f4">🌹</div>
<div class="header"><div class="badge">🌼 Celebrating You 🌼</div>
<div class="title">Happy Birthday</div><div class="name">${data.name}</div><div class="divider"></div></div>
<div class="message">${msg}<div class="close-quote">❞</div></div>
<div class="footer"><h3>With Love ❤️</h3><p>${data.sender || 'Me'}</p></div>
</div>
</body></html>`;
  }

  private buildGoldenCelebration(data: CardData): string {
    const msg = data.message || 'Cheers to you on your special day! May this new chapter bring you everything you\'ve been wishing for. Stay blessed, stay amazing, and keep shining bright.';
    return `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Georgia','Times New Roman',serif;background:#1a1a2e}
.card{position:relative;width:600px;height:900px;background:linear-gradient(135deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%);overflow:hidden}
.stars{position:absolute;width:100%;height:100%}
.star{position:absolute;border-radius:50%;background:white}
.s1{width:3px;height:3px;top:8%;left:12%;opacity:.8}.s2{width:2px;height:2px;top:15%;left:45%;opacity:.6}
.s3{width:4px;height:4px;top:5%;left:70%;opacity:.9}.s4{width:2px;height:2px;top:25%;left:85%;opacity:.5}
.s5{width:3px;height:3px;top:12%;left:55%;opacity:.7}.s6{width:2px;height:2px;top:22%;left:30%;opacity:.4}
.s7{width:3px;height:3px;top:18%;left:8%;opacity:.8}.s8{width:2px;height:2px;top:8%;left:90%;opacity:.6}
.glow{position:absolute;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(212,175,55,.15) 0%,transparent 70%);top:-100px;right:-100px}
.glow2{position:absolute;width:300px;height:300px;border-radius:50%;background:radial-gradient(circle,rgba(212,175,55,.1) 0%,transparent 70%);bottom:-50px;left:-50px}
.content{position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;padding-top:160px;color:#e8d5a3}
.crown{font-size:60px;margin-bottom:20px}
.subtitle{font-size:18px;letter-spacing:6px;text-transform:uppercase;color:#d4af37;margin-bottom:30px}
.title{font-size:58px;font-weight:700;color:#f5e6c8;margin-bottom:10px;letter-spacing:2px}
.name{font-size:44px;color:#d4af37;font-weight:400;margin-bottom:50px}
.divider-line{width:120px;height:2px;background:linear-gradient(90deg,transparent,#d4af37,transparent);margin-bottom:50px}
.msg-box{margin:0 60px;padding:40px;border:1px solid rgba(212,175,55,.3);border-radius:16px;background:rgba(212,175,55,.05);text-align:center}
.msg-text{font-size:20px;line-height:1.8;color:#c9b99a}
.sender-line{position:absolute;bottom:100px;left:0;width:100%;text-align:center;z-index:1}
.sender-line span{font-size:22px;color:#d4af37;letter-spacing:2px}
</style></head><body>
<div class="card">
<div class="stars">
<div class="star s1"></div><div class="star s2"></div><div class="star s3"></div>
<div class="star s4"></div><div class="star s5"></div><div class="star s6"></div>
<div class="star s7"></div><div class="star s8"></div>
</div>
<div class="glow"></div><div class="glow2"></div>
<div class="content">
<div class="crown">👑</div>
<div class="subtitle">Celebrating You</div>
<div class="title">Happy Birthday</div>
<div class="name">${data.name}</div>
<div class="divider-line"></div>
<div class="msg-box"><div class="msg-text">${msg}</div></div>
</div>
<div class="sender-line"><span>— ${data.sender || 'Me'} —</span></div>
</div>
</body></html>`;
  }

  private buildModernMinimal(data: CardData): string {
    const msg = data.message || 'Another trip around the sun! Wishing you the happiest birthday filled with love, laughter, and all your favorite things. Enjoy every moment!';
    return `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Segoe UI','Helvetica Neue',Arial,sans-serif;background:#f0f4f8}
.card{position:relative;width:600px;height:900px;background:white;overflow:hidden}
.top-band{height:280px;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);position:relative;overflow:hidden}
.circle{position:absolute;border-radius:50%;background:rgba(255,255,255,.08)}
.cr1{width:200px;height:200px;top:-60px;right:-40px}.cr2{width:140px;height:140px;bottom:-30px;left:-20px}
.cr3{width:80px;height:80px;bottom:20px;right:40px}
.top-content{position:relative;z-index:1;padding:60px 50px 0;color:white}
.badge-modern{display:inline-block;background:rgba(255,255,255,.2);backdrop-filter:blur(10px);padding:8px 24px;border-radius:30px;font-size:14px;letter-spacing:2px;text-transform:uppercase;margin-bottom:30px}
.top-title{font-size:52px;font-weight:700;line-height:1.1}
.top-sub{font-size:22px;font-weight:300;margin-top:8px;opacity:.9}
.main-area{padding:50px 50px 0;text-align:center}
.avatar{width:90px;height:90px;border-radius:50%;background:linear-gradient(135deg,#667eea,#764ba2);display:flex;align-items:center;justify-content:center;margin:0 auto 20px;font-size:36px;color:white;box-shadow:0 8px 30px rgba(102,126,234,.3)}
.name-modern{font-size:38px;color:#2d3748;font-weight:600;margin-bottom:8px}
.label{font-size:16px;color:#a0aec0;text-transform:uppercase;letter-spacing:3px;margin-bottom:30px}
.msg-modern{margin:0 10px;padding:30px;background:#f7fafc;border-radius:16px;border-left:4px solid #667eea;text-align:left}
.msg-modern p{font-size:18px;line-height:1.8;color:#4a5568}
.footer-modern{position:absolute;bottom:0;left:0;width:100%;padding:30px 50px;border-top:1px solid #e2e8f0;text-align:center}
.footer-modern span{font-size:16px;color:#a0aec0}
.footer-modern strong{color:#667eea}
</style></head><body>
<div class="card">
<div class="top-band">
<div class="circle cr1"></div><div class="circle cr2"></div><div class="circle cr3"></div>
<div class="top-content">
<div class="badge-modern">🎉 Special Day</div>
<div class="top-title">Happy Birthday!</div>
<div class="top-sub">Wishing you the best day ever</div>
</div>
</div>
<div class="main-area">
<div class="avatar">🎂</div>
<div class="name-modern">${data.name}</div>
<div class="label">Celebrant</div>
<div class="msg-modern"><p>${msg}</p></div>
</div>
<div class="footer-modern"><span>With love from <strong>${data.sender || 'Me'}</strong></span></div>
</div>
</body></html>`;
  }

  private truncate(msg: string, maxLen: number): string {
    if (msg.length <= maxLen) return msg;
    return msg.slice(0, maxLen).replace(/\s+\S*$/, '') + '…';
  }

  async generateCardBlob(data: CardData, templateShortName = 'classic-balloon'): Promise<Blob> {
    const def = this.templates[templateShortName];
    if (!def) throw new Error(`Unknown template: ${templateShortName}`);

    const truncated = {
      ...data,
      message: data.message ? this.truncate(data.message, def.maxMessageLength) : undefined,
    };

    const iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.left = '-9999px';
    iframe.style.top = '0';
    iframe.style.width = `${def.width}px`;
    iframe.style.height = `${def.height}px`;
    iframe.style.border = 'none';
    iframe.style.zIndex = '-1';
    document.body.appendChild(iframe);

    return new Promise<Blob>((resolve, reject) => {
      iframe!.onload = async () => {
        try {
          const card = iframe!.contentDocument?.querySelector('.card');
          if (!card) throw new Error('Card element not found in iframe');

          const dataUrl = await toPng(card as HTMLElement, {
            pixelRatio: 2,
          });

          const res = await fetch(dataUrl);
          const blob = await res.blob();
          resolve(blob);
        } catch (err) {
          reject(err);
        } finally {
          iframe!.remove();
        }
      };

      iframe!.onerror = () => {
        iframe!.remove();
        reject(new Error('Iframe load failed'));
      };

      iframe!.srcdoc = def.builder(truncated);
    });
  }
}
