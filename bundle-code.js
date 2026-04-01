const fs = require('fs');
const path = require('path');

// 1. Configuration des fichiers/dossiers à ignorer
const IGNORE_LIST = [
    'node_modules', '.git', 'dist', 'build', '.next', 
    'package-lock.json', 'yarn.lock', '.gitignore', '.env','mysql-data',  
    'venv', '.vscode'
];

// 2. Extensions de fichiers que nous voulons inclure
const ALLOWED_EXTENSIONS = ['.css', '.ts', '.tsx', '.js', '.jsx', , '.json', '.html', '.md'];

const outputFile = 'mon_projet_certification.md';

/**
 * Fonction principale qui parcourt les dossiers récursivement
 */
function generateMarkdown(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        // Si c'est un dossier et qu'il n'est pas dans la liste noire, on descend dedans
        if (stat.isDirectory()) {
            if (!IGNORE_LIST.includes(file)) {
                generateMarkdown(filePath, fileList);
            }
        } else {
            // Si c'est un fichier, on vérifie son extension
            const ext = path.extname(file);
            if (ALLOWED_EXTENSIONS.includes(ext) && !IGNORE_LIST.includes(file)) {
                const content = fs.readFileSync(filePath, 'utf8');
                const relativePath = path.relative(process.cwd(), filePath);
                
                // On formate le fichier pour le Markdown
                const markdownBlock = `\n---\n### FICHIER : ${relativePath}\n\n\`\`\`${ext.replace('.', '')}\n${content}\n\`\`\`\n`;
                fs.appendFileSync(outputFile, markdownBlock);
            }
        }
    });
}

// Nettoyage du fichier de sortie s'il existe déjà
if (fs.existsSync(outputFile)) fs.unlinkSync(outputFile);

fs.writeFileSync(outputFile, "# ANALYSE DU PROJET DWWM\n");
console.log("Extraction en cours...");
generateMarkdown('.');
console.log(`Terminé ! Votre fichier est prêt : ${outputFile}`);