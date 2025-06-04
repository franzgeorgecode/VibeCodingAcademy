// Represents the structural information for a quiz question.
// Text content (question, options, explanation) is in translations.ts.
export interface QuizQuestion {
  id: string; // Unique ID for this question, used in translation keys
  correctAnswer: number; // Index of the correct option
  numberOfOptions: number; // How many options this question has
}

// Represents the structural information for a lesson.
// Text content (title, objective, content, etc.) is in translations.ts.
export interface Lesson {
  id: string; // Unique ID for this lesson, used in translation keys
  level: number;
  orderInLevel: number;
  badgeXp: number;
  quizQuestions: QuizQuestion[];
  numberOfLearningObjectives: number;
  // Optional: if readingTime is fixed and not translated, keep it. Otherwise, move to translations.
  readingTime?: string; // Example: "10-15", can also be moved to translations if it varies by language.
}

export const lessonsData: Record<string, Lesson> = {
  "lesson-1-1": {
    id: "lesson-1-1",
    level: 1,
    orderInLevel: 1,
    numberOfLearningObjectives: 4,
    quizQuestions: [
      { id: "q1-1-1", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q1-1-2", correctAnswer: 2, numberOfOptions: 4 },
      { id: "q1-1-3", correctAnswer: 2, numberOfOptions: 4 },
      { id: "q1-1-4", correctAnswer: 1, numberOfOptions: 4 }
    ],
    badgeXp: 10,
    readingTime: "5-8" // Assuming reading time is somewhat fixed
  },
  "lesson-1-2": {
    id: "lesson-1-2",
    level: 1,
    orderInLevel: 2,
    numberOfLearningObjectives: 4,
    quizQuestions: [
      { id: "q1-2-1", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q1-2-2", correctAnswer: 2, numberOfOptions: 4 },
      { id: "q1-2-3", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q1-2-4", correctAnswer: 2, numberOfOptions: 4 }
    ],
    badgeXp: 15,
    readingTime: "7-10"
  },
  "lesson-1-3": {
    id: "lesson-1-3",
    level: 1,
    orderInLevel: 3,
    numberOfLearningObjectives: 4,
    quizQuestions: [
      { id: "q1-3-1", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q1-3-2", correctAnswer: 2, numberOfOptions: 4 },
      { id: "q1-3-3", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q1-3-4", correctAnswer: 2, numberOfOptions: 4 }
    ],
    badgeXp: 20,
    readingTime: "8-12"
  },
  "lesson-2-1": {
    id: "lesson-2-1",
    level: 2,
    orderInLevel: 1,
    numberOfLearningObjectives: 4,
    quizQuestions: [
      { id: "q2-1-1", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q2-1-2", correctAnswer: 2, numberOfOptions: 4 },
      { id: "q2-1-3", correctAnswer: 2, numberOfOptions: 4 },
      { id: "q2-1-4", correctAnswer: 1, numberOfOptions: 4 }
    ],
    badgeXp: 25,
    readingTime: "10-15"
  },
  "lesson-2-2": {
    id: "lesson-2-2",
    level: 2,
    orderInLevel: 2,
    numberOfLearningObjectives: 4,
    quizQuestions: [
      { id: "q2-2-1", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q2-2-2", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q2-2-3", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q2-2-4", correctAnswer: 1, numberOfOptions: 4 }
    ],
    badgeXp: 30,
    readingTime: "10-15"
  },
  "lesson-2-3": {
    id: "lesson-2-3",
    level: 2,
    orderInLevel: 3,
    numberOfLearningObjectives: 4,
    quizQuestions: [
      { id: "q2-3-1", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q2-3-2", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q2-3-3", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q2-3-4", correctAnswer: 2, numberOfOptions: 4 }
    ],
    badgeXp: 40,
    readingTime: "12-18"
  },
  "lesson-3-1": {
    id: "lesson-3-1",
    level: 3,
    orderInLevel: 1,
    numberOfLearningObjectives: 4,
    quizQuestions: [
      { id: "q3-1-1", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q3-1-2", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q3-1-3", correctAnswer: 2, numberOfOptions: 4 },
      { id: "q3-1-4", correctAnswer: 1, numberOfOptions: 4 }
    ],
    badgeXp: 35,
    readingTime: "10-15"
  },
  "lesson-3-2": {
    id: "lesson-3-2",
    level: 3,
    orderInLevel: 2,
    numberOfLearningObjectives: 4,
    quizQuestions: [
      { id: "q3-2-1", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q3-2-2", correctAnswer: 2, numberOfOptions: 4 },
      { id: "q3-2-3", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q3-2-4", correctAnswer: 1, numberOfOptions: 4 }
    ],
    badgeXp: 45,
    readingTime: "10-15"
  },
  "lesson-3-3": {
    id: "lesson-3-3",
    level: 3,
    orderInLevel: 3,
    numberOfLearningObjectives: 4,
    quizQuestions: [
      { id: "q3-3-1", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q3-3-2", correctAnswer: 2, numberOfOptions: 4 },
      { id: "q3-3-3", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q3-3-4", correctAnswer: 2, numberOfOptions: 4 }
    ],
    badgeXp: 50,
    readingTime: "10-15"
  },
  "lesson-4-1": {
    id: "lesson-4-1",
    level: 4,
    orderInLevel: 1,
    numberOfLearningObjectives: 4,
    quizQuestions: [
      { id: "q4-1-1", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q4-1-2", correctAnswer: 2, numberOfOptions: 4 },
      { id: "q4-1-3", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q4-1-4", correctAnswer: 1, numberOfOptions: 4 }
    ],
    badgeXp: 55,
    readingTime: "10-15"
  },
  "lesson-4-2": {
    id: "lesson-4-2",
    level: 4,
    orderInLevel: 2,
    numberOfLearningObjectives: 4,
    quizQuestions: [
      { id: "q4-2-1", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q4-2-2", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q4-2-3", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q4-2-4", correctAnswer: 1, numberOfOptions: 4 }
    ],
    badgeXp: 60,
    readingTime: "8-12"
  },
  "lesson-4-3": {
    id: "lesson-4-3",
    level: 4,
    orderInLevel: 3,
    numberOfLearningObjectives: 4,
    quizQuestions: [
      { id: "q4-3-1", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q4-3-2", correctAnswer: 2, numberOfOptions: 4 },
      { id: "q4-3-3", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q4-3-4", correctAnswer: 1, numberOfOptions: 4 }
    ],
    badgeXp: 70,
    readingTime: "10-15"
  },
  "lesson-5-1": {
    id: "lesson-5-1",
    level: 5,
    orderInLevel: 1,
    numberOfLearningObjectives: 4,
    quizQuestions: [
      { id: "q5-1-1", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q5-1-2", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q5-1-3", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q5-1-4", correctAnswer: 1, numberOfOptions: 4 }
    ],
    badgeXp: 65,
    readingTime: "10-15"
  },
  "lesson-5-2": {
    id: "lesson-5-2",
    level: 5,
    orderInLevel: 2,
    numberOfLearningObjectives: 4,
    quizQuestions: [
      { id: "q5-2-1", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q5-2-2", correctAnswer: 2, numberOfOptions: 4 },
      { id: "q5-2-3", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q5-2-4", correctAnswer: 1, numberOfOptions: 4 }
    ],
    badgeXp: 75,
    readingTime: "10-15"
  },
  "lesson-5-3": {
    id: "lesson-5-3",
    level: 5,
    orderInLevel: 3,
    numberOfLearningObjectives: 4,
    quizQuestions: [
      { id: "q5-3-1", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q5-3-2", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q5-3-3", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q5-3-4", correctAnswer: 1, numberOfOptions: 4 }
    ],
    badgeXp: 80,
    readingTime: "10-15"
  },
  "lesson-6-1": {
    id: "lesson-6-1",
    level: 6,
    orderInLevel: 1,
    numberOfLearningObjectives: 4,
    quizQuestions: [
      { id: "q6-1-1", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q6-1-2", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q6-1-3", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q6-1-4", correctAnswer: 1, numberOfOptions: 4 }
    ],
    badgeXp: 100,
    readingTime: "15-20"
  },
  "lesson-6-2": {
    id: "lesson-6-2",
    level: 6,
    orderInLevel: 2,
    numberOfLearningObjectives: 4,
    quizQuestions: [
      { id: "q6-2-1", correctAnswer: 0, numberOfOptions: 4 }, // Note: correctAnswer was 0 in original data for this one.
      { id: "q6-2-2", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q6-2-3", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q6-2-4", correctAnswer: 1, numberOfOptions: 4 }
    ],
    badgeXp: 90,
    readingTime: "12-18"
  },
  "lesson-6-3": {
    id: "lesson-6-3",
    level: 6,
    orderInLevel: 3,
    numberOfLearningObjectives: 4,
    quizQuestions: [
      { id: "q6-3-1", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q6-3-2", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q6-3-3", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q6-3-4", correctAnswer: 1, numberOfOptions: 4 }
    ],
    badgeXp: 200,
    readingTime: "10-15"
  }
};
export default lessonsData;
