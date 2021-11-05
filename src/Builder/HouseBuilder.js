"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", { value: true });
exports.INTERIOR_WEALTH_NAMES = exports.AREA_STANDARTS_NAMES = exports.BASE_AREA_MAP = exports.ROOM_AREA_MAP = exports.AREA_STANDARTS = exports.ROOM_TYPES = exports.INTERIOR_WEALTH = exports.ROOF_TYPES = exports.ROOF_MATERIALS = exports.WALL_MATERIALS = void 0;
var PriceCalculator_1 = __importDefault(require("./PriceCalculator"));
var WALL_MATERIALS;
(function (WALL_MATERIALS) {
    WALL_MATERIALS[WALL_MATERIALS["BRICK"] = 0] = "BRICK";
    WALL_MATERIALS[WALL_MATERIALS["WOOD"] = 1] = "WOOD";
    WALL_MATERIALS[WALL_MATERIALS["CONCRETE"] = 2] = "CONCRETE";
})(WALL_MATERIALS || (WALL_MATERIALS = {}));
exports.WALL_MATERIALS = WALL_MATERIALS;
var WALL_MATERIALS_NAMES = (_a = {},
    _a[WALL_MATERIALS.BRICK] = "brick",
    _a[WALL_MATERIALS.WOOD] = "wood",
    _a[WALL_MATERIALS.CONCRETE] = "concrete",
    _a);
var ROOF_MATERIALS;
(function (ROOF_MATERIALS) {
    ROOF_MATERIALS[ROOF_MATERIALS["TILES"] = 0] = "TILES";
    ROOF_MATERIALS[ROOF_MATERIALS["SLATE"] = 1] = "SLATE";
    ROOF_MATERIALS[ROOF_MATERIALS["CONCRETE"] = 2] = "CONCRETE";
})(ROOF_MATERIALS || (ROOF_MATERIALS = {}));
exports.ROOF_MATERIALS = ROOF_MATERIALS;
var ROOF_MATERIALS_NAMES = (_b = {},
    _b[ROOF_MATERIALS.TILES] = "tiles",
    _b[ROOF_MATERIALS.SLATE] = "slate",
    _b[ROOF_MATERIALS.CONCRETE] = "concrete",
    _b);
var ROOF_TYPES;
(function (ROOF_TYPES) {
    ROOF_TYPES[ROOF_TYPES["GABLE"] = 0] = "GABLE";
    ROOF_TYPES[ROOF_TYPES["FLAT"] = 1] = "FLAT";
    ROOF_TYPES[ROOF_TYPES["HIPPED"] = 2] = "HIPPED";
})(ROOF_TYPES || (ROOF_TYPES = {}));
exports.ROOF_TYPES = ROOF_TYPES;
var ROOF_TYPES_NAMES = (_c = {},
    _c[ROOF_TYPES.GABLE] = "gable",
    _c[ROOF_TYPES.FLAT] = "flat",
    _c[ROOF_TYPES.HIPPED] = "hipped",
    _c);
var INTERIOR_WEALTH;
(function (INTERIOR_WEALTH) {
    INTERIOR_WEALTH[INTERIOR_WEALTH["NONE"] = 0] = "NONE";
    INTERIOR_WEALTH[INTERIOR_WEALTH["SPARTAN"] = 1] = "SPARTAN";
    INTERIOR_WEALTH[INTERIOR_WEALTH["BASIC"] = 2] = "BASIC";
    INTERIOR_WEALTH[INTERIOR_WEALTH["LUXURIOUS"] = 3] = "LUXURIOUS";
})(INTERIOR_WEALTH || (INTERIOR_WEALTH = {}));
exports.INTERIOR_WEALTH = INTERIOR_WEALTH;
var INTERIOR_WEALTH_NAMES = (_d = {},
    _d[INTERIOR_WEALTH.NONE] = "none",
    _d[INTERIOR_WEALTH.SPARTAN] = "spartan",
    _d[INTERIOR_WEALTH.BASIC] = "basic",
    _d[INTERIOR_WEALTH.LUXURIOUS] = "luxurious",
    _d);
exports.INTERIOR_WEALTH_NAMES = INTERIOR_WEALTH_NAMES;
var ROOM_TYPES;
(function (ROOM_TYPES) {
    ROOM_TYPES[ROOM_TYPES["LIVING_ROOM"] = 0] = "LIVING_ROOM";
    ROOM_TYPES[ROOM_TYPES["KITCHEN"] = 1] = "KITCHEN";
    ROOM_TYPES[ROOM_TYPES["BATHROOM"] = 2] = "BATHROOM";
    ROOM_TYPES[ROOM_TYPES["HALL"] = 3] = "HALL";
    ROOM_TYPES[ROOM_TYPES["PLAY_ROOM"] = 4] = "PLAY_ROOM";
    ROOM_TYPES[ROOM_TYPES["STORAGE"] = 5] = "STORAGE";
})(ROOM_TYPES || (ROOM_TYPES = {}));
exports.ROOM_TYPES = ROOM_TYPES;
var ROOM_TYPES_NAMES = (_e = {},
    _e[ROOM_TYPES.LIVING_ROOM] = "living room",
    _e[ROOM_TYPES.KITCHEN] = "kitchen",
    _e[ROOM_TYPES.BATHROOM] = "bathroom",
    _e[ROOM_TYPES.HALL] = "hall",
    _e[ROOM_TYPES.PLAY_ROOM] = "play room",
    _e[ROOM_TYPES.STORAGE] = "storage",
    _e);
