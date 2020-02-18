const mongo = require("mongoose");

const portfolioinfoSchema = new mongo.Schema({
  profile: {
    name: String,
    mode: String,
    age: String,
    jobTitle: String,
    location: String
  },
  skills: [
    {
      title: String,
      fields: [
        {
          name: String,
          icon: String
        }
      ]
    }
  ],
  experience: [
    {
      org: String,
      jobTitle: String,
      dates: String,
      location: String,
      description: String,
      mode: String,
      skills: [
        {
          name: String,
          icon: String
        }
      ]
    }
  ]
});

module.exports = mongo.model("PortfolioInfo", portfolioinfoSchema);
