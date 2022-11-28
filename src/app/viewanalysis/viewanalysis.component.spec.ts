import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewanalysisComponent } from './viewanalysis.component';

describe('ViewanalysisComponent', () => {
  let component: ViewanalysisComponent;
  let fixture: ComponentFixture<ViewanalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewanalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
