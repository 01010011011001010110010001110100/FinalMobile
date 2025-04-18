import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlberguesPage } from './albergues.page';

describe('AlberguesPage', () => {
  let component: AlberguesPage;
  let fixture: ComponentFixture<AlberguesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlberguesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
