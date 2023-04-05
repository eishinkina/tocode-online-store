import React from "react";
import  propTypes  from "prop-types";


export const TestContext = React.createContext(null)
const Store = ({children}) => {
  const test = 'hello world'
  return <TestContext.Provider value={test}>{children}</TestContext.Provider>

}

Store.propTypes = {
  children: propTypes.node.isRequired,
}


export default Store;
