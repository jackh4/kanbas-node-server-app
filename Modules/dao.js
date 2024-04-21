import model from "./model.js";
export const findAllModules = () => model.find();
export const createModule = (module) => {delete module._id; return module.create(module)};
export const updateModule = (moduleId, module) => model.updateOne({ _id: moduleId }, { $set: module });
export const deleteModule = (moduleId) => model.deleteOne({ _id: moduleId });

export const addModuleChild = (moduleChild, moduleId) => 
model.findOneAndUpdate({ _id: moduleId }, { $push: { "lessons": moduleChild } });
export const updateModuleChild = (moduleChild, moduleChildId, moduleId) => 
model.findOneAndUpdate({ _id: moduleId }, { $set: { "lessons.$[el]": moduleChild } }, { arrayFilters: [{ "el._id": moduleChildId }] });
export const deleteModuleChild = (moduleChild, moduleId,) => 
model.findOneAndUpdate({ _id: moduleId }, { $pull: { "lessons": moduleChild } });