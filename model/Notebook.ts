import { ProdutoEletronico } from "./ProdutoEletronico";

export class Notebook extends ProdutoEletronico {
  private _processador: string;
  private _modeloPlacaVideo: string;

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
    processador: string,
    modeloPlacaVideo: string
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
    this._processador = processador;
    this._modeloPlacaVideo = modeloPlacaVideo;
  }

  public get processador(): string {
    return this._processador;
  }

  public get modeloPlacaVideo(): string {
    return this._modeloPlacaVideo;
  }

  public set processador(value: string) {
    this._processador = value;
  }

  public set modeloPlacaVideo(value: string) {
    this._modeloPlacaVideo = value;
  }

  public visualizar(): void {
    super.visualizar();
    console.log(`Processador: ${this._processador}`);
    console.log(`Modelo da Placa de Video: ${this._modeloPlacaVideo}`);
  }
}
