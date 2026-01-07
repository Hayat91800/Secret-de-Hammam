import Form from "../../components/formulaire";
import Seo from "../../components/seo";

const Login = () => {
    return (
        <>
            <Seo 
                title="Connexion" 
                description="Connectez-vous à votre espace client" 
                url="/login" 
            />
            
            <Form 
                title="Mon Compte" 
                buttonText="Se connecter" 
                type="login" 
            />
        </>
    );
};

export default Login;
