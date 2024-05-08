import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieBaseListComponent } from './movie-base-list.component';

describe('MovieBaseListComponent', () => {
  let component: MovieBaseListComponent;
  let fixture: ComponentFixture<MovieBaseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieBaseListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieBaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
