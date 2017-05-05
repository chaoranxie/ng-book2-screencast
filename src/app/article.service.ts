import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import "rxjs/add/operator/toPromise"

import { Article } from "./article"

const baseUrl = "https://newsapi.org";
const newsApiKey = "522e3acb9c3b4c1685c3cc53f112430b";
@Injectable()
export class ArticleService {
  constructor(
    private http: Http
  ) { }

  public getArticles(): Promise<Article[]> {
    let params = new URLSearchParams();
    params.set('apiKey', newsApiKey);
    params.set('source', 'reddit-r-all');
    return this.http
            .get(`${baseUrl}/v1/articles`, {
              search: params
            })
            .toPromise()
            .then(resp => resp.json())
            .then(json => json.articles)
            .then(articles => {
              return articles.map(article => Article.fromJSON(article));
            })
  }
}
