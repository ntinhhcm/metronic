import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';
import { PlanService } from '../../../../_services/plan.service';


@Component({
	selector: "app-plan",
	templateUrl: "./plan.component.html",
	encapsulation: ViewEncapsulation.None,
})
export class PlanComponent implements OnInit, AfterViewInit {
	public plans: any;

	constructor(
		private _script: ScriptLoaderService,
		private planService: PlanService)  {

	}
	ngOnInit()  {
		this.loadData();
	}

	ngAfterViewInit()  {
		this._script.loadScripts('app-plan', ['assets/app/js/datatable/datatables.js', 'assets/app/js/left.js']);
	}

	loadData() {
		this.planService.getPlan().then((res: any) => {
			this.plans = res.items;
		});
	}
}