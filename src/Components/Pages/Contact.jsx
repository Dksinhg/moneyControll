import React from "react";

const Contact = () => {
  return (
    <>
      <div class="container-xl">
        <div className="sub-container">
        <div class="form">
            <h2>Contact Us</h2>
            <div className="form-container">
            <form action="#" method="post">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required />
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required />
                <label for="message">Message</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">Submit</button>
            </form>
            </div>
        </div>
        <div class="contact-info">
            <h2>Contact Information</h2>
            <p>Email: info@example.com</p>
            <p>Phone: +1 123-456-7890</p>
            <p>Address: 123 Main St, City, Country</p>
        </div>
        </div>
    </div>
    </>
  );
};

export default Contact;
