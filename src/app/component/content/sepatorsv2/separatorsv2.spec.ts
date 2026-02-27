import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Separators } from './separators';

describe('Separators', () => {
  let component: Separators;
  let fixture: ComponentFixture<Separators>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Separators]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Separators);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
