import { Routes } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';

export const routes: Routes = [
    {
        path: ':idMovie',
        loadComponent: () => import('./components/movie-detail/movie-detail.component').then(mov => mov.MovieDetailComponent)
    },
    {
        path: '',
        component: MovieListComponent,
    }
];
