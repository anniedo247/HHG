import React,{useState} from 'react'
import { Container,Button} from 'react-bootstrap'

const Feature1 = () => {
  const [num,setNum]=useState(0)
  const handleIncrease = ()=> {
    setNum(num+1)
  }
  const handleReset = () => {
    setNum(0)
  }
  return (
    <div>
      <Container className="w-75">
        <h2>Let's try</h2>
        <h3>{num}</h3>
        <Button onClick={handleIncrease}>Click me</Button>
        <Button onClick={handleReset}>Reset</Button>
      </Container>
    </div>
  )
}

export default Feature1
