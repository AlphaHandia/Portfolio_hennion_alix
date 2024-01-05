import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ContactForm from "./index";

describe("ContactForm", () => {
  it("renders ContactForm correctly", async () => {
    render(<ContactForm />);

    // Remplir le formulaire avec des données de test
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "john.doe@example.com" } });
    fireEvent.change(screen.getByLabelText(/phone/i), { target: { value: "123456789" } });
    fireEvent.change(screen.getByLabelText(/subject/i), { target: { value: "General Inquiry" } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: "Hello, this is a test message." } });

    // Soumettre le formulaire
    fireEvent.click(screen.getByText(/submit/i));

    // Attendre que le message de confirmation soit affiché
    await waitFor(() => {
      expect(screen.getByText(/message sent/i)).toBeInTheDocument();
    });

    // Vérifier que le message de confirmation disparaît après avoir cliqué sur le bouton de fermeture
    fireEvent.click(screen.getByText(/close/i));
    expect(screen.queryByText(/message sent/i)).toBeNull();

    // Vous pouvez ajouter d'autres assertions si nécessaire
  });
});

// Explications en français
/*
 - Ce test vérifie que le composant ContactForm est rendu correctement, remplit le formulaire avec des données de test,
   soumet le formulaire, vérifie que le message de confirmation est affiché, puis vérifie que le message de confirmation
   disparaît après avoir cliqué sur le bouton de fermeture.
*/

// Explanations in English
/*
 - This test checks that the ContactForm component is rendered correctly, fills the form with test data,
   submits the form, checks that the confirmation message is displayed, and then checks that the confirmation message
   disappears after clicking the close button.
*/
