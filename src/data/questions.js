export const triviaQuestions = [
  {
    id: 1,
    question: "What is the name of the island where Jurassic Park is located?",
    options: ["Isla Nublar", "Isla Sorna", "Isla Muerta", "Isla Verde"],
    correctAnswer: 0,
  },
  {
    id: 2,
    question: "Who wrote the novel on which the movie is based?",
    options: ["Stephen King", "Michael Crichton", "Dean Koontz", "Tom Clancy"],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: "What is Dr. Alan Grant's profession?",
    options: ["Geneticist", "Paleobotanist", "Paleontologist", "Mathematician"],
    correctAnswer: 2,
  },
  {
    id: 4,
    question: "Which dinosaur is NOT featured in the original Jurassic Park movie?",
    options: ["Velociraptor", "Spinosaurus", "Brachiosaurus", "Dilophosaurus"],
    correctAnswer: 1,
  },
  {
    id: 5,
    question: "What does John Hammond use his cane for besides walking?",
    options: ["Fighting dinosaurs", "Storing amber", "Hiding a weapon", "Nothing special"],
    correctAnswer: 1,
  },
  {
    id: 6,
    question: "What is the security system's main computer called?",
    options: ["UNIX System", "Mother", "HAL 9000", "Deep Thought"],
    correctAnswer: 0,
  },
  {
    id: 7,
    question: "Which character says 'Life finds a way'?",
    options: ["Dr. Grant", "Dr. Malcolm", "Dr. Sattler", "John Hammond"],
    correctAnswer: 1,
  },
  {
    id: 8,
    question: "What do the velociraptors primarily hunt in the movie?",
    options: ["In packs", "Alone", "Only at night", "Only herbivores"],
    correctAnswer: 0,
  },
  {
    id: 9,
    question: "What is Dennis Nedry's motivation for sabotaging the park?",
    options: ["Revenge", "Money", "Scientific ethics", "Fear"],
    correctAnswer: 1,
  },
  {
    id: 10,
    question: "Which T-Rex scene happens during a rainstorm?",
    options: ["First encounter", "Final chase", "Bathroom scene", "Lawyer's death"],
    correctAnswer: 0,
  },
];

export const getRandomQuestions = (count = 10) => {
  const shuffled = [...triviaQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};