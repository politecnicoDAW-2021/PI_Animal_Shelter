import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalIndividualComponent } from './animal-individual.component';

describe('AnimalIndividualComponent', () => {
  let component: AnimalIndividualComponent;
  let fixture: ComponentFixture<AnimalIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalIndividualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
