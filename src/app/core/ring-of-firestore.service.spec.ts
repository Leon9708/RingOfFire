import { TestBed } from '@angular/core/testing';

import { RingOfFirestoreService } from './ring-of-firestore.service';

describe('RingOfFirestoreService', () => {
  let service: RingOfFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RingOfFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
