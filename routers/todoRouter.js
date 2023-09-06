const router = require("express").Router();
const { getList, post, remove, update } = require("../controllers").todo;

router.get("/list", getList);
router.post("/", post);
router.put("/", update);
router.delete("/:id", remove);

module.exports = router;
