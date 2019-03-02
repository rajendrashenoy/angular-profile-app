import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortbioComponent } from './shortbio.component';

describe('ShortbioComponent', () => {
  let component: ShortbioComponent;
  let fixture: ComponentFixture<ShortbioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortbioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortbioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
