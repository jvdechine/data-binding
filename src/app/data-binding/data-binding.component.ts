import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  valorAtual = '';
  valorSalvo = '';
  nome:string = 'abc';
  constructor() { }

  botaoClicado(){
    alert('Teste');
  }

  onKeyUp(evento:KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }
  onEnter(valor){
    this.valorSalvo = valor;
  }

  ngOnInit() {
  }

}
