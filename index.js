function distanceFromHqInBlocks(location) {
  return location > 42 ? location - 42 : 42 - location;
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(start, end) {
  return end < start ? (start - end) * 264 : (end - start) * 264;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination)

  if (distance < 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25
  } else if (distance > 2500) {
    return 'cannot travel that far';
  }
}
