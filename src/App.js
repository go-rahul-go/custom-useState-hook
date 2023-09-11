import UseCount from "./hooks/UseCount";
import "./style.css"
function App() {
  const [count, increase, decrease] = UseCount();
  let custom ={
    color:"red",
    
  }

  return (
    <div className="box">
      <p style={(count===0)?custom:{color:"blue"}}>{count}</p>
      <div className="btn-div">
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
    </div>
  )
}

export default App;
