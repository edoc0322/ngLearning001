import { Pipe, PipeTransform } from '@angular/core';
import { Article } from './article';
import { DataService } from './data.service';

@Pipe({
  name: 'filterArticle'
})
export class FilterArticlePipe implements PipeTransform {
  constructor(private articleService: DataService) {

  }

  transform(value: Article[], keyword: string): Article[] {
    return this.articleService.filterArticles(value, keyword);
  }

}
