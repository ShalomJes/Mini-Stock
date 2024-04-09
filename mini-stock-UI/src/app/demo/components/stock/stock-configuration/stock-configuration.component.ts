import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-stock-configuratio',
  templateUrl: './stock-configuration.component.html',
})
export class StockConfigurationComponent implements OnInit {

  routeItems=[]

ngOnInit(): void {
  this.routeItems = [
    { label: 'Stores', routerLink: 'stores' },
    { label: 'Shelfs', routerLink: 'shelfs' },
    { label: 'Rows', routerLink: 'rows' },
];
}

}

