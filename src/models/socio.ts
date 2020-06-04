import { CidadeDTO } from "./cidade.dto";

export interface Socio {
    id : string;
    nome : string;
    dataNascimento : string;
    usuario : string;
    cidade : CidadeDTO;
    timeQueTorce : string;
    numeroDaCamisa : number;
    dataDaAssociacao : string;
    status : string;
    cargo : string;
}