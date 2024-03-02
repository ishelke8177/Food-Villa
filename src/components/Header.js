import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Logo } from '../assets';

const Title = () => {
  return (
    <img data-testid="logo" className="justify-center h-20 p-2" alt="logo" src={Logo}/>
  );
};

const Header = () => {
  // subscribe to the cart items
  const cartItems = useSelector(store => store.cart.items)

  return (
    <div className="sm:flex align-middle py-1 justify-between border-black bg-pink-50 shadow-lg">
      <div className='flex justify-center'>
        <Title />
      </div>
      <div className=''>
        <ul className="flex justify-center sm:mt-6">
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
            <Link to={'/cart'}>Cart-{cartItems.length}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
