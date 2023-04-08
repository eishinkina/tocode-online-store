import React, { useEffect, useState } from "react";
import  propTypes  from "prop-types";

export const ProductsContext = React.createContext()

const Store = ({children}) => {
  const [products, setProducts] = useState([])
  const productsContext = React.useMemo(
    ()=>[products, setProducts],
    [products, setProducts]
  )

  useEffect(()=>console.log(products, [products]))

  return <ProductsContext.Provider value={productsContext}>{children}</ProductsContext.Provider>

}

Store.propTypes = {
  children: propTypes.node.isRequired,
}


export default Store;
