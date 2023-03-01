import { useState } from 'react'
import { Button } from "@mantine/core";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Button onClick={() => setCount(count + 1)}>Count: {count}</Button>
    </div>
  )
}

export default App
