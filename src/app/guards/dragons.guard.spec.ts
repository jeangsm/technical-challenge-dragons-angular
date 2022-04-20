import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DragonsGuard } from './dragons.guard';

describe('DragonsGuard', () => {
  let guard: DragonsGuard;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
    guard = TestBed.inject(DragonsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
