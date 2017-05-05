import { Component } from '@angular/core';
import { Article } from './article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article(
         "The Angular 2 screencast",
        'The best way to learn angular 2'
      ),
      new Article(
         "The Angular 3 screencast",
        'The best way to learn angular 3'
      ),
    ]
  }

}
