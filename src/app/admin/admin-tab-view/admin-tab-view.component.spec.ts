

/*
import { AdminTabViewComponent } from './admin-tab-view.component';

describe('AdminTabViewComponent', () => {
  let component: AdminTabViewComponent;
  let fixture: ComponentFixture<AdminTabViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTabViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTabViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});*/






import { ComponentFixture, TestBed } from '@angular/core/testing';
import {AdminTabViewComponent} from "./admin-tab-view.component";


describe('MainComponent', () => {
  let component: AdminTabViewComponent;
  let fixture: ComponentFixture<AdminTabViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminTabViewComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AdminTabViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
