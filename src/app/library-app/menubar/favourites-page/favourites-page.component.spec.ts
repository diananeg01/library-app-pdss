import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritesPageComponent } from './favourites-page.component';

describe('FavouritesPageComponent', () => {
  let component: FavouritesPageComponent;
  let fixture: ComponentFixture<FavouritesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouritesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouritesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
