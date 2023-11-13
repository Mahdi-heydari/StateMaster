import getAllData from "../services/getAllData"

const loadData = () => dispatch => {
    dispatch({ typs: 'START_LOADING' })
    
    getAllData().then(data => {
        dispatch({ type: 'SET_DATA', payload: data })
    }).catch(_ => {
        dispatch({ type: 'END_LOADING' })
        // AND OTHER STUFF FOR HANDLE ERRORS AND SHOWING ERROR VIEW
    })
}

const selectItem = (item) => {
    return {
        type: 'SELECT_ITEM',
        payload: {
            item
        }
    }
}

const deSelecetItem = (item) => {
    return {
        type: 'DESELECT_ITEM',
        payload: {
            item
        }
    }
}

export {
    loadData,
    selectItem,
    deSelecetItem
}