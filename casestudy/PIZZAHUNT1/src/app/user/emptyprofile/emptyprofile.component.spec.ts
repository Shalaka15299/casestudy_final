import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyprofileComponent } from './emptyprofile.component';

describe('EmptyprofileComponent', () => {
  let component: EmptyprofileComponent;
  let fixture: ComponentFixture<EmptyprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
