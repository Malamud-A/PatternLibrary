import HouseBuilder, {
  AREA_STANDARTS,
  IHouseBuilder,
  INTERIOR_WEALTH,
  ROOF_MATERIALS,
  ROOF_TYPES,
  ROOM_TYPES,
  THouse,
  WALL_MATERIALS
} from "./HouseBuilder";

interface IHouseDirector {
  buildCottage(): THouse,
  buildHouse(): THouse,
  buildManor(): THouse,
  buildHut(): THouse,
}

export default class HouseDirector {
  private readonly houseBuilder: IHouseBuilder;

  constructor() {
    this.houseBuilder = new HouseBuilder()
  }

  public buildCottage(): THouse {
    return this.houseBuilder
      .setArea(AREA_STANDARTS.BASIC)
      .setWallsMaterial(WALL_MATERIALS.WOOD)
      .setRoofMaterial(ROOF_MATERIALS.TILES)
      .setRoofType(ROOF_TYPES.GABLE)
      .addStorey()
      .addRoom({
        storey: 1,
        area: AREA_STANDARTS.BASIC,
        interior: INTERIOR_WEALTH.BASIC,
        type: ROOM_TYPES.BATHROOM,
      })
      .addRoom({
        storey: 1,
        area: AREA_STANDARTS.BASIC,
        interior: INTERIOR_WEALTH.BASIC,
        type: ROOM_TYPES.KITCHEN,
      })
      .addRoom({
        storey: 1,
        area: AREA_STANDARTS.BASIC,
        interior: INTERIOR_WEALTH.BASIC,
        type: ROOM_TYPES.PLAY_ROOM,
      })
      .addStorey()
      .addRoom({
        storey: 2,
        area: AREA_STANDARTS.SPACIOUS,
        interior: INTERIOR_WEALTH.LUXURIOUS,
        type: ROOM_TYPES.LIVING_ROOM,
      })
      .addRoom({
        storey: 2,
        area: AREA_STANDARTS.NARROW,
        interior: INTERIOR_WEALTH.LUXURIOUS,
        type: ROOM_TYPES.BATHROOM,
      })
      .addRoom({
        storey: 2,
        area: AREA_STANDARTS.BASIC,
        interior: INTERIOR_WEALTH.BASIC,
        type: ROOM_TYPES.LIVING_ROOM
      })
      .build()
  }

  public buildHouse(): THouse {
    return this.houseBuilder
      .setArea(AREA_STANDARTS.BASIC)
      .setWallsMaterial(WALL_MATERIALS.BRICK)
      .setRoofType(ROOF_TYPES.GABLE)
      .setRoofMaterial(ROOF_MATERIALS.TILES)
      .addBasement(AREA_STANDARTS.NARROW)
      .addRoom({
        storey: 0,
        area: AREA_STANDARTS.SPACIOUS,
        interior: INTERIOR_WEALTH.NONE,
        type: ROOM_TYPES.STORAGE
      })
      .addStorey()
      .addRoom({
        storey: 1,
        area: AREA_STANDARTS.BASIC,
        interior: INTERIOR_WEALTH.BASIC,
        type: ROOM_TYPES.LIVING_ROOM,
      })
      .addRoom({
        storey: 1,
        area: AREA_STANDARTS.NARROW,
        interior: INTERIOR_WEALTH.BASIC,
        type: ROOM_TYPES.BATHROOM
      })
      .addRoom({
        storey: 1,
        area: AREA_STANDARTS.NARROW,
        interior: INTERIOR_WEALTH.BASIC,
        type: ROOM_TYPES.KITCHEN
      })
      .addRoom({
        storey: 1,
        area: AREA_STANDARTS.BASIC,
        interior: INTERIOR_WEALTH.BASIC,
        type: ROOM_TYPES.HALL
      })
      .build();
  }

  public buildHut(): THouse {
    return this.houseBuilder
      .setArea(AREA_STANDARTS.NARROW)
      .setWallsMaterial(WALL_MATERIALS.BRICK)
      .setRoofType(ROOF_TYPES.HIPPED)
      .setRoofMaterial(ROOF_MATERIALS.SLATE)
      .addStorey()
      .addRoom({
        storey: 1,
        area: AREA_STANDARTS.NARROW,
        interior: INTERIOR_WEALTH.SPARTAN,
        type: ROOM_TYPES.LIVING_ROOM
      })
      .addRoom({
        storey: 1,
        area: AREA_STANDARTS.NARROW,
        interior: INTERIOR_WEALTH.SPARTAN,
        type: ROOM_TYPES.BATHROOM
      })
      .addRoom({
        storey: 1,
        area: AREA_STANDARTS.NARROW,
        interior: INTERIOR_WEALTH.SPARTAN,
        type: ROOM_TYPES.KITCHEN
      })
      .build()
  }

  public buildManor(): THouse {
    return this.houseBuilder
      .setArea(AREA_STANDARTS.SPACIOUS)
      .setWallsMaterial(WALL_MATERIALS.BRICK)
      .setRoofMaterial(ROOF_MATERIALS.CONCRETE)
      .setRoofType(ROOF_TYPES.FLAT)
      .addBasement(AREA_STANDARTS.BASIC)
      .addRoom({
        storey: 0,
        area: AREA_STANDARTS.SPACIOUS,
        interior: INTERIOR_WEALTH.LUXURIOUS,
        type: ROOM_TYPES.PLAY_ROOM
      })
      .addRoom({
        storey: 0,
        area: AREA_STANDARTS.SPACIOUS,
        interior: INTERIOR_WEALTH.NONE,
        type: ROOM_TYPES.STORAGE
      })
      .addStorey()
      .addRoom({
        storey: 1,
        area: AREA_STANDARTS.SPACIOUS,
        interior: INTERIOR_WEALTH.LUXURIOUS,
        type: ROOM_TYPES.HALL
      })
      .addRoom({
        storey: 1,
        area: AREA_STANDARTS.SPACIOUS,
        interior: INTERIOR_WEALTH.LUXURIOUS,
        type: ROOM_TYPES.KITCHEN
      })
      .addRoom({
        storey: 1,
        area: AREA_STANDARTS.SPACIOUS,
        interior: INTERIOR_WEALTH.LUXURIOUS,
        type: ROOM_TYPES.LIVING_ROOM
      })
      .addRoom({
        storey: 1,
        area: AREA_STANDARTS.SPACIOUS,
        interior: INTERIOR_WEALTH.LUXURIOUS,
        type: ROOM_TYPES.BATHROOM
      })
      .addStorey()
      .addRoom({
        storey: 2,
        area: AREA_STANDARTS.SPACIOUS,
        interior: INTERIOR_WEALTH.LUXURIOUS,
        type: ROOM_TYPES.LIVING_ROOM
      })
      .addRoom({
        storey: 2,
        area: AREA_STANDARTS.SPACIOUS,
        interior: INTERIOR_WEALTH.LUXURIOUS,
        type: ROOM_TYPES.LIVING_ROOM
      })
      .addRoom({
        storey: 2,
        area: AREA_STANDARTS.NARROW,
        interior: INTERIOR_WEALTH.LUXURIOUS,
        type: ROOM_TYPES.BATHROOM
      })
      .addRoom({
        storey: 2,
        area: AREA_STANDARTS.SPACIOUS,
        interior: INTERIOR_WEALTH.LUXURIOUS,
        type: ROOM_TYPES.PLAY_ROOM
      })
      .addRoom({
        storey: 2,
        area: AREA_STANDARTS.BASIC,
        interior: INTERIOR_WEALTH.LUXURIOUS,
        type: ROOM_TYPES.HALL
      })
      .build()

  }
}