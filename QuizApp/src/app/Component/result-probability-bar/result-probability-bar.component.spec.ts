import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultProbabilityBarComponent } from './result-probability-bar.component';

describe('ResultProbabilityBarComponent', () => {
  let component: ResultProbabilityBarComponent;
  let fixture: ComponentFixture<ResultProbabilityBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultProbabilityBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultProbabilityBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
