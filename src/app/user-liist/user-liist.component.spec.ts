import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLiistComponent } from './user-liist.component';

describe('UserLiistComponent', () => {
  let component: UserLiistComponent;
  let fixture: ComponentFixture<UserLiistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLiistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLiistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
