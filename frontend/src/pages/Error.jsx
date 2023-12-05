import NavBar from "../components/navbar";

import Footer from "../components/footer/index"
const Error = () => {
    return (
        <div>
            <NavBar/>
            <title>Erreur de Sécurité</title>
    <div class="error-container">
        <h1>Erreur de Sécurité</h1>
        <p>Oops ! Une erreur de sécurité s'est produite.</p>
        <p>Veuillez contacter l'administrateur du système.</p>
        <p>Code d'erreur : <span class="code">SECURITY-123</span></p>
        <p>Retourner à la <a href="/">page d'accueil</a>.</p>
    </div>
            <Footer/>
        </div>
    )
}
export default Error;