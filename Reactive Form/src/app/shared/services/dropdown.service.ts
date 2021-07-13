import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EstadoBrasileiro } from '../models/estado-brasileiro';

@Injectable()
export class DropdownService {

  constructor(private http: HttpClient) { }

  getEstadosBr() {
    return this.http.get('assets/dados/estadosbr.json');
  }
}
