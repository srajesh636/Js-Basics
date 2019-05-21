// Get No of times a element is repeated in a array

let sample = [12,12,45,65,67];

let findOccurences = (input,no) =>{
    let result = input.filter((i)=> i === no);
    return result.length;
}

console.log(findOccurences(sample,12));