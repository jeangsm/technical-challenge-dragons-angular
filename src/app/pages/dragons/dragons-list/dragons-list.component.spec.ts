import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/shared/shared.module';

import { DragonsListComponent } from './dragons-list.component';

describe('DragonsListComponent', () => {
  let component: DragonsListComponent;
  let fixture: ComponentFixture<DragonsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragonsListComponent ],
      imports: [HttpClientTestingModule, SharedModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
