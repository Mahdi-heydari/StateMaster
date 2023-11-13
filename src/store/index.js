import appReducer from "./reducer";

const { createContext, useReducer, useCallback, useContext } = require("react");

const appContext = createContext();

const initialState = {
    allData: [],
    isLoading: false,
};

function WithAppContext({ children, value }) {
    const [state, dispatch] = useReducer(appReducer, initialState)

    const appDispatch = useCallback((action) => {
        if (typeof action === 'function') {
            return action(dispatch)
        }
        dispatch(action)
    }, [dispatch])

    return (
        <appContext.Provider value={{ ...value, state, dispatch: appDispatch }}>
            {children}
        </appContext.Provider>

    )
}

const useAppContext= ()=> useContext(appContext)

export {WithAppContext, useAppContext}