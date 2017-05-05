import { Injectable } from '@angular/core';
import { Article } from "./article"
@Injectable()
export class ArticleService {

  constructor() { }

  public getArticles(): Promise<Article[]> {

    return new Promise( resolve => {

      setTimeout(() => {
        resolve([
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
              'The worse way to learn angular 3'
            ),
        ])
      }, 2000)
    })
  }
}
