const ages = [10, 20, 30];

//Add elements in start of a array
ages.unshift(5);

//Add element at the end of a array
ages.push(40);

//Add elements in the middle of an array
ages.splice(ages.length/2,0,'s')


//Remove elements in start of a array
ages.shift();

//Remove element at the end of a array
ages.pop();

//Remove elements in the middle of an array
ages.splice(ages.length/2,0)


console.log(ages);