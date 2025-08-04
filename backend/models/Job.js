const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a job title"],
    trim: true,
    maxlength: [100, "Job title cannot exceed 100 characters"],
  },
  company: {
    type: String,
    required: [true, "Please provide a company name"],
    maxlength: [50, "Company name cannot exceed 50 characters"],
  },
  location: {
    type: String,
    required: [true, "Please provide a job location"],
    maxlength: [50, "Location cannot exceed 50 characters"],
  },
  type: {
    type: String,
    enum: ["Remote", "Onsite", "Hybrid"],
    required: [true, "Please select a job type"],
  },
  description: {
    type: String,
    required: [true, "Please provide a job description"],
    maxlength: [1000, "Description cannot exceed 1000 characters"],
  },
  postedDate: {
    type: Date,
    default: Date.now, 
  },
});

module.exports = mongoose.model("Job", JobSchema);