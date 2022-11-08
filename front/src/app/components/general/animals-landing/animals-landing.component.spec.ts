import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsLandingComponent } from './animals-landing.component';

describe('AnimalsLandingComponent', () => {
  let component: AnimalsLandingComponent;
  let fixture: ComponentFixture<AnimalsLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalsLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
