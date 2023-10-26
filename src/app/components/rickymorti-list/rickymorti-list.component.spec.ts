import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickymortiListComponent } from './rickymorti-list.component';

describe('RickymortiListComponent', () => {
  let component: RickymortiListComponent;
  let fixture: ComponentFixture<RickymortiListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RickymortiListComponent]
    });
    fixture = TestBed.createComponent(RickymortiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
