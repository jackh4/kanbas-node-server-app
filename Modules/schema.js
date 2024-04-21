import mongoose from "mongoose";
const moduleSchema = new mongoose.Schema({    
    name: { type: String, required: true},
    description: String,
    course: { type: String, required: true, unqiue: true},
    lessons: { type: [{
        name: { type: String, required: true},
        description: String,
        module: { type: String, required: true},
    }], default: []}
},
    { collection: "modules" });
export default moduleSchema;