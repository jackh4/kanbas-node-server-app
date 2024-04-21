import * as dao from "./dao.js";

export default function CourseRoutes(app) {
    const findAllCourses = async (req, res) => {
        const courses = await dao.findAllCourses();
        res.json(courses);
    };
    const createCourse = async (req, res) => {
        const course = await dao.createCourse(req.body);
        res.json(course);
    };
    const deleteCourse = async (req, res) => {
        const status = await dao.deleteCourse(req.params.courseId);
        res.json(status);
    };
    const updateCourse = async (req, res) => {
        const { courseId } = req.params;
        const status = await dao.updateCourse(courseId, req.body);
        res.json(status);
    };
    app.get("/api/courses", findAllCourses);
    app.post("/api/courses", createCourse);
    app.delete("/api/courses/:courseId", deleteCourse);
    app.put("/api/courses/:courseId", updateCourse);
}