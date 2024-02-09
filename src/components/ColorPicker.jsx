import React,{useState} from 'react'

export default function ColorPicker({onColorChange}) {
    const[color,setColor]=useState("#000000")
    const handelColorChange=(e)=>{
        setColor(e.target.value)
        onColorChange(e.target.value);
        // return e.target.value;
    }
  return (
    
    <div className=" px-6 p- bg-white relative justify-center items-center  mx-auto h-1/4 sm:h-1/4 md:w-1/4 md:h-1/4 lg:w-full lg:  lg:h-56 rounded-3xl filter drop-shadow-2xl"> 
        <div className="mt-3  sm:mt-5">
            <h1 className="text-xl text-gray-600 tracking-wider text-sm sm:text-md font-black py-2">
            Color Picker
            </h1>
        </div>
        <div className="mt-1 sm:mt-8">
            <form action="" className="flex-col flex">
            <label htmlFor="name" className="text-gray-700 text-xs sm:text-md">
            Select a Color
            </label>
            <input type="color" className=" my-6 h-4 sm:h-9 border-b-2 border-gray-300 rounded-xl " value={color} onChange={handelColorChange}/>
            </form>
        </div>
        <div className='flex items-center justify-center w-28 h-28 rounded-xl relative left-96 bottom-20' style={{backgroundColor:color}}>
            selected color
        </div>
    </div>
    
  )
}
