import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaffoldDefaultComponent } from './scaffold-default.component';

describe('ScaffoldDefaultComponent', () => {
  let component: ScaffoldDefaultComponent;
  let fixture: ComponentFixture<ScaffoldDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScaffoldDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaffoldDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
