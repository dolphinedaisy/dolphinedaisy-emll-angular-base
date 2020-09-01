import { Component } from "@angular/core";

@Component({
	selector: "ng2-charts-radar",
	template: `
		<div style="display: block;">
			<canvas baseChart class="chart"
			[datasets]="radarChartData"
			[labels]="radarChartLabels"
			[colors]="radarChartColors"
			[chartType]="radarChartType"></canvas>
			</div>
	`
})
export class ng2RadarChartDemoComponent {
	public radarChartLabels: string[] = [
		"Eating",
		"Drinking",
		"Sleeping",
		"Designing",
		"Coding",
		"Cycling",
		"Running"
	];

	public radarChartData: any = [
		{ data: [65, 59, 90, 81, 56, 55, 40], label: "Series A" },
		{ data: [28, 48, 40, 19, 96, 27, 100], label: "Series B" }
	];
	public radarChartType: string = "radar";
	public radarChartColors: Array<any> = [
		{
			// Teal
			backgroundColor: "rgba(40, 190, 189,0.2)",
			borderColor: "rgba(40, 190, 189,1)",
			pointBackgroundColor: "rgba(40, 190, 189,1)",
			pointBorderColor: "#fff",
			pointHoverBackgroundColor: "#fff",
			pointHoverBorderColor: "rgba(40, 190, 189,0.8)"
		},
		{
			//Purple
			backgroundColor: "rgba(88, 103, 195,0.2)",
			borderColor: "rgba(88, 103, 195,1)",
			pointBackgroundColor: "rgba(88, 103, 195,1)",
			pointBorderColor: "#fff",
			pointHoverBackgroundColor: "#fff",
			pointHoverBorderColor: "rgba(88, 103, 195,1)"
		}
	];
}
