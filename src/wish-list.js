import React from 'react';
import { AiOutlineClose, AiFillStar } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cartData } from './redux/cartSlice';
import { removeData } from './redux/wishListSlice';

const WishList = () => {
  const wishLishData = useSelector((state) => state.wishListData.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (item, idx) => {
    dispatch(cartData(item));
    dispatch(removeData(idx));
  };

  const handleNavigate = (toNavigate) => {
    navigate(toNavigate);
  };
  return (
    <>
      <div>
        <h2>My wishlist</h2>
      </div>
      {wishLishData.length > 0 ? (
        <div className='product-container'>
          {wishLishData.map((item, idx) => (
            <div key={idx}>
              <div className='product'>
                <div className='heart_aligns'>
                  <AiOutlineClose
                    size={26}
                    color='red'
                    onClick={() => dispatch(removeData(idx))}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
                <div className='img-align'>
                  <img
                    src={item.image}
                    alt='product-box'
                    width={200}
                    height={220}
                  />
                </div>
                <div className='contents'>
              <div className='d-flex justify-content-around align-items-center mb-3 index-overallRating'>
                <div className='d-flex justify-content-around align-items-center'>
                  {item.rating?.rate}
                  <AiFillStar
                    color={
                      item.rating?.rate > 3.5
                        ? 'green'
                        : item.rating?.rate > 2
                        ? '#ff8300'
                        : 'red'
                    }
                  />
                </div>
                <div className='mx-1'>|</div>
                <div style={{ fontSize: '12px' }}>
                  {item.rating?.count} Ratings
                </div>
              </div>
              <h6>{item.title}</h6>
              <p>{item.description}</p>
              <p>Price : {item.price}/- rs.</p>
            </div>
                <button onClick={() => handleClick(item, idx)}>
                  Move to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src='/wishlist.png' alt='wishlist-logo' width={280} />
          </div>
          <div className='wishlist-bottom'>
            <h4>
              Your wishlist is <span>empty</span>
            </h4>
            <p>Add items to get started.</p>
            <div className='margin-top-sm'>
              <button
                className='cart-bottom-btn'
                onClick={() => handleNavigate('/product')}
              >
                Start shopping
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default WishList;
