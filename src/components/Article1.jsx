import { Link } from 'react-router-dom';
import '../styles/main.css';

const Article1 = () => (
  <main>
    <section className="article"><Link to="/news">&lt;-- Back to Newsletter</Link></section>
    <section className="blog"><div className="blogz"><div className="post">
      <h2>Krusty Krab Launches Krusty Kruiser: Taking Bikini Bottom&apos;s Culinary Delights on the Road!</h2>
      <img className="image" src="/media/food_truck.jpg" alt="" />
      <h3>By <a href="https://youtube.com/">Bikini Bottom News</a> [June 17th, 2022]</h3>
      <p>In a bid to expand its culinary footprint beyond the confines of its iconic underwater locale, the Krusty Krab has embarked on an exciting new venture with the introduction of the Krusty Kruiser, a mobile extension of the beloved eatery that promises to bring the flavors of Bikini Bottom to new horizons. The grand unveiling of the Krusty Kruiser drew a crowd of eager onlookers, including loyal patrons of the Krusty Krab and curious newcomers alike. The brainchild of Mr. Eugene H. Krabs, the astute and business-savvy proprietor of the Krusty Krab, the food truck represents a bold step towards reaching a broader audience.</p>
      <figure className="blogimg"><img className="image" src="/media/krabs.jpg" alt="" /><figcaption>Mr. Krabs and his food truck crew</figcaption></figure>
      <p>&quot;The Krusty Kruiser is more than just a food truck, it&apos;s a symbol of our commitment to sharing the culinary treasures of Bikini Bottom with the world,&quot; declared Mr. Krabs, his voice tinged with enthusiasm. &quot;We&apos;ve put our heart and soul into creating a menu that captures the essence of our underwater community, and we can&apos;t wait to share it with new customers far and wide.&quot; At the heart of the Krusty Kruiser&apos;s menu is the legendary Krabby Patty, alongside Krusty Krab fries, coral bits, and seaweed shakes.</p>
      <p>SpongeBob, the ever-enthusiastic fry cook, expressed his excitement about the opportunity to take the Krusty Krab&apos;s offerings on the road. The Krusty Kruiser is poised to embark on a tour of coastal towns and cities, with plans to visit a diverse range of communities along the way.</p>
      <p style={{ marginBottom: '20px' }}>As the Krusty Kruiser sets sail on its culinary adventure, it carries with it the spirit and legacy of the Krusty Krab, promising to deliver not just food, but a taste of the vibrant and flavorful world of Bikini Bottom to all who encounter it.</p>
    </div></div>
    <div className="related"><h2>Related Posts</h2><div className="related-container"><div className="related-post"><div className="post-image img-2"></div><h2>Krusty Krab &quot;2&quot; Grand Reopening after COVID-19 pandemic!</h2><p>By <strong>Bikini Bottom News</strong> [March 7th, 2022]</p><Link to="/article2">Read More</Link></div></div></div>
    </section>
  </main>
);

export default Article1;
