import { useContext } from "react";
import { GlobalContext } from "../Context/globalConetxt";


export function useGlobalContext(){
    const context = useContext(GlobalContext)

    if(!context){
        throw new Error("useGlobalContext GlobalContext ichi bolishi kerak ")
    }

    return context

}