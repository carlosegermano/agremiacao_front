import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { SocioDTO } from "../../models/socio.dto";
import { Observable } from "rxjs/Rx";

@Injectable()
export class SocioService {

    constructor(public http : HttpClient) {

    }

    findAll() : Observable<SocioDTO[]> {
        return this.http.get<SocioDTO[]>(`${API_CONFIG.baseUrl}/socios`);
    }
}