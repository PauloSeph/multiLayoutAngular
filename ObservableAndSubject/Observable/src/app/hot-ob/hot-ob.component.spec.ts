import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotObComponent } from './hot-ob.component';

describe('HotObComponent', () => {
  let component: HotObComponent;
  let fixture: ComponentFixture<HotObComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotObComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotObComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
