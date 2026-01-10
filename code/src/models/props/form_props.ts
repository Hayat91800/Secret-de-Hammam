type FormProps = {
    // Reprendre strictement le nom des props définis sur le composant
    title: string;
    buttonText: string;
    type: "contact" | "login" | "register" | "product";
};

export type { FormProps };