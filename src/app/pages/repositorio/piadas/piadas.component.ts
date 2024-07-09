import { Component } from '@angular/core';
import { ApiChuckNorrisService } from '../../../services/api-chuck-norris.service';
import { TradutorService } from '../../../services/tradutor.service';

//Cria um tipo para receber os valores da piada
type Piada = {
  piada_ingles:string,
  piada_portugues:string
}

@Component({
  selector: 'app-piadas',
  templateUrl: './piadas.component.html',
  styleUrl: './piadas.component.scss'
})
export class PiadasComponent {

  piada:Piada = {
    piada_ingles:'Click one button to recive a joke',
    piada_portugues:'Clique em um botão para receber uma piada'
  }

  constructor(
    private chuckNorrisService:ApiChuckNorrisService,
    private tradutorService:TradutorService
  ){

  }

  buscaPiadaChuckNorris(){
    this.chuckNorrisService.buscaPiada().subscribe({
      next:(resposta)=>{
        this.piada.piada_ingles = resposta.value;
        this.traduzPiada(resposta.value,'en','pt');
      }
    })
  }

  buscaPiadaAleatoria(){

  }

  buscaPiadaProgramador(){

  }


  traduzPiada(piada:string,origem:string,destino:string){
    this.tradutorService.traduzir(piada,origem,destino).subscribe({
      next:(resposta)=>{
        this.piada.piada_portugues = resposta;
      }
    })
  }

}
