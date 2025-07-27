import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Thanks } from './thanks';

describe('Thanks', () => {
  let component: Thanks;
  let fixture: ComponentFixture<Thanks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Thanks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Thanks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
