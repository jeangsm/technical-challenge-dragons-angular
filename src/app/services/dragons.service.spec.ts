import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { DragonsService } from './dragons.service';

describe('DragonsService', () => {
  let service: DragonsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DragonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
