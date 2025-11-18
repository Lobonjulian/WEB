import { useState } from "react";

import styles from "../style/Components.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState({});

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (error[name]) {
      setError({
        ...error,
        [name]: "",
      });
    }
  };

  const validate = () => {
    const newerror = {};
    if (!formData.name.trim()) {
      newerror.name = "El nombre es obligatorio";
    }
    if (!formData.email.trim()) {
      newerror.email = "El email es obligatorio";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newerror.email = "Email inválido";
    }
    if (!formData.message.trim()) {
      newerror.message = "El mensaje no puede estar vacío";
    }
    return newerror;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newerror = validate();
    if (Object.keys(newerror).length > 0) {
      setError(newerror);
    } else {
      console.log("Formulario enviado:", formData);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setError({});

      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  if (isSubmitted) {
    return (
      <div className={styles.success}>
        <h3>✅ Mensaje enviado</h3>
        <p>Gracias por contactarme. Te responderé pronto.</p>
        <button
          onClick={() => setIsSubmitted(false)}
          className={styles.backButton}
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="name">Nombre *</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className={error.name ? styles.errorInput : ""}
          aria-describedby={error.name ? "name-error" : ""}
        />
        {error.name && (
          <p id="name-error" className={styles.error}>
            {error.name}
          </p>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email *</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className={error.email ? styles.errorInput : ""}
          aria-describedby={error.email ? "email-error" : ""}
        />
        {error.email && (
          <p id="email-error" className={styles.error}>
            {error.email}
          </p>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Mensaje *</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className={error.message ? styles.errorInput : ""}
          aria-describedby={error.message ? "message-error" : ""}
        />
        {error.message && (
          <p id="message-error" className={styles.error}>
            {error.message}
          </p>
        )}
      </div>

      <button type="submit" className={styles.submitButton}>
        Enviar mensaje{" "}
      </button>
    </form>
  );
};

export default ContactForm;
