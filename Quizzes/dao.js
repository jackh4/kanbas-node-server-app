import model from "./model.js";
export const findAllCourseQuizzes = (course) => model.find({ course: course});
export const findQuizByTitle = (title) => model.findOne({ title: title });
export const findQuizByTitleCourse = (course, title) => model.findOne({ title: title, course: course });
export const createQuiz = (quiz) => {delete quiz._id; return model.create(quiz)};
export const updateQuiz = (quizId, quiz) => model.updateOne({ _id: quizId }, { $set: quiz });
export const deleteQuiz = (quizId) => model.deleteOne({ _id: quizId });