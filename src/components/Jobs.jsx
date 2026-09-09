import '../styles/main.css';

const Jobs = () => (
  <main>
    <section className="header">
      <h1>Jobs in the Krusty Krab</h1>
      <h3>Be a part of the Krusty Krew</h3>
    </section>
    <section className="desc">
      <div className="container about-container">
        <div className="child">
          <h1>Wanna join the Krusty Krew??</h1>
          <br />
          <p>Are you interested in a rewarding career in the fast food industry, especially in the Krusty Krab? There are several job opportunities &quot;behind the scenes&quot; such as advertising, finances, nutrition control, and marketing; or direct in-person service with customers in departments like cashiers, cooking, and restaurant work.</p>
          <br />
          <p>A proficiency in spoken and written English plus some previous experience will beneficial for your experience here. If you happen to be interested, please complete the application form below with your personal details, your previous education, your interests and experience, and what kind of employment position you are seeking for in our restaurant.</p>
        </div>
        <div className="child image image3"></div>
      </div>
    </section>
    <section className="application-form">
      <div className="tabbed-forms">
        <div className="apply menu">
          <form action="https://formsubmit.co/thames2415@gmail.com" method="POST">
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="New Job Application from Krusty Krab!" />
            <h1>Job Application Form</h1>
            <div className="form-item"><input type="text" name="first-name" placeholder="First Name" required /><input type="text" name="last-name" placeholder="Last Name" required /></div>
            <div className="form-item"><input type="email" name="email-address" placeholder="Email Address" required /><input type="text" name="phone" placeholder="Phone Number" required /></div>
            <div className="form-item"><input list="jobs" placeholder="Select job you want to apply" id="desired-job" required /><datalist id="jobs"><option value="Cashier" /><option value="Fry Cook" /><option value="Waiter" /><option value="Manager" /><option value="Accountant" /><option value="Busser" /><option value="Nutritionist" /></datalist></div>
            <div className="form-item"><textarea rows="30" cols="54" name="background-information" placeholder="Tell us your background" required /></div>
            <div className="form-item"><textarea rows="30" cols="54" name="message" placeholder="Why do you want to apply for this job?" required /></div>
            <div className="form-item"><button type="submit">Submit Order</button></div>
          </form>
        </div>
      </div>
    </section>
  </main>
);

export default Jobs;
