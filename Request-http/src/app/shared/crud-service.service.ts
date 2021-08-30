import { HttpClient } from '@angular/common/http';
import { delay, take, tap } from 'rxjs/operators';


export class CrudServiceService<T> {

  constructor(
    protected http: HttpClient,
    private urlApi: any) {
  }

  get() {
    return this.http.get<T[]>(this.urlApi)
    .pipe(
      delay(1000),
      tap(console.log)
    )
  }

  getById(id: number | string) {
    return this.http.get<T>(`${this.urlApi}/${id}`)
    .pipe(
      take(1)
    )
  }

  post(curso: T){
    return this.http.post(this.urlApi, curso)
    .pipe(take(1))
  }

  update(curso: any | T){
    return this.http.put(`${this.urlApi}/${curso.id}`, curso)
    .pipe(take(1))
  }

  save(curso: any | T) {
    if(curso.id) {
      return this.update(curso)
    } else {
      return this.post(curso)
    }
  }

  delete(id: number | string) {
    return this.http.delete(`${this.urlApi}/${id}`)
    .pipe(take(1));
  }

}
