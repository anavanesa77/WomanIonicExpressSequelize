import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {

  endpoint = "http://localhost:8080/api/article";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }


  getArticles() {
    return this.httpClient.get(this.endpoint);
  }

  // getArticle(id) {
  //   return this.httpClient.get(this.endpoint + '/' + id);
  // }

  // createArticle(article: ArticleService): Observable<any> {
  //   return this.httpClient.post(this.endpoint, article, this.httpOptions);
  // }

  createArticle(article: ArticleService): Observable<any> {
    return this.httpClient.post(this.endpoint, article, this.httpOptions);
  }

  // updateArticle(id, article): Observable<any> {
  //   let valores: string;
  //   valores = this.endpoint + '/' + id;
  //   console.log('Service ruta=' + valores);
  //   return this.httpClient.put(this.endpoint + '/' + id, JSON.stringify({ ...article }), this.httpOptions);
  // }

  // deleteArticle(id) {
  //   console.log(this.endpoint + '/' + id, this.httpOptions);
  //   return this.httpClient.delete(this.endpoint + '/' + id, this.httpOptions);
  // }

}