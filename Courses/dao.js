import model from "./model.js";
export const findAllCourses = () => model.find();
export const createCourse = (course) => {delete course._id; return course.create(course)};
export const updateCourse = (courseId, course) => model.updateOne({ _id: courseId }, { $set: course });
export const deleteCourse = (courseId) => model.deleteOne({ _id: courseId });