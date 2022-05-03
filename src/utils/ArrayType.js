
/** Checks if the type of object is an array */
function checkIfObjectIsArray(object) {
    
    
    if(typeof object === 'object'){
        if(object[0] != null || object[0] !== undefined) {
            return true
        }
    }

    return false
}

export {checkIfObjectIsArray}