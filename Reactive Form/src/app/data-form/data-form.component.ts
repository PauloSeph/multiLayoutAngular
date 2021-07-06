import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss'],
})
export class DataFormComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    // this.formulario = new FormGroup({
    //   endereco: new FormGroup({
    //     cep: new FormControl(null),
    //     numero: new FormControl(null),
    //     complemento: new FormControl(null)
    //   })
    // })

    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required],
      }),
    });
  }

  onSubmit() {
    console.log(this.formulario.value);

    this.http
      .post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .subscribe(
        (dados) => {
          console.log(dados);
          // this.resetar();
        },
        (error: any) => alert('Erro')
      );
  }

  resetar() {
    this.formulario.reset();
  }

  public verificValidTouched(campo: string): any {
    return (
      !this.formulario.get(campo)?.valid && this.formulario.get(campo)?.touched
    );
  }

  verificaEmailInvalid() {
    let campoEmail = this.formulario.get('email');

    if (campoEmail?.errors) {
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }

  aplicaCssError(campo: string) {
    return {
      'was-validated': this.verificValidTouched(campo),
    };
  }

  consultaCep(): any {
    let cep = this.formulario.get('endereco.cep')?.value;

    // Somente numeros, qualquer coisa diferente é transformado em stringvazia
    cep = cep.replace(/\D/g, '');

    let validacep: any;

    // Expressão para validar numero e quantidade de digitos
    if (cep != '') {
      validacep = /^[0-9]{8}$/;

      // Validar o formato do CEP
      if (validacep.test(cep)) {
        this.resetaDadosForm();
        this.http
          .get(`//viacep.com.br/ws/${cep}/json`)
          .subscribe((dados) => this.populaDadosForm(dados));
      }
    }
  }

  populaDadosForm(dados: any) {
    this.formulario.patchValue({
      endereco: {
        rua: dados.logradouro,
        // cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.cidade,
        estado: dados.estado,
      },
    });
    this.formulario.get('nome')?.setValue('joaquin')
  }

  resetaDadosForm() {
    this.formulario.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null,
      },
    });

  }
}
