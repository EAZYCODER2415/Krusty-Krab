import React from 'react';
import { useCart } from '../context/CartContext';
import '../index.css';

const About = () => {
  const { addToCart } = useCart();

  return (
    <>
      <main>
        <section className="header">
          <h1>About Us</h1>
          <h3>A detailed page of our restaurant's information</h3>
        </section>
        <section className="history">
          <div className="container about-container">
            <div className="child">
              <h1>How We Came to Be</h1>
              <br />
              <p>
                The story of the Krusty Krab started with only one man's hard work and sweat. People knew Eugene H. Krabs, the founder and owner of Krusty Krab Inc., as the financial wizard and he still is today. Mr. Krabs has a passion for cooking since his childhood, having self-taught himself from school-age. Krabs would later join the Navy as the head chef, further improving his profession.
              </p>
              <br />
              <p>
                After serving in the military for 6 long years, he stayed secluded in a deep depression until he acquired a bankrupt retirement home. That's where it all started for the Krusty Krab. This retirement home has been and always been the residence for the Krusty Krab until the present day. Through the decades since its founding, the Krusty Krab has become one of the most successful fast food businesses in Bikini Bottom, the signature restaurant of the Krabby Patty!
              </p>
            </div>
            <div className="child image image2"></div>
          </div>
        </section>
        <section className="menu-peek">
          <h1>The Krusty Krew</h1>
          <br />
          <div className="container">
            <div className="child">
              <div><img src="%PUBLIC_URL%/media/mr-krabs.jpg" alt="krabby-patty" className="burger2" /></div>
              <br />
              <h2>Eugene H. Krabs</h2>
              <h3>Owner</h3>
              <br />
              <p>Founder of the legendary Krusty Krab and the creator of the Krabby Patty. His motto is "M.O.N.E.Y"!</p>
            </div>
            <div className="child">
              <div><img src="%PUBLIC_URL%/media/squidward.jpeg" alt="coral-bits" className="burger2" /></div>
              <br />
              <h2>Squidward Tentacles</h2>
              <h3>Cashier</h3>
              <br />
              <p>Detail-oriented and responsible, Squidward is a guy who you can rely on for your orders. You can order something that's not in the menu and he will be eager to fulfill so.</p>
            </div>
            <div className="child">
              <div><img src="%PUBLIC_URL%/media/spongebob.jpg" alt="pizza" className="burger2" /></div>
              <br />
              <h2>Spongebob Squarepants</h2>
              <h3>Fry Cook</h3>
              <br />
              <p>A cheerful and passionate cook of the Krusty Krab. He takes his job seriously and lightens up your day with his cooking.</p>
            </div>
          </div>
        </section>
        <section className="header2">
          <h1>Float on Over!</h1>
          <h3>Open 7 days a week: 10 A.M. - 9 P.M.</h3>
        </section>
      </main>
    </>
  );
};

export default About;