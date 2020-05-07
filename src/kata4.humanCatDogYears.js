const humanCatDogYears = humanYears => {
    if(humanYears === 1){
        catYears = 15;
        dogYears = 15;
    }
    if(humanYears === 2){
        catYears = 15 + 9;
        dogYears = 15 + 9;
    }
      if(humanYears > 2){
        catYears = (16) + (4 * humanYears);
        dogYears = (18) + (5 * humanYears);
    }
    
    return [humanYears, catYears, dogYears];
  };

module.exports = humanCatDogYears;
