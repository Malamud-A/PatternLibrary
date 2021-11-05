import PriceCalculator, { IPriceCalculator } from "./PriceCalculator";
import IBuilder from "./abstact/interfaces/IBuilder";

enum WALL_MATERIALS {
  BRICK, WOOD, CONCRETE
}

const WALL_MATERIALS_NAMES = {
  [WALL_MATERIALS.BRICK]: "brick",
  [WALL_MATERIALS.WOOD]: "wood",
  [WALL_MATERIALS.CONCRETE]: "concrete"
};

enum ROOF_MATERIALS {
  TILES,
  SLATE,
  CONCRETE
}

const ROOF_MATERIALS_NAMES = {
  [ROOF_MATERIALS.TILES]: "tiles",
  [ROOF_MATERIALS.SLATE]: "slate",
  [ROOF_MATERIALS.CONCRETE]: "concrete"
};

enum ROOF_TYPES {
  GABLE,
  FLAT,
  HIPPED,
}

const ROOF_TYPES_NAMES = {
  [ROOF_TYPES.GABLE]: "gable",
  [ROOF_TYPES.FLAT]: "flat",
  [ROOF_TYPES.HIPPED]: "hipped"
};

enum INTERIOR_WEALTH {
  NONE,
  SPARTAN,
  BASIC,
  LUXURIOUS,
}

const INTERIOR_WEALTH_NAMES = {
  [INTERIOR_WEALTH.NONE]: "none",
  [INTERIOR_WEALTH.SPARTAN]: "spartan",
  [INTERIOR_WEALTH.BASIC]: "basic",
  [INTERIOR_WEALTH.LUXURIOUS]: "luxurious"
};

enum ROOM_TYPES {
  LIVING_ROOM,
  KITCHEN,
  BATHROOM,
  HALL,
  PLAY_ROOM,
  STORAGE,
}

const ROOM_TYPES_NAMES = {
  [ROOM_TYPES.LIVING_ROOM]: "living room",
  [ROOM_TYPES.KITCHEN]: "kitchen",
  [ROOM_TYPES.BATHROOM]: "bathroom",
  [ROOM_TYPES.HALL]: "hall",
  [ROOM_TYPES.PLAY_ROOM]: "play room",
  [ROOM_TYPES.STORAGE]: "storage"
};

enum AREA_STANDARTS {
  NARROW,
  BASIC,
  SPACIOUS,
}

console.dir(AREA_STANDARTS);

const AREA_STANDARTS_NAMES = {
  [AREA_STANDARTS.NARROW]: "narrow",
  [AREA_STANDARTS.BASIC]: "basic",
  [AREA_STANDARTS.SPACIOUS]: "spacious"
};

type TRoomOptions = {
  type: ROOM_TYPES,
  interior: INTERIOR_WEALTH,
  area: AREA_STANDARTS;
  storey: number,
}

type TRoom = {
  type: string,
  interior: string,
  area: string,
  storey: number,
}

type TStorey = {
  space: string,
  spaceLeft: number,
  rooms: Array<TRoom>,
}

type THouseStoreys = {
  [storey: number]: TStorey
}

type THouse = {
  area: string;
  wallsMaterial: string;
  roofType: string;
  roofMaterial: string;
  storeys: THouseStoreys;
  rooms: Array<TRoom>;
  price: number;
}

const BASE_AREA_MAP = {
  [AREA_STANDARTS.NARROW]: 30,
  [AREA_STANDARTS.BASIC]: 60,
  [AREA_STANDARTS.SPACIOUS]: 120
};

const ROOM_AREA_MAP = {
  [AREA_STANDARTS.NARROW]: 10,
  [AREA_STANDARTS.BASIC]: 20,
  [AREA_STANDARTS.SPACIOUS]: 30
};

interface IHouseBuilder extends IBuilder<THouse> {
  setArea(area: AREA_STANDARTS): HouseBuilder;

  setWallsMaterial(material: WALL_MATERIALS): HouseBuilder;

  setRoofMaterial(material: ROOF_MATERIALS): HouseBuilder;

  setRoofType(type: ROOF_TYPES): HouseBuilder;

  addStorey(): HouseBuilder;

  addBasement(area: AREA_STANDARTS): HouseBuilder;

  addRoom(options: TRoomOptions): HouseBuilder;

  build(): THouse;

  reset(): void;
}


class HouseBuilder implements IHouseBuilder {
  private area: AREA_STANDARTS | null;
  private wallsMaterial: WALL_MATERIALS | null;
  private roofType: ROOF_TYPES | null;
  private roofMaterial: ROOF_MATERIALS | null;
  private price: number;
  private storeys: THouseStoreys;
  private rooms: Array<TRoom>;

