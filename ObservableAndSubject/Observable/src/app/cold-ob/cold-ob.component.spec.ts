import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdObComponent } from './cold-ob.component';

describe('ColdObComponent', () => {
  let component: ColdObComponent;
  let fixture: ComponentFixture<ColdObComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColdObComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColdObComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
