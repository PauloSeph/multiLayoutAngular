import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotobSubjectComponent } from './hotob-subject.component';

describe('HotobSubjectComponent', () => {
  let component: HotobSubjectComponent;
  let fixture: ComponentFixture<HotobSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotobSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotobSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
