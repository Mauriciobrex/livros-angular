import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroDados } from './livro-dados';

describe('LivroDados', () => {
  let component: LivroDados;
  let fixture: ComponentFixture<LivroDados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LivroDados]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivroDados);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
