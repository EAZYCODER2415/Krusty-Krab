import { useCart } from './CartContext';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/main.css';

const Header = () => {
  const { cart, clearCart, decrement, increment, totalPrice, totalQuantity } = useCart();
  const navigate = useNavigate();

  const navIcon = () => {
    const x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };

  const orderCart = () => {
    const x = document.getElementById("cart");
    if (x.className === "cart") {
      x.className += " visible";
    } else {
      x.className = "cart";
    }
    const y = document.getElementById("overlay");
    if (y.className === "overlay") {
      y.className += " visible";
    } else {
      y.className = "overlay";
    }
    const z = document.getElementById("body");
    if (z.className === "body") {
      z.className += " locked";
    } else {
      z.className = "body";
    }
  };

  const proceedOrder = () => {
    if (cart.length === 0) {
      window.alert("Fill your cart, you haven't bought anything yet!");
      return;
    }
    orderCart();
    navigate('/delivery');
  };

  return (
    <>
      <header id="home">
        <div className="container">
          <div className="child null"></div>
          <div className="child">
            <Link to="/"><img src="/media/Krusty_Krab_logo.jpeg" alt="logo" className="krusty" /></Link>
          </div>
          <div className="child null">
            <div className="interactive">
              <Link to="#" onClick={orderCart} style={{ marginRight: '7.5px' }}>
                <i className="fa fa-shopping-cart"></i>
              </Link>
              <span style={{ fontSize: '25px', color: 'red' }} id="cartsize">{totalQuantity}</span>
              <Link to="#contact" style={{ margin: '0 20px' }}>
                <i className="fa fa-map-marker"></i>
              </Link>
            </div>
          </div>
          <div className="cart" id="cart">
            <div className="cart-header">
              <h1>My Cart</h1>
              <button onClick={orderCart} className="close-button">
                <i className="fa fa-times"></i>
              </button>
            </div>
            <div className="cart-content">
              <div id="cart-items">
                {cart.map(([foodItem, foodName, foodPrice, foodQuantity]) => (
                  <div className="item" id={`${foodItem}-div`} key={foodItem}>
                    <div className="The-item">
                      <h3>{foodName}</h3>
                    </div>
                    <div className="quantity-n-price">
                      <button type="button" onClick={() => decrement(foodItem)} aria-label={`Remove one ${foodName}`}>-</button>
                      <span>{foodQuantity}</span>
                      <button type="button" onClick={() => increment(foodItem)} aria-label={`Add one ${foodName}`}>+</button>
                      <h3>${foodPrice * foodQuantity}</h3>
                    </div>
                  </div>
                ))}
              </div>
              <div className="item" style={{ backgroundColor: '#fff' }}>
                <div className="The-item">
                  <h3>Total</h3>
                </div>
                <div className="quantity-n-price">
                  <h3 id="total-price">${totalPrice}</h3>
                </div>
              </div>
              <div className="item" style={{ backgroundColor: '#fff' }}>
                <div className="The-item">
                  <button type="button" onClick={clearCart}>Clear</button>
                </div>
                <div className="quantity-n-price">
                  <button type="button" onClick={proceedOrder}>Proceed</button>
                </div>
              </div>
            </div>
          </div>
          <div id="overlay" className="overlay"></div>
        </div>
      </header>

      <nav>
        <div className="topnav" id="myTopnav">
          <Link to="/" className="active">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/promos">Promotions</Link>
          <Link to="/jobs">Careers</Link>
          <Link to="/news">Newsletter</Link>
          <div className="icon" onClick={navIcon}>
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;