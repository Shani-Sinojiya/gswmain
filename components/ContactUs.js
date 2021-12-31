const ContactUs = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="heading">contact us</h1>
      <div className="row">
        <form>
          <input type="text" placeholder="full name" className="box" />
          <input type="email" placeholder="your email" className="box" />
          <input
            type="number"
            placeholder="your Standard"
            className="box"
            min="1"
            max="10"
          />
          <input
            type="tel"
            placeholder="your phone number"
            className="box"
            maxLength="10"
            minLength="10"
          />
          <textarea
            name="comment"
            id="comment"
            cols="30"
            rows="10"
            className="box address"
            placeholder="your address"
          ></textarea>
          <input type="submit" className="btn" value="send now" />
        </form>
        <div className="image">
          <img src="/img/contact-img.png" alt="contact us img" />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
