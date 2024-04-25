
// import React, { useState } from 'react'
// import Button from './Button'

// function App() {

//   const [count, setCount] = useState(0);

//   const incClickHandler = () => {
//     setCount(count + 1);
//   }

//   const decClickHandler = () => {
//     if (count == 1) return;
//     setCount(count - 1);
//   }
//   return (
//     <div className='d-flex justify-content-center gap-4'>
//       <Button handler={decClickHandler}>DECREASE ➖</Button>
//       <h4>{count}</h4>
//       <Button handler={incClickHandler}>INCREASE ➕</Button>
//     </div>
//   )
// }

// export default App;








import React, { useState } from 'react';
import Box from './Box';
function App() {

  const [player, setPlayer] = useState("No one");

  const getPlayerNamer = (player_name) => {
    setPlayer(player_name);
  }


  return (

    <div className="container">
      <h3 className='text-center my-4'>{player} is playing</h3>
      <div className="row">
        <Box handler={getPlayerNamer} name="Divya" gender="F" player={player} />
        <Box handler={getPlayerNamer} name="Ramesh" gender="M" player={player} />
        <Box handler={getPlayerNamer} name="Dinesh" gender="M" player={player} />
        <Box handler={getPlayerNamer} name="Rita" gender="F" player={player} />
      </div>
    </div>
  )
}

export default App;
