import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { SocioDTO } from "../../models/socio.dto";
import { Observable } from "rxjs/Rx";
import { StorageService } from "../storage.service";

@Injectable()
export class SocioService {

    constructor(public http : HttpClient, public storage : StorageService) {

    }

    findAll() : Observable<SocioDTO[]> {
        return this.http.get<SocioDTO[]>(`${API_CONFIG.baseUrl}/socios`);
    }

    findByUsername(username: string) : Observable<SocioDTO> {
        return this.http.get<SocioDTO>(
            `${API_CONFIG.baseUrl}/socios/usuario?value=${username}`);
    }

    getImageFromBucket(id : string) : Observable<any> {
        let url = `${API_CONFIG.bucketBaseUrl}/part${id}.jpg`
        return this.http.get(url, {responseType : 'blob'});
    }
}