var AREA_STANDARTS;
(function (AREA_STANDARTS) {
    AREA_STANDARTS[AREA_STANDARTS["NARROW"] = 0] = "NARROW";
    AREA_STANDARTS[AREA_STANDARTS["BASIC"] = 1] = "BASIC";
    AREA_STANDARTS[AREA_STANDARTS["SPACIOUS"] = 2] = "SPACIOUS";
})(AREA_STANDARTS || (AREA_STANDARTS = {}));
exports.AREA_STANDARTS = AREA_STANDARTS;
console.dir(AREA_STANDARTS);
var AREA_STANDARTS_NAMES = (_f = {},
    _f[AREA_STANDARTS.NARROW] = "narrow",
    _f[AREA_STANDARTS.BASIC] = "basic",
    _f[AREA_STANDARTS.SPACIOUS] = "spacious",
    _f);
exports.AREA_STANDARTS_NAMES = AREA_STANDARTS_NAMES;
var BASE_AREA_MAP = (_g = {},
    _g[AREA_STANDARTS.NARROW] = 30,
    _g[AREA_STANDARTS.BASIC] = 60,
    _g[AREA_STANDARTS.SPACIOUS] = 120,
    _g);
exports.BASE_AREA_MAP = BASE_AREA_MAP;
var ROOM_AREA_MAP = (_h = {},
    _h[AREA_STANDARTS.NARROW] = 10,
    _h[AREA_STANDARTS.BASIC] = 20,
    _h[AREA_STANDARTS.SPACIOUS] = 30,
    _h);
exports.ROOM_AREA_MAP = ROOM_AREA_MAP;
var HouseBuilder = /** @class */ (function () {
    function HouseBuilder() {
        this.storeys = {};
        this.rooms = [];
        this.price = 0;
        this.area = null;
        this.wallsMaterial = null;
        this.roofType = null;
        this.roofMaterial = null;
        this.priceCalculator = new PriceCalculator_1.default();
    }
    HouseBuilder.prototype.setArea = function (area) {
        this.area = area;
        return this;
    };
    HouseBuilder.prototype.setWallsMaterial = function (material) {
        this.wallsMaterial = material;
        return this;
    };
    HouseBuilder.prototype.setRoofType = function (type) {
        this.roofType = type;
        return this;
    };
    HouseBuilder.prototype.setRoofMaterial = function (material) {
        this.roofMaterial = material;
        return this;
    };
    HouseBuilder.prototype.addStorey = function () {
        if (!this.area) {
            throw new Error('[HouseBuilder] Please, define the house area');
        }
        var storey = {
            space: AREA_STANDARTS_NAMES[this.area],
            spaceLeft: BASE_AREA_MAP[this.area],
            rooms: []
        };
        if (!Object.keys(this.storeys).length) {
            this.storeys[1] = storey;
        }
        else {
            this.storeys[Math.max.apply(Math, Object.keys(this.storeys).map(Number)) + 1] = storey;
        }
        return this;
    };
    HouseBuilder.prototype.addBasement = function (area) {
        if (this.storeys[0]) {
            throw new Error('[HouseBuilder] This house already has a basement');
        }
        this.storeys[0] = {
            space: AREA_STANDARTS_NAMES[this.area],
            spaceLeft: BASE_AREA_MAP[this.area],
            rooms: []
        };
        return this;
    };
    HouseBuilder.prototype.addRoom = function (_a) {
        var storey = _a.storey, area = _a.area, interior = _a.interior, type = _a.type;
        var houseStorey = this.storeys[storey];
        if (!houseStorey) {
            throw new Error('[HouseBuilder] There\'s no such storey');
        }
        if ((houseStorey.spaceLeft - ROOM_AREA_MAP[area]) < 0) {
            throw new Error('[HouseBuilder] Insufficient space on this storey');
        }
        var roomPrice = this.priceCalculator.calculateRoomPrice({ area: area, interior: interior });
        var room = {
            storey: storey,
            area: AREA_STANDARTS_NAMES[area],
            interior: INTERIOR_WEALTH_NAMES[interior],
            type: ROOM_TYPES_NAMES[type]
        };
        this.price += roomPrice;
        houseStorey.rooms.push(room);
        this.rooms.push(room);
        return this;
    };
    HouseBuilder.prototype.reset = function () {
        this.storeys = {};
        this.rooms = [];
        this.price = 0;
        this.area = null;
        this.wallsMaterial = null;
        this.roofType = null;
        this.roofMaterial = null;
    };
    HouseBuilder.prototype.build = function () {
        if (!this.isHouseBuilt()) {
            throw new Error('[HouseBuilder] The house is not finished');
        }
        var house = {
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
    };
    HouseBuilder.prototype.isHouseBuilt = function () {
        return (this.area
            && this.wallsMaterial
            && this.roofType
            && this.roofMaterial
            && this.storeys
            && Object.keys(this.storeys).length
            && this.rooms
            && this.rooms.length);
    };
    return HouseBuilder;
}());
exports.default = HouseBuilder;
//# sourceMappingURL=HouseBuilder.js.map