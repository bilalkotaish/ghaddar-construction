import { useState, type FormEvent } from "react";
import { contactApi } from "../services/api";
import type { ContactFormData } from "../types";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      await contactApi.submit(formData);
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      });

      setTimeout(() => setStatus("idle"), 5000);
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(
        error.response?.data?.message ||
          "Failed to submit form. Please try again."
      );
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="phone" className="form-label">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form-input"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="projectType" className="form-label">
            Project Type *
          </label>
          <select
            id="projectType"
            name="projectType"
            className="form-select"
            value={formData.projectType}
            onChange={handleChange}
            required
          >
            <option value="">Select a project type</option>
            <option value="Road Construction">Road Construction</option>
            <option value="Asphalt Paving">Asphalt Paving</option>
            <option value="Maintenance">Maintenance & Repair</option>
            <option value="Commercial">Building Roads</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          className="form-textarea"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Tell us about your project..."
        />
      </div>

      {status === "success" && (
        <div className="alert alert-success">
          Thank you! Your message has been sent successfully. We'll get back to
          you soon.
        </div>
      )}

      {status === "error" && (
        <div className="alert alert-error">{errorMessage}</div>
      )}

      <button
        type="submit"
        className="btn btn-primary btn-large"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
