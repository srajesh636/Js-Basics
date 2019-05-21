let sample = [12, 34, 12, 567];

let except = (number,input) =>{
    return input.filter((i)=>  i !== number)
}

console.log(except(12,sample));