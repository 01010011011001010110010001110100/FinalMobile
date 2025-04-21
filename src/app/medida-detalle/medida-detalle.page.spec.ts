import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedidaDetallePage } from './medida-detalle.page';

describe('MedidaDetallePage', () => {
  let component: MedidaDetallePage;
  let fixture: ComponentFixture<MedidaDetallePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MedidaDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
