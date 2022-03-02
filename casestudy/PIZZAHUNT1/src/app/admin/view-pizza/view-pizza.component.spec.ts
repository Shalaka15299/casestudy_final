import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPizzaComponent } from './view-pizza.component';

describe('ViewPizzaComponent', () => {
  let component: ViewPizzaComponent;
  let fixture: ComponentFixture<ViewPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
