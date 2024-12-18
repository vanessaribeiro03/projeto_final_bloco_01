export abstract class ProdutoEletronico {
  private _id: number;
  private _nome: string;
  private _tipo: number;
  private _marca: string;
  private _preco: number;
  private _armazenamento: string;
  private _memoriaRam: string;
  private _sistemaOperacional: string;
  private _descricao: string;

  constructor(
    id: number,
    nome: string,
    tipo: number,
    marca: string,
    preco: number,
    armazenamento: string,
    memoriaRam: string,
    sistemaOperacional: string,
    descricao: string
  ) {
    this._id = id;
    this._nome = nome;
    this._tipo = tipo;
    this._marca = marca;
    this._preco = preco;
    this._armazenamento = armazenamento;
    this._memoriaRam = memoriaRam;
    this._sistemaOperacional = sistemaOperacional;
    this._descricao = descricao;
  }

  public get id(): number {
    return this._id;
  }

  public get nome(): string {
    return this._nome;
  }

  public get tipo(): number {
    return this._tipo;
  }

  public get marca(): string {
    return this._marca;
  }

  public get preco(): number {
    return this._preco;
  }

  public get armazenamento(): string {
    return this._armazenamento;
  }

  public get memoriaRam(): string {
    return this._memoriaRam;
  }

  public get sistemaOperacional(): string {
    return this._sistemaOperacional;
  }

  public get descricao(): string {
    return this._descricao;
  }

  public set id(value: number) {
    this._id = value;
  }

  public set nome(value: string) {
    this._nome = value;
  }

  public set tipo(value: number) {
    this._tipo = value;
  }

  public set marca(value: string) {
    this._marca = value;
  }

  public set preco(value: number) {
    this._preco = value;
  }

  public set armazenamento(value: string) {
    this._armazenamento = value;
  }

  public set memoriaRam(value: string) {
    this._memoriaRam = value;
  }

  public set sistemaOperacional(value: string) {
    this._sistemaOperacional = value;
  }

  public set descricao(value: string) {
    this._descricao = value;
  }

  public visualizar() {
    let tipo: string;

    switch (this._tipo) {
      case 1:
        tipo = "Notebook";
        break;

      case 2:
        tipo = "Smartphone";
        break;

      default:
        tipo = "Tipo inválido.";
        break;
    }

    console.log("\n*******************************************");
    console.log("               Detalhes do produto          ");
    console.log("*******************************************");
    console.log(`Id: ${this._id}`);
    console.log(`Nome: ${this._nome}`);
    console.log(`Tipo: ${tipo}`);
    console.log(`Marca: ${this._marca}`);
    console.log(`Preço: ${this._preco}`);
    console.log(`Armazenamento: ${this._armazenamento}`);
    console.log(`Memória RAM: ${this._memoriaRam}`);
    console.log(`Sistema Operacional: ${this._sistemaOperacional}`);
    console.log(`Descrição: ${this._descricao}`);
  }
}
