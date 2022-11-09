import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.page.html',
  styleUrls: ['./administrator.page.scss'],
})
export class AdministratorPage implements OnInit {

  constructor(
    private articleService: ArticleService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  goToList() {
    this.router.navigateByUrl("/list");
  }

}

