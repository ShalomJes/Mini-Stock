import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockUsersComponent } from './stock-users.component';

describe('StockUsersComponent', () => {
  let component: StockUsersComponent;
  let fixture: ComponentFixture<StockUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StockUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
