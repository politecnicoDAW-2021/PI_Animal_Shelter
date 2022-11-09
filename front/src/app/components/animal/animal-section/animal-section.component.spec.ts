import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalSectionComponent } from './animal-section.component';

describe('AnimalSectionComponent', () => {
  let component: AnimalSectionComponent;
  let fixture: ComponentFixture<AnimalSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
