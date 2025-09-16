import { useState } from "react"

function App() {
const [count, setCount] = useState(0)
const [add, addPlus] = useState (1)
  return (
    <>
    <p>Hello World</p>

<button onClick={() => addPlus(add * 2)}>
  Number {add}
</button>

    <button onClick={() => setCount(count + 1)}>
      Count {count}
    </button>
    </>
  )
}

export default App
