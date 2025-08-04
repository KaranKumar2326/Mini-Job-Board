const express = require("express");
const router = express.Router();
const { getJobs, addJob } = require("../controllers/jobsController");

router.get("/", getJobs);
router.post("/", addJob);

module.exports = router;