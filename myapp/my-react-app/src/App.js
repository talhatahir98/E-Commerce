import React, { useState } from 'react'
import Nav from './nav'
import Rout from './rout'
import Footer from './footer'
import Productdetail from './productdetail'
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  //add to cart
  const [cart, setCart] = useState([])
  //product Detail
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);
  //Filter Product
  const [product, setProduct] = useState(Productdetail);
  const searchbtn = (product) => {
    const change = Productdetail.filter((x) => {
      return x.Cat === product
    })
    setProduct(change)

  }
  //product detail
  const view = (product) => {
    setDetail([{ ...product }])
    setClose(true)
  }

  //add to cart
  const addtocart = (product) => 
  {
    
      const exsit = cart.find((x) => 
      {
        return x.id === product.id
      })
      if (exsit) 
      {
        alert("This product is already added to cart")
      }
      else
       {
        setCart([...cart, { ...product, qty: 1 }])
        alert("Product is Added to Cart")
      }
    }
    

  return (
    <>
      <BrowserRouter>
        <Nav searchbtn={searchbtn} />
        <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart} />
        {/* <Product /> */}
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App