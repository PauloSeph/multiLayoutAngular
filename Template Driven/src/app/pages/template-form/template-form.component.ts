import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: '',
    email: ''
  }

  onSubmit(form: any) {
    this.http.post('enderecoServidor/formulario', JSON.stringify(form.value)).subscribe(dados => console.log(dados))

  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  public verificValidTouched(campo: any) {
    return !campo.valid && campo.touched
  }

  aplicCssError(campo: any) {
    return {
      'was-validated': this.verificValidTouched(campo)
    }
  }


  consultaCep(cep: any, formu: any): any {
    // Somente numeros, qualquer coisa diferente é transformado em stringvazia
    cep = cep.replace(/\D/g, '');

    let validacep: any

    // Expressão para validar numero e quantidade de digitos
    if (cep != "") {
      validacep = /^[0-9]{8}$/;

      // Validar o formato do CEP
      if(validacep.test(cep)) {
        this.http.get(`//viacep.com.br/ws/${cep}/json`)
        .subscribe(dados => {

          dados.toString
          console.log('convertido')
          console.log(dados)
        }
          // this.populaDadosForm(dados, formu)


          );
      }
    }
  }

  populaDadosForm(dados: any, formulario: any) {
    formulario.setValue({
      nome: formulario.value.nome,
      email: formulario.value.email,
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        numero: '',
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.cidade,
        estado: dados.estado
      }
    });

    formulario.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.cidade,
        estado: dados.estado
      }
    });
  }
}
