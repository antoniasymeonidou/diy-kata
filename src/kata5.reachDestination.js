const reachDestination = (distance, speed) => {
 return `I should be there in ${timeFrom(distance, speed)} hours.`;
};

const timeFrom = (distance, speed) => {
    const time = distance / speed;
    const increment = 0.5;
    return Math.ceil(time / increment) * increment;
};

module.exports = reachDestination;
