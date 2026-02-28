import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Buttonbanner } from './buttonbanner';

describe('Buttonbanner', () => {
  let component: Buttonbanner;
  let fixture: ComponentFixture<Buttonbanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Buttonbanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Buttonbanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
