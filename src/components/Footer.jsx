import '../styles/main.css';

const Footer = () => {
  return (
    <footer id="contact" className="contact">
      <div className="container">
        <div className="child">
          <h2 className="heading" style={{ marginBottom: '15px' }}>Drop Us a MESSAGE!</h2>
          <form action="https://formsubmit.co/thames2415@gmail.com" style={{ textAlign: 'left' }} method="post">
            <input type="text" name="name" placeholder="Name" required="true" />
            <input type="email" name="email" placeholder="Email" required="true" />
            <br />
            <input type="text" name="_subject" placeholder="Subject" required="true" />
            <br />
            <textarea rows="10" cols="54" name="message" placeholder="Content" required="true" />
            <input type="hidden" name="_template" value="basic" />
            <br />
            <figure id="loading2" className="loading2">
              <img className="loading" src="/media/loading.gif" alt="loading" />
              <figcaption>This may take a while...</figcaption>
            </figure>
            <br />
            <button type="reset" style={{ color: '#fff', backgroundColor: '#9c0924' }}>
              Reset
            </button>
            <button
              type="submit"
              style={{ color: '#fff', backgroundColor: '#31dea1' }}
              onClick={(e) => {
                e.target.form.submit();
                e.target.disabled = true;
                const x = document.getElementById('loading2');
                if (x.className === 'loading2') {
                  x.className += ' visible';
                } else {
                  x.className = 'loading2';
                }
              }}
            >
              Send
            </button>
          </form>
        </div>
        <div className="child">
          <h1>The Krusty Krab</h1>
          <br />
          <h2 style={{ fontSize: '15px' }}>
            The following website is a fan project based from the Spongebob Squarepants franchise. The Krusty Krab, Spongebob Squarepants, Krabby Patty, and all other names rooted from the Spongebob Squarepants franchise own all the rights to this project. Please support the official release.
          </h2>
          <br />
          <a href="#home">Back to Top</a>
          <br />
          <h2 style={{ marginTop: '20px' }}>Address</h2>
          <p className="address">
            831 Bottom Feeder Lane, <br />
            Bikini Bottom, Pacific Ocean <br />
            (11.6065° N, 165.3768° E)
          </p>
        </div>
        <div className="child">
          <h2>Know Us More</h2>
          <ul>
            <li>
              <a href="https://www.facebook.com/TheKrustyKrabOfficial/">
                <i className="fa fa-facebook-official"></i> Facebook
              </a>
            </li>
            <li>
              <a href="https://spongebob.fandom.com/wiki/Encyclopedia_SpongeBobia">
                <i className="fa fa-wikipedia-w"></i> Spongebob Wiki
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@NickelodeonUK">
                <i className="fa fa-youtube-play"></i> Nickelodeon
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;