import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebrantsComponent } from './celebrants.component';

describe('CelebrantsComponent', () => {
  let component: CelebrantsComponent;
  let fixture: ComponentFixture<CelebrantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CelebrantsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CelebrantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
