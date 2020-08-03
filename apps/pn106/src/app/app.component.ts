import { Component, OnInit } from '@angular/core';
import { MovieSearch, Movie } from '@monorepo-project/data';
import { Observable } from 'rxjs';

@Component({
  selector: 'monorepo-project-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  moviesResult$: Observable<MovieSearch[]>;
  selectedMovie$: Observable<Movie>;

  ngOnInit() {}

  moviesResult(qResult$: Observable<MovieSearch[]>) {
    this.moviesResult$ = qResult$;
  }

  setMovie(e: Observable<Movie>) {
    this.selectedMovie$ = e;
  }
}
