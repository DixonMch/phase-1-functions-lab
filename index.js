// Code your solution in this file!
function distanceFromHqInBlocks(pickupStreet) {
    const hq = 42
    // return Math.abs(pickupStreet - 42)
    if (pickupStreet > 42){
        return pickupStreet - hq;
    }
    else if (pickupStreet < 42){
        return hq - pickupStreet;
    }
    
}

function distanceFromHqInFeet(pickupStreet) {
    const hqStreet = 42;
    const distanceInBlocks = Math.abs(pickupStreet - hqStreet);
    const distanceInFeet = distanceInBlocks * 264;
    return distanceInFeet;
  }
  
function distanceTravelledInFeet(start, destinationBlock){
    return Math.abs((start - destinationBlock)*264)
}
function calculatesFarePrice(start, destination){
    let distanceTravelledInFeet = (Math.abs(start-destination)*264)

    if (distanceTravelledInFeet <= 400){
        return 0;
    }
    else if (distanceTravelledInFeet > 400 && distanceTravelledInFeet <= 2000
        ){
        return (distanceTravelledInFeet - 400) * 2/100;
    }
    else if(distanceTravelledInFeet > 2000 && distanceTravelledInFeet <= 2500){
        return 25
    }
    else {
        return 'cannot travel that far';
    }
}
