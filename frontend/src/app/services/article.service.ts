import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {

  endPoint = "http://localhost:8080/api/article";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  getArticles() {
    return this.httpClient.get(this.endPoint);
  }

  createArticles(article, blob) {
    let formData = new FormData();
    formData.append("name", article.name);
    formData.append("price", article.price);
    formData.append("collection", article.collection);
    formData.append("file", blob);

    return this.httpClient.post(this.endPoint, formData);
  }

  updateArticle(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.endPoint}/${id}`, data);
  }
  deleteArticle(id: any): Observable<any> {
    return this.httpClient.delete(`${this.endPoint}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.httpClient.delete(this.endPoint);
  }
}
