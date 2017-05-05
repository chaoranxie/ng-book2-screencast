import { Component } from '@angular/core';
import { Article } from './article';
import { ArticleService } from './article.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor(
    private articleService: ArticleService,
  ) {
    this.articles = [
      new Article(
         "The Angular 1 screencast",
        'The best way to learn angular 1',
        10,
      ),
      new Article(
         "The Angular 2 screencast",
        'The best way to learn angular 2',
        5
      ),
      new Article(
         "The Angular 3 screencast",
        'The best way to learn angular 3'
      ),
    ]
  }

}
