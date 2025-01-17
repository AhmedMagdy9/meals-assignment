import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermealsComponent } from './intermeals.component';

describe('IntermealsComponent', () => {
  let component: IntermealsComponent;
  let fixture: ComponentFixture<IntermealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntermealsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntermealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
