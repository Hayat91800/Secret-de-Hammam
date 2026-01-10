import PublicForm from "../../components/form";
import Seo from "../../components/seo";

const Register = () => {
    return (
        <>
            <Seo 
                title="Inscription" 
                description="Créez votre compte pour profiter de nos rituels de soin" 
                url="/register" 
            />
            
            <PublicForm 
                title="Devenir Membre" 
                buttonText="Créer mon compte" 
                type="register" 
            />
        </>
    );
};

export default Register;