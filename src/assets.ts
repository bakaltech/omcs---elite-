export const ASSETS = {
  motherHuggingChild: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a',
  youthMentorship: 'https://images.unsplash.com/photo-1529390079861-591de354faf5',
  foodSecurity: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9',
  seniorsConnection: 'https://images.unsplash.com/photo-1516307365426-bea591f05011',
  communityGathering: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca',
  counsellingSession: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
  fatherDaughterSnow: 'https://images.unsplash.com/photo-1517677129300-07b130802f46',
  communityEvent: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18',
  youthLeader: 'https://images.unsplash.com/photo-1526976663112-00a531eb8856',
  coupleTherapy: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a',
  supportGroup: 'https://images.unsplash.com/photo-1529156069898-49953eb1b5ce',
  therapist1: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
  therapist2: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df',
  therapist3: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
  newcomerSettlement: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
  familySupport: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b',
  handsHeart: 'https://images.unsplash.com/photo-1504151932400-72d4384f0e6d',
  holdingHands: 'https://images.unsplash.com/photo-1516585427167-9f4af9627e6c',
  manWithGlasses: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79',
  groupPlaying: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70',
  kidsSmiling: 'https://images.unsplash.com/photo-1511895426328-dc8714191300',
  muslimVolunteers: '/assets/vulnteering team.jpg',
  foodBank: '/assets/Food Security images.hero.jpg',
  muslimFamily: '/assets/family gallry images.jpg',
  diverseVolunteers: '/assets/vulnteers from all.jpeg',
  muslimCommunity: '/assets/comunity1.jpeg',
  heroGirls: '/assets/Muslim girls holding each other and smiling, hero image1.jpg',
  getInvolvedHero: 'https://images.unsplash.com/photo-1651372381086-9861c9c81db5',
  donateImpact1: '/assets/Food Security images.hero.jpg',
  donateImpact2: '/assets/youth volnteers.jpeg',
  donateImpact3: '/assets/family under sunset.jpg',
  donateImpact4: '/assets/vulnteers from all.jpeg',
  donateImpact5: '/assets/Eidkits.jpg',
};

export function getImageUrl(url: string, width?: number): string {
  if (!url) return '';
  if (url.startsWith('http')) {
    const separator = url.includes('?') ? '&' : '?';
    return width ? `${url}${separator}w=${width}&q=80&auto=format` : url;
  }
  return url;
}
