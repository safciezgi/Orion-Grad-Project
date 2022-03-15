import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePAgeComponent } from './welcome-page.component';

describe('WelcomePAgeComponent', () => {
  let component: WelcomePAgeComponent;
  let fixture: ComponentFixture<WelcomePAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomePAgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomePAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
