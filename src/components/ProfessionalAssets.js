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
  Rect,
  Polygon
} from 'react-native-svg';
import { JP_COLORS } from '../constants/theme';

// Professional T-Rex Skeleton (movie-accurate proportions)
export const TRexSkeletonProfessional = ({ size = 80, color = JP_COLORS.INGEN_BLACK }) => (
  <Svg width={size} height={size} viewBox="0 0 100 100">
    <G>
      {/* Main body structure */}
      <Path
        d="M20,85 L25,80 L35,75 L45,70 L55,65 L65,60 L70,55 L72,50 L70,45 L65,40 L60,35 L55,32 L50,30 L45,28 L40,30 L35,35 L30,40 L25,45 L22,50 L20,55 L18,60 L15,65 L12,70 L10,75 L12,80 L20,85 Z"
        fill={color}
      />
      {/* Head structure */}
      <Path
        d="M65,40 L75,35 L85,30 L88,25 L85,20 L80,18 L75,20 L70,25 L65,30 L60,35 L65,40 Z"
        fill={color}
      />
      {/* Tail */}
      <Path
        d="M20,85 L15,88 L10,90 L5,88 L8,85 L12,82 L18,80 L20,85 Z"
        fill={color}
      />
      {/* Legs */}
      <Path
        d="M30,75 L25,78 L20,82 L22,87 L28,84 L32,80 L30,75 Z"
        fill={color}
      />
      <Path
        d="M55,70 L50,73 L45,77 L47,82 L53,79 L57,75 L55,70 Z"
        fill={color}
      />
    </G>
  </Svg>
);

// Authentic Amber Circle (based on movie logo)
export const AuthenticAmberLogo = ({ size = 150 }) => (
  <Svg width={size} height={size} viewBox="0 0 150 150">
    <Defs>
      {/* Amber gradient - movie accurate */}
      <RadialGradient id="amberGrad" cx="0.4" cy="0.4" r="0.7">
        <Stop offset="0%" stopColor={JP_COLORS.AMBER_LIGHT} stopOpacity="1" />
        <Stop offset="60%" stopColor={JP_COLORS.AMBER_PRIMARY} stopOpacity="1" />
        <Stop offset="100%" stopColor={JP_COLORS.AMBER_SECONDARY} stopOpacity="1" />
      </RadialGradient>
      
      {/* Red outer ring gradient */}
      <RadialGradient id="redGrad" cx="0.5" cy="0.5" r="0.8">
        <Stop offset="0%" stopColor={JP_COLORS.RED_ACCENT} stopOpacity="1" />
        <Stop offset="80%" stopColor={JP_COLORS.BLOOD_RED} stopOpacity="1" />
        <Stop offset="100%" stopColor="#2F1B14" stopOpacity="1" />
      </RadialGradient>
    </Defs>
    
    {/* Outer red/brown ring */}
    <Circle 
      cx="75" 
      cy="75" 
      r="73" 
      fill="url(#redGrad)"
      stroke={JP_COLORS.INGEN_BLACK}
      strokeWidth="2"
    />
    
    {/* Yellow frame */}
    <Circle 
      cx="75" 
      cy="75" 
      r="65" 
      fill={JP_COLORS.AMBER_PRIMARY}
      stroke={JP_COLORS.AMBER_SECONDARY}
      strokeWidth="2"
    />
    
    {/* Inner amber circle */}
    <Circle 
      cx="75" 
      cy="75" 
      r="58" 
      fill="url(#amberGrad)"
      stroke={JP_COLORS.AMBER_SECONDARY}
      strokeWidth="1"
    />
    
    {/* T-Rex positioned in center */}
    <G transform="translate(38, 35)">
      <TRexSkeletonProfessional size={35} color={JP_COLORS.INGEN_BLACK} />
    </G>
  </Svg>
);

// InGen Corporate Logo Style
export const InGenLogo = ({ size = 100 }) => (
  <Svg width={size} height={size} viewBox="0 0 100 100">
    <Defs>
      <LinearGradient id="corporateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <Stop offset="0%" stopColor={JP_COLORS.INGEN_SILVER} stopOpacity="1" />
        <Stop offset="50%" stopColor={JP_COLORS.INGEN_GREY} stopOpacity="1" />
        <Stop offset="100%" stopColor={JP_COLORS.INGEN_BLACK} stopOpacity="1" />
      </LinearGradient>
    </Defs>
    
    <Rect 
      x="10" 
      y="30" 
      width="80" 
      height="40" 
      fill="url(#corporateGrad)"
      stroke={JP_COLORS.INGEN_SILVER}
      strokeWidth="1"
      rx="2"
    />
    
    {/* InGen text styling */}
    <G>
      <Rect x="15" y="35" width="4" height="30" fill={JP_COLORS.PRIMARY_TEXT} />
      <Rect x="25" y="35" width="4" height="20" fill={JP_COLORS.PRIMARY_TEXT} />
      <Rect x="25" y="59" width="10" height="4" fill={JP_COLORS.PRIMARY_TEXT} />
      <Rect x="31" y="45" width="4" height="18" fill={JP_COLORS.PRIMARY_TEXT} />
      
      <Rect x="45" y="35" width="4" height="30" fill={JP_COLORS.PRIMARY_TEXT} />
      <Rect x="53" y="35" width="4" height="30" fill={JP_COLORS.PRIMARY_TEXT} />
      <Rect x="61" y="35" width="4" height="30" fill={JP_COLORS.PRIMARY_TEXT} />
      <Rect x="61" y="35" width="15" height="4" fill={JP_COLORS.PRIMARY_TEXT} />
      <Rect x="72" y="35" width="4" height="15" fill={JP_COLORS.PRIMARY_TEXT} />
    </G>
  </Svg>
);

