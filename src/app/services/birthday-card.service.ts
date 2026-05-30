import { Injectable } from '@angular/core';
import { toPng } from 'html-to-image';

export interface CardData {
  name: string;
  message?: string;
  sender?: string;
}

@Injectable({ providedIn: 'root' })
export class BirthdayCardService {

  private buildHtml(data: CardData): string {
    const message = data.message || 'Wishing you a wonderful day filled with joy, laughter, success and God\'s abundant blessings.';
    const sender = data.sender || 'Me';

    return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Segoe UI","Roboto",Arial,sans-serif;background:#f5f5f5}
.card{
  position:relative;width:600px;height:900px;
  background:#3f5166;overflow:hidden;color:white
}
.balloon{
  position:absolute;width:90px;height:110px;
  border-radius:50%;top:-40px
}
.balloon:after{
  content:'';position:absolute;width:2px;height:50px;
  background:rgba(255,255,255,0.3);left:50%;top:100%
}
.b1{left:10px;background:#6ea8dc}
.b2{left:80px;background:#7dc6c9}
.b3{left:160px;background:#f4d03f}
.b4{left:240px;background:#dc5a48}
.b5{left:330px;background:#79c8d0}
.b6{left:420px;background:#dc5a48}
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
.message{
  position:absolute;top:560px;width:80%;left:10%;
  text-align:center;font-size:24px;line-height:1.6;color:rgba(255,255,255,0.9)
}
.ground{position:absolute;bottom:0;width:100%;height:180px;background:#bfdedb}
.gift{
  position:absolute;bottom:80px;left:50%;transform:translateX(-50%);
  width:170px;height:170px;background:#e7d1a4
}
.gift-lid{
  position:absolute;top:-20px;left:-10px;
  width:190px;height:35px;background:#d8c092
}
.ribbon-v{position:absolute;left:75px;top:0;width:20px;height:170px;background:white}
.ribbon-h{position:absolute;top:65px;left:0;width:170px;height:20px;background:white}
.bow{position:absolute;top:-55px;left:55px;font-size:70px}
</style>
</head>
<body>
<div class="card">
  <div class="balloon b1"></div><div class="balloon b2"></div>
  <div class="balloon b3"></div><div class="balloon b4"></div>
  <div class="balloon b5"></div><div class="balloon b6"></div>
  <div class="balloon b7"></div>
  <div class="confetti c1"></div><div class="confetti c2"></div>
  <div class="confetti c3"></div><div class="confetti c4"></div>
  <div class="confetti c5"></div>
  <div class="confetti c6"></div><div class="confetti c7"></div>
  <div class="confetti c8"></div><div class="confetti c9"></div>
  <div class="confetti c10"></div>
  <div class="sender">From ${sender}</div>
  <div class="subtitle">Hip! Hip! Hip! Hurray!</div>
  <div class="title">Happy Birthday</div>
  <div class="name">${data.name}</div>
  <div class="message">${message}</div>
  <div class="ground"></div>
  <div class="gift"><div class="gift-lid"></div><div class="ribbon-v"></div><div class="ribbon-h"></div><div class="bow">🎀</div></div>
</div>
</body>
</html>`;
  }

  async generateCardBlob(data: CardData): Promise<Blob> {
    const iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.left = '-9999px';
    iframe.style.top = '0';
    iframe.style.width = '600px';
    iframe.style.height = '900px';
    iframe.style.border = 'none';
    iframe.style.zIndex = '-1';
    document.body.appendChild(iframe);

    return new Promise<Blob>((resolve, reject) => {
      iframe!.onload = async () => {
        try {
          const card = iframe!.contentDocument?.querySelector('.card');
          if (!card) throw new Error('Card element not found in iframe');

          const dataUrl = await toPng(card as HTMLElement, {
            width: 600,
            height: 900,
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

      iframe!.srcdoc = this.buildHtml(data);
    });
  }
}
