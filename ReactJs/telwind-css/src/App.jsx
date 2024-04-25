import React from 'react';

function App() {
  return (
    <div className='max-w-[1200px] grid md:grid-cols-4 grid-cols-2 p-4 gap-4 mx-auto border border-red-600'>

      <div className='h-[300px] shadow-lg md:col-span-2'>
        <img src="https://picsum.photos/500/300?random=1" className='w-full h-full'></img>
      </div>
      <div className='h-[300px] shadow-lg'>
        <img src="https://picsum.photos/500/300?random=2" className='w-full h-full'></img>
      </div>
      <div className='h-[300px] shadow-lg'>
        <img src="https://picsum.photos/500/300?random=3" className='w-full h-full'></img>
      </div>
      <div className='h-[300px] shadow-lg md:col-span-4'>
        <img src="https://picsum.photos/500/300?random=4" className='w-full h-full'></img>
      </div>



      {/* <input type="checkbox" className='accent-pink-500' />
      <div className='hover:scale-[1.2] hover:rotate-[-20deg] hover:translate-y-[200px]  group mx-auto mt-[50px] relative hover:text-[30px] bg-gradient-to-r from-orange-500 to-fuchsia-500 hover:font-bold hover:rounded-[10px] duration-300 flex justify-center items-center text-[40px] shadow-2xl w-[500px] h-[200px] text-blue-600 tracking-[10px]'>
        Hello World
        <div className=' animate-ping group-hover:bg-red-600 shadow shadow-[red] duration-[250ms] w-[60px] h-[60px] absolute top-[-30px] left-[-30px] rounded-full bg-slate-600'></div>
      </div> */}
    </div>
  )
}

export default App;