import Form from "../../components/formulaire";
import Seo from "../../components/seo";

const Register = () => {
    return (
        <>
            <Seo 
                title="Inscription" 
                description="Créez votre compte pour profiter de nos rituels de soin" 
                url="/register" 
            />
            
            <Form 
                title="Devenir Membre" 
                buttonText="Créer mon compte" 
                type="register" 
            />
        </>
    );
};

export default Register;