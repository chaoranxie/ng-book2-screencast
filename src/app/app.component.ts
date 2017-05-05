import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Object[];

  constructor() {
    this.articles = [
      {
      title: "The Angular 2 screencast",
      description: 'The best way to learn angular 2'
      },
      {
      title: "The Angular 3 screencast",
      description: 'The best way to learn angular 3'
      },
      {
      title: "The Angular 4 screencast",
      description: 'The best way to learn angular 4'
      },
    ]
  }

}
