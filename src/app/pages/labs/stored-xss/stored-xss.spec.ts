import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoredXss } from './stored-xss';

describe('StoredXss', () => {
  let component: StoredXss;
  let fixture: ComponentFixture<StoredXss>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoredXss],
    }).compileComponents();

    fixture = TestBed.createComponent(StoredXss);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
