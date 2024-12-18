import { ProdutoEletronico } from "../model/ProdutoEletronico";

export interface ProdutoEletronicoRepository{
    listarTodos(): void;
    procurarPorId(id: number): void;
    cadastrar(produto: ProdutoEletronico): void;
    atualizar(produto: ProdutoEletronico): void;
    deletar(id: number): void;
    procurarPorTipo(tipo: number): void;
}