import {Component} from "@angular/core";
import {WorkoutsPage} from "../workouts/workouts";
import {AddWorkoutPage} from "../add-workout/add-workout";
import {AboutPage} from "../about/about";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = WorkoutsPage;
  tab2Root: any = AddWorkoutPage;
  tab3Root: any = AboutPage;

  constructor() {

  }
}
