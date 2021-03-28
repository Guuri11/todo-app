import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {


  const [todos, setTodos] = useState([{id:0, name:"First todo", done: 0}, {id: 1, name:"Second todo", done: 0}])
  const [input, setInput] = useState("")

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    
    let aux_todos = todos

    aux_todos.push({id: aux_todos[aux_todos.length -1].id + 1,name:input, done: 0})

    setTodos(aux_todos)
    setInput("")

  }

  const handleDone = id => {
    let aux_todos = todos.map(todo => {
      if (todo.id === id) {
        todo.done = todo.done === 0 ? 1:0
      }

      return todo
    })

    setTodos(aux_todos)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Todo app with Next JS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <h4 className={styles.title}>
          Welcome to <a href="https://github.com/Guuri11">Todo app with Next JS!</a>
        </h4>

        <div className={styles.form_todo}>
          <input type="text" defaultValue={input} value={input} onChange={handleChange} />
          <button onClick={handleSubmit}>Create note</button>
        </div>

        <div className={styles.grid}>
        {
          todos.map((todo, idx) => {
            return (
              <div key={idx} className={styles.card}>
                <p>{todo.name}</p>
                <button onClick={() => handleDone(todo.id)}>{todo.done ? "Done":"Not done"}</button>
              </div>  
            )
          })
        }
        </div>
      </main>
    </div>
  )
}
