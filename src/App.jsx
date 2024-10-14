import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Product from './components/Product'
import OrderInfo from './components/OrderInfo'
import News from './components/News'
import "./style/style.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";





const App = () => {
  const [total, setTotal] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);

  const updateTotal = (product, quantity) => {
    console.log("Selected Product:", product);
    console.log("Quantity:", quantity);

    if (product && quantity > 0) {
      const newTotal = product.price * quantity;
      setTotal(newTotal);
      setSelectedProduct(product);
      setQuantity(quantity); 
      console.log(newTotal)
    } else {
      setTotal(0);
      setSelectedProduct(null);
      setQuantity(0);
    }
  };

  const myRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Header />
                <Product onUpdate={updateTotal} />
                <OrderInfo product={selectedProduct} quantity={quantity} total={total} />
            </>
        ),
    },
    {
        path: "/news",
        element: <News />,
    },
  ]);

  return (
      <div className='maindiv'>
        <RouterProvider router={myRouter} />
      </div>
  )
}

export default App;
