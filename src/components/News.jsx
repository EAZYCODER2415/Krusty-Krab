import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

const posts = {
  article1: { image: '/media/food_truck.jpg', title: "Krusty Krab Launches Krusty Kruiser: Taking Bikini Bottom's Culinary Delights on the Road!", date: 'June 17th, 2022', text: 'In a bid to expand its culinary footprint beyond the confines of its iconic underwater locale, the Krusty Krab has embarked on an exciting new venture with the introduction of the Krusty Kruiser, a mobile extension of the beloved eatery that promises to bring the flavors of Bikini Bottom to new horizons.' },
  article2: { image: '/media/krustyKrab2.png', title: 'Krusty Krab "2" Grand Reopening after COVID-19 pandemic!', date: 'March 7th, 2022', text: 'After 3 years of lockdown since the year of 2019, the debut of the infamous coronavirus, the Krusty Krab happily opens its doors after the long wait of the economical comeback! The Krusty Krab "2" has opened another branch at Coral Avenue. Since years of having only one branch at the Bottom Feeder Lane and earning enough money to start another branch, the Krusty Krab is now even more accessible to Bikini Bottom residents.' },
};

const News = () => {
  const [category, setCategory] = useState('all');
  const visiblePosts = category === 'archive1' ? [posts.article2, posts.article1] : category === 'recent' ? [posts.article1, posts.article2] : [posts.article1, posts.article2];
  return (
    <main>
      <section className="header" style={{ marginBottom: 0 }}><h1>Newsletter</h1><h3>Latest updates and news in one page.</h3></section>
      <section className="blog">
        <div className="blogz">
          <div className="all menu2">
            {visiblePosts.map((post) => (
              <div className="post" key={post.title}>
                <img className="image" src={post.image} alt="" />
                <h2><Link to={post === posts.article1 ? '/article1' : '/article2'}>{post.title}</Link></h2>
                <h3>By <a href="https://youtube.com/">Bikini Bottom News</a> [{post.date}]</h3>
                <p style={{ marginBottom: '20px' }}>{post.text}</p>
                <Link to={post === posts.article1 ? '/article1' : '/article2'} className="link">Read More</Link>
              </div>
            ))}
          </div>
        </div>
        <div className="categories">
          <h2>Categories</h2><hr />
          {[['all', 'All Posts'], ['recent', 'Most Recent'], ['archive1', '2022 Archives']].map(([value, label]) => (
            <React.Fragment key={value}><button type="button" className={`cate-a ${category === value ? 'active' : ''}`} onClick={() => setCategory(value)}>{label}</button><hr /></React.Fragment>
          ))}
          <a href="#category">Category</a><hr /><a href="#category">Category</a>
        </div>
      </section>
    </main>
  );
};

export default News;
