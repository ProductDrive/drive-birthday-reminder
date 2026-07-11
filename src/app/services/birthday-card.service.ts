import { Injectable } from '@angular/core';
import { toPng } from 'html-to-image';

import { CardData, buildElegantLetter, buildCelebrationClassic, buildFloralCelebration, buildModernMinimal, buildGoldenLuxury, buildPhotoStory, buildMemoryScrapbook, buildWatercolourDreams, buildNatureEscape, buildNightSky, buildBalloonKingdom, buildCartoonAdventure, buildRainbowCelebration, buildDinosaurParty, buildSpaceExplorer, buildAnimalFriends } from './card-builders-universal';
import { buildNeonParty, buildSocialMediaStory, buildMusicFestival, buildGamerUniverse, buildStreetArt, buildLuxuryMagazine, buildTravelPassport, buildFutureVisionBoard, buildCityLights, buildCoffeeBooks, buildFamilyTree, buildBlessingsGratitude, buildSundayGarden, buildHomeWarmth } from './card-builders-teen';
import { buildTimelessElegance, buildVintageMemories, buildHeritageCelebration, buildGoldenYears, buildMilestone1, buildMilestone5, buildMilestone10, buildMilestone13, buildMilestone16, buildMilestone18, buildMilestone21, buildMilestone30, buildMilestone40, buildMilestone50, buildMilestone60, buildMilestone70, buildMilestone80, buildMilestone90, buildMilestone100 } from './card-builders-senior';

export type { CardData } from './card-builders-universal';

export interface TemplateInfo {
  displayName: string;
  description: string;
  emoji: string;
  category: string;
  mood: string;
  goodFor: string;
}

interface TemplateDef {
  width: number;
  height: number;
  maxMessageLength: number;
  builder: (data: CardData) => string;
}

@Injectable({ providedIn: 'root' })
export class BirthdayCardService {

