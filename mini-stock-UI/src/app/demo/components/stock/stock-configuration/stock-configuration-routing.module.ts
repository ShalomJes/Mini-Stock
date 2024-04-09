import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RowsComponent } from './rows/rows.component';
import { ShelfsComponent } from './shelfs/shelfs.component';
import { StoresComponent } from './stores/stores.component';

@NgModule({
    imports: [RouterModule.forChild([
        
        { path: 'rows', component:RowsComponent},
        { path: 'Shelfs', component:ShelfsComponent},
        { path: 'stores', component:StoresComponent},

    ])],
    exports: [RouterModule]
})
export class StockRoutingModule { }
