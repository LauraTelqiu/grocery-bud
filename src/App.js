import { useState } from 'react'
import Form from './Form'

const App = () => {
  const [itmes, setItems] = useState([])
  return (
    <section className='section-center'>
      <Form />
    </section>
  )
}

export default App
