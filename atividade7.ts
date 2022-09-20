class paciente {

nome: string;
idade: number;
enfermaria: number;
leito: number;

mostrarInformacoes(){
   console.log(`paciente: ${this.nome} ${this.idade} ${this.enfermaria} ${this.leito}`)


  }

}
  const pac = new paciente ();

  pac.nome = "Maria"
  pac.idade = 29
  pac.enfermaria = 26
  pac.leito = 24

  pac.mostrarInformacoes()