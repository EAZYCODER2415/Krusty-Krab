import { Link } from 'react-router-dom';
import '../styles/main.css';

const Article2 = () => (
  <main>
    <section className="article"><Link to="/news">&lt;-- Back to Newsletter</Link></section>
    <section className="blog"><div className="blogz"><div className="post">
      <h2>Krusty Krab &quot;2&quot; Grand Reopening after COVID-19 pandemic!</h2>
      <img className="image" src="/media/krustyKrab2.png" alt="" />
      <h3>By <a href="https://youtube.com/">Bikini Bottom News</a> [March 17th, 2022]</h3>
      <p>After 3 years of lockdown since the year of 2019, the debut of the infamous coronavirus, the Krusty Krab happily opens its doors after the long wait of the economical comeback! The Krusty Krab &quot;2&quot; has opened another branch at Coral Avenue. Since years of having only one branch at the Bottom Feeder Lane and earning enough money to start another branch, the Krusty Krab is now even more accessible to Bikini Bottom residents. The Krusty Krab has began to make changes other than the reopening.</p>
      <figure className="blogimg"><img className="image" src="/media/scene2.png" alt="" /><figcaption>The promotion of Squidward Tentacles, from cashier to cashier and manager.</figcaption></figure>
      <p>The restaurant has appointed a new manager: Squidward Tentacles, cashier of the Krusty Krab, now working additionally as a manager. Squidward came to the podium and announced new initiatives and approaches to the grand open of the 2nd branch, declaring the employment of new employees to take care of the 2nd branch and to introduce new menu choices.</p>
      <figure className="blogimg"><img className="image" src="/media/scene4.png" alt="" /><figcaption>Spongebob Squarepants delivers his congratulations to Squidward, the new manager.</figcaption></figure>
      <p>Spongebob Squarepants, the Krusty Krab&apos;s faithful fry cook, enters the podium and delivers a speech to congratulate Squidward Tentacles. He explains that the cooking talent he possesses has allowed him to continue working to this day.</p>
      <figure className="blogimg"><img className="image" src="/media/scene6.png" alt="" /><figcaption>A troublesome parachute incident interrupts the ceremony.</figcaption></figure>
      <p style={{ marginBottom: '20px' }}>As the Krusty Krab opens itself for a new beginning, a troublesome incident has occurred at a time right before the ceremony ends. Although the new beginning starts with a funny occasion, new happenings are yet to occur to the restaurant.</p>
    </div></div>
    <div className="related"><h2>Related Posts</h2><div className="related-container"><div className="related-post"><div className="post-image img-1"></div><h2>Krusty Krab Launches Krusty Kruiser...</h2><p>By <strong>Bikini Bottom News</strong> [June 17th, 2022]</p><Link to="/article1">Read More</Link></div></div></div>
    </section>
  </main>
);

export default Article2;
