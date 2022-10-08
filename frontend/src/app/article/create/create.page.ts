import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})

export class CreatePage implements OnInit {

  articleForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private articleService: ArticleService
  ) {
    this.articleForm = this.formBuilder.group({
      name: [''],
      price: [''],
      collection: ['']
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.articleService.createArticle(this.articleForm.value)
      .subscribe(response => {
        this.zone.run(() => {
          this.articleForm.reset();
          this.router.navigate(['/list']);
        });
      });
  }

  goBack() {
    this.router.navigateByUrl("/home");
  }

}
