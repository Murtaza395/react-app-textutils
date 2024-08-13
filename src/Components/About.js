import React,{useState} from 'react'
export default function About() {
  const setMode=()=>{
      if(myStyle.backgroundColor==='white'){
        setmyStyle({
          color:'white',
          backgroundColor:'black',
          border:'2px solid white'
        })
      }
      else{
        setmyStyle({
          color:'balck',
          backgroundColor:'white',
          border:'2px solid black'
        })
      }
  }

      const [myStyle,setmyStyle]=useState({
          color:'balck',
          backgroundColor:'white',
          border:'2px solid black'
      });
      const[btnText]=useState("Enable dark mode")
  return (
    <>
    <div className="container" style={myStyle}>
    <div className="card my-3" style={myStyle}>
  <img className="card-img-top" src="./Images/cat1.jpeg"  alt="card1"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card my-3" style={myStyle}>
  <img className="card-img-top" src="./Images/cat1.jpeg" alt="card2"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card my-3" style={myStyle} >
  <img className="card-img-top" src="./Images/cat1.jpeg"alt="card3"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card my-3" style={myStyle}>
  <img className="card-img-top" src="./Images/cat1.jpeg" alt="card4"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<button onClick={setMode} className="btn btn-outline-primary my-3">{btnText}</button>
</div>
    </>
  )
}
