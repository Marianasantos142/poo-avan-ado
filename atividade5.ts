class patinete {

    nome: string; 
    modelo: string;
    marca: string;


   
mostrarInformacoes() {
    console.log(`Patinete: ${this.nome}  ${this.modelo} ${this.marca}`)
  


   }

}

const pat = new patinete (); 

pat.nome = "Patinete da Joaninha"
pat.modelo = "ES260"
pat.marca = "Atrio"

pat.mostrarInformacoes()







