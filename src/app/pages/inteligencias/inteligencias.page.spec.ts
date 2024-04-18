import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InteligenciasPage } from './inteligencias.page';

describe('InteligenciasPage', () => {
  let component: InteligenciasPage;
  let fixture: ComponentFixture<InteligenciasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InteligenciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
