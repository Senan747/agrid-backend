const express = require("express");
const postsController = require("../controllers/post.controller");
const checkAuthMiddleware = require('../middleware/check-auth')

const router = express.Router();

router.post("/", postsController.save);
router.get("/:id", postsController.show);
router.get("/", postsController.index);
router.delete("/:id", postsController.destroy)

module.exports = router;
