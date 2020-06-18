export function buildPersonData(
    { firstname, lastname}: { firstname: string; lastname: string; }, ...address: string[][]){
    return `${firstname} 
            ${lastname}
            ${address}`;
}
