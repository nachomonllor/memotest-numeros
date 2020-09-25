//import { Juego } from '../../clases/juego';

import { ListKeyManager } from '@angular/cdk/a11y';

export class JuegoPrimos  {
 // listaPrimos = [];

  // _timer:any;

  listaAleatorios: Array<number>;
  // tslint:disable-next-line: member-ordering
  estadoBotones: string[][] = [
    ['white', 'white', 'white', 'white'],
    ['white', 'white', 'white', 'white'],
    ['white', 'white', 'white', 'white'],
    ['white', 'white', 'white', 'white'],
   
  ];
  posiciones: number[][] = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    
  ];

  totalPrimos = 0;
  limite = 30;
  reloj = 25;
  nivel = 1;
  puntos = 0;
  maximo_puntaje = 0;
  //juego: Juego;
  // jugador:Jugador;

  constructor() {

    // clearInterval(this._timer);
    // this._timer = setInterval(() => this.contador(), 1000);
    //this.resetearColorBotones();
    this.initialize();
    this.ponerEnNegro();
  }
  initialize() {
    //  clearInterval(this._timer);
    // this._timer = setInterval(() => this.contador(), 1000);
    this.totalPrimos = 0;

    this.reloj = 30;

    let numerosDisponibles = new Array<number>();
    for(let i =0; i<8; i++) {
      numerosDisponibles.push(2);
    }

    for(let i =0; i<4; i++) {

      for(let j =0; j<4; j++) {
         let numeroAleatorio = Math.floor(Math.random() * 8) ; 
          console.log(numeroAleatorio);
          while( numerosDisponibles[ numeroAleatorio] <= 0 ) {
            numeroAleatorio = Math.floor(Math.random() * 8) ; 
          }
          this.posiciones[i][j] = numeroAleatorio + 1;
          numerosDisponibles[numeroAleatorio]--;
      }

    }
  }

  
  contador() {
    //clearInterval(myVar);
    this.reloj--;
    if (this.reloj <= 0) {
      this.nivel = 1;
      this.limite = 20;
      if (this.puntos > this.maximo_puntaje) {
        this.maximo_puntaje = this.puntos;
      }
      this.puntos = 0;
      //  clearInterval(this._timer);
     // this.resetearColorBotones();
      // alert('Se te acabo el tiempo');
      this.initialize();
    }
  }

 ponerEnNegro(){

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        this.estadoBotones[i][j] = 'black';
      }
    }
 }

  presion(fila: number, columna: number) {
   /*// if (this.listaPrimos.indexOf(this.posiciones[fila][columna]) >= 0) {
      this.estadoBotones[fila][columna] = 'white';
      this.totalPrimos--;
      this.puntos += 10;
      if (this.totalPrimos === 0) {
       // this.resetearColorBotones();
       // this.subirDeNivel();
        this.initialize();
      }
    } else {
      this.estadoBotones[fila][columna] = 'white';
      this.reloj -= 3; // los errores cuestan tiempo
    }
    */
   this.estadoBotones[fila][columna] = 'white';



  }




  


}
