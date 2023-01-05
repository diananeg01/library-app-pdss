import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPanelComponent } from './user-panel.component';

describe('UserPanelComponent', () => {
  let component: UsersPanelComponent;
  let fixture: ComponentFixture<UsersPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
