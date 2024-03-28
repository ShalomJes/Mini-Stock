import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItemCategoryComponent } from './stock-item-category.component';

describe('StockItemCategoryComponent', () => {
  let component: StockItemCategoryComponent;
  let fixture: ComponentFixture<StockItemCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockItemCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StockItemCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
