import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';
import { 
  ProfessionalAmberTexture, 
  TRexSkeletonProfessional, 
  DNAHelix,
  LabEquipment
} from '../components/ProfessionalAssets';
import { JP_COLORS, JP_TYPOGRAPHY, JP_SHADOWS } from '../constants/theme';
import { triviaQuestions } from '../data/questions';

const QuizScreen = ({ navigation }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [questions] = useState(triviaQuestions);

  const handleAnswerPress = (selectedIndex) => {
    if (selectedAnswer !== null) return; // Prevent multiple selections
    
    setSelectedAnswer(selectedIndex);
    setShowCorrectAnswer(true);
    
    if (selectedIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowCorrectAnswer(false);
    } else {
      // Quiz finished
      navigation.navigate('Result', { 
        score, 
        totalQuestions: questions.length 
      });
    }
  };

  const getButtonStyle = (index) => {
    if (!showCorrectAnswer) {
      return selectedAnswer === index ? styles.selectedOption : styles.option;
    }
    
    if (index === questions[currentQuestion].correctAnswer) {
      return styles.correctOption;
    }
    
    if (selectedAnswer === index && index !== questions[currentQuestion].correctAnswer) {
      return styles.incorrectOption;
    }
    
    return styles.option;
  };

  const getGradientColors = (index) => {
    if (!showCorrectAnswer) {
      if (selectedAnswer === index) {
        return JP_COLORS.AMBER;
      }
      return JP_COLORS.CORPORATE;
    }
    
    if (index === questions[currentQuestion].correctAnswer) {
      return [JP_COLORS.SUCCESS, '#2F5233', '#1E3A1E'];
    }
    
    if (selectedAnswer === index && index !== questions[currentQuestion].correctAnswer) {
      return JP_COLORS.RED;
    }
    
    return JP_COLORS.CORPORATE;
  };

  const currentQuestionData = questions[currentQuestion];

  return (
    <View style={styles.container}>
      {/* Professional amber textured background */}
      <ProfessionalAmberTexture width={400} height={800} />
      <ExpoLinearGradient
        colors={[JP_COLORS.OVERLAY_DARK, 'rgba(15, 36, 25, 0.4)', JP_COLORS.OVERLAY_DARK]}
        style={styles.overlay}
      >
        <SafeAreaView style={styles.safeArea}>
          {/* Professional header */}
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <DNAHelix size={25} color={JP_COLORS.AMBER_PRIMARY} />
              <Text style={styles.questionCounter}>
                Question {currentQuestion + 1} of {questions.length}
              </Text>
            </View>
            <View style={styles.scoreContainer}>
              <LabEquipment size={20} />
              <Text style={styles.scoreText}>Score: {score}</Text>
            </View>
          </View>

          {/* Professional progress bar */}
          <View style={styles.progressBarContainer}>
            <View style={styles.progressBar}>
              <ExpoLinearGradient
                colors={JP_COLORS.AMBER}
                style={[
                  styles.progressFill, 
                  { width: `${((currentQuestion + 1) / questions.length) * 100}%` }
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              />
            </View>
          </View>

          {/* Professional question container */}
          <View style={styles.questionContainer}>
            <ExpoLinearGradient
              colors={JP_COLORS.CORPORATE}
              style={styles.questionGradient}
            >
              <Text style={styles.questionText}>{currentQuestionData.question}</Text>
            </ExpoLinearGradient>
          </View>

          {/* Answer options with professional styling */}
          <View style={styles.optionsContainer}>
            {currentQuestionData.options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={getButtonStyle(index)}
                onPress={() => handleAnswerPress(index)}
                disabled={showCorrectAnswer}
              >
                <ExpoLinearGradient
                  colors={getGradientColors(index)}
                  style={styles.optionGradient}
                >
                  <Text style={styles.optionText}>{option}</Text>
                </ExpoLinearGradient>
              </TouchableOpacity>
            ))}
          </View>

          {/* Professional feedback section */}
          {showCorrectAnswer && (
            <View style={styles.feedbackContainer}>
              <ExpoLinearGradient
                colors={selectedAnswer === currentQuestionData.correctAnswer 
                  ? [JP_COLORS.SUCCESS, '#2F5233', '#1E3A1E']
                  : JP_COLORS.RED
                }
                style={styles.feedbackGradient}
              >
                <Text style={styles.feedbackText}>
                  {selectedAnswer === currentQuestionData.correctAnswer 
                    ? "CORRECT - Assessment point awarded" 
                    : "INCORRECT - Review recommended"}
                </Text>
                <TouchableOpacity style={styles.nextButton} onPress={handleNextQuestion}>
                  <ExpoLinearGradient
                    colors={JP_COLORS.AMBER}
                    style={styles.nextButtonGradient}
                  >
                    <Text style={styles.nextButtonText}>
                      {currentQuestion < questions.length - 1 ? 'CONTINUE ASSESSMENT' : 'VIEW RESULTS'}
                    </Text>
                  </ExpoLinearGradient>
                </TouchableOpacity>
              </ExpoLinearGradient>
            </View>
          )}
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
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: JP_COLORS.OVERLAY_DARK,
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: JP_COLORS.AMBER_SECONDARY,
    ...JP_SHADOWS.STANDARD,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  questionCounter: {
    color: JP_COLORS.ACCENT_TEXT,
    fontSize: 16,
    ...JP_TYPOGRAPHY.HEADER,
    marginLeft: 10,
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scoreText: {
    color: JP_COLORS.ACCENT_TEXT,
    fontSize: 16,
    ...JP_TYPOGRAPHY.HEADER,
    marginLeft: 8,
  },
  progressBarContainer: {
    marginBottom: 25,
  },
  progressBar: {
    height: 6,
    backgroundColor: JP_COLORS.INGEN_GREY,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: JP_COLORS.AMBER_SECONDARY,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 2,
  },
  questionContainer: {
    marginBottom: 25,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: JP_COLORS.AMBER_SECONDARY,
    ...JP_SHADOWS.ELEVATED,
  },
  questionGradient: {
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionText: {
    color: JP_COLORS.PRIMARY_TEXT,
    fontSize: 18,
    lineHeight: 26,
    textAlign: 'center',
    ...JP_TYPOGRAPHY.BODY,
  },
  optionsContainer: {
    flex: 1,
  },
  option: {
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: JP_COLORS.AMBER_SECONDARY,
    overflow: 'hidden',
    ...JP_SHADOWS.STANDARD,
  },
  selectedOption: {
    borderWidth: 2,
    borderColor: JP_COLORS.AMBER_PRIMARY,
    ...JP_SHADOWS.AMBER_GLOW,
  },
  correctOption: {
    borderWidth: 2,
    borderColor: JP_COLORS.SUCCESS,
  },
  incorrectOption: {
    borderWidth: 2,
    borderColor: JP_COLORS.ERROR,
  },
  optionGradient: {
    padding: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionText: {
    color: JP_COLORS.PRIMARY_TEXT,
    fontSize: 16,
    textAlign: 'center',
    ...JP_TYPOGRAPHY.BODY,
  },
  feedbackContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  feedbackGradient: {
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: JP_COLORS.AMBER_SECONDARY,
    ...JP_SHADOWS.ELEVATED,
  },
  feedbackText: {
    color: JP_COLORS.PRIMARY_TEXT,
    fontSize: 16,
    ...JP_TYPOGRAPHY.HEADER,
    marginBottom: 20,
    textAlign: 'center',
  },
  nextButton: {
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: JP_COLORS.AMBER_SECONDARY,
  },
  nextButtonGradient: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonText: {
    color: JP_COLORS.INGEN_BLACK,
    fontSize: 14,
    ...JP_TYPOGRAPHY.HEADER,
  },
});

export default QuizScreen;