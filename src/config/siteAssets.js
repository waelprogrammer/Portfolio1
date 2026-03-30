// ============================================================
//  SITE ASSETS & PERSONAL INFO — Edit everything here
//  This is the ONLY file you need to change for images & text
// ============================================================

// ------------------------------------------------------------
//  HOW TO ADD YOUR IMAGES
//  1. Drop the image file into:  src/config/images/
//  2. Import it at the top (use a RELATIVE path starting with ./)
//  3. Replace the variable names below with your imported ones
// ------------------------------------------------------------

import pp from './images/pp.png';

// When you have separate photos, add them like this:
// import profilePhoto  from './images/profile.jpg'
// import aboutPhoto    from './images/about.jpg'
// import project1Img   from './images/project1.jpg'
// ... etc.

// ============================================================
//  PERSONAL INFO
// ============================================================
export const personalInfo = {
  name:         'Ranim Toutanji',
  firstName:    'Ranim',
  lastName:     'Toutanji',
  tagline:      'Creative Digital Marketer & Visual Storyteller',
  email:        'toutanjiranim@gmail.com',
  instagram:    '@totonjiranim',
  instagramUrl: 'https://www.instagram.com/totonjiranim/',
  location:     'Tripoli, Lebanon',
  phone:        '+961 81331546',
  available:    true,
};

// ============================================================
//  HERO — Profile photo (replaces 3D avatar when set)
// ============================================================
export const profileImage = pp;

// ============================================================
//  ABOUT — Working photo
// ============================================================
export const aboutImage = pp;

// ============================================================
//  PORTFOLIO PROJECTS — swap pp with your real project images
// ============================================================
export const projects = [
  {
    id: 1,
    title:    'Brand Launch Campaign',
    category: 'Video Ads',
    desc:     'Full campaign video production for a fashion brand — concept, shoot, edit.',
    tags:     ['Premiere Pro', 'Color Grading'],
    type:     'video',
    image:    pp,
  },
  {
    id: 2,
    title:    'Instagram Feed Makeover',
    category: 'Social Media',
    desc:     'Complete visual identity refresh for a lifestyle brand Instagram presence.',
    tags:     ['Photoshop', 'Strategy'],
    type:     'image',
    image:    pp,
  },
  {
    id: 3,
    title:    'Wedding Photography',
    category: 'Photography',
    desc:     'Emotional storytelling through the lens — a full-day wedding shoot.',
    tags:     ['Photography', 'Lightroom'],
    type:     'photo',
    image:    pp,
  },
  {
    id: 4,
    title:    'Restaurant Website',
    category: 'Websites',
    desc:     'Modern WordPress site with online reservation and menu system.',
    tags:     ['WordPress', 'Elementor'],
    type:     'web',
    image:    pp,
  },
  {
    id: 5,
    title:    'Product Ad Reel',
    category: 'Video Ads',
    desc:     'Dynamic product showcase reel optimized for Instagram and TikTok.',
    tags:     ['After Effects', 'Motion'],
    type:     'video',
    image:    pp,
  },
  {
    id: 6,
    title:    'Event Coverage Montage',
    category: 'Photography',
    desc:     'Corporate gala — full photo coverage and post-production.',
    tags:     ['Photography', 'Events'],
    type:     'photo',
    image:    pp,
  },
  {
    id: 7,
    title:    'Social Media Ads Pack',
    category: 'Social Media',
    desc:     'Set of 20+ designed ads for Meta ad campaigns across multiple formats.',
    tags:     ['Design', 'Meta Ads'],
    type:     'image',
    image:    pp,
  },
  {
    id: 8,
    title:    'Salon Booking Website',
    category: 'Websites',
    desc:     'Elegant WordPress site with booking plugin and custom branding.',
    tags:     ['WordPress', 'UX'],
    type:     'web',
    image:    pp,
  },
  {
    id: 9,
    title:    'Party Photography',
    category: 'Photography',
    desc:     'Vibrant night photography capturing candid moments at a birthday party.',
    tags:     ['Photography', 'Nightlife'],
    type:     'photo',
    image:    pp,
  },
];

// ============================================================
//  PHOTOGRAPHY SECTION
// ============================================================
export const photographyImages = [
  { id: 1, label: 'Wedding',  emoji: '💍', image: pp },
  { id: 2, label: 'Portrait', emoji: '✨', image: pp },
  { id: 3, label: 'Event',    emoji: '🎉', image: pp },
  { id: 4, label: 'Candid',   emoji: '🕯️', image: pp },
  { id: 5, label: 'Party',    emoji: '🎊', image: pp },
];
