getPersonalDetails = _ => {
  console.log("Nothing Much to Say");
};

let sample = {
  name: "Sai Rajesh",
  age: 21,
  profession: "Software Engineer",
  company: "neetable",
  personalDetails: function() {
    getPersonalDetails();
  }
};

console.log(sample.personalDetails());
