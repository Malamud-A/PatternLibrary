"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var HouseBuilder_1 = __importStar(require("./HouseBuilder"));
var HouseDirector = /** @class */ (function () {
    function HouseDirector() {
        this.houseBuilder = new HouseBuilder_1.default();
    }
    HouseDirector.prototype.buildCottage = function () {
        return this.houseBuilder
            .setArea(HouseBuilder_1.AREA_STANDARTS.BASIC)
            .setWallsMaterial(HouseBuilder_1.WALL_MATERIALS.WOOD)
            .setRoofMaterial(HouseBuilder_1.ROOF_MATERIALS.TILES)
            .setRoofType(HouseBuilder_1.ROOF_TYPES.GABLE)
            .addStorey()
            .addRoom({
            storey: 1,
            area: HouseBuilder_1.AREA_STANDARTS.BASIC,
            interior: HouseBuilder_1.INTERIOR_WEALTH.BASIC,
            type: HouseBuilder_1.ROOM_TYPES.BATHROOM,
        })
            .addRoom({
            storey: 1,
            area: HouseBuilder_1.AREA_STANDARTS.BASIC,
            interior: HouseBuilder_1.INTERIOR_WEALTH.BASIC,
            type: HouseBuilder_1.ROOM_TYPES.KITCHEN,
        })
            .addRoom({
            storey: 1,
            area: HouseBuilder_1.AREA_STANDARTS.BASIC,
            interior: HouseBuilder_1.INTERIOR_WEALTH.BASIC,
            type: HouseBuilder_1.ROOM_TYPES.PLAY_ROOM,
        })
            .addStorey()
            .addRoom({
            storey: 2,
            area: HouseBuilder_1.AREA_STANDARTS.SPACIOUS,
            interior: HouseBuilder_1.INTERIOR_WEALTH.LUXURIOUS,
            type: HouseBuilder_1.ROOM_TYPES.LIVING_ROOM,
        })
            .addRoom({
            storey: 2,
            area: HouseBuilder_1.AREA_STANDARTS.NARROW,
            interior: HouseBuilder_1.INTERIOR_WEALTH.LUXURIOUS,
            type: HouseBuilder_1.ROOM_TYPES.BATHROOM,
        })
            .addRoom({
            storey: 2,
            area: HouseBuilder_1.AREA_STANDARTS.BASIC,
            interior: HouseBuilder_1.INTERIOR_WEALTH.BASIC,
            type: HouseBuilder_1.ROOM_TYPES.LIVING_ROOM
        })
            .build();
    };
    HouseDirector.prototype.buildHouse = function () {
        return this.houseBuilder
            .setArea(HouseBuilder_1.AREA_STANDARTS.BASIC)
            .setWallsMaterial(HouseBuilder_1.WALL_MATERIALS.BRICK)
            .setRoofType(HouseBuilder_1.ROOF_TYPES.GABLE)
            .setRoofMaterial(HouseBuilder_1.ROOF_MATERIALS.TILES)
            .addBasement(HouseBuilder_1.AREA_STANDARTS.NARROW)
            .addRoom({
            storey: 0,
            area: HouseBuilder_1.AREA_STANDARTS.SPACIOUS,
            interior: HouseBuilder_1.INTERIOR_WEALTH.NONE,
            type: HouseBuilder_1.ROOM_TYPES.STORAGE
        })
            .addStorey()
            .addRoom({
            storey: 1,
            area: HouseBuilder_1.AREA_STANDARTS.BASIC,
            interior: HouseBuilder_1.INTERIOR_WEALTH.BASIC,
            type: HouseBuilder_1.ROOM_TYPES.LIVING_ROOM,
        })
            .addRoom({
            storey: 1,
            area: HouseBuilder_1.AREA_STANDARTS.NARROW,
            interior: HouseBuilder_1.INTERIOR_WEALTH.BASIC,
            type: HouseBuilder_1.ROOM_TYPES.BATHROOM
        })
            .addRoom({
            storey: 1,
            area: HouseBuilder_1.AREA_STANDARTS.NARROW,
            interior: HouseBuilder_1.INTERIOR_WEALTH.BASIC,
            type: HouseBuilder_1.ROOM_TYPES.KITCHEN
        })
            .addRoom({
            storey: 1,
            area: HouseBuilder_1.AREA_STANDARTS.BASIC,
            interior: HouseBuilder_1.INTERIOR_WEALTH.BASIC,
            type: HouseBuilder_1.ROOM_TYPES.HALL
        })
            .build();
    };
    HouseDirector.prototype.buildHut = function () {
        return this.houseBuilder
            .setArea(HouseBuilder_1.AREA_STANDARTS.NARROW)
            .setWallsMaterial(HouseBuilder_1.WALL_MATERIALS.BRICK)
            .setRoofType(HouseBuilder_1.ROOF_TYPES.HIPPED)
            .setRoofMaterial(HouseBuilder_1.ROOF_MATERIALS.SLATE)
            .addStorey()
            .addRoom({
            storey: 1,
            area: HouseBuilder_1.AREA_STANDARTS.NARROW,
            interior: HouseBuilder_1.INTERIOR_WEALTH.SPARTAN,
            type: HouseBuilder_1.ROOM_TYPES.LIVING_ROOM
        })
            .addRoom({
            storey: 1,
            area: HouseBuilder_1.AREA_STANDARTS.NARROW,
            interior: HouseBuilder_1.INTERIOR_WEALTH.SPARTAN,
            type: HouseBuilder_1.ROOM_TYPES.BATHROOM
        })
            .addRoom({
            storey: 1,
            area: HouseBuilder_1.AREA_STANDARTS.NARROW,
            interior: HouseBuilder_1.INTERIOR_WEALTH.SPARTAN,
            type: HouseBuilder_1.ROOM_TYPES.KITCHEN
        })
            .build();
    };
    HouseDirector.prototype.buildManor = function () {
        return this.houseBuilder
            .setArea(HouseBuilder_1.AREA_STANDARTS.SPACIOUS)
            .setWallsMaterial(HouseBuilder_1.WALL_MATERIALS.BRICK)
            .setRoofMaterial(HouseBuilder_1.ROOF_MATERIALS.CONCRETE)
            .setRoofType(HouseBuilder_1.ROOF_TYPES.FLAT)
            .addBasement(HouseBuilder_1.AREA_STANDARTS.BASIC)
            .addRoom({
            storey: 0,
            area: HouseBuilder_1.AREA_STANDARTS.SPACIOUS,
            interior: HouseBuilder_1.INTERIOR_WEALTH.LUXURIOUS,
            type: HouseBuilder_1.ROOM_TYPES.PLAY_ROOM
        })
            .addRoom({
            storey: 0,
            area: HouseBuilder_1.AREA_STANDARTS.SPACIOUS,
            interior: HouseBuilder_1.INTERIOR_WEALTH.NONE,
            type: HouseBuilder_1.ROOM_TYPES.STORAGE
        })
            .addStorey()
            .addRoom({
            storey: 1,
            area: HouseBuilder_1.AREA_STANDARTS.SPACIOUS,
            interior: HouseBuilder_1.INTERIOR_WEALTH.LUXURIOUS,
            type: HouseBuilder_1.ROOM_TYPES.HALL
        })
            .addRoom({
            storey: 1,
            area: HouseBuilder_1.AREA_STANDARTS.SPACIOUS,
            interior: HouseBuilder_1.INTERIOR_WEALTH.LUXURIOUS,
            type: HouseBuilder_1.ROOM_TYPES.KITCHEN
        })
            .addRoom({
            storey: 1,
            area: HouseBuilder_1.AREA_STANDARTS.SPACIOUS,
            interior: HouseBuilder_1.INTERIOR_WEALTH.LUXURIOUS,
            type: HouseBuilder_1.ROOM_TYPES.LIVING_ROOM
        })
            .addRoom({
            storey: 1,
            area: HouseBuilder_1.AREA_STANDARTS.SPACIOUS,
            interior: HouseBuilder_1.INTERIOR_WEALTH.LUXURIOUS,
            type: HouseBuilder_1.ROOM_TYPES.BATHROOM
        })
            .addStorey()
            .addRoom({
            storey: 2,
            area: HouseBuilder_1.AREA_STANDARTS.SPACIOUS,
            interior: HouseBuilder_1.INTERIOR_WEALTH.LUXURIOUS,
            type: HouseBuilder_1.ROOM_TYPES.LIVING_ROOM
        })
            .addRoom({
            storey: 2,
            area: HouseBuilder_1.AREA_STANDARTS.SPACIOUS,
            interior: HouseBuilder_1.INTERIOR_WEALTH.LUXURIOUS,
            type: HouseBuilder_1.ROOM_TYPES.LIVING_ROOM
        })
            .addRoom({
            storey: 2,
            area: HouseBuilder_1.AREA_STANDARTS.NARROW,
            interior: HouseBuilder_1.INTERIOR_WEALTH.LUXURIOUS,
            type: HouseBuilder_1.ROOM_TYPES.BATHROOM
        })
            .addRoom({
            storey: 2,
            area: HouseBuilder_1.AREA_STANDARTS.SPACIOUS,
            interior: HouseBuilder_1.INTERIOR_WEALTH.LUXURIOUS,
            type: HouseBuilder_1.ROOM_TYPES.PLAY_ROOM
        })
            .addRoom({
            storey: 2,
            area: HouseBuilder_1.AREA_STANDARTS.BASIC,
            interior: HouseBuilder_1.INTERIOR_WEALTH.LUXURIOUS,
            type: HouseBuilder_1.ROOM_TYPES.HALL
        })
            .build();
    };
    return HouseDirector;
}());
exports.default = HouseDirector;
//# sourceMappingURL=HouseDirector.js.map