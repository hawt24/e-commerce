import React from 'react'
import Nav from './Navigation/Nav'
import Card from './component/Card'
import Input from './component/Input'
import Button from './component/Button'
import product from './Product/product'
import Recomended from './Recomended/Recomended'



const App = () => {
  return (
    <div>
      <Nav />
      <Card />
      <Input />
      <Button />
      <product /> 
    </div>
  )
}

export default App
