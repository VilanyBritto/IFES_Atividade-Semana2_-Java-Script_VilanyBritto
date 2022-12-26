const prompt = require('prompt-sync')();

idade = parseInt(prompt("Digite sua idade: "));
tempo = parseInt(prompt("Digite seu tempo de serviço: "));
salario = parseFloat(prompt("Digite seu salário: "));

if ((idade >= 65) || (tempo >= 30) || (idade >= 60 && tempo >= 25)){
  
  if (tempo > 20){
    var resultado = salario * 0.8 
      console.log("\nSeu salário de aposentadoria poderá ser de até R$:",resultado, "\n");
    
        if (resultado < 1212.00){
          console.log("Importante: Por regra, seu salário foi ajustado para R$: 1.212,00 \n");
          }
        else if (resultado > 7087.22){
          console.log("Importante: Por regra, seu salário não poderá ser maior que R$: 7.087,22 \n");
        }
  }
  else if (tempo <= 20) {
   var resultado = salario * 0.6 
      console.log("\nSeu salário de aposentadoria poderá ser de até R$:",resultado,"\n");
    
        if (resultado < 1212.00){
          console.log("Importante: Por regra, seu salário foi ajustado para R$: 1.212,00 \n");
        }
        else if (resultado > 7087.22){
          console.log("Importante: Por regra, seu salário não poderá ser maior que R$: 7.087,22 \n");
        }     
  }
}
else {
  console.log("\nNo momento, você não pode se aposentar!\n\n");
}