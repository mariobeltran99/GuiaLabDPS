import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumDetailComponent } from './scrum-detail.component';

describe('ScrumDetailComponent', () => {
  let component: ScrumDetailComponent;
  let fixture: ComponentFixture<ScrumDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrumDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrumDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
