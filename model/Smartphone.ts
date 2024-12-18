import { ProdutoEletronico } from "./ProdutoEletronico";

export class Smartphone extends ProdutoEletronico {
  private _modelo: string;
  private _tamanhoTela: string;
  private _cor: string;

  constructor(
    id: number,
    nome: string,
    tipo: number,
    marca: string,
    preco: number,
    armazenamento: string,
    memoriaRam: string,
    sistemaOperacional: string,
    descricao: string,
    modelo: string,
    tamanhoTela: string,
    cor: string
  ) {
    super(
      id,
      nome,
      tipo,
      marca,
      preco,
      armazenamento,
      memoriaRam,
      sistemaOperacional,
      descricao
    );
    this._modelo = modelo;
    this._tamanhoTela = tamanhoTela;
    this._cor = cor;
  }

  public get modelo(): string {
    return this._modelo;
  }

  public get tamanhoTela(): string {
    return this._tamanhoTela;
  }

  public get cor(): string {
    return this._cor;
  }

  public set modelo(value: string) {
    this._modelo = value;
  }

  public set tamanhoTela(value: string) {
    this._tamanhoTela = value;
  }

  public set cor(value: string) {
    this._cor = value;
  }

  public visualizar(): void {
    super.visualizar();
    console.log(`Modelo: ${this._modelo}`);
    console.log(`Tamanho da tela: ${this._tamanhoTela}`);
    console.log(`Cor: ${this._cor}`);
  }
}
