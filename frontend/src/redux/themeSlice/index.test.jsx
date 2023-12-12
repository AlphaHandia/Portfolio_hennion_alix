import themeReducer, { toggleTheme } from './themeSlice';

// Test du reducer
describe('themeReducer', () => {
  it('should handle toggleTheme', () => {
    // État initial
    const initialState = { currentTheme: 'cyber' };

    // Action toggleTheme
    const nextState = themeReducer(initialState, toggleTheme());

    // Vérification du nouvel état après l'action
    expect(nextState.currentTheme).toEqual('garden');
  });

});

// Test de l'action creator
describe('toggleTheme action creator', () => {
  it('should create the correct action', () => {
    // Action créée par l'action creator
    const action = toggleTheme();

    // Vérification du type d'action
    expect(action.type).toEqual('theme/toggleTheme');
  });
});

// Explications en français
/*
 - Le premier test vérifie si le reducer répond correctement à l'action toggleTheme en modifiant l'état actuel.
 - Le deuxième test vérifie si l'action creator toggleTheme crée l'action attendue avec le bon type.
*/

// Explanations in English
/*
 - The first test checks if the reducer correctly responds to the toggleTheme action by modifying the current state.
 - The second test checks if the toggleTheme action creator creates the expected action with the correct type.
*/