// Professional DNA Helix
export const DNAHelix = ({ size = 60, color = JP_COLORS.AMBER_PRIMARY }) => (
  <Svg width={size} height={size} viewBox="0 0 60 100">
    <Defs>
      <LinearGradient id="dnaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <Stop offset="0%" stopColor={color} stopOpacity="0.8" />
        <Stop offset="50%" stopColor={JP_COLORS.AMBER_SECONDARY} stopOpacity="1" />
        <Stop offset="100%" stopColor={color} stopOpacity="0.8" />
      </LinearGradient>
    </Defs>
    
    {/* Left helix strand */}
    <Path
      d="M15,10 Q25,25 15,40 Q5,55 15,70 Q25,85 15,90"
      stroke="url(#dnaGrad)"
      strokeWidth="3"
      fill="none"
    />
    
    {/* Right helix strand */}
    <Path
      d="M45,10 Q35,25 45,40 Q55,55 45,70 Q35,85 45,90"
      stroke="url(#dnaGrad)"
      strokeWidth="3"
      fill="none"
    />
    
    {/* Connecting rungs */}
    <G stroke={JP_COLORS.AMBER_SECONDARY} strokeWidth="2">
      <Path d="M20,20 L40,20" />
      <Path d="M18,30 L42,30" />
      <Path d="M20,50 L40,50" />
      <Path d="M18,60 L42,60" />
      <Path d="M20,80 L40,80" />
    </G>
  </Svg>
);

// Laboratory Equipment Style
export const LabEquipment = ({ size = 80 }) => (
  <Svg width={size} height={size} viewBox="0 0 80 80">
    <Defs>
      <LinearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <Stop offset="0%" stopColor={JP_COLORS.INGEN_SILVER} stopOpacity="1" />
        <Stop offset="50%" stopColor={JP_COLORS.INGEN_GREY} stopOpacity="1" />
        <Stop offset="100%" stopColor={JP_COLORS.INGEN_BLACK} stopOpacity="1" />
      </LinearGradient>
    </Defs>
    
    {/* Base */}
    <Rect x="20" y="60" width="40" height="15" fill="url(#metalGrad)" rx="2" />
    
    {/* Stand */}
    <Rect x="37" y="25" width="6" height="35" fill="url(#metalGrad)" />
    
    {/* Sample container */}
    <Circle cx="40" cy="20" r="12" fill={JP_COLORS.AMBER_PRIMARY} opacity="0.7" />
    <Circle cx="40" cy="20" r="12" fill="none" stroke={JP_COLORS.INGEN_SILVER} strokeWidth="2" />
    
    {/* Control panel */}
    <Rect x="22" y="62" width="36" height="8" fill={JP_COLORS.INGEN_BLACK} />
    <Circle cx="30" cy="66" r="1.5" fill={JP_COLORS.AMBER_PRIMARY} />
    <Circle cx="40" cy="66" r="1.5" fill={JP_COLORS.SUCCESS} />
    <Circle cx="50" cy="66" r="1.5" fill={JP_COLORS.ERROR} />
  </Svg>
);

// Amber Texture Background (subtle, professional)
export const ProfessionalAmberTexture = ({ width = 300, height = 400 }) => (
  <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
    <Defs>
      <LinearGradient id="subtleAmber" x1="0%" y1="0%" x2="100%" y2="100%">
        <Stop offset="0%" stopColor={JP_COLORS.AMBER_LIGHT} stopOpacity="0.3" />
        <Stop offset="25%" stopColor={JP_COLORS.AMBER_PRIMARY} stopOpacity="0.2" />
        <Stop offset="50%" stopColor={JP_COLORS.AMBER_SECONDARY} stopOpacity="0.3" />
        <Stop offset="75%" stopColor={JP_COLORS.AMBER_PRIMARY} stopOpacity="0.2" />
        <Stop offset="100%" stopColor={JP_COLORS.AMBER_LIGHT} stopOpacity="0.1" />
      </LinearGradient>
    </Defs>
    
    <Rect
      x="0"
      y="0"
      width={width}
      height={height}
      fill="url(#subtleAmber)"
    />
    
    {/* Subtle amber inclusions */}
    <Circle cx={width * 0.15} cy={height * 0.2} r="2" fill={JP_COLORS.AMBER_SECONDARY} opacity="0.3" />
    <Circle cx={width * 0.8} cy={height * 0.3} r="1.5" fill={JP_COLORS.AMBER_SECONDARY} opacity="0.4" />
    <Circle cx={width * 0.4} cy={height * 0.7} r="2.5" fill={JP_COLORS.AMBER_SECONDARY} opacity="0.2" />
    <Circle cx={width * 0.9} cy={height * 0.8} r="1" fill={JP_COLORS.AMBER_SECONDARY} opacity="0.5" />
  </Svg>
);

// Corporate Panel Background
export const CorporatePanel = ({ width = 300, height = 100, children }) => (
  <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
    <Defs>
      <LinearGradient id="panelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <Stop offset="0%" stopColor={JP_COLORS.INGEN_GREY} stopOpacity="0.9" />
        <Stop offset="50%" stopColor={JP_COLORS.INGEN_BLACK} stopOpacity="0.8" />
        <Stop offset="100%" stopColor={JP_COLORS.INGEN_GREY} stopOpacity="0.9" />
      </LinearGradient>
    </Defs>
    
    <Rect
      x="0"
      y="0"
      width={width}
      height={height}
      fill="url(#panelGrad)"
      stroke={JP_COLORS.INGEN_SILVER}
      strokeWidth="1"
      rx="4"
    />
  </Svg>
);