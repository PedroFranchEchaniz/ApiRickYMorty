import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickymortiDetailComponent } from './rickymorti-detail.component';

describe('RickymortiDetailComponent', () => {
  let component: RickymortiDetailComponent;
  let fixture: ComponentFixture<RickymortiDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RickymortiDetailComponent]
    });
    fixture = TestBed.createComponent(RickymortiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
