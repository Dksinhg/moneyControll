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

                <label for="Phone">Phone</label>
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
            <div>
              <div className="sub2-contact">
                <div className="information">
                  <h2 id="hhh">Contact Information</h2>
                </div>
                <div className="subchild-info">
                <div className="infogamil">
                  <p id="ppp">Email: info@example.com</p>
                </div>
                <div className="phonenumber">
                  <p id="ppp">Phone: +1 123-456-7890</p>
                </div>
                <div className="address">
                  <p id="ppp">Address: 123 Main St, City, Country</p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
