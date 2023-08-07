import React from 'react'
import Form from './Components/Form/Form'
import Todos from './Components/Todos/Todos';

const App = () => {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div>
      R-TODO
      <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
      />
      <Todos todos={todos} setTodos={setTodos} />
      <p>developed by Ricky A</p>
    </div>
  )
}

export default App