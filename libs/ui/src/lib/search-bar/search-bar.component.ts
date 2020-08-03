import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchType, MovieSearch } from '@monorepo-project/data';
import { Observable } from 'rxjs';
import { OmdbService } from '../omdb.service';

@Component({
  selector: 'monorepo-project-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Input() searchType: SearchType.M | SearchType.S = SearchType.M;
  @Output() moviesResult = new EventEmitter<Observable<MovieSearch[]>>();

  q: string; // Query

  constructor(private omdb: OmdbService) {}

  ngOnInit() {}

  searchMovie() {
    return this.searchType === SearchType.M
      ? this.moviesResult.emit(this.omdb.searchMovie(this.q))
      : this.moviesResult.emit(this.omdb.searchShow(this.q));
  }
}
