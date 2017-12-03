import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildSubComponent } from './child-sub.component';

describe('ChildSubComponent', () => {
  let component: ChildSubComponent;
  let fixture: ComponentFixture<ChildSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
