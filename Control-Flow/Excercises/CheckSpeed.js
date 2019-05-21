// Max Limit of a driver is 70 ;
//After 70 and add 1 point after every 5 km excess
//If 12 point License suspended


const checkSpeed = speed => {
  let points = 0;
  const maxLimit = 70;
  const kmPerLimit = 5;
  if (speed > maxLimit) {
    points = (speed - 70) / kmPerLimit;
      return points && points > 12 ? 'License Suspended' : ( points ? Math.floor(points) : 'OK'  )
  } else return 'OK'
}

console.log(checkSpeed(Math.floor(80)))
