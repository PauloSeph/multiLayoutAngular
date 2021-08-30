import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-form-curso',
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.scss']
})
export class FormCursoComponent implements OnInit {

  public form!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private serviceHttp: CursosService,
    private route: ActivatedRoute
    ) { }

  submitted = false;

  ngOnInit(): void {

    // this.route.params
    // .pipe(
    //   map( (parametros: any) => {
    //     return parametros.id
    //   }),
    //   switchMap(id => {
    //     return this.serviceHttp.getById(id)
    //   })
    // )
    // .subscribe( (curso: any) => {
    //   this.updateForm(curso)
    // })

    const curso = this.route.snapshot.data.curso;


    this.form = this.formbuilder.group({
      id: [curso.id],
      nome: [curso.nome,
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

    if(this.form.valid){

      let msgSucess = 'Curso criado com sucesso';
      let msgErro = 'Erro ao criar curso, tente novamente'
      if(this.form.value.id){
        msgSucess = 'Curso Atualizado com Sucesso!';
        msgErro = 'Erro ao atualizar curso, tente novamente'
      }

      this.serviceHttp.save(this.form.value).subscribe(
        sucesso => {console.log(msgSucess)},
        error => {console.log(msgErro)}
      )
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset()

  }

  hasError(campo: any) {
    return this.form.get(campo)?.errors
  }

  // updateForm( curso: any) {
  //   this.form.patchValue({
  //     id: curso.id,
  //     nome: curso.nome
  //   })
  // }
}
