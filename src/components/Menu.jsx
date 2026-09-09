import { useCart } from './CartContext';
import '../styles/main.css';

const Menu = () => {
  const { addToCart } = useCart();

  return (
    <>
      <main>
        <section className="header">
          <h1>Galley Grub</h1>
          <h2>-- Menu --</h2>
        </section>
        <section className="menu">
          <h1>Main Course</h1>
          <br />
          <div className="food-card-container shop" id="shop">
            <div className="food-card">
              <div className="food-card-image img-4"></div>
              <div className="food-card-header">
                <h2>Krabby Patty</h2>
                <h2 className="price">$16</h2>
              </div>
              <p>The Krusty Krab's well-known secret formula burger beloved by all fish!</p>
              <button onClick={() => addToCart('krabby-patty')}>Add to Cart</button>
            </div>
            <div className="food-card">
              <div className="food-card-image img-5"></div>
              <div className="food-card-header">
                <h2>Pretty Patty</h2>
                <h2 className="price">$18</h2>
              </div>
              <p>Colored Krabby Patties with its distinct flavor of each color, a rainbowed patty set!</p>
              <button onClick={() => addToCart('pretty-patty')}>Add to Cart</button>
            </div>
            <div className="food-card">
              <div className="food-card-image img-6"></div>
              <div className="food-card-header">
                <h2>Jelly Patty</h2>
                <h2 className="price">$17</h2>
              </div>
              <p>A unique Krabby Patty with an additional jellyfish jelly topping, slimy and tasty!</p>
              <button onClick={() => addToCart('jelly-patty')}>Add to Cart</button>
            </div>
          </div>
          <br />
          <div className="food-card-container shop" id="shop">
            <div className="food-card">
              <div className="food-card-image img-7"></div>
              <div className="food-card-header">
                <h2>Krusty Pizza</h2>
                <h2 className="price">$17</h2>
              </div>
              <p>The Krusty Krab-style pepperoni pizza made from mashed Krusty dough and exquisite cheese.</p>
              <button onClick={() => addToCart('krusty-pizza')}>Add to Cart</button>
            </div>
            <div className="food-card">
              <div className="food-card-image img-8"></div>
              <div className="food-card-header">
                <h2>Pizza Patty</h2>
                <h2 className="price">$19</h2>
              </div>
              <p>A Krabby Patty with a geniunely sized Krusty Pizza, order if you dare to finish it.</p>
              <button onClick={() => addToCart('pizza-patty')}>Add to Cart</button>
            </div>
            <div className="food-card">
              <div className="food-card-image img-9"></div>
              <div className="food-card-header">
                <h2>Krabby Meal</h2>
                <h2 className="price">$25</h2>
              </div>
              <p>A full set of Krabby Patties and fries, a perfect option to complete a meal!</p>
              <button onClick={() => addToCart('krabby-meal')}>Add to Cart</button>
            </div>
          </div>
          <br />
          <div className="food-card-container shop" id="shop">
            <div className="food-card">
              <div className="food-card-image img-16"></div>
              <div className="food-card-header">
                <h2>Krabby Newburg</h2>
                <h2 className="price">$30</h2>
              </div>
              <p>The Krusty Krab's only classy steak dish (won't include the whole details).</p>
              <button onClick={() => addToCart('krabby-newburg')}>Add to Cart</button>
            </div>
          </div>
          <br />
          <h1>Side Dishes</h1>
          <br />
          <div className="food-card-container">
            <div className="food-card">
              <div className="food-card-image img-10"></div>
              <div className="food-card-header">
                <h2>Krusty Kelp Dog</h2>
                <h2 className="price">$14</h2>
              </div>
              <p>The Krusty Dog with a mix of vegan kelp, go ahead and try it vegans!</p>
              <button onClick={() => addToCart('krusty-kelp-dog')}>Add to Cart</button>
            </div>
            <div className="food-card">
              <div className="food-card-image img-11"></div>
              <div className="food-card-header">
                <h2>Buttered Barnacles</h2>
                <h2 className="price">$17</h2>
              </div>
              <p>Soft dough from barnacles made to look like pancakes with butter on top!</p>
              <button onClick={() => addToCart('buttered-barnacles')}>Add to Cart</button>
            </div>
            <div className="food-card">
              <div className="food-card-image img-12"></div>
              <div className="food-card-header">
                <h2>Barnacle Loaf</h2>
                <h2 className="price">$12</h2>
              </div>
              <p>Learn more about our rich history and how the Krusty Krab came to be today!</p>
              <button onClick={() => addToCart('barnacle-loaf')}>Add to Cart</button>
            </div>
          </div>
          <br />
          <h1>Appetizers</h1>
          <br />
          <div className="food-card-container">
            <div className="food-card">
              <div className="food-card-image img-13"></div>
              <div className="food-card-header">
                <h2>Nachos</h2>
                <h2 className="price">$13</h2>
              </div>
              <p>An under-the-sea Mexican dish consisting of tortilla chips and totopos, can be found near the Pacific Ocean.</p>
              <button onClick={() => addToCart('nachos')}>Add to Cart</button>
            </div>
            <div className="food-card">
              <div className="food-card-image img-14"></div>
              <div className="food-card-header">
                <h2>Coral Bits</h2>
                <h2 className="price">$8</h2>
              </div>
              <p>Crispy bits of pale pink corals with sweet flavor and exquisite taste.</p>
              <button onClick={() => addToCart('coral-bits')}>Add to Cart</button>
            </div>
            <div className="food-card">
              <div className="food-card-image img-15"></div>
              <div className="food-card-header">
                <h2>Kelp Rings</h2>
                <h2 className="price">$13</h2>
              </div>
              <p>Deep-fried kelp shaped as rings, like the Onion Rings.</p>
              <button onClick={() => addToCart('kelp-rings')}>Add to Cart</button>
            </div>
          </div>
          <br />
          <h1>Snacks, Kids Menu, Dessert</h1>
          <br />
          <div className="food-card-container">
            <div className="food-card">
              <div className="food-card-image img-17"></div>
              <div className="food-card-header">
                <h2>Kelp Jerky</h2>
                <h2 className="price">$5</h2>
              </div>
              <p>A spoof of beef jerky in a snack bag, enjoy your treat!</p>
              <button onClick={() => addToCart('kelp-jerky')}>Add to Cart</button>
            </div>
            <div className="food-card">
              <div className="food-card-image img-18"></div>
              <div className="food-card-header">
                <h2>Pipsqueak Patty</h2>
                <h2 className="price">$7</h2>
              </div>
              <p>Fear of the Krabby Patty not fitting in your stomach? Here's a kids size Krabby Patty!</p>
              <button onClick={() => addToCart('pipsqueak-patty')}>Add to Cart</button>
            </div>
            <div className="food-card">
              <div className="food-card-image img-19"></div>
              <div className="food-card-header">
                <h2>Krusty Kid's Meal</h2>
                <h2 className="price">$10</h2>
              </div>
              <p>A Krabby Meal specially designed for children aged less than 13.</p>
              <button onClick={() => addToCart('krusty-kid-meal')}>Add to Cart</button>
            </div>
          </div>
          <br />
          <div className="food-card-container">
            <div className="food-card">
              <div className="food-card-image img-20"></div>
              <div className="food-card-header">
                <h2>Spongebob's Sundae</h2>
                <h2 className="price">$8</h2>
              </div>
              <p>An ice cream sundae made by Spongebob. Be careful, it's too smelly for customers!</p>
              <button onClick={() => addToCart('spongebob-sundae')}>Add to Cart</button>
            </div>
            <div className="food-card">
              <div className="food-card-image img-21"></div>
              <div className="food-card-header">
                <h2>Swedish Barnacle Balls</h2>
                <h2 className="price">$7</h2>
              </div>
              <p>Swedish barnacle meatballs in a can, enjoy it!</p>
              <button onClick={() => addToCart('swedish-barnacle-balls')}>Add to Cart</button>
            </div>
            <div className="food-card">
              <div className="food-card-image img-22"></div>
              <div className="food-card-header">
                <h2>Jelly Cake</h2>
                <h2 className="price">$10</h2>
              </div>
              <p>A special dessert for jelly lovers, enjoy the taste!</p>
              <button onClick={() => addToCart('jelly-cake')}>Add to Cart</button>
            </div>
          </div>
          <br />
          <h1>Beverages</h1>
          <br />
          <div className="food-card-container">
            <div className="food-card">
              <div className="food-cart-image img-23"></div>
              <div className="food-card-header">
                <h2>Kelp Shake</h2>
                <h2 className="price">$10</h2>
              </div>
              <p>A secret formula soft drink made out of kelp! Don't drink too much though...</p>
              <button onClick={() => addToCart('kelp-shake')}>Add to Cart</button>
            </div>
            <div className="food-card">
              <div className="food-cart-image img-24"></div>
              <div className="food-card-header">
                <h2>Krusty Soda</h2>
                <h2 className="price">$9</h2>
              </div>
              <p>The Krusty Krab's trademark soda drink made out of seafoam!</p>
              <button onClick={() => addToCart('krusty-soda')}>Add to Cart</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Menu;