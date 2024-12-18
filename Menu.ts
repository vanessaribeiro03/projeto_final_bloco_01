import readlinesync = require("readline-sync");

export function main() {
  let opcao: number;

  while (true) {
    console.log("\n------------------------------------------");
    console.log("          E-commerce Eletrônico            ");
    console.log("-------------------------------------------");
    console.log("                                           ");
    console.log("      1 - Listar todos os Produtos         ");
    console.log("      2 - Listar Produto pelo Id           ");
    console.log("      3 - Cadastrar Produto                ");
    console.log("      4 - Atualizar Produto                ");
    console.log("      5 - Deletar Produto                  ");
    console.log("      0 - Sair                             ");
    console.log("                                           ");
    console.log("-------------------------------------------");
    console.log("\nEntre com a opção desejada: ");

    opcao = readlinesync.questionInt();

    if (opcao === 0) {
      console.log("\nAté a proxima!");
      sobre();
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log("\n\nLista de todos os Produtos.\n\n");
        break;

      case 2:
        console.log("\n\nConsultar dados do Produto por Id.\n\n");
        break;

      case 3:
        console.log("\n\nCadastrar Produto.\n\n");

        break;

      case 4:
        console.log("\n\nAtualizar dados do Produto.\n\n");
        break;

      case 5:
        console.log('\n\n Deletar um Produto.\n\n');
        break;

      default:
        console.log(
          "Por favor, escolha um opção entre 1 e 5. Ou aperte 0 para sair."
        );
    }
  }

  function sobre(): void{
    console.log('\n*****************************************************')
	console.log('Projeto Desenvolvido por: Vanessa Ribeiro')
	console.log('Generation Brasil - vanessas@genstudents.org')
	console.log('https://github.com/vanessaribeiro03')
	console.log('*****************************************************')
  }
}

main();
