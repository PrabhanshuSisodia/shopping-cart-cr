import { useTitle } from "../hooks/useTitle"
import { CartCard } from "../components"
import { useCart } from "../context/CartContext";
// import { CartContext } from "../context/CartContext";
// import { useContext } from "react";

const Cart = () => {
  const {total, cartList} = useCart();
  // console.log(cartList);
  // const {total} = useContext(CartContext);
  useTitle("Cart");

  // const products = [
  //   {id: 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/1001.png",}, 
  //   {id: 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/images/1002.png",}, 
  // ]

  return (
    <main>
      <section>
        <h1 className="text-center font-bold text-2xl mt-2">Cart Item: {cartList.length} / ${total}</h1>
        {cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  )
}

export  {Cart}
