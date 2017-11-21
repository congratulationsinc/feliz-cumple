import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {

  authorsFirstRow: any[];
  authorsSecondRow: any[];
  authorsThirdRow: any[];
  congrats: any[];

  constructor() {
    this.congrats = [
      {
        picture: './assets/img/felicitaciones/ray0.jpg',
        message: 'juauajuajauajua',
        author: 'Ray',
        authorPicture: './assets/img/faces/ray.jpg'
      },
      {
        picture: './assets/img/felicitaciones/ray1.jpg',
        message: 'Pasala bomba :P',
        author: 'Ray',
        authorPicture: './assets/img/faces/ray.jpg'
      },
      {
        picture: './assets/img/felicitaciones/ray2.jpg',
        message: 'jejeje',
        author: 'Ray',
        authorPicture: './assets/img/faces/ray.jpg'
      },
      {
        picture: './assets/img/felicitaciones/que-la-llama-no-se-apague.jpg',
        message: 'Que la llama nunca se acabe ba dum tsi xD',
        author: 'Piti',
        authorPicture: './assets/img/faces/piti.jpg'
      },
      {
        picture: './assets/img/felicitaciones/wuaperlan.jpg',
        message: 'Feliz Cumple Wuaperlan xD',
        author: 'Piti',
        authorPicture: './assets/img/faces/piti.jpg'
      },
      {
        picture: './assets/img/felicitaciones/piti3.jpg',
        message: 'lol xD',
        author: 'Piti',
        authorPicture: './assets/img/faces/piti.jpg'
      },
      {
        picture: './assets/img/felicitaciones/oveja1.jpg',
        message: 'Felicidades p&@$#/°s.',
        author: 'Oveja',
        authorPicture: './assets/img/faces/oveja.jpg'
      },
      {
        picture: './assets/img/felicitaciones/oveja2.jpg',
        message: 'Si me explayo y te digo lo que siento sería muy M&@$#/°s así que felicidades pinche p&@$#/°s :3 pásala bomba y chupa hasta morir p&@$#/°s te odio, digo te quiero XD tú me entiendes',
        author: 'Oveja',
        authorPicture: './assets/img/faces/oveja.jpg'
      },
      {
        picture: './assets/img/felicitaciones/oveja3.jpg',
        message: 'Seriamente: que todos tus anhelos se cumplan viejo mil felicidades !!!!!',
        author: 'Oveja',
        authorPicture: './assets/img/faces/oveja.jpg'
      },
      {
        picture: './assets/img/felicitaciones/les1.jpg',
        message: 'Erlan: feliz cumpleaños, espero que hoy sea un día diferente al resto lleno de alegría y mucha comida',
        author: 'Less',
        authorPicture: './assets/img/faces/les.jpg'
      },
      {
        picture: './assets/img/felicitaciones/les2.jpg',
        message: 'Deseo que todas tus metas q te propongas se cumplan',
        author: 'Less',
        authorPicture: './assets/img/faces/les.jpg'
      },
      {
        picture: './assets/img/felicitaciones/les3.jpg',
        message: 'No olvides que cuentas conmigo en todo momento atte: tu bff',
        author: 'Less',
        authorPicture: './assets/img/faces/les.jpg'
      },
      {
        picture: './assets/img/felicitaciones/griss1.jpg',
        message: '"Sé siempre tú a menos que puedas ser un pirata, entonces sé un pirata"',
        author: 'Griss',
        authorPicture: './assets/img/faces/griss.jpg'
      },
      {
        picture: './assets/img/felicitaciones/griss2.jpg',
        message: 'Feliz cumple muchacho',
        author: 'Griss',
        authorPicture: './assets/img/faces/griss.jpg'
      },
      {
        picture: './assets/img/felicitaciones/griss3.jpg',
        message: 'La morras quiere krippi krippi krippi krippi y luego las babys quieren kush kush kush kush.....',
        author: 'Griss',
        authorPicture: './assets/img/faces/griss.jpg'
      },
      {
        picture: './assets/img/felicitaciones/cami1.jpg',
        message: 'Feliz cumpleaños a ti, feliz cumpleaños ti, feliz cumpleaños erlancito feliz cumpleaños a ti!',
        author: 'Cami',
        authorPicture: './assets/img/faces/camila.jpg'
      },
      {
        picture: './assets/img/felicitaciones/cami2.jpg',
        message: 'Pues llego tu día!! Otro año más en el q pasamos momentos juntos, contándonos todo, riñendonos, dándonos consejos. Q más q desearte lo mejor del mundo muchachito :3 Te quiero muchisimooo',
        author: 'Cami',
        authorPicture: './assets/img/faces/camila.jpg'
      },
      {
        picture: './assets/img/felicitaciones/cami3.jpg',
        message: 'PD. Puede q t haga otra dedicatoria también',
        author: 'Cami',
        authorPicture: './assets/img/faces/camila.jpg'
      },
      {
        picture: './assets/img/felicitaciones/ale1.jpg',
        message: 'Felicidades bitchito otro cumpleaños juntos después d tantos!!',
        author: 'Alecita',
        authorPicture: './assets/img/faces/alecita.jpg'
      },
      {
        picture: './assets/img/felicitaciones/ale2.jpg',
        message: 'Yyyy ya estás viejo no bebas mucho...',
        author: 'Alecita',
        authorPicture: './assets/img/faces/alecita.jpg'
      },
      {
        picture: './assets/img/felicitaciones/ale3.jpg',
        message: 'yyyy te quiero un montón!!!!!!',
        author: 'Alecita',
        authorPicture: './assets/img/faces/alecita.jpg'
      },
      {
        picture: './assets/img/felicitaciones/mauri1.jpg',
        message: 'Muy feliz cumpleaños hermano! Eres grande! Te admiro mucho :)',
        author: 'Mauri',
        authorPicture: './assets/img/faces/mauri.jpg'
      },
      {
        picture: './assets/img/felicitaciones/mauri2.jpg',
        message: 'Hoy y siempre deseo para tí todo aquello que más anhele tu corazón, todo eso que te mereces. Se te quiere mi hermano!',
        author: 'Mauri',
        authorPicture: './assets/img/faces/mauri.jpg'
      },
      {
        picture: './assets/img/felicitaciones/mauri3.jpg',
        message: 'Espero de todo corazón te guste mucho este regalo :D',
        author: 'Mauri',
        authorPicture: './assets/img/faces/mauri.jpg'
      }
    ];

    this.authorsFirstRow = [
      {
        author: 'Cami',
        authorPicture: './assets/img/faces/camila.jpg'
      },
      {
        author: 'Less',
        authorPicture: './assets/img/faces/les.jpg'
      },
      {
        author: 'Alecita',
        authorPicture: './assets/img/faces/alecita.jpg'
      },
    ];

    this.authorsSecondRow = [
      {
        author: 'Piti',
        authorPicture: './assets/img/faces/piti.jpg'
      },
      {
        author: 'Ray',
        authorPicture: './assets/img/faces/ray.jpg'
      },
      {
        author: 'Oveja',
        authorPicture: './assets/img/faces/oveja.jpg'
      },
    ];

    this.authorsThirdRow = [
      {
        author: 'Griss',
        authorPicture: './assets/img/faces/griss.jpg'
      },
      {
        author: 'Mauri',
        authorPicture: './assets/img/faces/mauri.jpg'
      }
    ];
  }

  ngOnInit() { }

}
