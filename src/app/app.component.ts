import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  article: Object;

  constructor() {
    this.article = {
      title: "The Angular 2 screencast",
      description: 'The best way to learn angular 2'
    }
  }

}
