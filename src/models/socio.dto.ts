import { Cidade } from "./cidade";

export interface SocioDTO {
    id : string;
    nome : string;
    cidade : Cidade;
    status : string;
    cargo : string;
    imageUrl? : string;
}