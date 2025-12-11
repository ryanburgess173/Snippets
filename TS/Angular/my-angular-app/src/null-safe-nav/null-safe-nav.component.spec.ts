import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NullSafeNavComponent } from './null-safe-nav.component';

describe('NullSafeNavComponent', () => {
  let component: NullSafeNavComponent;
  let fixture: ComponentFixture<NullSafeNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NullSafeNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NullSafeNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
