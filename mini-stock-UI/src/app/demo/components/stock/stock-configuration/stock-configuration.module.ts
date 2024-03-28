import { NgModule,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StockConfigurationComponent } from './stock-configuration.component';
import { PaymentComponent } from './payment.component';
import { SeatComponent } from './seat.component';
import { PersonalComponent } from './personal.component';
import { ConfirmationComponent } from './confirmation.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenubarModule } from 'primeng/menubar';
import { TabMenuModule } from 'primeng/tabmenu';
import { StepsModule } from 'primeng/steps';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { ContextMenuModule } from 'primeng/contextmenu';
import { MegaMenuModule } from 'primeng/megamenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { InputTextModule } from 'primeng/inputtext';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
@NgModule({
	imports: [
		CommonModule,
		BreadcrumbModule,
		MenubarModule,
		TabMenuModule,
		StepsModule,
		TieredMenuModule,
		MenuModule,
		ButtonModule,
		ContextMenuModule,
		MegaMenuModule,
		PanelMenuModule,
		InputTextModule,
		RouterModule.forChild([
			{
				path: '', component: StockConfigurationComponent, children: [
					{ path: '', redirectTo: 'personal', pathMatch: 'full' },
					{ path: 'personal', component: PersonalComponent },
					{ path: 'confirmation', component: ConfirmationComponent },
					{ path: 'seat', component: SeatComponent },
					{ path: 'payment', component: PaymentComponent }
				]
			}
		])
	],
	declarations: [StockConfigurationComponent],
	exports: [RouterModule],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA,
		NO_ERRORS_SCHEMA   // Add CUSTOM_ELEMENTS_SCHEMA here
	  ]
})
export class stockconfigurationmodule { }
