import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieDetailsComponent } from './movie-details.component';

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    component.movie = {
      "adult": false,
      "backdrop_path": "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
      "belongs_to_collection": {
        "id": 86311,
        "name": "The Avengers Collection",
        "poster_path": "/yFSIUVTCvgYrpalUktulvk3Gi5Y.jpg",
        "backdrop_path": "/zuW6fOiusv4X9nnW3paHGfXcSll.jpg"
      },
      "budget": 356000000,
      "genres": [
        {
          "id": 12,
          "name": "Adventure"
        },
        {
          "id": 878,
          "name": "Science Fiction"
        },
        {
          "id": 28,
          "name": "Action"
        }
      ],
      "homepage": "https://www.marvel.com/movies/avengers-endgame",
      "id": 299534,
      "imdb_id": "tt4154796",
      "original_language": "en",
      "original_title": "Avengers: Endgame",
      "overview": "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
      "popularity": 47.374,
      "poster_path": "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      "production_companies": [
        {
          "id": 420,
          "logo_path": "/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
          "name": "Marvel Studios",
          "origin_country": "US"
        }
      ],
      "production_countries": [
        {
          "iso_3166_1": "US",
          "name": "United States of America"
        }
      ],
      "release_date": "2019-04-24",
      "revenue": 2797800564,
      "runtime": 181,
      "spoken_languages": [
        {
          "iso_639_1": "en",
          "name": "English"
        },
        {
          "iso_639_1": "ja",
          "name": "日本語"
        }
      ],
      "status": "Released",
      "tagline": "Part of the journey is the end.",
      "title": "Avengers: Endgame",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 9946
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
