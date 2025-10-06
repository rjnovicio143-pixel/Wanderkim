import Footer from "../components/Footer";
import "./Contact.css";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = e.target;
    console.log("Contact form submitted:");
    console.log("Name:", name.value);
    console.log("Email:", email.value);
    console.log("Message:", message.value);
    e.target.reset();
  };

  return (
    <>
    <div className="contact-page">

        <p className="contact-paragraph">
          Have questions, suggestions, or just want to say hello? We’d love to hear from you! Whether you're planning a trip to Switzerland,
         want to share your own travel story, or simply have a message for us feel free to
          reach out using the form below. We'll do our best to respond as soon as possible!</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contact Us</h2>
        <input name="name" placeholder="Your Name" required />
        <input name="email" type="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
       <Footer/>
    </div>
    </> 
  );
}