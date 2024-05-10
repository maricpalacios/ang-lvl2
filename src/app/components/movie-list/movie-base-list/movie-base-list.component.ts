import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { CurrencyType, MovieSummary } from '../../../core/interfaces/movie.interface';

@Component({
  selector: 'app-movie-base-list',
  templateUrl: './movie-base-list.component.html',
  styleUrl: './movie-base-list.component.css',
  standalone: true,
  imports: [SharedModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieBaseListComponent {
  @Input() listData: MovieSummary[] = [];
  @Output() buttonAction = new EventEmitter();

  CurrencyType = CurrencyType;
  currency: string;

  constructor() {
    this.currency = CurrencyType.GBP;
  }

  action(id: string){
    this.buttonAction.emit(id);
  }
}
