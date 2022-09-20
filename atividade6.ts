class bancária {

  numeroConta: number
  numeroÃgencia: number
  numeroValidade: number

  mostrarInformacoes(){
      console.log(`bancária: ${this.numeroConta} ${this.numeroÃgencia} ${this.numeroValidade}`)


    }

}

  const ban = new bancária ();

  ban.numeroConta = 400943
  ban.numeroÃgencia = 74609
  ban.numeroValidade = 240625

  ban.mostrarInformacoes()

  

