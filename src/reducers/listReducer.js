const listActions = {
    addToList:'addToList',
    removeFromList:'removeFromList',
    clearList:'clearList',
}

function listReducer(list=[], {type, book}){
    switch(type){
        case listActions.addToList:
            return [...list, book];         
        case listActions.removeFromList:
            let newList = list.slice()
            for (let listBook of newList){
                if(listBook.id === book.id){
                    newList.splice(newList.indexOf(listBook), 1)
                    return newList
                }
            }
            return newList
        case listActions.clearList:
            return []
        default:
            throw new Error("Sorry, we experienced an error. Try again.")
    }       
}

export{
    listReducer,
    listActions
}