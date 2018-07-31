import { Injectable } from '@angular/core';
import { Article } from '../models/Article';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HackernewsService {

  serviceURL: string = 'https://hn.algolia.com/api/v1/search?query=%s&tags=story';
  articles: Article[];

  constructor(private http: HttpClient) { 
  }

  getArticlesByTopic(topic: string) : Observable<Article[]> {
    //console.log(this.serviceURL.replace("%s", topic));
    return this.http.get<Article[]>(this.serviceURL.replace("%s", topic));
  }
  
  getArticlesByTopicAndPage(topic: string, page: string) : Observable<Article[]> {
    console.log(this.serviceURL.replace("%s", topic)+"&page="+page);
    return this.http.get<Article[]>(this.serviceURL.replace("%s", topic)+"&page="+page);
  }
}

