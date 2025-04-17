import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCompromisoPersonalComponent } from './modal-compromiso-personal.component';

describe('ModalCompromisoPersonalComponent', () => {
  let component: ModalCompromisoPersonalComponent;
  let fixture: ComponentFixture<ModalCompromisoPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalCompromisoPersonalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalCompromisoPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
