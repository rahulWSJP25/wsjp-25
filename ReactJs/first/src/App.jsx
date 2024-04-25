import React from "react";

function App(){
  const imgCss = {
    boxShadow : "0px 0px 2px grey",
    margin: "40px"
  }

  return(
    <React.Fragment>
      <label htmlFor=""></label>
      <div className="demo">
        Hello {5+5}
      </div>
      <img style={imgCss} src="https://picsum.photos/200/300" alt="" />
      <h1 style={imgCss}>Hii</h1>
    </React.Fragment>
  )
}

export default App;
