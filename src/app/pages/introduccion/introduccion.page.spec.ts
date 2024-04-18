import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntroduccionPage } from './introduccion.page';

describe('IntroduccionPage', () => {
  let component: IntroduccionPage;
  let fixture: ComponentFixture<IntroduccionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroduccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
