"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ServiceContact() {
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    deviceType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch(
        "https://portfolio2025-g7wk.onrender.com/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) throw new Error("Request failed");

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully!");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          deviceType: "",
          message: "",
        });
        router.push("/");
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <div className="services-card bg-dark text-light">
        <h2 className="section-title text-center mb-4">Contact</h2>
          <p>
            DM me on{" "}
            <a
              href="https://www.instagram.com/rgtechservices_to"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>{" "}
            or contact me below:
          </p>

          <div className="container">
            <form onSubmit={handleSubmit} className="mt-4">
              <label className="mb-2" htmlFor="firstname">First Name</label>
              <input
                className="form-control mb-3"
                id="firstname"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="Your First Name..."
                required
              />

              <label className="mb-2" htmlFor="lastname">Last Name</label>
              <input
                className="form-control mb-3"
                id="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Your Last Name..."
              />

              <label className="mb-2" htmlFor="email">Email Address</label>
              <input
                className="form-control mb-3"
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email Address..."
              />

              <label className="mb-2">Device Type</label>
              <div className="mb-3">
                <label className="me-3">
                  <input
                    type="radio"
                    name="deviceType"
                    value="Desktop/Workstation"
                    checked={formData.deviceType === "Desktop/Workstation"}
                    onChange={() =>
                      setFormData({ ...formData, deviceType: "Desktop/Workstation" })
                    }
                  />{" "}
                  Desktop / Workstation
                </label>

                <label>
                  <input
                    type="radio"
                    name="deviceType"
                    value="Laptop"
                    checked={formData.deviceType === "Laptop"}
                    onChange={() =>
                      setFormData({ ...formData, deviceType: "Laptop" })
                    }
                  />{" "}
                  Laptop
                </label>
              </div>

              <label className="mb-2" htmlFor="message">How can I help?</label>
              <textarea
                className="form-control mb-4"
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Enter Your Message..."
              />

              <button
                type="submit"
                className="btn btn-light w-100 fw-bold"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              <p className="small mt-2 text-center opacity-75">
                I usually reply within 24 hours.
              </p>
            </form>
          </div>
        </div>
    </section>
  );
}
