import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Product from './components/Product'
import OrderInfo from './components/OrderInfo'
import "./style/style.css"

const App = () => {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Header />
        <Product />
        <OrderInfo />
      </div>
  )
}

export default App;