  readonly templateInfo: Record<string, TemplateInfo> = {
    'elegant-letter':      { displayName: 'Elegant Letter',          description: 'Luxury greeting card with typography focus',                    emoji: '✉️',  category: 'universal', mood: 'Premium, Warm, Sophisticated', goodFor: 'Adults, Professionals, Long messages' },
    'celebration-classic': { displayName: 'Celebration Classic',     description: 'Modern birthday card with balloons and confetti',               emoji: '🎉',  category: 'universal', mood: 'Joyful, Universal', goodFor: 'All ages' },
    'floral-celebration':  { displayName: 'Floral Celebration',      description: 'Soft floral frame with botanical accents',                     emoji: '🌸',  category: 'universal', mood: 'Refreshing, Elegant', goodFor: 'Women, Parents, Mature audiences' },
    'modern-minimal':      { displayName: 'Modern Minimal',          description: 'Clean contemporary design with accent gradients',              emoji: '🔷',  category: 'universal', mood: 'Calm, Premium', goodFor: 'Corporate, Young professionals' },
    'golden-luxury':       { displayName: 'Golden Luxury',           description: 'High-end celebration with metallic effects',                   emoji: '✨',  category: 'universal', mood: 'Prestige, Exclusive', goodFor: 'Milestone birthdays' },
    'photo-story':         { displayName: 'Photo Story Card',        description: 'Hero image with text sections for memories',                   emoji: '📸',  category: 'universal', mood: 'Personal, Emotional', goodFor: 'Family birthdays' },
    'memory-scrapbook':    { displayName: 'Memory Scrapbook',        description: 'Polaroid and handwritten style',                              emoji: '📒',  category: 'universal', mood: 'Nostalgic', goodFor: 'Friends, Family' },
    'watercolour-dreams':  { displayName: 'Watercolour Dreams',      description: 'Soft artistic card with watercolour textures',                emoji: '🎨',  category: 'universal', mood: 'Gentle, Lovely', goodFor: 'Universal use' },
    'nature-escape':       { displayName: 'Nature Escape',           description: 'Landscape-inspired card with nature elements',                emoji: '🏔️', category: 'universal', mood: 'Fresh, Peaceful', goodFor: 'Adults' },
    'night-sky':           { displayName: 'Night Sky Celebration',   description: 'Stars and constellations with magical glow',                  emoji: '🌙',  category: 'universal', mood: 'Magical', goodFor: 'All ages' },
    'balloon-kingdom':     { displayName: 'Balloon Kingdom',         description: 'Playful balloon world full of colour',                        emoji: '🎈',  category: 'children', mood: 'Playful, Joyful', goodFor: 'Kids ages 1–10' },
    'cartoon-adventure':   { displayName: 'Cartoon Adventure',       description: 'Explorer theme with cartoon characters',                      emoji: '🗺️', category: 'children', mood: 'Adventurous, Fun', goodFor: 'Kids ages 4–12' },
    'rainbow-celebration': { displayName: 'Rainbow Celebration',     description: 'Bright rainbow-themed card with cheerful colours',            emoji: '🌈',  category: 'children', mood: 'Cheerful, Vibrant', goodFor: 'Kids ages 2–10' },
    'dinosaur-party':      { displayName: 'Dinosaur Party',          description: 'Fun dinosaur party theme',                                    emoji: '🦕',  category: 'children', mood: 'Wild, Exciting', goodFor: 'Kids ages 3–9' },
    'space-explorer':      { displayName: 'Space Explorer',          description: 'Outer space adventure with planets and rockets',              emoji: '🚀',  category: 'children', mood: 'Imaginative, Bold', goodFor: 'Kids ages 5–13' },
    'animal-friends':      { displayName: 'Animal Friends',          description: 'Cute animal characters celebrating together',                 emoji: '🐾',  category: 'children', mood: 'Cute, Friendly', goodFor: 'Kids ages 1–8' },
    'neon-party':          { displayName: 'Neon Party',              description: 'Vibrant neon lights and glow effects',                        emoji: '💜',  category: 'teen', mood: 'Energetic, Bold', goodFor: 'Teens ages 13–19' },
    'social-media-story':  { displayName: 'Social Media Story',      description: 'Social media inspired story layout',                          emoji: '📱',  category: 'teen', mood: 'Trendy, Digital', goodFor: 'Teens ages 13–20' },
    'music-festival':      { displayName: 'Music Festival',          description: 'Concert and festival vibes',                                  emoji: '🎵',  category: 'teen', mood: 'Loud, Exciting', goodFor: 'Music-loving teens' },
    'gamer-universe':      { displayName: 'Gamer Universe',          description: 'Video game themed celebration',                               emoji: '🎮',  category: 'teen', mood: 'Epic, Fun', goodFor: 'Gaming teens' },
    'street-art':          { displayName: 'Street Art',              description: 'Urban graffiti and street art style',                         emoji: '🎨',  category: 'teen', mood: 'Edgy, Creative', goodFor: 'Creative teens' },
    'luxury-magazine':     { displayName: 'Luxury Magazine Cover',   description: 'High-end magazine cover layout',                              emoji: '💎',  category: 'young-adult', mood: 'Glamorous, Stylish', goodFor: 'Young professionals' },
    'travel-passport':     { displayName: 'Travel Passport',         description: 'Wanderlust-inspired passport stamp design',                   emoji: '✈️',  category: 'young-adult', mood: 'Adventurous, Free', goodFor: 'Travel lovers' },
    'future-vision-board': { displayName: 'Future Vision Board',     description: 'Inspirational vision board style',                            emoji: '🔮',  category: 'young-adult', mood: 'Aspirational, Motivating', goodFor: 'Goal-oriented adults' },
    'city-lights':         { displayName: 'City Lights',             description: 'Urban skyline and nightlife celebration',                     emoji: '🌃',  category: 'young-adult', mood: 'Sophisticated, Modern', goodFor: 'Urban professionals' },
    'coffee-books':        { displayName: 'Coffee & Books',          description: 'Cosy café vibes with literary charm',                         emoji: '☕',  category: 'young-adult', mood: 'Warm, Relaxed', goodFor: 'Bookworms, introverts' },
    'family-tree':         { displayName: 'Family Tree',             description: 'Connected family tree illustration',                          emoji: '🌳',  category: 'family-parent', mood: 'Connected, Heartfelt', goodFor: 'Parents, Grandparents' },
    'blessings-gratitude': { displayName: 'Blessings & Gratitude',   description: 'Faith-inspired card with grateful sentiments',                emoji: '🙏',  category: 'family-parent', mood: 'Grateful, Spiritual', goodFor: 'Religious families, Elders' },
    'sunday-garden':       { displayName: 'Sunday Garden',           description: 'Peaceful garden scene with floral accents',                   emoji: '🌻',  category: 'family-parent', mood: 'Peaceful, Nurturing', goodFor: 'Mothers, Gardeners' },
    'home-warmth':         { displayName: 'Home & Warmth',           description: 'Cozy home-themed celebration card',                           emoji: '🏠',  category: 'family-parent', mood: 'Cosy, Loving', goodFor: 'Parents, Homebodies' },
    'timeless-elegance':   { displayName: 'Timeless Elegance',       description: 'Graceful design with classic elements',                       emoji: '🕊️', category: 'senior-elder', mood: 'Dignified, Refined', goodFor: 'Elderly celebrants' },
    'vintage-memories':    { displayName: 'Vintage Memories',        description: 'Retro-styled card with sepia tones',                          emoji: '🎞️', category: 'senior-elder', mood: 'Nostalgic, Warm', goodFor: 'Lovers of vintage aesthetics' },
    'heritage-celebration':{ displayName: 'Heritage Celebration',    description: 'Cultural heritage-inspired ornate design',                    emoji: '🏛️', category: 'senior-elder', mood: 'Traditional, Proud', goodFor: 'Cultural celebrations' },
    'golden-years':        { displayName: 'Golden Years',            description: 'Warm golden theme celebrating a life well-lived',              emoji: '🌅',  category: 'senior-elder', mood: 'Wise, Celebratory', goodFor: 'Retirees, Milestone elders' },
    'milestone-1':         { displayName: 'First Birthday',          description: 'Special card for the very first birthday',                    emoji: '👶',  category: 'milestone', mood: 'Adorable, Milestone', goodFor: 'Age 1' },
    'milestone-5':         { displayName: 'Little Explorer',         description: 'Adventure-themed card for turning 5',                         emoji: '🔍',  category: 'milestone', mood: 'Curious, Playful', goodFor: 'Age 5' },
    'milestone-10':        { displayName: 'Double Digits',           description: 'Celebrating the big 1-0',                                    emoji: '🔟',  category: 'milestone', mood: 'Excited, Bold', goodFor: 'Age 10' },
    'milestone-13':        { displayName: 'Teen Begins',             description: 'Welcome to the teenage years',                                emoji: '🥳',  category: 'milestone', mood: 'Cool, Trendy', goodFor: 'Age 13' },
    'milestone-16':        { displayName: 'Sweet Sixteen',           description: 'Elegant sweet sixteen celebration',                           emoji: '👑',  category: 'milestone', mood: 'Glamorous, Special', goodFor: 'Age 16' },
    'milestone-18':        { displayName: 'Adult Journey',           description: 'Stepping into adulthood',                                     emoji: '🎓',  category: 'milestone', mood: 'Mature, Aspirational', goodFor: 'Age 18' },
    'milestone-21':        { displayName: 'Milestone Celebration',   description: 'The classic 21st birthday celebration',                       emoji: '🥂',  category: 'milestone', mood: 'Iconic, Festive', goodFor: 'Age 21' },
    'milestone-30':        { displayName: 'Thirty & Thriving',       description: 'Celebrating life at 30',                                      emoji: '🌿',  category: 'milestone', mood: 'Confident, Stylish', goodFor: 'Age 30' },
    'milestone-40':        { displayName: 'Forty & Fabulous',        description: 'Bold celebration of turning 40',                              emoji: '💎',  category: 'milestone', mood: 'Bold, Fabulous', goodFor: 'Age 40' },
    'milestone-50':        { displayName: 'Golden Celebration',      description: 'Half-century golden jubilee',                                 emoji: '🏆',  category: 'milestone', mood: 'Prestigious, Warm', goodFor: 'Age 50' },
    'milestone-60':        { displayName: 'Diamond Moments',         description: 'Diamond-studded 60th celebration',                           emoji: '💠',  category: 'milestone', mood: 'Brilliant, Precious', goodFor: 'Age 60' },
    'milestone-70':        { displayName: 'Legacy Celebration',      description: 'Honouring a life of legacy at 70',                            emoji: '🏅',  category: 'milestone', mood: 'Honourable, Legacy', goodFor: 'Age 70' },
    'milestone-80':        { displayName: 'Grace & Wisdom',          description: 'Celebrating 80 years of grace and wisdom',                    emoji: '🕊️', category: 'milestone', mood: 'Graceful, Wise', goodFor: 'Age 80' },
    'milestone-90':        { displayName: 'Timeless Journey',        description: 'Celebrating 90 incredible years',                             emoji: '⏳',  category: 'milestone', mood: 'Timeless, Cherished', goodFor: 'Age 90+' },
    'milestone-100':       { displayName: 'Century Celebration',     description: 'Once-in-a-lifetime 100th birthday',                           emoji: '🎆',  category: 'milestone', mood: 'Legendary, Unforgettable', goodFor: 'Age 100' },
  };

