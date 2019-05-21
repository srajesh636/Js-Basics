//Factory Functions are functions which takes a input and returns back a object

let address = (street, city, zip) => {
  return {
    street,
    city,
    zip
  };
};

console.log(address("a", "b", "c"));
