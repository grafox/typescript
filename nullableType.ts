// Nullable type

enum PlayerPosition2{
    Guard,
    Forward,
    Center
}
interface Player2{
    name: string,
    position: PlayerPosition2
}
let Kobe2:Player2|null|undefined = {
    name: 'Kobe2',
    position:PlayerPosition2.Guard
}
// "strictNullChecks": true in tsconfig.json
Kobe2= null;