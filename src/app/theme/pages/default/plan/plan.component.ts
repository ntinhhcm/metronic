import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';
import { environment as env} from '../../../../../environments/environment'

declare function loadPlan(url: string, token: string): any;
@Component({
	selector: "app-plan",
	templateUrl: "./plan.component.html",
	encapsulation: ViewEncapsulation.None,
})
export class PlanComponent implements OnInit, AfterViewInit {
	public plans: any;

	constructor(
		private _script: ScriptLoaderService,
	) {}
	ngOnInit()  {
	}

	ngAfterViewInit()  {
		this._script.loadScripts('app-plan', ['assets/app/js/datatable/datatables.js', 'assets/app/js/left.js']);
		this.loadData();
	}

	loadData() {
		let user = JSON.parse(localStorage.getItem('currentUser'));
		loadPlan(env.apiUrl + '/api/v1/plan', user.token);
	}

	search() {
		let user = JSON.parse(localStorage.getItem('currentUser'));
		loadPlan(env.apiUrl + '/api/v1/plan', user.token);
	}
}