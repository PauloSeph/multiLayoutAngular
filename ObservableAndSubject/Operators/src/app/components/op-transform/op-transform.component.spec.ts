import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpTransformComponent } from './op-transform.component';

describe('OpTransformComponent', () => {
  let component: OpTransformComponent;
  let fixture: ComponentFixture<OpTransformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpTransformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpTransformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
