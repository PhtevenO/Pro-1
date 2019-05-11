import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPopComponent } from './add-new-pop.component';

describe('AddNewPopComponent', () => {
  let component: AddNewPopComponent;
  let fixture: ComponentFixture<AddNewPopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewPopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
