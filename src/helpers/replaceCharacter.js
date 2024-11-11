export function replaceCharacter(originString, replaceMap) {
    let toReturn= originString;

    replaceMap.map(([oldString, newString]) => {
        toReturn = toReturn.replace(new RegExp(oldString, 'g'), newString)
    })

    return toReturn
}