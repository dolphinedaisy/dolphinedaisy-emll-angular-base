import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
	{
	  path: "",
    loadChildren: "../pages/authentication/login/login.module#LoginModule"
	},
  {
    path: "lock",
    loadChildren: "../pages/authentication/lock/lock.module#LockModule"
  },
  {
    path: "layout",
    loadChildren: "./layout/layout.module#LayoutModule"
  },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
