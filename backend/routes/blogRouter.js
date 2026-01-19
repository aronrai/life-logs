const express = require("express");
const blogController = require("../controllers/blogController");
const blogRouter = express.Router();

blogRouter.get("/", blogController.getLogs);
blogRouter.get("/:id", blogController.getLog);
blogRouter.post("/", blogController.postLog);
blogRouter.put("/:id", blogController.updateLog);
blogRouter.delete("/:id", blogController.deleteLog);

module.exports = blogRouter;
