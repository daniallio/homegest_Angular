import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpesaElencoComponent } from './spesa-elenco.component';

describe('SpesaElencoComponent', () => {
  let component: SpesaElencoComponent;
  let fixture: ComponentFixture<SpesaElencoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpesaElencoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpesaElencoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
