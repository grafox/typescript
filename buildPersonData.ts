export function buildPersonData({ firstname, lastname}, ...address){
    return `${firstname} 
            ${lastname}
            ${address}`;
}