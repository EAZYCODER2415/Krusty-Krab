import '../styles/main.css';

const locationUrl = 'https://www.google.com/search?q=krusty+krab+location';
const promotions = [
  ['img-25', 'Buy 1 Get 2 Free', 'Buy one Krabby Patty with 3x the price and get 2 free Krabby Patties!'],
  ['img-26', 'Free Drink', 'Get a free soda together with other orders you have ordered, the free refills will be only water.'],
  ['img-27', 'Free Kiddie Meals', 'Free Kiddie Meal box with every meal!'],
  ['img-28', 'Commemorative Patty', 'Get a 50% off discounted Giant Deluxe Krabby Patty!'],
];

const Promotions = () => (
  <main>
    <section className="header">
      <h1>Promotions</h1>
      <h3>Discounts, order sets, e.t.c. Only at the restaurant.</h3>
    </section>
    <section className="menu">
      <div className="food-card-container shop" id="shop">
        {promotions.map(([image, title, description]) => (
          <div className="food-card" key={title}>
            <div className={`food-card-image ${image}`}></div>
            <div className="food-card-header"><h2>{title}</h2></div>
            <p>{description}</p>
            <a href={locationUrl} target="_blank" rel="noreferrer">Find Us</a>
          </div>
        ))}
      </div>
    </section>
  </main>
);

export default Promotions;
