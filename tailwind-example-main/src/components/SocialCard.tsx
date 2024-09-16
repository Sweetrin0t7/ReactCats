import { useContext } from "react"
import { DataContext } from "../context/DataContext"

interface iProps{
    social: 'Instagram' | 'Facebook' | 'TikTok';
}

export default function SocialCard(props : iProps){
    const {data} = useContext(DataContext);
    return(
        <div
        className="mt-4 flex flex-col items-center border border-purple-300 p-8 rounded-lg"
        >
            <figure>
                <img src={data?.components.socialCard[props.social].logo} alt={props.social} 
                className="w-32"
                />
            </figure>
            <p
            className="mt-4 font-semibold"
            >{data?.components.socialCard[props.social].username}</p>
            <button
            className="mt-8 bg-purple-900 text-white py-1 px-8 rounded-lg hover:bg-purple-800 font-semibold"
            >Follow Us</button>
        </div>
    )
}