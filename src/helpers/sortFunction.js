export default function sortFunctionASC(a,b) {
    return (a.import_datetime > b.import_datetime) ? 
    1 : 
    ((b.import_datetime > a.import_datetime) ? -1 : 0);
} 

export function sortFunctionDESC(a,b) {
    return (a.import_datetime > b.import_datetime) ? 
    1 : 
    ((b.import_datetime > a.import_datetime) ? -1 : 0);
} 