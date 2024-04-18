import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({    
    _id: { type: String, unqiue: true },
    name: { type: String, required: true, unqiue: true },
    number: { type: String, required: true, unqiue: true },
    color: {type: String, required: true, default: "gray"},
    startDate: Date,
    endDate: Date,
    department: String,
    credits: Number,
    description: String,
},
    { collection: "courses" });
export default courseSchema;