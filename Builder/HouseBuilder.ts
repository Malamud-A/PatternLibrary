enum WALL_MATERIALS {
  BRICK, WOOD, CONCRETE
}

enum ROOF_MATERIALS {
  TILES, SLATE, CONCRETE
}

enum ROOF_TYPES {
  GABLE, FLAT, HIPPED
}

enum INTERIOR_WEALTH {
  SPARTAN, BASIC, LUXURIOUS
}

enum ROOM_TYPES {
  LIVING_ROOM,
  KITCHEN,
  BATHROOM,
  HALL,
  PLAY_ROOM,
}

enum AREA_STANDARTS {
  NARROW, BASIC, SPACIOUS
}

type TRoom = {
  type: ROOM_TYPES,
  interior: INTERIOR_WEALTH,
  area: AREA_STANDARTS;
  storey: number,
}

type TStorey = {
  space: number,
  rooms: Array<TRoom>,
}

type TBasement = Omit<TStorey, 'order'>;

type THouseStoreys = {
  [storey: number]: TStorey
}

type THouse = {
  area: AREA_STANDARTS;
  wallsMaterial: WALL_MATERIALS;
  roofType: ROOF_TYPES;
  roofMaterial: ROOF_MATERIALS;
  storeys: Array<TStorey>;
  basement: TBasement | null;
  rooms: Array<TRoom>;
  price: number;
}

const AREA_STANDARTS_MAP = {
  [AREA_STANDARTS.NARROW]: 35,
  [AREA_STANDARTS.BASIC]: 60,
  [AREA_STANDARTS.SPACIOUS]: 140,
}

const ROOM_AREA_MAP = {
  [AREA_STANDARTS.NARROW]: 10,
  [AREA_STANDARTS.BASIC]: 20,
  [AREA_STANDARTS.SPACIOUS]: 35,
}

// TODO: price map

interface IHouseBuilder {
  setArea(area: AREA_STANDARTS): HouseBuilder
  setWallsMaterial(material: WALL_MATERIALS): HouseBuilder;
  setRoofMaterial(material: ROOF_MATERIALS): HouseBuilder;
  setRoofType(type: ROOF_TYPES): HouseBuilder;
  addStorey(): HouseBuilder;
  addBasement(area: AREA_STANDARTS): HouseBuilder;
  addRoom(options: TRoom): HouseBuilder;
  preview(): THouse;
  build(): THouse;
  reset(): void;
}


class HouseBuilder implements IHouseBuilder {
  private area: AREA_STANDARTS;
  private wallsMaterial: WALL_MATERIALS;
  private roofType: ROOF_TYPES;
  private roofMaterial: ROOF_MATERIALS;
  private basement: TBasement | null;
  private price: number;

  private readonly budget: number;
  private readonly storeys: THouseStoreys;
  private readonly rooms: Array<TRoom>;

  constructor(budget?: number) {
    this.budget = budget;
    this.storeys = {};
    this.basement = null;
    this.rooms = [];
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
    if(!this.area) {
      throw new Error('Please, define the house area')
    }

    const storey: TStorey = {
      space: AREA_STANDARTS_MAP[this.area],
      rooms: [],
    };

    if (!Object.keys(this.storeys).length) {
      this.storeys[1] = storey
    } else {
      this.storeys[Math.max(...Object.keys(this.storeys).map(Number)) + 1] = storey
    }

    return this;
  }

  public addBasement(area: AREA_STANDARTS): HouseBuilder {
    if(this.basement) {
      throw new Error('This house already has a basement')
    }

    this.basement = {
      space: AREA_STANDARTS_MAP[area],
      rooms: [],
    };

    return this;
  }

  public addRoom({ storey, area, interior, type }: TRoom): HouseBuilder {
    const houseStorey: TStorey = this.storeys[storey];

    if (!houseStorey) {
      throw new Error('There\'s no such storey');
    }

    if ((houseStorey.space - ROOM_AREA_MAP[area]) < 0) {
      throw new Error('Insufficient space on this storey');
    }
  }
}