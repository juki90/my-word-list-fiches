const showAll = () => {
    return {
        type: 'SHOW_ALL'
    }
}

const showTag = (tag) => {
    return {
        type: 'SHOW_TAG',
        payload: {
            tag
        }
    }
}

const openAddNewModal = () => {
    return {
        type: 'OPEN_ADD_NEW_MODAL'
    }
}

const addEntry = (id, entryTags, entryContents) => {
    return {
        type: 'ADD_ENTRY',
        payload: {
            entry: {
                id,
                contents: [...entryContents],
                tags: [...entryTags],
                timeAdded: new Date().toLocaleString()
            }
        }
    }
}

const removeSelected = () => {
    return {
        type: 'REMOVE_SELECTED',
    }
}

const removeAll = () => {
    return {
        type: 'REMOVE_ALL'
    }
}


const selectOne = (selected, id, tag) => {
    return {
        type: 'SELECT_ONE',
        payload: {
            selected,
            id,
            tag
        }
    }
}

const expandOne = (expanded, id) => {
    return {
        type: 'EXPAND_ONE',
        payload: {
            expanded,
            id
        }
    }
}

const selectAll = () => {
    return {
        type: 'SELECT_ALL'
    }
}

const expandAll = () => {
    return {
        type: 'EXPAND_ALL'
    }
}

const collapseAll = () => {
    return {
        type: 'COLLAPSE_ALL'
    }
}

const deselectAll = () => {
    return {
        type: 'DESELECT_ALL'
    }
}

export {
     showAll,
     showTag,
     addEntry,
     removeAll,
     removeSelected,
     selectOne,
     expandOne,
     selectAll,
     deselectAll,
     openAddNewModal,
     expandAll,
     collapseAll
}