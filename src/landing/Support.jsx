import React, { useState } from "react";
import { db } from "../firebase/firebase"; // Import Firestore instance
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

function Support() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("All fields are required!", { position: "top-center" });
      return;
    }

    try {
      await addDoc(collection(db, "supportMessages"), {
        name,
        email,
        message,
        createdAt: Timestamp.now(),
      });

      toast.success("Message sent successfully!", { position: "top-center" });

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error("Failed to send message. Try again later.", { position: "top-center" });
      console.error("Error storing message:", error);
    }
  };

  return (
    <div id="support" className="support">
      <div className="supporttitle">
        <h2>Need Help?</h2>
        <p>We're here to assist you. Feel free to reach out to us with any questions, concerns, or feedback.</p>
      </div>
      <div className="supportform">
        {/* Toast Notification Container */}
        <ToastContainer />

        <form onSubmit={handleSubmit}>
          <div className="formgroup">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="formgroup">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="formgroup">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Enter your message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Support;
