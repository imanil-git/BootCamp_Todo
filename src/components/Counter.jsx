import {React,useState} from 'react'

const Counter = () => {

    const [count,setCount] = useState(0)
    const  [games,setGames] = useState(["Football","Basketball","Volleyball"])
  
  // let count = 0
  
  const increaseCount =()=>{
    // count = count + 1 
    setCount(count+1)
     
    console.log(count)
  
  }
  const decreaseCount =()=>{
    // count = count + 1 
    setCount(count-1)
     
    console.log(count)
  
  }
  return (
    <div>
      <>
    {
    count>10 ? (
      <h2 className='bg-red-400 p-5 rounded-xl'>
      Max Count Reached
      </h2>
      ):
      (<h2 className='bg-blue-300 p-5 rounded-xl '>
        You can increase count
      </h2>
        )
        }
    <h1 className='text-3xl font-bold text-indigo-500'>Counter {count}</h1>
    <button className=' disabled:bg-gray-500 disabled:hover: cursor-pointer bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600 hover:ring-2 hover:ring-gray-400 rounded-xl'
     disabled={count>10} onClick={increaseCount} >
      Increase
      </button>
      {" "}      
      <button className=' disabled:bg-gray-500 disabled:hover: cursor-pointer bg-orange-500 px-4 py-2 text-white  hover:ring-2 hover:ring-gray-400 rounded-xl'
     disabled={count<=0} onClick={decreaseCount} >
      Decrease
      </button>
    <div>
      <h1 className='text-4xl '>Games</h1>
      {games.map(
        (game,index)=>{
        return (<p className='text-blue-500 text-xl' key={index}>{game}</p>)}
        )
        }
    </div>
    </>
    </div>
  )
}

export default Counter
