import HouseDirector from '../HouseDirector';

const director = new HouseDirector();
console.log(JSON.stringify(director.buildCottage(), null, 2));