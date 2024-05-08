import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, MovieSummary } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class HarryPotterService {

  localhostUrl = 'http://localhost:4200';
  baseUrl = 'http://' + window.location.hostname;

  constructor(private httpService: HttpClient) { }

  getMovieList(): Observable<MovieSummary[]> {
    return this.httpService.get<Movie[]>(this.localhostUrl + '/movies');
  }

  getMovieDetail(id: string): Observable<Movie> {
    return this.httpService.get<Movie>(this.localhostUrl + `/movies/${id}`);
  }
}
