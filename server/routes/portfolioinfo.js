const express = require("express");
const router = express.Router();
const PortfolioInfo = require("../models/portfolioinfo.js");
const fs = require("fs");

router.get("/", async (req, res) => {
  try {
    const portfolioinfo = await PortfolioInfo.findOne();
    res.header("Access-Control-Allow-Origin", "*");
    res.send(portfolioinfo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const portfolioinfo = new PortfolioInfo({
    profile: req.body.profile,
    skills: req.body.skills,
    experience: req.body.experience,
    education: req.body.education,
    projects: req.body.projects
  });

  try {
    const newPortfolioInfo = await portfolioinfo.save();
    res.status(201).json(newPortfolioInfo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/resumepdf", async (req, res) => {
  try {
    var file = "./documents/Drew.Michel.Resume.pdf";
    res.download(file);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/resumeword", async (req, res) => {
  try {
    var file = "./documents/Drew.Michel.Resume.docx";
    res.download(file);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/resume", async (req, res) => {
  try {
    var file = fs.createReadStream("./documents/Drew.Michel.Resume.pdf");
    file.pipe(res);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
