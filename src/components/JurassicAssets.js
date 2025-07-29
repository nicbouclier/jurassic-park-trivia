import React from 'react';
import { View, Text } from 'react-native';
import Svg, { 
  Circle, 
  Path, 
  Defs, 
  RadialGradient, 
  Stop, 
  LinearGradient,
  G,
  Ellipse
} from 'react-native-svg';
import { JP_COLORS } from '../constants/theme';

// Authentic T-Rex Skeleton Silhouette (based on original logo)
export const TRexSkeleton = ({ size = 60, color = JP_COLORS.SHADOW_BLACK }) => (
  <Svg width={size} height={size} viewBox="0 0 100 100">
    <G>
      {/* T-Rex skeleton silhouette */}
      <Path
        d="M75,25 L70,20 L65,22 L60,25 L55,30 L52,35 L50,40 L45,42 L40,40 L35,38 L30,40 L25,45 L22,50 L20,55 L18,60 L15,65 L12,70 L10,75 L15,80 L20,78 L25,75 L30,72 L35,70 L40,72 L45,75 L50,77 L55,75 L60,72 L65,70 L70,68 L75,65 L78,60 L80,55 L82,50 L85,45 L88,40 L85,35 L80,30 L75,25 Z"
        fill={color}
      />
      {/* Distinctive T-Rex head */}
      <Path
        d="M70,20 L75,15 L80,18 L85,23 L88,28 L85,33 L80,30 L75,25 L70,20 Z"
        fill={color}
      />
      {/* Small arms */}
      <Path
        d="M45,42 L40,40 L38,45 L40,48 L45,46 Z"
        fill={color}
      />
      {/* Powerful legs */}
      <Path
        d="M25,75 L20,78 L18,83 L22,88 L28,85 L30,80 L25,75 Z"
        fill={color}
      />
      <Path
        d="M65,70 L60,72 L58,77 L62,82 L68,79 L70,74 L65,70 Z"
        fill={color}
      />
    </G>
  </Svg>
);

// Amber Circle with cracked edges (like fossilized amber)
export const AmberCircle = ({ size = 120, children }) => (
  <Svg width={size} height={size} viewBox="0 0 120 120">
    <Defs>
      <RadialGradient id="amberGradient" cx="0.3" cy="0.3" r="0.8">
        <Stop offset="0%" stopColor={JP_COLORS.AMBER_LIGHT} stopOpacity="1" />
        <Stop offset="50%" stopColor={JP_COLORS.AMBER_YELLOW} stopOpacity="1" />
        <Stop offset="100%" stopColor={JP_COLORS.AMBER_DARK} stopOpacity="1" />
      </RadialGradient>
      <RadialGradient id="redGradient" cx="0.5" cy="0.5" r="0.8">
        <Stop offset="0%" stopColor="#FF6B6B" stopOpacity="1" />
        <Stop offset="70%" stopColor={JP_COLORS.BLOOD_RED} stopOpacity="1" />
        <Stop offset="100%" stopColor="#8B0000" stopOpacity="1" />
      </RadialGradient>
    </Defs>
    
    {/* Outer red ring */}
    <Circle 
      cx="60" 
      cy="60" 
      r="58" 
      fill="url(#redGradient)"
      stroke={JP_COLORS.SHADOW_BLACK}
      strokeWidth="2"
    />
    
    {/* Inner amber circle with cracked edges */}
    <Path
      d="M60,10 A50,50 0 0,1 108,60 A50,50 0 0,1 60,110 A50,50 0 0,1 12,60 A50,50 0 0,1 60,10 Z M60,15 L62,17 L60,20 L58,17 Z M105,58 L107,60 L105,62 L103,60 Z M60,105 L58,103 L60,100 L62,103 Z M15,62 L13,60 L15,58 L17,60 Z"
      fill="url(#amberGradient)"
      stroke={JP_COLORS.AMBER_DARK}
      strokeWidth="1"
    />
  </Svg>
);

