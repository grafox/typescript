// enum Support
// Guard = 0, Forward= -1, Center = -2
// optional
enum PlayerPosition{
    Guard,
    Forward,
    Center
}
//
//type Player = [string,number];
type Player = [string,PlayerPosition];

/* let kobe: Player = ['Kobe',0];
let James: Player = ['Jams',0];
let Shap: Player = ['Shap',0];
 */
let Kobe: Player = ['Kobe',PlayerPosition.Center];
let James: Player = ['Jams',PlayerPosition.Guard];
let Shap: Player = ['Shap',PlayerPosition.Forward];

let Players: Player[] = [Kobe,James,Shap];

console.log(Players);