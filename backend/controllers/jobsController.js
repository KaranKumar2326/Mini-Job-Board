const Job = require("../models/Job");

exports.getJobs = async (req, res) => {
  const { location, type } = req.query;
  const filters = {};

  if (location) filters.location = { $regex: location, $options: "i" };
  if (type) filters.type = type;

  try {
    const jobs = await Job.find(filters).sort("-postedDate");
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addJob = async (req, res) => {
  try {
    const job = await Job.create(req.body);
    res.status(201).json(job);
  } catch (err) {
    if (err.name === "ValidationError") {
      const errors = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({ errors });
    }
    res.status(500).json({ error: "Server error" });
  }
};