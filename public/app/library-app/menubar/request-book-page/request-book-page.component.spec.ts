import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestBookPageComponent } from './request-book-page.component';

describe('RequestBookPageComponent', () => {
  let component: RequestBookPageComponent;
  let fixture: ComponentFixture<RequestBookPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestBookPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestBookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
