import { HarryPotterService } from '../../core/services/harry-potter.service';
import { Filters, MovieSummary } from '../../core/interfaces/movie.interface';
import { FormsModule } from '@angular/forms';
import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MovieBaseListComponent } from './movie-base-list/movie-base-list.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
  standalone: true,
  imports: [FormsModule, RouterOutlet, MovieBaseListComponent]
})
export class MovieListComponent implements OnDestroy{

  movieListResponse: MovieSummary[] = [];
  movieListFiltered: MovieSummary[] = [];
  title: string = '';
  year: string = '';
  sub: Subscription;
  error: boolean = false;
  constructor(private _harryPotterService: HarryPotterService, private _router: Router){
    this.sub = this._harryPotterService.getMovieList().subscribe({
      next: (response: MovieSummary[]) => {
        this.movieListResponse = response;
        this.movieListFiltered = response;
      },
      error: () => {
        this.error = true;
      }
    })
  }

  search(params: Filters): void{ //TODO crear modelo para la busqueda
    this.movieListFiltered = this.movieListResponse.filter(data => {
      let year = (new Date(data.release_date)).getUTCFullYear().toString();
      if(data.title.toLowerCase().includes(params.title.toLowerCase()) && year.includes(params.year)){
        return true;
      }else{
        return false;
      }
    })
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }

  goToDetails(id: string){
    this._router.navigate([id]); // que sea un event emitter
  }
}
