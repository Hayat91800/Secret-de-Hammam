import Form from "../../components/formulaire";
import Seo from "../../components/seo";

const Contact = () => {
	return (

		<>
			<Seo
				title="Contact"
				description="Nous contacter"
				url="/contact"
			/>
            
			<Form
				title="Envoyez-nous un message"
				buttonText="Envoyer"
				type="contact"
			/>
		</>
	);
};

export default Contact;
