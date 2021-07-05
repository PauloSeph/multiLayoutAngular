import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit{

  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
    ){ }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]
     ],
      email: [null, [
        Validators.required,
        Validators.pattern(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )]],
    })
  }

  onSubmit(){
    console.log(this.formulario.value)

    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
    .subscribe(dados => {
      console.log(dados);
      // this.resetar();
    },
    (error: any) => alert('Erro'))
  }

  resetar() {
    this.formulario.reset()
  }


  public verificValidTouched(campo: any): any {
    return !this.formulario.get(campo)?.valid && this.formulario.get(campo)?.touched;
  }

  aplicaCssError(campo: any) {
    return {
      'was-validated': this.verificValidTouched(campo)
    }
  }



}
