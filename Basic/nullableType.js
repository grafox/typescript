// Nullable type
var PlayerPosition2;
(function (PlayerPosition2) {
    PlayerPosition2[PlayerPosition2["Guard"] = 0] = "Guard";
    PlayerPosition2[PlayerPosition2["Forward"] = 1] = "Forward";
    PlayerPosition2[PlayerPosition2["Center"] = 2] = "Center";
})(PlayerPosition2 || (PlayerPosition2 = {}));
var Kobe2 = {
    name: 'Kobe2',
    position: PlayerPosition2.Guard
};
// "strictNullChecks": true in tsconfig.json
Kobe2 = null;
//# sourceMappingURL=nullableType.js.map