// Jurassic Park Logo Recreation
export const JurassicParkLogo = ({ size = 200 }) => (
  <View style={{ alignItems: 'center' }}>
    <View style={{ position: 'relative' }}>
      <AmberCircle size={size} />
      <View style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}>
        <TRexSkeleton size={size * 0.4} color={JP_COLORS.SHADOW_BLACK} />
      </View>
    </View>
    
    {/* Tropical silhouettes at bottom */}
    <Svg width={size} height={size * 0.3} viewBox="0 0 200 60" style={{ marginTop: -10 }}>
      <Path
        d="M20,50 L25,40 L30,35 L35,30 L40,35 L45,40 L50,45 L55,35 L60,25 L65,30 L70,40 L75,45 L80,40 L85,35 L90,30 L95,35 L100,40 L105,45 L110,40 L115,35 L120,30 L125,35 L130,40 L135,45 L140,40 L145,35 L150,30 L155,35 L160,40 L165,45 L170,40 L175,35 L180,50"
        fill={JP_COLORS.JUNGLE_BLACK}
        opacity="0.6"
      />
    </Svg>
  </View>
);

// Velociraptor Silhouette
export const VelociraptorSilhouette = ({ size = 80, color = JP_COLORS.SHADOW_BLACK }) => (
  <Svg width={size} height={size} viewBox="0 0 100 100">
    <Path
      d="M15,85 L20,80 L25,75 L30,70 L35,65 L40,60 L45,55 L50,50 L55,45 L60,42 L65,40 L70,38 L75,35 L80,30 L85,25 L88,20 L85,15 L80,18 L75,22 L70,25 L65,28 L60,32 L55,35 L50,38 L45,42 L40,45 L35,50 L30,55 L25,60 L20,65 L18,70 L16,75 L15,80 L15,85 Z"
      fill={color}
    />
    {/* Distinctive claw */}
    <Path
      d="M25,75 L20,78 L15,82 L18,85 L23,82 L25,78 Z"
      fill={color}
    />
  </Svg>
);

// Brachiosaurus Silhouette
export const BrachiosaurusSilhouette = ({ size = 100, color = JP_COLORS.SHADOW_BLACK }) => (
  <Svg width={size} height={size} viewBox="0 0 100 100">
    <Path
      d="M70,10 L75,15 L80,20 L82,25 L80,30 L78,35 L75,40 L70,45 L65,50 L60,55 L55,60 L50,65 L45,68 L40,70 L35,72 L30,75 L25,78 L20,80 L15,82 L10,85 L12,90 L18,87 L25,84 L32,81 L40,78 L48,75 L55,72 L62,68 L68,64 L72,60 L75,55 L78,50 L80,45 L82,40 L85,35 L88,30 L85,25 L80,22 L75,20 L70,15 L70,10 Z"
      fill={color}
    />
  </Svg>
);

// Amber Texture Background Pattern
export const AmberTexture = ({ width = 300, height = 400 }) => (
  <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
    <Defs>
      <LinearGradient id="amberTexture" x1="0%" y1="0%" x2="100%" y2="100%">
        <Stop offset="0%" stopColor={JP_COLORS.AMBER_LIGHT} stopOpacity="0.8" />
        <Stop offset="25%" stopColor={JP_COLORS.AMBER_YELLOW} stopOpacity="0.6" />
        <Stop offset="50%" stopColor={JP_COLORS.AMBER_ORANGE} stopOpacity="0.8" />
        <Stop offset="75%" stopColor={JP_COLORS.AMBER_DARK} stopOpacity="0.6" />
        <Stop offset="100%" stopColor={JP_COLORS.AMBER_YELLOW} stopOpacity="0.4" />
      </LinearGradient>
    </Defs>
    
    <Path
      d={`M0,0 L${width},0 L${width},${height} L0,${height} Z`}
      fill="url(#amberTexture)"
    />
    
    {/* Amber inclusions and bubbles */}
    <Circle cx={width * 0.2} cy={height * 0.3} r="3" fill={JP_COLORS.AMBER_DARK} opacity="0.3" />
    <Circle cx={width * 0.7} cy={height * 0.2} r="2" fill={JP_COLORS.AMBER_DARK} opacity="0.4" />
    <Circle cx={width * 0.5} cy={height * 0.6} r="4" fill={JP_COLORS.AMBER_DARK} opacity="0.2" />
    <Circle cx={width * 0.8} cy={height * 0.8} r="2.5" fill={JP_COLORS.AMBER_DARK} opacity="0.3" />
    <Circle cx={width * 0.3} cy={height * 0.9} r="1.5" fill={JP_COLORS.AMBER_DARK} opacity="0.5" />
  </Svg>
);