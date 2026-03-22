import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  question: String,
  difficulty: String,
  timeLimit: Number,
  answer: String,
  feedback: String,

  score: { type: Number, default: 0 },
  confidence: { type: Number, default: 0 },
  communication: { type: Number, default: 0 },
  correctness: { type: Number, default: 0 },
});

const interviewSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  role: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  mode: {
    type: String,
    enum: ["HR", "Technical"],
    required: true
  },
  resumeText: {
    type: String
  },

  questions: [questionSchema],   // ✔ correct

  finalScore: { type: Number, default: 0 },

  status: {
    type: String,
    enum: ["Incompleted", "completed"],
    default: "Incompleted",
  }

},{ timestamps: true });

const Interview = mongoose.model("Interview", interviewSchema);

export default Interview;




// import mongoose from "mongoose";

// /* QUESTION SCHEMA */

// const questionSchema = new mongoose.Schema({

//   question: {
//     type: String,
//     required: true
//   },

//   type: {
//     type: String,
//     enum: ["resume", "technical", "coding", "behavioral"],
//     default: "technical"
//   },

//   difficulty: {
//     type: String,
//     enum: ["easy", "medium", "hard"],
//     default: "medium"
//   },

//   timeLimit: {
//     type: Number,
//     default: 60
//   },

//   /* user answer */

//   answer: {
//     type: String
//   },

//   /* AI evaluation */

//   aiEvaluation: {
//     type: String
//   },

//   correctAnswer: {
//     type: String
//   },

//   feedback: {
//     type: String
//   },

//   /* scoring */

//   score: {
//     type: Number,
//     default: 0
//   },

//   confidence: {
//     type: Number,
//     default: 0
//   },

//   communication: {
//     type: Number,
//     default: 0
//   },

//   correctness: {
//     type: Number,
//     default: 0
//   },

//   /* timing */

//   askedAt: Date,

//   answeredAt: Date

// });


// /* INTERVIEW SCHEMA */

// const interviewSchema = new mongoose.Schema({

//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     required: true
//   },

//   role: {
//     type: String,
//     required: true
//   },

//   experience: {
//     type: String,
//     required: true
//   },

//   mode: {
//     type: String,
//     enum: ["HR", "Technical"],
//     required: true
//   },

//   /* resume text extracted */

//   resumeText: {
//     type: String
//   },

//   /* all questions asked in interview */

//   questions: [questionSchema],

//   /* interview progress */

//   currentQuestionIndex: {
//     type: Number,
//     default: 0
//   },

//   totalQuestions: {
//     type: Number,
//     default: 15
//   },

//   /* final result */

//   finalScore: {
//     type: Number,
//     default: 0
//   },

//   technicalScore: {
//     type: Number,
//     default: 0
//   },

//   communicationScore: {
//     type: Number,
//     default: 0
//   },

//   /* interview status */

//   status: {
//     type: String,
//     enum: ["pending", "in-progress", "completed"],
//     default: "pending"
//   },

//   startedAt: Date,

//   completedAt: Date

// }, { timestamps: true });


// const Interview = mongoose.model("Interview", interviewSchema);

// export default Interview;