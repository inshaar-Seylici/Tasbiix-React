import { useState } from "react"


function Tabiix (){
    const [Counter,setCounter] = useState(0)

    // function Update Gareynayo increament (Hal kudsraayo marka lasoo riixo)

    let HaldalIncreament = ()=>{
        setCounter(Counter +1 )
    }
    let HaldalReset = ()=>{
        setCounter(Counter -1 )
    }
    let HaldalDecreament = ()=>{
        setCounter( 0 )
    }
    return <div className="text-center mt-[100px]"> 
       
       <h1 className="text-4xl my-[20px]">{Counter}</h1>
       <button onClick={HaldalIncreament} className="bg-green-500 rounded py-5 px-5  ">Increment</button>
       <button onClick={HaldalReset} className="bg-green-500 rounded py-5 px-5  mx-[10px]" >Decrement</button>
       <button onClick={HaldalDecreament} className="bg-green-500 rounded py-5 px-5  mx-[10px]" >Reset</button>
    </div>
}
export default Tabiix