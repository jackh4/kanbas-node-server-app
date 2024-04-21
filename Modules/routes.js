import * as dao from "./dao.js";

export default function ModuleRoutes(app) {
    const findAllModules = async (req, res) => {
        const modules = await dao.findAllModules();
        res.json(modules);
    };
    const createModule = async (req, res) => {
        const module = await dao.createModule(req.body);
        res.json(module);
    };
    const deleteModule = async (req, res) => {
        const status = await dao.deleteModule(req.params.moduleId);
        res.json(status);
    };
    const updateModule = async (req, res) => {
        const { moduleId } = req.params;
        const status = await dao.updateModule(moduleId, req.body);
        res.json(status);
    };
    const addModuleChild = async (req, res) => {
        const status = await dao.addModuleChild(req.body.moduleChild, req.params);
        res.json(status);
    }
    const updateModuleChild = async (req, res) => {
        const { moduleId, moduleChildId } = req.params;
        const moduleChild = req.body;
        const status = await dao.updateModuleChild(moduleChild, moduleId, moduleChildId);
        res.json(status);
    }
    const deleteModuleChild = async (req, res) => {
        const status = await dao.deleteModuleChild(req.body, req.params.moduleId);
        res.json(status)
    }

    app.get("/api/modules", findAllModules);
    app.post("/api/modules", createModule);
    app.delete("/api/modules/:moduleId", deleteModule);
    app.put("/api/modules/:moduleId", updateModule);
    app.put("/api/modules/:moduleId", addModuleChild);
    app.put("/api/modules/:moduleId", deleteModuleChild);
    app.put("/api/modules/:moduleId/:moduleChildId", updateModuleChild);
}