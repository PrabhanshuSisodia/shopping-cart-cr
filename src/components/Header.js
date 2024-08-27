import Logo from '../assets/logo.png'
import { Link, NavLink} from 'react-router-dom'
import { useCart } from '../context/CartContext'

export const Header = () => {

  const { cartList } = useCart();

  return (
    <header className='flex justify-between items-center h-16 max-w-7xl m-auto border-b-2 border-solid border: [#eeeeee] px-2.5 tex-sm'>
      <Link to="/" className="flex items-center">
        <img className='max-w-14 h-14 mr-1.5' src={Logo} alt="Shopmate Logo" />
        <span>Shopping Cart</span>
      </Link>
      <nav className="navigation text-center text-xl">
        <NavLink to="/" className="p-2.5 active:bg-slate-400 rounded" end>Home</NavLink>
        <NavLink to="/cart" className=" p-2.5 link active:bg-slate-400 rounded">Cart</NavLink>
      </nav>
      <Link to="/cart" className="items font-medium min-w-16">
        <span>Cart: {cartList.length}</span>
      </Link>
    </header>

  )
}


