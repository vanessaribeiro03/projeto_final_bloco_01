import { ProdutoEletronico } from "../model/ProdutoEletronico";
import { ProdutoEletronicoRepository } from "../repository/ProdutoEletronicoRepository";

export class ProdutoEletronicoController
  implements ProdutoEletronicoRepository
{
  
  private listaProdutos = new Array<ProdutoEletronico>();

  public numero: number = 0;

  listarTodos(): void {
    if(this.listaProdutos.length === 0){
        console.log('Não possui produtos na lista.');
    }
    this.listaProdutos.forEach((produto) => produto.visualizar());
  }

  procurarPorTipo(tipo: number): void {
    let tipoEncontrado = this.listaProdutos.filter(produto => produto.tipo === tipo);

    if(tipoEncontrado.length > 0){
        tipoEncontrado.forEach(produto => produto.visualizar())
    }else{
        console.log('Nenhum produto do tipo informado foi encontrado.');
    }
}

  procurarPorId(id: number): void {
    const produtoEncontrado = this.encontrarProduto(id);

    if (produtoEncontrado !== null) {
      produtoEncontrado.visualizar();
    } else {
      console.log(`\nProduto de id ${id} não encontrado.`);
    }
  }

  cadastrar(produto: ProdutoEletronico): void {
    this.listaProdutos.push(produto);
    console.log("Produto cadastrado com sucesso!");
  }

  atualizar(produto: ProdutoEletronico): void {
    const produtoEncontrado = this.encontrarProduto(produto.id);

    if (produtoEncontrado !== null) {
        this.listaProdutos[this.listaProdutos.indexOf(produtoEncontrado)] = produto;
        console.log('Produto atualizado com sucesso!');
    } else {
      console.log(`Produto de id ${produto.id} não encontrado para atualizar.`);
    }
  }

  deletar(id: number): void {
    const produtoEncontrado = this.encontrarProduto(id);

    if (produtoEncontrado !== null) {
      this.listaProdutos.splice(
        this.listaProdutos.indexOf(produtoEncontrado),
        1
      );

      console.log(`\nProduto de id ${id} deletado.`);
      
    } else {
      console.log(`\nProduto de id ${id} não encontrado.`);
    }
  }

  public gerarNumero(): number {
    return ++this.numero;
  }

  public encontrarProduto(id: number): ProdutoEletronico | null {
    return this.listaProdutos.find((produto) => produto.id === id) || null;
  }
}
