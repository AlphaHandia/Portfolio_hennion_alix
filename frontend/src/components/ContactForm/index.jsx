import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      subject: '', // Maintenant, 'subject' est une chaîne vide car l'utilisateur va le sélectionner dans la liste déroulante.
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phone: Yup.string().required('Phone number is required'),
      subject: Yup.string().required('Subject is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      // Vous pouvez ajouter ici la logique de soumission du formulaire
      console.log(values);
      resetForm(); // Réinitialiser le formulaire après la soumission
    },
  });

  const subjectOptions = [
    'General Inquiry',
    'Project Collaboration',
    'Job Opportunity',
    'Feedback',
    'Other',
  ];

  return (
    <form onSubmit={formik.handleSubmit} className="contact-form">
      <div className="left-column">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name && <div className="error">{formik.errors.name}</div>}

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && <div className="error">{formik.errors.email}</div>}

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.phone && formik.errors.phone && <div className="error">{formik.errors.phone}</div>}
        
        <label htmlFor="subject">Subject:</label>
        <select
          id="subject"
          name="subject"
          value={formik.values.subject}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="" label="Select a subject" />
          {subjectOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {formik.touched.subject && formik.errors.subject && <div className="error">{formik.errors.subject}</div>}
      </div>

      <div className="right-column">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.message && formik.errors.message && <div className="error">{formik.errors.message}</div>}

        <button type="submit">
          <i className="fa-solid fa-shield-halved"></i>Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
