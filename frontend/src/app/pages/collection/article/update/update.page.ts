import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  formGroup: FormGroup;
  id:any;
  isSubmitted: boolean = false;
  capturedPhoto: string = "";
  alertController: any;

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private activedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private zone: NgZone,
    private photoService: PhotoService
  ) {
    this.id = this.activedRoute.snapshot.paramMap.get('id');
   }

   ionViewWillEnter() {
    this.formGroup.reset();
    this.isSubmitted = false;
    }
  
  ngOnInit(
  ) { 
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      collection: ['', [Validators.required]],
    })
  }

  get errorControl() {
    return this.formGroup.controls;
  }

  takePhoto() {
    this.photoService.takePhoto().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  pickImage() {
    this.photoService.pickImage().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  discardImage() {
    this.capturedPhoto = null;
  }

  async onSubmit() {
    this.deleteArticle(this.id);
    this.isSubmitted = true;
    if (!this.formGroup.valid) {
      console.log('Es necesario que rellene estos datos')
      return false;
    } else {
      let blob = null;
      if (this.capturedPhoto != "") {
        const response = await fetch(this.capturedPhoto);
        blob = await response.blob();
      }
      this.articleService.createArticles(this.formGroup.value, blob).subscribe(data => {
        console.log("Foto enviada");
        this.router.navigate(['/list']);
      })
    }
  }

  deleteArticle(id) {
    console.log('Id=' + id);
    this.articleService.deleteArticle(id).subscribe(() => {
      this.ionViewWillEnter();
      console.log('Articulo eliminado');
    });
  }

  updateArticle(id){
    this.deleteArticle(id);
    this.articleService.getArticles().subscribe((data) => {
      this.formGroup.setValue({
        name: data['name'],
        price: data['price'],
        collection: data['collection'],
        filename: data['filename'],
      })
    })
   }

   async presentAlert() {
    const alert = await this.alertController.create({
      header: '¡Atención!',
      message: 'El artículo se ha modificado',
      buttons: ['OK'],
    });

    await alert.present();
  }
  }
