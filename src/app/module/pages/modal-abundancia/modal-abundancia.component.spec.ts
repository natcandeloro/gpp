import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAbundanciaComponent } from './modal-abundancia.component';

describe('ModalAbundanciaComponent', () => {
  let component: ModalAbundanciaComponent;
  let fixture: ComponentFixture<ModalAbundanciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalAbundanciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalAbundanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
