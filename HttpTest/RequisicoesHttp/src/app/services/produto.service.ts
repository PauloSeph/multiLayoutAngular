import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../components/produtos/interface/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  urlAPI = 'http://localhost:3001/produtos'

  constructor(private http: HttpClient) { }

  // Post
  create(produto: Product): Observable<Product>{
    return this.http.post<Product>(this.urlAPI, produto)
  }


}
