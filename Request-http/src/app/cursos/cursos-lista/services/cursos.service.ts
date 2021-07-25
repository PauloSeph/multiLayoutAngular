import { Curso } from './../curso';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = 'http://localhost:3001/cursos';

  constructor(private http: HttpClient){ }

  public lista() {
    return this.http.get<Curso[]>(this.API).pipe(
      tap(console.log)
    );
  }
}


