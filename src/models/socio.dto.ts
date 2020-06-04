import { CidadeDTO } from "./cidade.dto";

export interface SocioDTO {
    id : string;
    nome : string;
    cidade : CidadeDTO;
    status : string;
    cargo : string;
    imageUrl? : string;
}