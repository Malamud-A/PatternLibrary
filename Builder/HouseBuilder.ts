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
  GABLE: "gable",
  FLAT: "flat",
  HIPPED: "hipped"
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
  private area: AREA_STANDARTS;
  private wallsMaterial: WALL_MATERIALS;
  private roofType: ROOF_TYPES;
  private roofMaterial: ROOF_MATERIALS;
  private price: number;
  private storeys: THouseStoreys;
  private rooms: Array<TRoom>;

  private readonly priceCalculator: IPriceCalculator;

  constructor() {
    this.storeys = {};
    this.rooms = [];
    this.price = 0;

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
      throw new Error("Please, define the house area");
    }

    const storey: TStorey = {
      space: AREA_STANDARTS_NAMES[this.area],
      spaceLeft: BASE_AREA_MAP[this.area],
      rooms: []
    };

    if (!Object.keys(this.storeys).length) {
      this.storeys[1] = storey;
    } else {
      this.storeys[Math.max(...Object.keys(this.storeys).map(Number)) + 1] = storey;
    }

    return this;
  }

  public addBasement(area: AREA_STANDARTS): HouseBuilder {
    if (this.storeys[0]) {
      throw new Error("This house already has a basement");
    }

    this.storeys[0] = {
      space: AREA_STANDARTS_NAMES[this.area],
      spaceLeft: BASE_AREA_MAP[this.area],
      rooms: []
    };

    return this;
  }

  public addRoom({ storey, area, interior, type }: TRoomOptions): HouseBuilder {
    const houseStorey: TStorey = this.storeys[storey];

    if (!houseStorey) {
      throw new Error("There's no such storey");
    }

    if ((houseStorey.spaceLeft - ROOM_AREA_MAP[area]) < 0) {
      throw new Error("Insufficient space on this storey");
    }

    const room: TRoom = {
      storey,
      area: AREA_STANDARTS_NAMES[area],
      interior: INTERIOR_WEALTH_NAMES[interior],
      type: ROOM_TYPES_NAMES[type]
    };

    const roomPrice = this.priceCalculator.calculateRoomPrice(room);

    this.price += roomPrice;
    houseStorey.rooms.push(room);
    this.rooms.push(room);

    return this;
  }

  public reset(): void {
    this.area = undefined;
    this.wallsMaterial = undefined;
    this.roofType = undefined;
    this.roofMaterial = undefined;
    this.price = 0;
    this.storeys = {};
    this.rooms = [];
  }

  public build(): THouse {
    const house: THouse = {
      area: AREA_STANDARTS_NAMES[this.area],
      wallsMaterial: WALL_MATERIALS_NAMES[this.wallsMaterial],
      roofType: ROOF_TYPES_NAMES[this.roofType],
      roofMaterial: ROOF_MATERIALS_NAMES[this.roofMaterial],
      price: this.price,
      storeys: this.storeys,
      rooms: this.rooms
    };

    this.reset();

    return house;
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
  TRoom,
  THouse
};

export default HouseBuilder;