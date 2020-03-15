import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingLessonsComponent } from './upcoming-lessons.component';

describe('UpcomingLessonsComponent', () => {
  let component: UpcomingLessonsComponent;
  let fixture: ComponentFixture<UpcomingLessonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingLessonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
