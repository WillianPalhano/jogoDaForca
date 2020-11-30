import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModoDeJogoComponent } from './modo-de-jogo.component';

describe('ModoDeJogoComponent', () => {
  let component: ModoDeJogoComponent;
  let fixture: ComponentFixture<ModoDeJogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModoDeJogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModoDeJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
