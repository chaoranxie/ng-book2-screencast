import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sources: Observable<any>;

  constructor(
    private articleService: ArticleService
  ) {
    this.sources = this.articleService.sources;
  }

  ngOnInit() {
    this.articleService.getSources();
  }
}
