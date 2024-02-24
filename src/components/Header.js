import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Title = () => {
  return (
    <img className="h-20 p-2" alt="logo" src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"/>
  );
};

const Header = () => {
  const cartItems = useSelector(store => store.cart.items)

  return (
    <div className="flex py-1 justify-between border-black bg-pink-50 shadow-lg">
      <Title />
      <div className=''>
        <ul className="flex">
          <li className='px-2'>
            <Link to={'/'}>Home</Link>
          </li>
          <li className='px-2'>
            <Link to={'/about'}>About</Link>
          </li>
          <li className='px-2'>
            <Link to={'/contact'}>Contact</Link>
          </li>
          <li className='px-2'>
            <Link to={'/cart'}>Cart- {cartItems.length} items</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
