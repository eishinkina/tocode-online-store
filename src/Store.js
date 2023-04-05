import React from "react";
import  propTypes  from "prop-types";

const Store = ({children}) => {
  console.log(123)
  return children

}

Store.propTypes = {
  children: propTypes.node.isRequired,
}


export default Store;
