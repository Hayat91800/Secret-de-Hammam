import PublicForm from "../../components/form";
import Seo from "../../components/seo";

const Contact = () => {
	return (

		<>
			<Seo
				title="Contact"
				description="Nous contacter"
				url="/contact"
			/>
            
			<PublicForm
				title="Envoyez-nous un message"
				buttonText="Envoyer"
				type="contact"
			/>
		</>
	);
};

export default Contact;
