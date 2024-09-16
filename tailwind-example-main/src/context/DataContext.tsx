import { createContext, useEffect, useState } from "react";
import { iChildren, iData } from "../utils/interfaces";

interface iDataContext {
    data: iData | null;
    contador: number;
    setContador: React.Dispatch<React.SetStateAction<number>>;
}

export const DataContext = createContext({} as iDataContext);

export function DataProvider({ children }: iChildren){
    const [data, setData] = useState<iData | null>(null);
    const [contador, setContador] = useState<number>(0);

    useEffect(()=>{
        getData();
    }, []);

    async function getData(){
        try{
            const response = await fetch("../../data.json");
            const data = await response.json();
            setData(data);
            if(!response.ok) throw new Error("Não foi possível encontrar o arquivo");
        }catch(error){
            console.log(error);
        }
    }
 
    return(
        <DataContext.Provider value={{data, contador, setContador}}>
            {children}
        </DataContext.Provider>
    )
}