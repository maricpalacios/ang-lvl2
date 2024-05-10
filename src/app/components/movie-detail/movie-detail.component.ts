import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HarryPotterService } from '../../core/services/harry-potter.service';
import { CurrencyType, Movie } from '../../core/interfaces/movie.interface';
import { SharedModule } from '../../shared/shared.module';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css',
  standalone: true,
  imports: [SharedModule]
})
export class MovieDetailComponent implements OnDestroy {
  url: string = '';
  movie!: Movie;

  CurrencyType = CurrencyType;
  currency: string;
  sub: Subscription;
  error = false;

  constructor(private _activatedRoute: ActivatedRoute, private _harryPotterService: HarryPotterService, private _route: Router) {
    this.currency = CurrencyType.GBP;
    this.url = this._activatedRoute.snapshot.url[0].path;
    this.sub = this._harryPotterService.getMovieDetail(this.url).subscribe({
      next: (response: Movie) => {
        this.movie = response;
      },
      error: () => {
        this.error = true;
      }
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  back() {
    this._route.navigate(['/']);
  }
}
