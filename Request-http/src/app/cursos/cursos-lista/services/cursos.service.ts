import { environment } from './../../../../environments/environment';
import { Curso } from './../curso';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, tap } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = `${environment.API}cursos`;

  constructor(private http: HttpClient){ }

  public lista() {
    return this.http.get<Curso[]>(this.API)
    .pipe(
      delay(2000),
      tap(console.log)
    );
  }
}


