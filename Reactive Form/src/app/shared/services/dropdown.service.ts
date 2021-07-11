import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DropdownService {

  constructor(private http: HttpClient) { }

  getEstadosBr() {
    let estado = this.http.get('assets/dados/estadosbr.json');
    return estado;
  }
}
