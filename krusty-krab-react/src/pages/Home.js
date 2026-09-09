import React, { useContext } from 'react';
import { useCart } from '../context/CartContext';
import '../index.css';

const Home = () => {
  const { addToCart } = useCart();

  // We need to wrap the addToCart calls in a way that they can be used in inline onclick.
  // Since we are using JSX, we can create handler functions.
  const handleAddToCart = (foodMenu) => {
    addToCart(foodMenu);
  };

  return (
    <>
      <main>
        <section className="home1">
          <div className="container">
            <div className="child image0">
              <h1>Home of the Famous Krabby Patty</h1>
              <br />
              <p>
                Serving for over 25 years, the Krusty Krab is Bikini Bottom's premier destination for mouthwatering underwater fast food. We boast a menu with the most delectable under-the-sea delights, with food quality served in a lively nautical atmosphere and top-notch service which is what the Krusty Krab's known to deliver. Order up for an unforgettable experience where every bite is a taste of Bikini Bottom bliss, come spend your money here!
              </p>
              <button onClick={() => window.location.href = '/menu';}>Order Now</button>
            </div>
            <div className="child image image1"></div>
          </div>
        </section>
        <section className="menu-peek">
          <h1>Top Picks</h1>
          <br />
          <div className="container">
            <div className="child">
              <a onClick={() => handleAddToCart('krabby-patty')}>
                <img src="/media/burgers.png" alt="krabby-patty" className="burger" />
              </a>
              <br />
              <h2>Krabby Patty</h2>
            </div>
            <div className="child">
              <a onClick={() => handleAddToCart('coral-bits')}>
                <img src="/media/coral_bits.jpg" alt="coral-bits" className="burger" />
              </a>
              <br />
              <h2>Coral Bits</h2>
            </div>
            <div className="child">
              <a onClick={() => handleAddToCart('krusty-pizza')}>
                <img src="/media/pizza.png" alt="pizza" className="burger" />
              </a>
              <br />
              <h2>Krusty Pizza</h2>
            </div>
          </div>
          <br />
          <div className="container">
            <div className="child">
              <a onClick={() => handleAddToCart('kelp-shake')}>
                <img src="/media/kelp_shake.png" alt="kelp-shake" className="burger" />
              </a>
              <br />
              <h2>Kelp Shake</h2>
            </div>
            <div className="child">
              <a onClick={() => handleAddToCart('krabby-newburg')}>
                <img src="/media/krabby-newburg.png" alt="steak" className="burger" />
              </a>
              <br />
              <h2>Krabby Newburg</h2>
            </div>
            <div className="child">
              <a onClick={() => handleAddToCart('kelp-rings')}>
                <img src="/media/kelp_rings.png" alt="kelp-rings" className="burger" />
              </a>
              <br />
              <h2>Kelp Rings</h2>
            </div>
          </div>
          <br />
          <button onClick={() => window.location.href = '/menu';}>See Menu</button>
        </section>
        <section className="more">
          <div className="card-container">
            <div className="card">
              <div className="card-image img-1"></div>
              <h2>What is the Krusty Krab?</h2>
              <p>Learn more about our rich history and how the Krusty Krab came to be today!</p>
              <br />
              <a href="/about">Learn More</a>
            </div>
            <div className="card">
              <div className="card-image img-2"></div>
              <h2>Apply for our Team</h2>
              <p>Looking for employment? See our job offers and join the Krusty Krew!</p>
              <br />
              <a href="/jobs">See Jobs</a>
            </div>
            <div className="card">
              <div className="card-image img-3"></div>
              <h2>See Latest Updates</h2>
              <p>The Krusty Krab provides latest news and resources for researchers and media professionals. See our blog for media inquiries and exploration.</p>
              <br />
              <a href="/news">See News</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;