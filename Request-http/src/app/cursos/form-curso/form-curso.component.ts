import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-curso',
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.scss']
})
export class FormCursoComponent implements OnInit {

  public form!: FormGroup;

  constructor(private formbuilder: FormBuilder) { }

  submitted = false;

  ngOnInit(): void {

    this.form = this.formbuilder.group({
      nome: [null,
        [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(250)
      ]
    ]
    })

  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value)
    if(this.form.valid){
      console.log('submit')
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset()

  }

  hasError(field: any) {
    let campoNome = this.form.get(field)

    return campoNome?.errors && campoNome.valid
  }
}
