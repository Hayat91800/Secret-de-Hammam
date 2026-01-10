import PublicForm from "../../components/form";
import Seo from "../../components/seo";

const Login = () => {
    return (
        <>
            <Seo 
                title="Connexion" 
                description="Connectez-vous à votre espace client" 
                url="/login" 
            />
            
            <PublicForm 
                title="Mon Compte" 
                buttonText="Se connecter" 
                type="login" 
            />
        </>
    );
};

export default Login;
