import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("")

  return (
    <>
      <div className='w-full h-screen duration-200'
       style = {{backgroundColor : color}}
      >
       <div className='fixed flex flex-wrap
       justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center 
        gap-3 shadow-lg bg-white px-3 py-2 rounded-xl shadow'>
          <button onClick={() => setColor("red")}
          className='outline-none px-4 py-1 rounded-full text-white'
          style={{backgroundColor: "red"}}>Red</button>

          <button  onClick={() => setColor("Green")}
          className='outline-none px-4 py-1 rounded-full text-white'
          style={{backgroundColor: "green"}}>Green</button>

          <button onClick={() => setColor("blue")}
          className='outline-none px-4 py-1 rounded-full text-white'
          style={{backgroundColor: "blue"}}>Blue</button>

          <button onClick={() => setColor("gray")}
          className='outline-none px-4 py-1 rounded-full text-white'
          style={{backgroundColor: "gray"}}>gray</button>

          <button onClick={() => setColor("black")}
          className='outline-none px-4 py-1 rounded-full text-white'
          style={{backgroundColor: "black"}}>black</button>

          <button  onClick={ ()=> setColor("olive")}
          className='outline-none px-4 py-1 rounded-full text-white '
          style ={{backgroundColor: "olive"}}>Olive</button>

          <button onClick={()=> setColor("hotpink")}
          className='outline-none px-4 py-1 rounded-full text-white'
          style={{backgroundColor: "Hotpink"}}>Hotpink</button>

          <button onClick={()=> setColor('yellow')}
          className='outline-none px-4 py-1 rounded-full '
          style= {{backgroundColor: "yellow"}}>yellow</button>

          <button onClick={()=> setColor('maroon')}
          className='outline-none px-4 py-1 rounded-full text-white'
          style= {{backgroundColor : "maroon"}}>Maroon</button>

          <button onClick={()=> setColor('lavender')} 
          className='outline-none px-4 py-1 rounded-full '
          style={{backgroundColor: 'lavender'}}>Lavender</button>
        </div>
       </div>
      </div>
    </>
  )
}

export default App
