import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HabilidadesPage } from './habilidades.page';

describe('HabilidadesPage', () => {
  let component: HabilidadesPage;
  let fixture: ComponentFixture<HabilidadesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilidadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
