import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Piano';

  aplicarSonido(sonido: number): void {
    const audio = new Audio();
    audio.src = "../assets/sonidos/note" + sonido + ".wav";
    audio.load();
    audio.play();
  }
}
