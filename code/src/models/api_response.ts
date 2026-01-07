// T represente un type générique : type variable
// on utilise le T chaque fois que l'on doit typer quelque chose mais qu'on ne peut pas definir le type dans le sens ou cela peut être un string, un number, un array, un objet.......

type ApiResponse<T> = {
    status: number;
    message: string;
    // ? : optionnel
    data?: T;
};

export type { ApiResponse };
