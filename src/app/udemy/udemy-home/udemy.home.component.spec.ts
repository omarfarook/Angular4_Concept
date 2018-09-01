import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdemyHomeComponent } from './udemy.home.component';

describe('HomeComponent', () => {
  let component: UdemyHomeComponent;
  let fixture: ComponentFixture<UdemyHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UdemyHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdemyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