  private readonly priceCalculator: IPriceCalculator;

  constructor() {
    this.storeys = {};
    this.rooms = [];
    this.price = 0;
    this.area = null;
    this.wallsMaterial = null;
    this.roofType = null;
    this.roofMaterial = null;

    this.priceCalculator = new PriceCalculator();
  }

  public setArea(area: AREA_STANDARTS): HouseBuilder {
    this.area = area;
    return this;
  }

  public setWallsMaterial(material: WALL_MATERIALS): HouseBuilder {
    this.wallsMaterial = material;
    return this;
  }

  public setRoofType(type: ROOF_TYPES): HouseBuilder {
    this.roofType = type;
    return this;
  }

  public setRoofMaterial(material: ROOF_MATERIALS): HouseBuilder {
    this.roofMaterial = material;
    return this;
  }

  public addStorey(): HouseBuilder {
    if (!this.area) {
      throw new Error('[HouseBuilder] Please, define the house area');
    }

    const storey: TStorey = {
      space: AREA_STANDARTS_NAMES[this.area as AREA_STANDARTS],
      spaceLeft: BASE_AREA_MAP[this.area as AREA_STANDARTS],
      rooms: []
    };

    if (!Object.keys(this.storeys as THouseStoreys).length) {
      this.storeys[1] = storey;
    } else {
      this.storeys[Math.max(...Object.keys(this.storeys).map(Number)) + 1] = storey;
    }

    return this;
  }

  public addBasement(area: AREA_STANDARTS): HouseBuilder {
    if (this.storeys[0]) {
      throw new Error('[HouseBuilder] This house already has a basement');
    }

    this.storeys[0] = {
      space: AREA_STANDARTS_NAMES[this.area as AREA_STANDARTS],
      spaceLeft: BASE_AREA_MAP[this.area as AREA_STANDARTS],
      rooms: []
    };

    return this;
  }

  public addRoom({ storey, area, interior, type }: TRoomOptions): HouseBuilder {
    const houseStorey: TStorey = this.storeys[storey];

    if (!houseStorey) {
      throw new Error('[HouseBuilder] There\'s no such storey');
    }

    if ((houseStorey.spaceLeft - ROOM_AREA_MAP[area]) < 0) {
      throw new Error('[HouseBuilder] Insufficient space on this storey');
    }

    const roomPrice = this.priceCalculator.calculateRoomPrice({ area, interior });

    const room: TRoom = {
      storey,
      area: AREA_STANDARTS_NAMES[area],
      interior: INTERIOR_WEALTH_NAMES[interior],
      type: ROOM_TYPES_NAMES[type]
    };


    this.price += roomPrice;
    houseStorey.rooms.push(room);
    this.rooms.push(room);

    return this;
  }

  public reset(): void {
    this.storeys = {};
    this.rooms = [];
    this.price = 0;
    this.area = null;
    this.wallsMaterial = null;
    this.roofType = null;
    this.roofMaterial = null;
  }

  public build(): THouse {
    if (!this.isHouseBuilt()) {
      throw new Error('[HouseBuilder] The house is not finished')
    }

    const house: THouse = {
      area: AREA_STANDARTS_NAMES[this.area as AREA_STANDARTS],
      wallsMaterial: WALL_MATERIALS_NAMES[this.wallsMaterial as WALL_MATERIALS],
      roofType: ROOF_TYPES_NAMES[this.roofType as ROOF_TYPES],
      roofMaterial: ROOF_MATERIALS_NAMES[this.roofMaterial as ROOF_MATERIALS],
      price: this.price,
      storeys: this.storeys,
      rooms: this.rooms
    };

    this.reset();

    return house;
  }

  private isHouseBuilt() {
    return (
      this.area
      && this.wallsMaterial
      && this.roofType
      && this.roofMaterial
      && this.storeys
      && Object.keys(this.storeys).length
      && this.rooms
      && this.rooms.length
    )
  }
}

export {
  IHouseBuilder,
  WALL_MATERIALS,
  ROOF_MATERIALS,
  ROOF_TYPES,
  INTERIOR_WEALTH,
  ROOM_TYPES,
  AREA_STANDARTS,
  ROOM_AREA_MAP,
  BASE_AREA_MAP,
  AREA_STANDARTS_NAMES,
  INTERIOR_WEALTH_NAMES,
  TRoom,
  TRoomOptions,
  THouse
};

export default HouseBuilder;