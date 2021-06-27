import { map } from 'rxjs/Operators';
import { Article } from './article';
import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  articles: Article[] = [];

  title: string;
  subtitle: string;

  constructor(private dataSvc: DataService) {
    this.title = 'Harold';
    this.subtitle =
      'A place to share your <a href="http://www.google.com.tw">knowledge</a>.';
  }
  ngOnInit(): void {
    this.dataSvc
      .getArticles(this.title)
      .pipe(map(x=>x.articles))
      .subscribe((x) => (this.articles = x));
  }

  searchKeyword(input: string) {
    this.title = input;
    console.log(input);
    this.dataSvc
      .getArticles(input)
      .pipe(map(x=>x.articles))
      .subscribe((x) => (this.articles = x));
    console.log(this.articles);
  }
}
