import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  //@Input('article') article: Object;
  @Input() article: Object;
  constructor() { }

  ngOnInit() {
  }

}
