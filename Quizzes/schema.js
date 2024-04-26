import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    type: {
        type: String,
        enum: ["MULTIPLE_CHOICE", "TRUE/FALSE", "FILL_IN",],
        required: true,
    },
    points: { type: Number, required: true },
    question: String,
    choices: [{ type: String }],
    // Schema.Types.Mixed - String + Boolean
    correctAnswer: String,
    blanks: [{
        position: {
            type: Number,
            required: true,
        },
        correctAnswer: {
            type: String,
            required: true,
        },
    }],
});

const quizSchema = new mongoose.Schema({
    // _id: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     index: true,
    //     required: true,
    //     auto: true,
    // },
    title: { type: String, required: true },
    description: String,
    quizType: {
        type: String,
        enum: ["GRADED_QUIZ", "PRACTICE_QUIZ", "GRADED_SURVEY", "UNGRADED_SURVEY"],
        default: "GRADED_QUIZ",
    },
    points: Number,
    assignmentGroup: {
        type: String,
        enum: ["QUIZZES", "EXAMS", "ASSIGNMENTS", "PROJECT"],
        default: "QUIZZES",
    },
    shuffleAnswers: { type: Boolean, default: true },
    timeLimit: { type: Number, default: 20 },
    multipleAttempts: { type: Boolean, default: false },
    // show correct answers both boolean and date
    showCorrectAnswers: { type: String, },
    accessCode: { type: String, default: "" },
    oneQuestionPerTime: { type: Boolean, default: true },
    webcamRequired: { type: Boolean, default: false },
    lockQuestions: { type: Boolean, default: false },
    dueDate: String,
    availableDate: String,
    untilDate: String,
    questions: [questionSchema || String],
    published: { type: Boolean, default: false },
    course: { type: String, required: true },
    previewAnswers: [String],
},
    { collection: "quizzes" });
export default quizSchema;