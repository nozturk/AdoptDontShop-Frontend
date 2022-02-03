import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncedPetComponent } from './announced-pet.component';

describe('AnnouncedPetComponent', () => {
  let component: AnnouncedPetComponent;
  let fixture: ComponentFixture<AnnouncedPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnouncedPetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncedPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
