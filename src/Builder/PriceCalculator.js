"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var HouseBuilder_1 = require("./HouseBuilder");
console.dir(HouseBuilder_1.AREA_STANDARTS);
var ROOM_AREA_PRICE_MULTIPLIERS = (_a = {},
    _a[HouseBuilder_1.ROOM_AREA_MAP[HouseBuilder_1.AREA_STANDARTS.NARROW]] = 0.5,
    _a[HouseBuilder_1.ROOM_AREA_MAP[HouseBuilder_1.AREA_STANDARTS.BASIC]] = 1,
    _a[HouseBuilder_1.ROOM_AREA_MAP[HouseBuilder_1.AREA_STANDARTS.SPACIOUS]] = 2,
    _a);
var ROOM_WEALTH_PRICE_MULTIPLIERS = (_b = {},
    _b[HouseBuilder_1.INTERIOR_WEALTH.NONE] = 0,
    _b[HouseBuilder_1.INTERIOR_WEALTH.SPARTAN] = 0.5,
    _b[HouseBuilder_1.INTERIOR_WEALTH.BASIC] = 1,
    _b[HouseBuilder_1.INTERIOR_WEALTH.LUXURIOUS] = 2,
    _b);
var ROOM_BASE_PRICE = 1;
var PriceCalculator = /** @class */ (function () {
    function PriceCalculator() {
    }
    PriceCalculator.prototype.calculateRoomPrice = function (_a) {
        var area = _a.area, interior = _a.interior;
        if (!area || !interior) {
            throw new Error('[PriceCalculator] Room is not ready');
        }
        return ROOM_BASE_PRICE
            * ROOM_AREA_PRICE_MULTIPLIERS[area]
            * ROOM_WEALTH_PRICE_MULTIPLIERS[interior];
    };
    return PriceCalculator;
}());
exports.default = PriceCalculator;
//# sourceMappingURL=PriceCalculator.js.map