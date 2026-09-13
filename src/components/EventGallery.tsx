import React, { useState } from 'react';

export function EventGallery() {
  const [activeTab, setActiveTab] = useState('Eid Food Hamper');
  const tabs = ['Eid Food Hamper', 'Ramadan Delivery', 'Community Iftar'];

  // Gallery data – local images (using new filenames)
  const galleryImages = {
    'Eid Food Hamper': [
      'assets/eid.jpg',
      'assets/eid2.jpg',
      'assets/eid3.jpg',
      'assets/eid4.jpg',
      'assets/eid5.jpg',
      'assets/eid6.jpg',
      'assets/eid7.jpg',
      'assets/eid8.jpg',
      'assets/eid11.jpg',
      'assets/eidcookieket.jpg',
      'assets/eidgiftcards.jpg',
      'assets/Eidkits.jpg',
      'assets/eidkits1.jpg',
      'assets/Eidkits2.jpg'
    ],
    'Ramadan Delivery': [
      'assets/ramadan1.jpg',
      'assets/ramadan2.jpg',
      'assets/ramadan3.jpg',
      'assets/ramadan4.jpg',
      'assets/ramadan5.jpg',
      'assets/ramadan6.jpg',
      'assets/ramadan7.jpg',
      'assets/ramadan8.jpg',
      'assets/ramadan9.jpeg',
      'assets/ramadan10.jpg',
      'assets/ramdan.jpg'
    ],
    'Community Iftar': [
      'assets/comunity1.jpeg',
      'assets/comunity2.jpeg',
      'assets/comunity3.jpg',
      'assets/comunity4.jpeg',
      'assets/comuinty5.jpg',
      'assets/voulnteers%202.jpg',
      'assets/vulnteering%20team%203.jpg',
      'assets/vulnteering%20team%204.jpg',
      'assets/vulnteering%20team.jpg',
      'assets/vulnteers%20from%20all.jpeg',
      'assets/young%20vulnteers.jpeg',
      'assets/young%20vulnteers2.jpeg',
      'assets/young%20vulnteers3.jpeg',
      'assets/youth%20volnteers.jpeg'
    ]
  };

  const images = galleryImages[activeTab as keyof typeof galleryImages] || galleryImages['Eid Food Hamper'];
  
  // Duplicate for seamless infinite scroll
  const duplicatedImages = [...images, ...images];

  return (
    <section className="py-24 bg-brand-light relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <span className="text-brand-secondary font-bold tracking-widest uppercase text-xs mb-2 block">Community in Action</span>
        <h2 className="font-serif text-4xl md:text-5xl text-brand-darker mb-8">Event Gallery</h2>
        
        {/* Gallery Tabs */}
        <div className="flex flex-wrap justify-center gap-3" role="tablist">
          {tabs.map(tab => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === tab 
                  ? 'bg-brand-primary text-white' 
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-primary'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Infinite Marquee via CSS */}
      <div className="relative flex overflow-hidden group py-8">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-brand-light to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-brand-light to-transparent z-10 pointer-events-none"></div>
        
        <div 
          key={activeTab} // Reset animation when tab changes
          className="flex gap-6 min-w-max px-6 animate-marquee hover:[animation-play-state:paused]"
        >
          {duplicatedImages.map((src, idx) => (
            <div key={idx} className="w-[280px] h-[200px] rounded-2xl overflow-hidden shadow-sm shrink-0 bg-gray-100">
              <img src={src} alt={`${activeTab} event`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
      <p className="text-center text-xs text-gray-400 mt-4">Automatically scrolls</p>
    </section>
  );
}
