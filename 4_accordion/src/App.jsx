import { useState } from 'react'
import './App.css'
import data from './data'
import SingleQuetions from './Quetions'

function App() {
  const [question, setQuestion] = useState(data);

  return (
    <main>
      <div className='container'>
      <h3>Questions and answers about login</h3>
      <section className='info'>
      {
        question.map((question)=> {
          return(
            <SingleQuetions key={question.id} {...question} onClick={setQuestion} ></SingleQuetions>
          )
        })
      }
      </section>
      </div>
    </main>

  )
}

export default App
