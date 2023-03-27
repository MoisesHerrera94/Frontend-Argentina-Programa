import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabModalComponent } from './hab-modal.component';

describe('HabModalComponent', () => {
  let component: HabModalComponent;
  let fixture: ComponentFixture<HabModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
