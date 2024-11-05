import { createContext, useEffect, useReducer } from "react";


export const GlobalContext = createContext()

// function dataFromLocal() {
//     return (
//         JSON.parse(localStorage.getItem("my-data")) ?? {
//             colors: ["#4C4B16", "#4CC9FE", "#C62E2E"],
//             bgColorChange: null
//         }
//     )
// }

const changeState = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case "BG_COLOR_CHANGE":
            return { ...state, bgColorChange: payload }
        case "ADD_IMAGES":
            return { ...state, images: [...state.images , ...payload] }
        default:
            return state
    }
}


export function GlobalContextProvider({ children }) {

    const [state, dispatch] = useReducer(changeState, {
        colors: ["#4C4B16", "#4CC9FE", "#C62E2E"],
        bgColorChange: null,
        images: []
    })

    useEffect(() => {
        localStorage.setItem("my-data", JSON.stringify(state))
    }, [state])

    return (
        <GlobalContext.Provider value={{ ...state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}
