// Authentic Jurassic Park Visual Identity - 1993 Film
export const JP_COLORS = {
  // Primary Brand Colors (from original 1993 movie)
  AMBER_PRIMARY: '#DAA520',     // Golden amber - main brand color
  AMBER_SECONDARY: '#B8912B',   // Darker amber for accents
  AMBER_LIGHT: '#F4D03F',       // Light amber for highlights
  
  BLOOD_RED: '#8B0000',         // Deep red from original logo
  RED_ACCENT: '#A0522D',        // Saddle brown for earth tones
  
  // InGen Corporate Colors
  INGEN_BLACK: '#1C1C1C',       // Deep corporate black
  INGEN_GREY: '#2F2F2F',        // Dark grey for panels
  INGEN_SILVER: '#C0C0C0',      // Metallic accents
  
  // Natural Earth Tones
  JUNGLE_DARK: '#0F2419',       // Deep jungle green
  EARTH_BROWN: '#654321',       // Rich earth brown
  FOSSIL_BEIGE: '#DEB887',      // Bone/fossil color
  
  // Text Colors
  PRIMARY_TEXT: '#F5F5DC',      // Bone white
  SECONDARY_TEXT: '#D2B48C',    // Tan
  ACCENT_TEXT: '#DAA520',       // Amber
  
  // Status Colors
  SUCCESS: '#228B22',           // Forest green
  WARNING: '#DAA520',           // Amber
  ERROR: '#8B0000',             // Dark red
  
  // Transparent Overlays
  OVERLAY_DARK: 'rgba(28, 28, 28, 0.85)',
  OVERLAY_AMBER: 'rgba(218, 165, 32, 0.15)',
};

// Neuland-inspired typography (movie-accurate)
export const JP_TYPOGRAPHY = {
  // Logo font - bold, industrial, inspired by Neuland
  LOGO: {
    fontFamily: 'Arial Black, Helvetica, sans-serif', // Fallback for Neuland
    fontWeight: '900',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  
  // Headers - strong, readable
  HEADER: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  
  // Body text - clean, professional
  BODY: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  
  // Corporate/InGen style
  CORPORATE: {
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontWeight: '400',
    letterSpacing: 0.8,
  },
};

export const JP_GRADIENTS = {
  AMBER: ['#F4D03F', '#DAA520', '#B8912B'],
  RED: ['#CD853F', '#A0522D', '#8B0000'],
  CORPORATE: ['#2F2F2F', '#1C1C1C', '#000000'],
  JUNGLE: ['#0F2419', '#1C3A1C', '#0F1F0F'],
};

export const JP_SHADOWS = {
  STANDARD: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  
  ELEVATED: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
  
  AMBER_GLOW: {
    shadowColor: '#DAA520',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 6,
  },
};