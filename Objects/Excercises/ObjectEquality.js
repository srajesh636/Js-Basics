let newAddress = new Address('a','b','c');
let newAddress2 = new Address('a','b','c');

function Address(street,city,zip){
    this.street = street;
    this.city = city;
    this.zip = zip;
}

let checkIfEqual = (a,b) =>{
   return newAddress === newAddress2 ;
}

console.log(checkIfEqual(newAddress,newAddress2));