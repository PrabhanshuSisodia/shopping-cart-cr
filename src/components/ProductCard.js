import { useState } from "react";
import { useEffect } from "react";
import { useCart } from "../context/CartContext";
// import "./ProductCard.css";

const ProductCard = ({product}) => {
  const { cartList , addToCart, removeFromCart} =useCart();
  const { id, image, name, price} = product;

  const [isInCart, setIsInCart] = useState(false); 

  useEffect(() => {
    const productIsInCart = cartList.find(cartItem => cartItem.id === id);
    if(productIsInCart){
      setIsInCart(true);
    }else{
      setIsInCart(false);
    }

  }, [cartList, id])

  // function handleAdd(){
  //   addToCart(product);
  //   console.log(cartList)
  // }

  return (
    
    <div className="productCard w-96 h-96  rounded m-2.5 p-2.5 flex flex-col justify-between shadow-md">
      <img className="max-w-full h-64 my-2" src={image} alt={name}/>
      <p className="name my-2 text-lg font-medium">{name}</p>
      <div className="action flex justify-between items-center m-2">
        <p className="text-lg font-medium">${price}</p>
        { isInCart ? (<button onClick={() => removeFromCart(product)} className="border-0 rounded text-base text-white bg-red-600 py-2 px-2.5 cursor-pointer max-w-36 hover:bg-red-900">Remove</button>) : (<button onClick={() => addToCart(product)} className="border-0 rounded text-base text-white bg-blue-600 py-2 px-2.5 cursor-pointer max-w-36 hover:bg-blue-900">Add To Cart</button>)}
        
      </div>
    </div>
    

    // <div className="productCard">
    //   <img src={image} alt={name} />
    //   <p className="name">{name}</p>
    //   <div className="action">
    //     <p>${price}</p>
    //     <button>Add To Cart</button>
    //   </div>
    // </div>
  )
}

export  {ProductCard}
