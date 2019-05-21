let address = {
  street: "Sai Baba temple Road",
  city: "Bangalore",
  zipCode: "560037"
};

let showAdress = address =>{
    for (key in address){
        console.log(key,address[key])
    }
} 

showAdress(address);