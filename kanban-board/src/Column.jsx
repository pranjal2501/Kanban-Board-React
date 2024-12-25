import Box from "./Box.jsx";
export default function Column({ arr,update }) {
  return (
    <div className="flex flex-wrap sm:flex-wrap justify-around">
      <div className="w-48  h-1/4 bg-[#FFCDB2] rounded-2xl sm:min-w-64 lg:min-w-72">
        <h2 className="text-xl text-center font-semibold">Idea</h2>
        <Box ideaArr={arr} updateFunc = {update} stage = {1} />
      </div>
      <div className="w-48 h-1/4 bg-[#FFB4A2] rounded-2xl sm:min-w-52 lg:min-w-72">
        <h2 className="text-xl text-center font-semibold ">To Do</h2>
        <Box ideaArr={arr} updateFunc={update} stage = {2}/>
      </div>
      <div className="w-48 h-1/4 bg-[#E5989B] rounded-2xl sm:min-w-52 lg:min-w-72">
        <h2 className="text-xl text-center font-semibold ">In Progress</h2>
        <Box ideaArr={arr} updateFunc={update} stage = {3}/>
      </div>
      <div className="w-48 h-1/4 bg-[#B5838B] rounded-2xl sm:min-w-52 lg:min-w-72">
        <h2 className="text-xl text-center font-semibold ">Done</h2>
        <Box ideaArr={arr} updateFunc={update} stage = {4}/>
      </div>
    </div>
  );
}
