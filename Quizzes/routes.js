import * as dao from "./dao.js";

export default function QuizRoutes(app) {
    const findAllCourseQuizzes = async (req, res) => {
        const quizzes = await dao.findAllCourseQuizzes(req.params.courseId);
        res.json(quizzes);
    };
    const findQuizByTitle = async (req, res) => {
        const quiz = await dao.findQuizByTitle(req.params.title);
        res.json(quiz);
    };
    const findQuizByTitleCourse = async (req, res) => {
        const { courseId, quizTitle } = req.params;
        const quiz = await dao.findQuizByTitleCourse(courseId, quizTitle);
        res.json(quiz);
    };
    const createQuiz = async (req, res) => {
        const quiz = await dao.createQuiz(req.body);
        res.json(quiz);
    };
    const updateQuiz = async (req, res) => {
        console.log(req.body)
        console.log(req.params.quizId)
        const status = await dao.updateQuiz(req.params.quizId, req.body);
        res.json(status);
    };
    const deleteQuiz = async (req, res) => {
        const status = await dao.deleteQuiz(req.params.quizId);
        res.json(status);
    };
    app.get("/api/quizzes/:courseId", findAllCourseQuizzes);
    app.get("/api/quizzes/:title", findQuizByTitle);
    app.get("/api/quizzes/:courseId/:quizTitle", findQuizByTitleCourse)
    app.post("/api/quizzes", createQuiz);
    app.put("/api/quizzes/:quizId", updateQuiz);
    app.delete("/api/quizzes/:quizId", deleteQuiz);
}