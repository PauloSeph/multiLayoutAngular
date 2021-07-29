import { GerandoDadosService } from './../gerando-dados.service';
import { Subject, Observer, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  constructor(private dataService: GerandoDadosService) { }

  connect(): void {
    this.dataService.dataObservable.connect()
  }



  ngOnInit(): void {

  }

}
