import React, { useState } from "react";
import './App.css';

function App() {
  const [Hori, setHori] = useState(10)
  const [Veri, setVeri] = useState(10)
  const [Blur, setBlur] = useState(10)
  const [color, setColor] = useState("lightgray")
  const [checkOn, setCheckOn] = useState(false)
  return (
    <div className="App">
      <div className="controls">
        <level>Horizontal length</level>
        <input type="range" min="-200" max="200" value={Hori} onChange={(e) => { setHori(e.target.value) }} />
        <level>Vertical length</level>
        <input type="range" min="-200" max="200" value={Veri} onChange={(e) => { setVeri(e.target.value) }} />
        <level>Blur </level>
        <input type="range" min="0" max="200" value={Blur} onChange={(e) => { setBlur(e.target.value) }} />
        <level>Color</level>
        <input type="color" min="0" max="200" value={color} onChange={(e) => { setColor(e.target.value) }} />
        <div class="switch">
          <label>
            Outline
            <input type="checkbox" checked={checkOn} onChange={()=>setCheckOn(!checkOn)}/>
            <span class="lever"></span>
            Inset
          </label>
        </div>
      </div>
      <div className='output'>
        <div className="box" style={{ boxShadow: `${checkOn ?"inset" : ""} ${Hori}px ${Veri}px ${Blur}px ${color}` }}>
          <p>Box-Shadow:{Hori}px {Veri}px {Blur}px {color}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
