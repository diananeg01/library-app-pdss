import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSignUpComponent } from './detail-sign-up.component';

describe('DetailSignUpComponent', () => {
  let component: DetailSignUpComponent;
  let fixture: ComponentFixture<DetailSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailSignUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
