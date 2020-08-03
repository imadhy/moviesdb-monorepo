import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '@monorepo-project/data';

@Component({
  selector: 'monorepo-project-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  @Input() movie: Movie;

  constructor() { }

  ngOnInit() {
  }

}
