import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DragonsComponent } from './dragons.component';

describe('DragonsComponent', () => {
  let component: DragonsComponent;
  let fixture: ComponentFixture<DragonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragonsComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
