import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  articles: any = [];

  constructor(
    private articleService: ArticleService,
    private router: Router,
  ) { }

  ngOnInit() { }

  ionViewDidEnter() {
    this.getAllArticles();
  }

  getAllArticles() {
    this.articleService.getArticles().subscribe(articles => {
      console.log(articles);
      this.articles = articles;
    })
  }

  goBack() {
    this.router.navigateByUrl("/article");
  }
}