import { Routes } from "@angular/router";
import { MenuComponent } from "./menu/menu.component";
import { Tab1Component } from "./tab1/tab1.component";
import { Tab3Component } from "./tab3/tab3.component";
import { Tab2Component } from "./tab2/tab2.component";

export const AppRoutes:Routes = [
    {path:'', component: MenuComponent},
    {path: 'tab1', component: Tab1Component},
    {path: 'tab2', component: Tab2Component},
    {path: 'tab3', component: Tab3Component}
]