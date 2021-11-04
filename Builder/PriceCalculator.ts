import {
  AREA_STANDARTS,
  INTERIOR_WEALTH,
  ROOM_AREA_MAP,
  TRoom,
} from "./HouseBuilder";

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
  calculateRoomPrice(room: TRoom): number
}

export default class PriceCalculator implements IPriceCalculator{
  constructor() {}


  public calculateRoomPrice(room: TRoom): number {
    return ROOM_BASE_PRICE
      * ROOM_AREA_PRICE_MULTIPLIERS[room.area]
      * ROOM_WEALTH_PRICE_MULTIPLIERS[room.interior]
  }
}