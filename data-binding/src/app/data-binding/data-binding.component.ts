import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  url: string = 'https://www.totvs.com/';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/400/200/nature';

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
