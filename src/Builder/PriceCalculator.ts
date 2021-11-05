import {
  AREA_STANDARTS,
  INTERIOR_WEALTH,
  ROOM_AREA_MAP,
  TRoomOptions
} from "./HouseBuilder";

console.dir(AREA_STANDARTS);
const ROOM_AREA_PRICE_MULTIPLIERS = {
  [ROOM_AREA_MAP[AREA_STANDARTS.NARROW]]: 0.5,
  [ROOM_AREA_MAP[AREA_STANDARTS.BASIC]]: 1,
  [ROOM_AREA_MAP[AREA_STANDARTS.SPACIOUS]]: 2,
}

const ROOM_WEALTH_PRICE_MULTIPLIERS = {
  [INTERIOR_WEALTH.NONE]: 0,
  [INTERIOR_WEALTH.SPARTAN]: 0.5,
  [INTERIOR_WEALTH.BASIC]: 1,
  [INTERIOR_WEALTH.LUXURIOUS]: 2,
}

const ROOM_BASE_PRICE = 1;

export interface IPriceCalculator {
  calculateRoomPrice(room: Partial<TRoomOptions>): number
}

export default class PriceCalculator implements IPriceCalculator{
  constructor() {}


  public calculateRoomPrice({ area, interior }: Partial<TRoomOptions>): number {
    if(!area || !interior) {
      throw new Error('[PriceCalculator] Room is not ready');
    }

    return ROOM_BASE_PRICE
      * ROOM_AREA_PRICE_MULTIPLIERS[area]
      * ROOM_WEALTH_PRICE_MULTIPLIERS[interior]
  }
}