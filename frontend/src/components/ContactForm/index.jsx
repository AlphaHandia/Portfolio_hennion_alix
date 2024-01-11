import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { useLanguage } from "../LanguageSelector/LanguageContext";
import translations from "../../initi18n/content/translation.json";

const ContactForm = () => {
  const { language } = useLanguage();
  const contactForm = translations.contactForm;
  const [isMessageSent, setIsMessageSent] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required(contactForm.nameLabel[language]),
      email: Yup.string()
        .email(contactForm.emailLabel[language])
        .required(contactForm.emailLabel[language]),
      phone: Yup.string().required(contactForm.phoneLabel[language]),
      subject: Yup.string().required(contactForm.subjectLabel[language]),
      message: Yup.string().required(contactForm.messageLabel[language]),
    }),
    onSubmit: (values, { resetForm }) => {
      // Envoyer l'e-mail avec le paramètre user_id
      emailjs.send("service_xe5t36o", "template_wg6rccb", {
        to_email: "hennion.pierre.alix@hotmail.fr",
        from_name: values.name,
        from_email: values.email,
        phone: values.phone,
        subject: values.subject,
        message: values.message,
      }, "yl-54KXzl4JNROFLu").then(
        (response) => {
          console.log("E-mail envoyé avec succès", response);
          setIsMessageSent(true);
          resetForm();
        },
        (error) => {
          console.error("Erreur lors de l'envoi de l'e-mail", error);
        }
      );
    },
  });
  const subjectOptions = [...contactForm.subjectOptions[language]];

  return (
    <form onSubmit={formik.handleSubmit} className="contact-form">
      <div className="left-column">
        <label htmlFor="name">{contactForm.nameLabel[language]}</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name && (
          <div className="error">{formik.errors.name}</div>
        )}

        <label htmlFor="email">{contactForm.emailLabel[language]}</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="error">{formik.errors.email}</div>
        )}

        <label htmlFor="phone">{contactForm.phoneLabel[language]}</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.phone && formik.errors.phone && (
          <div className="error">{formik.errors.phone}</div>
        )}

        <label htmlFor="subject">{contactForm.subjectLabel[language]}</label>
        <select
          id="subject"
          name="subject"
          value={formik.values.subject}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="" label={contactForm.selectSubject[language]} />
          {subjectOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {formik.touched.subject && formik.errors.subject && (
          <div className="error">{formik.errors.subject}</div>
        )}
      </div>

      <div className="right-column">
        <label htmlFor="message">{contactForm.messageLabel[language]}</label>
        <textarea
          id="message"
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.message && formik.errors.message && (
          <div className="error">{formik.errors.message}</div>
        )}

        <button type="submit">
          <i className="fa-solid fa-shield-halved"></i>
          {contactForm.submitButton[language]}
        </button>

        {isMessageSent && (
          <div className="popup">
            <p>{contactForm.messageSent[language]}</p>
            <button onClick={() => setIsMessageSent(false)}>
              {contactForm.closeButton[language]}
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
