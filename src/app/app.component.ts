/*import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tarea_Angular';
}*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Este es el selector que se usa en el index.html
  template: `<h1>Hola Mundo con Angular</h1>`, // Aquí va el contenido directamente
  styles: []
})
export class AppComponent {}

