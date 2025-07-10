"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "@/styles/globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    emailaddress: "",
    subject: "",
    emailmessage: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("Server error:", text);
        alert("Failed to send message.");
        return;
      }

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully!");
        setFormData({
          firstname: "",
          lastname: "",
          emailaddress: "",
          subject: "",
          emailmessage: "",
        });
        router.push("/");
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      console.error("Fetch error:", err.message || err);
      alert("Something went wrong.");
    }
  };

  return (
    <>
      <Header />
      <main className="container my-5">
        <div className="d-flex justify-content-center">
          <form
            onSubmit={handleSubmit}
            className="w-100 w-md-75 w-lg-75 p-4 rounded shadow bg-dark text-light"
            style={{ marginBottom: "10%" }}
          >
            <h1 className="display-5 text-center mb-4">Contact Me</h1>
            <hr />
            <div className="row">
              {/* Left column */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="firstname" className="form-label lead">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    className="form-control"
                    placeholder="Your first name..."
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="lastname" className="form-label lead">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    className="form-control"
                    placeholder="Your last name..."
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="emailaddress" className="form-label lead">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="emailaddress"
                    className="form-control"
                    placeholder="Your email address..."
                    value={formData.emailaddress}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label lead">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="form-control"
                    placeholder="Subject..."
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Right column */}
              <div className="col-md-6 d-flex flex-column">
                <div className="flex-grow-1 mb-3">
                  <label htmlFor="emailmessage" className="form-label lead">
                    Message
                  </label>
                  <textarea
                    id="emailmessage"
                    className="form-control"
                    style={{ height: "315px" }}
                    placeholder="Write your message here..."
                    value={formData.emailmessage}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="btn btn-outline-light w-100"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <p className="text-center small text-muted mt-3">Please hire me 🙂</p>
      </main>
      <Footer />
    </>
  );
}
