import readlinesync = require("readline-sync");
import { ProdutoEletronicoController } from "./controller/ProdutoEletronicoController";
import { Notebook } from "./model/Notebook";
import { Smartphone } from "./model/Smartphone";

export function main() {
  let opcao, id, preco, tipo, tamanhoTela: number;
  let nome,
    marca,
    armazenamento,
    memoriaRam,
    sistemaOperacional,
    descricao,
    processador,
    modeloPlacaVideo,
    modelo,
    cor: string;
  const tipoProduto = ["Notebook", "Smartphone"];

  const produtoEletronico = new ProdutoEletronicoController();

  produtoEletronico.cadastrar(
    new Notebook(
      produtoEletronico.gerarNumero(),
      "Dell Inspiron 15",
      1,
      "Dell",
      4500.0,
      "512GB SSD",
      "16GB",
      "Windows 11",
      "Notebook com ótimo desempenho para trabalho e estudo.",
      "Intel Core i7",
      "NVIDIA GeForce MX450"
    )
  );
  
  produtoEletronico.cadastrar(
    new Notebook(
      produtoEletronico.gerarNumero(),
      "MacBook Air M2",
      1,
      "Apple",
      12000.0,
      "256GB SSD",
      "8GB",
      "macOS Ventura",
      "Notebook ultrafino com desempenho eficiente.",
      "Apple M2",
      "Gráficos integrados Apple"
    )
  );
  
  produtoEletronico.cadastrar(
    new Smartphone(
      produtoEletronico.gerarNumero(),
      "Samsung Galaxy S22",
      2,
      "Samsung",
      5000.0,
      "128GB",
      "8GB",
      "Android 12",
      "Smartphone premium com câmera avançada.",
      "SM-S901B/DS",
      6.1,
      "Preto"
    )
  );
  
  produtoEletronico.cadastrar(
    new Smartphone(
      produtoEletronico.gerarNumero(),
      "iPhone 14 Pro",
      2,
      "Apple",
      9500.0,
      "256GB",
      "6GB",
      "iOS 16",
      "Smartphone de alto desempenho com câmera profissional.",
      "A2890",
      6.1,
      "Roxo Escuro"
    )
  );
  

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

        produtoEletronico.listarTodos();
        break;

      case 2:
        console.log("\n\nConsultar dados do Produto por Id.\n\n");

        console.log("Digite o id do produto: ");
        id = readlinesync.questionInt("");

        produtoEletronico.procurarPorId(id);
        break;

      case 3:
        console.log("\n\nCadastrar Produto.\n\n");

        console.log("Digite o nome: ");
        nome = readlinesync.question("");

        console.log("Digite o tipo do produto: ");
        tipo = readlinesync.keyInSelect(tipoProduto, "", { cancel: false }) + 1;

        console.log("Digite a marca: ");
        marca = readlinesync.question("");

        console.log("Digite o preço: ");
        preco = readlinesync.questionFloat("");

        console.log("Digite o armazenamento: ");
        armazenamento = readlinesync.question("");

        console.log("Digite a memoria ram: ");
        memoriaRam = readlinesync.question("");

        console.log("Digite o sistema operacional: ");
        sistemaOperacional = readlinesync.question("");

        console.log("Digite a descricao: ");
        descricao = readlinesync.question("");

        switch (tipo) {
          case 1:
            console.log("Digite qual o processador: ");
            processador = readlinesync.question("");

            console.log("Digite qual o modelo da placa de video: ");
            modeloPlacaVideo = readlinesync.question("");

            produtoEletronico.cadastrar(
              new Notebook(
                produtoEletronico.gerarNumero(),
                nome,
                tipo,
                marca,
                preco,
                armazenamento,
                memoriaRam,
                sistemaOperacional,
                descricao,
                processador,
                modeloPlacaVideo
              )
            );
            break;

          case 2:
            console.log("Digite o modelo: ");
            modelo = readlinesync.question("");

            console.log("Digite o tamanho da tela: ");
            tamanhoTela = readlinesync.questionFloat("");

            console.log("Digite a cor: ");
            cor = readlinesync.question("");

            produtoEletronico.cadastrar(
              new Smartphone(
                produtoEletronico.gerarNumero(),
                nome,
                tipo,
                marca,
                preco,
                armazenamento,
                memoriaRam,
                sistemaOperacional,
                descricao,
                modelo,
                tamanhoTela,
                cor
              )
            );

            break;

          default:
            break;
        }

        break;

      case 4:
        console.log("\n\nAtualizar dados do Produto.\n\n");

        console.log("Digite o id do produto: ");
        id = readlinesync.questionInt("");

        let produtoEncontrado = produtoEletronico.encontrarProduto(id);

        if (produtoEncontrado !== null) {
          console.log("Digite o nome: ");
          nome = readlinesync.question("");

          console.log("Digite a marca: ");
          marca = readlinesync.question("");

          console.log("Digite o preço: ");
          preco = readlinesync.questionFloat("");

          console.log("Digite o armazenamento: ");
          armazenamento = readlinesync.question("");

          console.log("Digite a memoria ram: ");
          memoriaRam = readlinesync.question("");

          console.log("Digite o sistema operacional: ");
          sistemaOperacional = readlinesync.question("");

          console.log("Digite a descricao: ");
          descricao = readlinesync.question("");

          tipo = produtoEncontrado.tipo;

          switch (tipo) {
            case 1:
              console.log("Digite qual o processador: ");
              processador = readlinesync.question("");

              console.log("Digite qual o modelo da placa de video: ");
              modeloPlacaVideo = readlinesync.question("");

              produtoEletronico.atualizar(
                new Notebook(
                  id,
                  nome,
                  tipo,
                  marca,
                  preco,
                  armazenamento,
                  memoriaRam,
                  sistemaOperacional,
                  descricao,
                  processador,
                  modeloPlacaVideo
                )
              );
              break;

            case 2:
              console.log("Digite o modelo: ");
              modelo = readlinesync.question("");

              console.log("Digite o tamanho da tela: ");
              tamanhoTela = readlinesync.questionFloat("");

              console.log("Digite a cor: ");
              cor = readlinesync.question("");

              produtoEletronico.atualizar(
                new Smartphone(
                  id,
                  nome,
                  tipo,
                  marca,
                  preco,
                  armazenamento,
                  memoriaRam,
                  sistemaOperacional,
                  descricao,
                  modelo,
                  tamanhoTela,
                  cor
                )
              );

              break;

            default:
              break;
          }
        } else{
          console.log(`\nProduto de id ${id} não encontrado para atualizar.`);
        }
        break;

      case 5:
        console.log("\n\n Deletar um Produto.\n\n");

        console.log("Digite o id do produto: ");
        id = readlinesync.questionInt("");

        produtoEletronico.deletar(id);

        break;

      default:
        console.log(
          "Por favor, escolha um opção entre 1 e 5. Ou aperte 0 para sair."
        );
    }
  }

  function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Vanessa Ribeiro");
    console.log("Generation Brasil - vanessas@genstudents.org");
    console.log("https://github.com/vanessaribeiro03");
    console.log("*****************************************************");
  }
}

main();
