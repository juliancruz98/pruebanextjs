import { title } from "process";

export interface CardProos{
    title:string;
    description:string;
    likes:number;
}
const Card =({title,description,likes}:CardProos) =>{
    return(
        <div className="bg-blue-300 p-4 shadow-m0 animate-pulse mt-5">
        <p className=" font-bold">{title}</p>
        <p className="text-gray-800">{description}</p>
        <p className=" font-semibold">{likes}</p>
        </div>
    );
}

export default Card;