import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Filteringpt2Component } from './filteringpt2.component';

describe('Filteringpt2Component', () => {
  let component: Filteringpt2Component;
  let fixture: ComponentFixture<Filteringpt2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Filteringpt2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Filteringpt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
