import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Column from "./Column";

export default function IdeasInput(){
    const [ideaArr,setIdeaArr] = useState([{}]);
    const [ideaElement,setIdeaElement] = useState("");
    let handleOnSubmit = () =>{
        setIdeaArr((prevIdeaArr)=>[
            ...prevIdeaArr,{idea:ideaElement,id:uuidv4(),stage:1}
        ])
        setIdeaElement(""); // Reset the input field
    }
    let updateIdea = (event) =>{
        setIdeaElement(()=>{
            return event.target.value;
        })
    }
  return (
    <>
    <div className="flex justify-center m-6 gap-2">
    <input placeholder="Enter an idea" value={ideaElement} onChange={updateIdea} className="p-2"/>
    <button onClick={handleOnSubmit} className="bg-black text-white pl-3 pr-3 pt-2 pb-2 rounded-xl font-semibold">Add</button>
    </div>
    <Column arr = {ideaArr} update={setIdeaArr}/> 
    </>
  );
};
