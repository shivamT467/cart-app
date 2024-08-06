import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cartData } from './redux/cartSlice';
import { AiFillHeart, AiOutlineHeart, AiFillStar } from 'react-icons/ai';
import { removeData, wishListData } from './redux/wishListSlice';
import LoadingSpinner from './component/spinner';
import Select from './component/selectTag';

const Product = () => {
  const [isGoToCart, setIsGoToCart] = useState([]);
  const [isWishlst, setIsWishlst] = useState([]);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (item, type) => {
    if (type === 'cart') {
      dispatch(cartData(item));
      setIsGoToCart((preVal) => [...preVal, item.id]);
    } else if (type === 'wishList') {
      dispatch(wishListData(item));
      setIsWishlst((preVal) => [...preVal, item.id]);
    }
  };
  const wishLishData = useSelector((state) => state.wishListData.data);
  const handleRemove = (id) => {
    const index = wishLishData.findIndex((item, i) => item.id === id);
    if (index > -1) {
      dispatch(removeData(index));
      isWishlst.splice(index, 1);
    }
  };

  const handleNavigate = () => {
    navigate('/cart');
  };
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <>
      {products.length > 0 ? (
        <>
          <Select category={category} handleCategory={handleCategory} />
          <div className='product-container'>
            {products.map((item, idx) => (
              <>
                {category === item.category ? (
                  <div key={idx}>
                    <div className='product'>
                      <div className='heart_aligns'>
                        {isWishlst.find((el) => el === item.id) ? (
                          <AiFillHeart
                            size={26}
                            color='red'
                            onClick={() => handleRemove(item.id)}
                          />
                        ) : (
                          <AiOutlineHeart
                            size={26}
                            color='grey'
                            onClick={() => handleClick(item, 'wishList')}
                          />
                        )}
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
                      {isGoToCart.find((el) => el === item.id) ? (
                        <button onClick={handleNavigate}>Go to cart</button>
                      ) : (
                        <button onClick={() => handleClick(item, 'cart')}>
                          Add to cart
                        </button>
                      )}
                    </div>
                  </div>
                ) : !category || category === 'selet a category' ? (
                  <div key={idx}>
                    <div className='product'>
                      <div className='heart_aligns'>
                        {isWishlst.find((el) => el === item.id) ? (
                          <AiFillHeart
                            size={26}
                            color='red'
                            onClick={() => handleRemove(item.id)}
                          />
                        ) : (
                          <AiOutlineHeart
                            size={26}
                            color='grey'
                            onClick={() => handleClick(item, 'wishList')}
                          />
                        )}
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
                      {isGoToCart.find((el) => el === item.id) ? (
                        <button onClick={handleNavigate}>Go to cart</button>
                      ) : (
                        <button onClick={() => handleClick(item, 'cart')}>
                          Add to cart
                        </button>
                      )}
                    </div>
                  </div>
                ) : (
                  ''
                )}
              </>
            ))}
          </div>
        </>
      ) : (
        <div className='d-flex justify-content-center align-items-center min-vh-100'>
          <LoadingSpinner type={'circular'} size={80} />
        </div>
      )}
    </>
  );
};

export default Product;
