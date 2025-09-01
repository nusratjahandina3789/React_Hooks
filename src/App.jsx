import Todo from './components/Todo/Todo'
import { useEffect, useState } from "react"
function App() {
  // useState
  const [demo, setDemo] = useState(10)
  const handleIncrement = () => {
    if (demo > 0) {
      setDemo(demo => demo - 1);
    }
  }

  // useEffect
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => (response.json()))
      .then(data => setData(data))
  }, [])

  return (
    <>
      <div>
        {/* useState */}
        {demo}<br/>
        <button className='button' onClick={handleIncrement}>Increment</button>
        {
          data.map((item) => (
            <div>
              <Todo details={item} />
            </div>
          ))
        }
      </div>
    </>
  )
}
export default App
