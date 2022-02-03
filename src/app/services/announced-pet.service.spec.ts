import { TestBed } from '@angular/core/testing';

import { AnnouncedPetService } from './announced-pet.service';

describe('AnnouncedPetService', () => {
  let service: AnnouncedPetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnouncedPetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
