// fs = file systeme

import fs from "node:fs/promises";
import { fileTypeFromFile } from "file-type";

//
// [
//   {
//     fieldname: 'image',
//     originalname: 'Argile_et_Rhassoul.png',
//     encoding: '7bit',
//     mimetype: 'image/png',
//     destination: 'public/img/products',
//     filename: 'bde194790217794769729886886c077b',
//     path: 'public/img/products/bde194790217794769729886886c077b',
//     size: 3468635
//   }
// ]

class FileService {
	// fonction qui renomme le fichier transferé en ajoutant l'extension
	// Cette fonction doit retourner le nom complet du fichier
	// C'est a nous de le faire pour des raisons de sécurité
	public rename = async (file: Express.Multer.File): Promise<string> => {
		// Ajouter l'extension au fichier
		const fullname = `${file.filename}.${(await fileTypeFromFile(file.path))?.ext}`;
		// console.log(fullname);
		// Renommer le fichier avec son nom complet
		await fs.rename(file.path, `${file.destination}/${fullname}`);
		// Retourner le nom complet
		return fullname;
	};
}

export default FileService;
