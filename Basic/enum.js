// enum Support
// Guard = 0, Forward= -1, Center = -2
// optional
var PlayerPosition;
(function (PlayerPosition) {
    PlayerPosition[PlayerPosition["Guard"] = 0] = "Guard";
    PlayerPosition[PlayerPosition["Forward"] = 1] = "Forward";
    PlayerPosition[PlayerPosition["Center"] = 2] = "Center";
})(PlayerPosition || (PlayerPosition = {}));
/* let kobe: Player = ['Kobe',0];
let James: Player = ['Jams',0];
let Shap: Player = ['Shap',0];
 */
var Kobe = ['Kobe', PlayerPosition.Center];
var James = ['Jams', PlayerPosition.Guard];
var Shap = ['Shap', PlayerPosition.Forward];
var Players = [Kobe, James, Shap];
console.log(Players);
//# sourceMappingURL=enum.js.map