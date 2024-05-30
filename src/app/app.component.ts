import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  settings: any = {}

  public appPages = [
    { title: 'Introducción', url: '/introduccion', icon: 'star' },
    { title: 'Destacado', url: '/destacado', icon: 'images' },
    { title: 'Inteligencias', url: '/inteligencias', icon: 'body' },
    { title: 'Habilidades', url: '/habilidades', icon: 'body' }, 
  ];

  public labels = ['Introducción', 'Destacado', 'Inteligencias', 'Habilidades'];

  constructor() {}

  // cambio de settings
  updateSettings() {
    //console.log(this.settings.notifications);
  }
}
