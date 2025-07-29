import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  LinearGradient,
} from 'react-native';
import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';
import { 
  AuthenticAmberLogo,
  ProfessionalAmberTexture,
  InGenLogo,
  DNAHelix,
  LabEquipment
} from '../components/ProfessionalAssets';
import { JP_COLORS, JP_TYPOGRAPHY, JP_SHADOWS } from '../constants/theme';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Professional amber textured background */}
      <View style={styles.backgroundContainer}>
        <ProfessionalAmberTexture width={400} height={800} />
        <ExpoLinearGradient
          colors={[JP_COLORS.OVERLAY_DARK, 'rgba(15, 36, 25, 0.6)', JP_COLORS.OVERLAY_DARK]}
          style={styles.overlay}
        >
          {/* Authentic Jurassic Park Logo */}
          <View style={styles.logoContainer}>
            <AuthenticAmberLogo size={160} />
          </View>
          
          {/* Movie-accurate title */}
          <Text style={styles.title}>JURASSIC PARK</Text>
          <Text style={styles.subtitle}>TRIVIA ASSESSMENT</Text>
          
          <Text style={styles.description}>
            Test your knowledge of the groundbreaking 1993 film that revolutionized cinema
          </Text>
          
          {/* Professional start button */}
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => navigation.navigate('Quiz')}
          >
            <ExpoLinearGradient
              colors={JP_COLORS.RED}
              style={styles.buttonGradient}
            >
              <Text style={styles.buttonText}>BEGIN ASSESSMENT</Text>
            </ExpoLinearGradient>
          </TouchableOpacity>
          
          {/* Professional info section */}
          <View style={styles.infoContainer}>
            <View style={styles.infoItem}>
              <DNAHelix size={30} color={JP_COLORS.AMBER_PRIMARY} />
              <Text style={styles.infoText}>10 QUESTIONS</Text>
            </View>
            <View style={styles.infoItem}>
              <LabEquipment size={35} />
              <Text style={styles.infoText}>UNTIMED</Text>
            </View>
            <View style={styles.infoItem}>
              <InGenLogo size={30} />
              <Text style={styles.infoText}>ISLA NUBLAR</Text>
            </View>
          </View>
          
          {/* Professional quote section */}
          <View style={styles.quoteContainer}>
            <Text style={styles.quoteText}>"Welcome to Jurassic Park"</Text>
            <Text style={styles.quoteAuthor}>John Hammond, CEO InGen</Text>
          </View>
        </ExpoLinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: JP_COLORS.INGEN_BLACK,
  },
  backgroundContainer: {
    flex: 1,
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logoContainer: {
    marginBottom: 25,
    ...JP_SHADOWS.AMBER_GLOW,
  },
  title: {
    fontSize: 42,
    ...JP_TYPOGRAPHY.LOGO,
    color: JP_COLORS.AMBER_PRIMARY,
    textAlign: 'center',
    marginBottom: 8,
    textShadowColor: '#000000',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 6,
  },
  subtitle: {
    fontSize: 18,
    ...JP_TYPOGRAPHY.HEADER,
    color: JP_COLORS.SECONDARY_TEXT,
    textAlign: 'center',
    marginBottom: 30,
    letterSpacing: 4,
    textShadowColor: '#000000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  description: {
    fontSize: 16,
    ...JP_TYPOGRAPHY.BODY,
    color: JP_COLORS.PRIMARY_TEXT,
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
    maxWidth: 350,
    textShadowColor: '#000000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  startButton: {
    marginBottom: 40,
    borderRadius: 8,
    overflow: 'hidden',
    ...JP_SHADOWS.ELEVATED,
    borderWidth: 2,
    borderColor: JP_COLORS.AMBER_SECONDARY,
  },
  buttonGradient: {
    paddingHorizontal: 50,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: JP_COLORS.PRIMARY_TEXT,
    fontSize: 18,
    ...JP_TYPOGRAPHY.HEADER,
    textShadowColor: '#000000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 35,
    paddingHorizontal: 20,
  },
  infoItem: {
    alignItems: 'center',
    backgroundColor: JP_COLORS.OVERLAY_DARK,
    padding: 18,
    borderRadius: 8,
    minWidth: 100,
    borderWidth: 1,
    borderColor: JP_COLORS.AMBER_SECONDARY,
    ...JP_SHADOWS.STANDARD,
  },
  infoText: {
    color: JP_COLORS.ACCENT_TEXT,
    fontSize: 11,
    ...JP_TYPOGRAPHY.CORPORATE,
    textAlign: 'center',
    marginTop: 10,
    letterSpacing: 1,
  },
  quoteContainer: {
    alignItems: 'center',
    backgroundColor: JP_COLORS.OVERLAY_DARK,
    padding: 25,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: JP_COLORS.AMBER_SECONDARY,
    maxWidth: 320,
    ...JP_SHADOWS.STANDARD,
  },
  quoteText: {
    fontSize: 16,
    fontStyle: 'italic',
    ...JP_TYPOGRAPHY.BODY,
    color: JP_COLORS.PRIMARY_TEXT,
    textAlign: 'center',
    marginBottom: 10,
  },
  quoteAuthor: {
    fontSize: 13,
    ...JP_TYPOGRAPHY.CORPORATE,
    color: JP_COLORS.ACCENT_TEXT,
    textAlign: 'center',
  },
});

export default HomeScreen;