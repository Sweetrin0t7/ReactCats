import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function Contador(){
    const { contador, setContador } = useContext(DataContext);

    return (
        <div className="flex flex-col items-center py-16">
          <h1 className="font-bold flex items-center text-2xl">Contador</h1>
          <p>{contador}</p>
          <div className="flex flex-row items-center gap-4">

          <button className="mt-8 bg-purple-900 text-white py-1 px-8 rounded-lg hover:bg-purple-600 font-semibold" onClick={() => {
                if(contador < 1){
                    return; 
                }
            setContador(contador - 1)}}>Decrementar</button>
            <button className="mt-8 bg-purple-900 text-white py-1 px-8 rounded-lg hover:bg-purple-600 font-semibold" onClick={() => setContador(contador + 1)}>Incrementar</button>
            
          </div>
          
        </div>
      );
}