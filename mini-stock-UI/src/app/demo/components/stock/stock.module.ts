import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockRoutingModule } from './stock-routing.module';
import { SharedModule } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { StoresComponent } from './stock-configuration/stores/stores.component';
import { StockItemsComponent } from './stock-items/stock-items.component';
import { StockItemCategoryComponent } from './stock-item-category/stock-item-category.component';
import { StockConfigurationComponent } from './stock-configuration/stock-configuration.component';
import { ShelfsComponent } from './stock-configuration/shelfs/shelfs.component';
import { RowsComponent } from './stock-configuration/rows/rows.component';
import { StockUsersComponent } from './stock-users/stock-users.component';

@NgModule({
    declarations: [
        StoresComponent,
        StockItemsComponent,
        StockItemCategoryComponent,
        StockConfigurationComponent,
        ShelfsComponent,
        StockUsersComponent,
        RowsComponent,
    ],
    imports: [
        CommonModule,
        StockRoutingModule,
        SharedModule,
        TableModule,
        TabViewModule,
        FormsModule,
        ReactiveFormsModule,
        PaginatorModule,
        StepsModule,
    ],
})
export class StockModule {}
