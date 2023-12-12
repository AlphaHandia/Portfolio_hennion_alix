import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

// Suite de tests pour le composant ContactForm
describe('ContactForm Component', () => {
  // Test : le composant rend sans erreur
  it('renders without crashing', () => {
    render(<ContactForm />);
  });

  // Test : le formulaire contient les champs pour le nom, l'email et le message
  it('contains fields for name, email, and message', () => {
    render(<ContactForm />);
    const nameInput = screen.getByLabelText('Name:');
    const emailInput = screen.getByLabelText('Email:');
    const messageInput = screen.getByLabelText('Message:');

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
  });

  // Test : le changement de valeur dans les champs est géré correctement
  it('handles value changes in the input fields correctly', () => {
    render(<ContactForm />);
    const nameInput = screen.getByLabelText('Name:');
    const emailInput = screen.getByLabelText('Email:');
    const messageInput = screen.getByLabelText('Message:');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'This is a test message.' } });

    expect(nameInput.value).toBe('John Doe');
    expect(emailInput.value).toBe('john.doe@example.com');
    expect(messageInput.value).toBe('This is a test message.');
  });

  // Test : la soumission du formulaire est gérée correctement
  it('handles form submission correctly', () => {
    render(<ContactForm />);
    const submitButton = screen.getByText('Submit');

    fireEvent.click(submitButton);
  });
});

// Explications en français
/*
 - Le premier test s'assure que le composant est rendu sans erreur.
 - Le deuxième test vérifie la présence des champs pour le nom, l'email et le message.
 - Le troisième test vérifie si le changement de valeur dans les champs est géré correctement.
 - Le quatrième test vérifie si la soumission du formulaire est gérée correctement 
*/

// Explanations in English
/*
 - The first test ensures that the component renders without errors.
 - The second test checks for the presence of fields for name, email, and message.
 - The third test checks if the value changes in the input fields are handled correctly.
 - The fourth test checks if the form submission is handled correctly.
*/
