import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ssrf } from './ssrf';

describe('Ssrf', () => {
  let component: Ssrf;
  let fixture: ComponentFixture<Ssrf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ssrf],
    }).compileComponents();

    fixture = TestBed.createComponent(Ssrf);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