  private templates: Record<string, TemplateDef> = {
    'elegant-letter':      { width: 600, height: 900, maxMessageLength: 250, builder: buildElegantLetter },
    'celebration-classic': { width: 600, height: 900, maxMessageLength: 150, builder: buildCelebrationClassic },
    'floral-celebration':  { width: 600, height: 900, maxMessageLength: 220, builder: buildFloralCelebration },
    'modern-minimal':      { width: 600, height: 900, maxMessageLength: 230, builder: buildModernMinimal },
    'golden-luxury':       { width: 600, height: 900, maxMessageLength: 200, builder: buildGoldenLuxury },
    'photo-story':         { width: 600, height: 900, maxMessageLength: 180, builder: buildPhotoStory },
    'memory-scrapbook':    { width: 600, height: 900, maxMessageLength: 180, builder: buildMemoryScrapbook },
    'watercolour-dreams':  { width: 600, height: 900, maxMessageLength: 200, builder: buildWatercolourDreams },
    'nature-escape':       { width: 600, height: 900, maxMessageLength: 200, builder: buildNatureEscape },
    'night-sky':           { width: 600, height: 900, maxMessageLength: 200, builder: buildNightSky },
    'balloon-kingdom':     { width: 600, height: 900, maxMessageLength: 150, builder: buildBalloonKingdom },
    'cartoon-adventure':   { width: 600, height: 900, maxMessageLength: 150, builder: buildCartoonAdventure },
    'rainbow-celebration': { width: 600, height: 900, maxMessageLength: 150, builder: buildRainbowCelebration },
    'dinosaur-party':      { width: 600, height: 900, maxMessageLength: 150, builder: buildDinosaurParty },
    'space-explorer':      { width: 600, height: 900, maxMessageLength: 150, builder: buildSpaceExplorer },
    'animal-friends':      { width: 600, height: 900, maxMessageLength: 150, builder: buildAnimalFriends },
    'neon-party':          { width: 600, height: 900, maxMessageLength: 180, builder: buildNeonParty },
    'social-media-story':  { width: 600, height: 900, maxMessageLength: 180, builder: buildSocialMediaStory },
    'music-festival':      { width: 600, height: 900, maxMessageLength: 180, builder: buildMusicFestival },
    'gamer-universe':      { width: 600, height: 900, maxMessageLength: 180, builder: buildGamerUniverse },
    'street-art':          { width: 600, height: 900, maxMessageLength: 180, builder: buildStreetArt },
    'luxury-magazine':     { width: 600, height: 900, maxMessageLength: 180, builder: buildLuxuryMagazine },
    'travel-passport':     { width: 600, height: 900, maxMessageLength: 180, builder: buildTravelPassport },
    'future-vision-board': { width: 600, height: 900, maxMessageLength: 180, builder: buildFutureVisionBoard },
    'city-lights':         { width: 600, height: 900, maxMessageLength: 180, builder: buildCityLights },
    'coffee-books':        { width: 600, height: 900, maxMessageLength: 180, builder: buildCoffeeBooks },
    'family-tree':         { width: 600, height: 900, maxMessageLength: 200, builder: buildFamilyTree },
    'blessings-gratitude': { width: 600, height: 900, maxMessageLength: 200, builder: buildBlessingsGratitude },
    'sunday-garden':       { width: 600, height: 900, maxMessageLength: 200, builder: buildSundayGarden },
    'home-warmth':         { width: 600, height: 900, maxMessageLength: 200, builder: buildHomeWarmth },
    'timeless-elegance':   { width: 600, height: 900, maxMessageLength: 200, builder: buildTimelessElegance },
    'vintage-memories':    { width: 600, height: 900, maxMessageLength: 200, builder: buildVintageMemories },
    'heritage-celebration':{ width: 600, height: 900, maxMessageLength: 200, builder: buildHeritageCelebration },
    'golden-years':        { width: 600, height: 900, maxMessageLength: 200, builder: buildGoldenYears },
    'milestone-1':         { width: 600, height: 900, maxMessageLength: 150, builder: buildMilestone1 },
    'milestone-5':         { width: 600, height: 900, maxMessageLength: 150, builder: buildMilestone5 },
    'milestone-10':        { width: 600, height: 900, maxMessageLength: 150, builder: buildMilestone10 },
    'milestone-13':        { width: 600, height: 900, maxMessageLength: 150, builder: buildMilestone13 },
    'milestone-16':        { width: 600, height: 900, maxMessageLength: 150, builder: buildMilestone16 },
    'milestone-18':        { width: 600, height: 900, maxMessageLength: 150, builder: buildMilestone18 },
    'milestone-21':        { width: 600, height: 900, maxMessageLength: 150, builder: buildMilestone21 },
    'milestone-30':        { width: 600, height: 900, maxMessageLength: 150, builder: buildMilestone30 },
    'milestone-40':        { width: 600, height: 900, maxMessageLength: 150, builder: buildMilestone40 },
    'milestone-50':        { width: 600, height: 900, maxMessageLength: 150, builder: buildMilestone50 },
    'milestone-60':        { width: 600, height: 900, maxMessageLength: 150, builder: buildMilestone60 },
    'milestone-70':        { width: 600, height: 900, maxMessageLength: 150, builder: buildMilestone70 },
    'milestone-80':        { width: 600, height: 900, maxMessageLength: 150, builder: buildMilestone80 },
    'milestone-90':        { width: 600, height: 900, maxMessageLength: 150, builder: buildMilestone90 },
    'milestone-100':       { width: 600, height: 900, maxMessageLength: 150, builder: buildMilestone100 },
  };

  getTemplateKeys(): string[] {
    return Object.keys(this.templates);
  }

  getTemplateInfo(shortName: string): TemplateInfo | undefined {
    return this.templateInfo[shortName];
  }

  getMaxMessageLength(templateShortName: string): number {
    return this.templates[templateShortName]?.maxMessageLength ?? 150;
  }

  private truncate(msg: string, maxLen: number): string {
    if (msg.length <= maxLen) return msg;
    return msg.slice(0, maxLen).replace(/\s+\S*$/, '') + '…';
  }

  async generateCardBlob(data: CardData, templateShortName = 'celebration-classic'): Promise<Blob> {
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
