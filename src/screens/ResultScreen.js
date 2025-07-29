import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';
import { 
  ProfessionalAmberTexture,
  TRexSkeletonProfessional,
  DNAHelix,
  LabEquipment,
  AuthenticAmberLogo,
  InGenLogo
} from '../components/ProfessionalAssets';
import { JP_COLORS, JP_TYPOGRAPHY, JP_SHADOWS } from '../constants/theme';

const ResultScreen = ({ route, navigation }) => {
  const { score, totalQuestions } = route.params;
  const percentage = Math.round((score / totalQuestions) * 100);

  const getResultMessage = () => {
    if (percentage >= 90) {
      return {
        title: "SENIOR PALEONTOLOGIST",
        message: "Outstanding performance. Your knowledge of Jurassic Park exceeds expectations.",
        component: <TRexSkeletonProfessional size={80} color={JP_COLORS.AMBER_PRIMARY} />,
        gradient: JP_COLORS.AMBER,
        clearance: "LEVEL 5 - FULL ACCESS"
      };
    } else if (percentage >= 70) {
      return {
        title: "RESEARCH SCIENTIST",
        message: "Commendable results. You demonstrate solid understanding of the source material.",
        component: <DNAHelix size={70} color={JP_COLORS.SUCCESS} />,
        gradient: [JP_COLORS.SUCCESS, '#2F5233', '#1E3A1E'],
        clearance: "LEVEL 3 - RESTRICTED ACCESS"
      };
    } else if (percentage >= 50) {
      return {
        title: "LABORATORY TECHNICIAN",
        message: "Adequate performance. Additional study of the film is recommended.",
        component: <LabEquipment size={70} />,
        gradient: JP_COLORS.CORPORATE,
        clearance: "LEVEL 2 - LIMITED ACCESS"
      };
    } else {
      return {
        title: "SECURITY CLEARANCE DENIED",
        message: "Insufficient knowledge demonstrated. Please review the 1993 film and reapply.",
        component: <InGenLogo size={70} />,
        gradient: JP_COLORS.RED,
        clearance: "LEVEL 0 - NO ACCESS"
      };
    }
  };

  const result = getResultMessage();

  const handlePlayAgain = () => {
    navigation.navigate('Quiz');
  };

  const handleGoHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      {/* Professional amber textured background */}
      <ProfessionalAmberTexture width={400} height={800} />
      <ExpoLinearGradient
        colors={[JP_COLORS.OVERLAY_DARK, 'rgba(15, 36, 25, 0.4)', JP_COLORS.OVERLAY_DARK]}
        style={styles.overlay}
      >
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.resultContainer}>
            
            {/* InGen Assessment Header */}
            <View style={styles.headerContainer}>
              <AuthenticAmberLogo size={100} />
              <Text style={styles.headerText}>INGEN ASSESSMENT COMPLETE</Text>
            </View>

            {/* Security clearance level */}
            <ExpoLinearGradient
              colors={result.gradient}
              style={styles.clearanceContainer}
            >
              <Text style={styles.clearanceText}>{result.clearance}</Text>
            </ExpoLinearGradient>

            {/* Result icon */}
            <View style={styles.iconContainer}>
              {result.component}
            </View>

            {/* Professional result title */}
            <ExpoLinearGradient
              colors={JP_COLORS.CORPORATE}
              style={styles.titleContainer}
            >
              <Text style={styles.resultTitle}>{result.title}</Text>
            </ExpoLinearGradient>
            
            <Text style={styles.resultMessage}>{result.message}</Text>
            
            {/* Professional score container */}
            <ExpoLinearGradient
              colors={JP_COLORS.CORPORATE}
              style={styles.scoreContainer}
            >
              <Text style={styles.scoreLabel}>ASSESSMENT RESULTS</Text>
              <Text style={styles.scoreValue}>
                {score} / {totalQuestions}
              </Text>
              <Text style={styles.percentageText}>{percentage}% ACCURACY</Text>
            </ExpoLinearGradient>

            {/* Professional stats */}
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{score}</Text>
                <Text style={styles.statLabel}>CORRECT</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{totalQuestions - score}</Text>
                <Text style={styles.statLabel}>INCORRECT</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{totalQuestions}</Text>
                <Text style={styles.statLabel}>TOTAL</Text>
              </View>
            </View>

            {/* Professional action buttons */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.playAgainButton} onPress={handlePlayAgain}>
                <ExpoLinearGradient
                  colors={JP_COLORS.RED}
                  style={styles.buttonGradient}
                >
                  <Text style={styles.buttonText}>RETAKE ASSESSMENT</Text>
                </ExpoLinearGradient>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.homeButton} onPress={handleGoHome}>
                <ExpoLinearGradient
                  colors={JP_COLORS.CORPORATE}
                  style={styles.buttonGradient}
                >
                  <Text style={styles.buttonText}>EXIT SYSTEM</Text>
                </ExpoLinearGradient>
              </TouchableOpacity>
            </View>

            {/* Professional footer */}
            <View style={styles.footerContainer}>
              <Text style={styles.footerText}>InGen Bioengineering Division</Text>
              <Text style={styles.footerSubtext}>Jurassic Park Knowledge Assessment System v1.0</Text>
            </View>
          </View>
        </SafeAreaView>
      </ExpoLinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: JP_COLORS.INGEN_BLACK,
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  safeArea: {
    flex: 1,
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 16,
    ...JP_TYPOGRAPHY.HEADER,
    color: JP_COLORS.ACCENT_TEXT,
    marginTop: 10,
    letterSpacing: 2,
  },
  clearanceContainer: {
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: JP_COLORS.AMBER_SECONDARY,
    ...JP_SHADOWS.ELEVATED,
  },
  clearanceText: {
    fontSize: 12,
    ...JP_TYPOGRAPHY.CORPORATE,
    color: JP_COLORS.INGEN_BLACK,
    textAlign: 'center',
    letterSpacing: 2,
    fontWeight: 'bold',
  },
  iconContainer: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: JP_COLORS.OVERLAY_DARK,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: JP_COLORS.AMBER_SECONDARY,
    ...JP_SHADOWS.STANDARD,
  },
  titleContainer: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: JP_COLORS.AMBER_SECONDARY,
    ...JP_SHADOWS.ELEVATED,
  },
  resultTitle: {
    fontSize: 18,
    ...JP_TYPOGRAPHY.HEADER,
    color: JP_COLORS.PRIMARY_TEXT,
    textAlign: 'center',
  },
  resultMessage: {
    fontSize: 15,
    ...JP_TYPOGRAPHY.BODY,
    color: JP_COLORS.SECONDARY_TEXT,
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 22,
    maxWidth: 350,
  },
  scoreContainer: {
    padding: 25,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 25,
    minWidth: 250,
    borderWidth: 2,
    borderColor: JP_COLORS.AMBER_SECONDARY,
    ...JP_SHADOWS.ELEVATED,
  },
  scoreLabel: {
    fontSize: 14,
    ...JP_TYPOGRAPHY.CORPORATE,
    color: JP_COLORS.ACCENT_TEXT,
    marginBottom: 12,
    letterSpacing: 2,
  },
  scoreValue: {
    fontSize: 36,
    ...JP_TYPOGRAPHY.LOGO,
    color: JP_COLORS.PRIMARY_TEXT,
    marginBottom: 8,
  },
  percentageText: {
    fontSize: 16,
    ...JP_TYPOGRAPHY.HEADER,
    color: JP_COLORS.ACCENT_TEXT,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  statItem: {
    alignItems: 'center',
    backgroundColor: JP_COLORS.OVERLAY_DARK,
    padding: 18,
    borderRadius: 8,
    minWidth: 80,
    borderWidth: 1,
    borderColor: JP_COLORS.AMBER_SECONDARY,
    ...JP_SHADOWS.STANDARD,
  },
  statValue: {
    fontSize: 24,
    ...JP_TYPOGRAPHY.HEADER,
    color: JP_COLORS.ACCENT_TEXT,
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 10,
    ...JP_TYPOGRAPHY.CORPORATE,
    color: JP_COLORS.SECONDARY_TEXT,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  buttonContainer: {
    width: '100%',
    gap: 12,
    marginBottom: 25,
  },
  playAgainButton: {
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: JP_COLORS.AMBER_SECONDARY,
    ...JP_SHADOWS.STANDARD,
  },
  homeButton: {
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: JP_COLORS.AMBER_SECONDARY,
    ...JP_SHADOWS.STANDARD,
  },
  buttonGradient: {
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: JP_COLORS.PRIMARY_TEXT,
    fontSize: 14,
    ...JP_TYPOGRAPHY.HEADER,
  },
  footerContainer: {
    alignItems: 'center',
    backgroundColor: JP_COLORS.OVERLAY_DARK,
    padding: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: JP_COLORS.AMBER_SECONDARY,
    maxWidth: 350,
  },
  footerText: {
    fontSize: 12,
    ...JP_TYPOGRAPHY.CORPORATE,
    color: JP_COLORS.ACCENT_TEXT,
    marginBottom: 5,
    textAlign: 'center',
  },
  footerSubtext: {
    fontSize: 10,
    ...JP_TYPOGRAPHY.CORPORATE,
    color: JP_COLORS.SECONDARY_TEXT,
    textAlign: 'center',
  },
});

export default ResultScreen;