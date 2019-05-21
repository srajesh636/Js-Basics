//Constructor Functions are invoked using new and use this for assigning a value

function Address(street,city,zip){
    this.street = street;
    this.city = city;
    this.zip = zip;
}

let newAddress = new Address('a','b','c');

console.log(newAddress);