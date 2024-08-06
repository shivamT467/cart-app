import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FiHeart } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Header = ({ children }) => {
  const productsLength = useSelector((item) => item.clickedData.data);
  const wishLishData = useSelector((state) => state.wishListData.data);

  return (
    <>
      <div className='patrent-main'>
        <div className='main'>
          <div className='links'>
            <Link to='/wishlist'>
              <div className='d-flex'>
                <FiHeart
                  size={24}
                  color={wishLishData.length > 0 ? 'red' : ''}
                />
                <div>{wishLishData.length}</div>
              </div>
            </Link>
            <Link to='/'>Home</Link>
            <Link to='/product'>Products</Link>
            <Link to='/cart'>
              <AiOutlineShoppingCart size={24} />
              {productsLength.length}
            </Link>
          </div>
        </div>
        <div className='header-bottom' />
      </div>
      {children}
    </>
  );
};

export default Header;
