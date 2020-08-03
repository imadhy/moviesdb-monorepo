import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieSearch, Movie } from '@monorepo-project/data';
import { OmdbService } from '../omdb.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'monorepo-project-movie-carrousel',
  templateUrl: './movie-carrousel.component.html',
  styleUrls: ['./movie-carrousel.component.css']
})
export class MovieCarrouselComponent implements OnInit{
  @Input() listOfMovies: MovieSearch[];
  @Output() selectedElement = new EventEmitter<Observable<Movie>>();

  constructor(private omdb: OmdbService) {}

  ngOnInit() {}

  selectElement(e: MovieSearch) {
    this.selectedElement.emit(this.omdb.getMovie(e.id));
  }
}
