import { Injectable } from '@angular/core';
import { apiConfig } from './api.config';
import { HttpClient } from '@angular/common/http';
import { MovieSearch, Movie } from '@monorepo-project/data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {
  constructor(private http: HttpClient) {}

  searchMovie(query: string): Observable<MovieSearch[]> {
    const {
      apiKey,
      apiUrl,
      apiVersion,
      ressources,
      sousRessources,
      language
    } = apiConfig;

    const url = `${apiUrl}/${apiVersion}/${ressources.search}/${sousRessources.movie}`;
    const api = `?api_key=${apiKey}&language=${language.frLang}&query=${query}`;

    return this.http
      .get(url + api)
      .pipe(map((result: any) => result.results as MovieSearch[]));
  }

  searchShow(query: string): Observable<MovieSearch[]> {
    const {
      apiKey,
      apiUrl,
      apiVersion,
      ressources,
      sousRessources,
      language
    } = apiConfig;

    const url = `${apiUrl}/${apiVersion}/${ressources.search}/${sousRessources.movie}`;
    const api = `?api_key=${apiKey}&language=${language.frLang}&query=${query}`;

    return this.http.get<MovieSearch[]>(url + api);
  }

  getMovie(movieID: number): Observable<Movie> {
    const {
      apiKey,
      apiUrl,
      apiVersion,
      sousRessources,
      language
    } = apiConfig;

    const url = `${apiUrl}/${apiVersion}/${sousRessources.movie}`;
    const api = `/${movieID}?api_key=${apiKey}&language=${language.frLang}`;

    return this.http.get<Movie>(url + api);
  }
}
