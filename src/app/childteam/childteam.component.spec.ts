import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildteamComponent } from './childteam.component';

describe('ChildteamComponent', () => {
  let component: ChildteamComponent;
  let fixture: ComponentFixture<ChildteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildteamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
