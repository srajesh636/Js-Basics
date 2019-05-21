let sample = [12, 89, 34, 65, 57];

let doesExists = no => {
  return sample.indexOf(no) === -1 ? false : true;
};

console.log(doesExists(12));
