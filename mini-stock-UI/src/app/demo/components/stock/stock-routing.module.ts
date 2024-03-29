import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StockItemsComponent } from './stock-items/stock-items.component';
import { StockItemCategoryComponent } from './stock-item-category/stock-item-category.component';
import { StockConfigurationComponent } from './stock-configuration/stock-configuration.component';
import { StockUsersComponent } from './stock-users/stock-users.component';
import { RowsComponent } from './stock-configuration/rows/rows.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'items', component:StockItemsComponent},
        { path: 'items-category', component:StockItemCategoryComponent},
        { path: 'stock-configuration', component:StockConfigurationComponent},
        { path: 'stock-users', component:StockUsersComponent},
        { path: 'rows', component:RowsComponent},

    ])],
    exports: [RouterModule]
})
export class StockRoutingModule { }
