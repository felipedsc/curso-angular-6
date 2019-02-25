export class LoggingService {
  // public origem: string = "";

  //colocar nome no parametro?
  novaSituacaoDetectada(situacao: string) {
    // console.log(`${this.origem} - Uma nova situação foi detectada: ${situacao}`);
    console.log(`Uma nova situação foi detectada: ${situacao}`);
  }

}
