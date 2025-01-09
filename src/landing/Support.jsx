function Support() {
  return (
    <div className="support">
      <div className="supporttitle">
        <h2>Need Help?</h2>
        <p>
          We're here to assist you. Feel free to reach out to us with any
          questions, concerns, or feedback.
        </p>
      </div>
      <div className="supportform">
        <form>
          <div className="formgroup">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div className="formgroup">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="formgroup">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Enter your message"
              rows="5"
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Support;
