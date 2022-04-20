import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { NewDragonComponent } from './new-dragon.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('NewDragonComponent', () => {
  let component: NewDragonComponent;
  let fixture: ComponentFixture<NewDragonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDragonComponent ],
      imports: [SharedModule, HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDragonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
