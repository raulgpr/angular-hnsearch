import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../models/Article';
import { HackernewsService } from '../../services/hackernews.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  
  @Input() searchText: string;
  loaded: boolean = false;
  topic: string;
  articles: Article[];

  constructor(private hackernewsService: HackernewsService) { }

  ngOnInit() {
  }

  searchArticles(searchText: string){
    this.hackernewsService.getArticlesByTopic(searchText).subscribe(articles => {
      //console.log(articles);
      this.topic = searchText;
      this.articles = articles;
      this.loaded = true;
    });
  }

  searchArticlesPagination(page: string){
    this.hackernewsService.getArticlesByTopicAndPage(this.topic, page).subscribe(articles => {
      //console.log(articles);
      this.articles = articles;
      this.loaded = true;
    });
  }

}
