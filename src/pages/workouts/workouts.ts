/**
 * Created by sajmera on 1/4/17.
 */
import {Component, OnInit} from '@angular/core';

import { NavController } from 'ionic-angular';
import {WorkoutService} from "../../providers/workout.service";
import {WorkoutDetailsPage} from "../workout-details/workout-details";

@Component({
    selector: 'workouts',
    templateUrl: 'workouts.html'
})
export class WorkoutsPage extends OnInit{

    workouts:any


    constructor(public navCtrl: NavController,
    private _workoutService: WorkoutService) {
        super();

    }

    ngOnInit(): void {
        this._workoutService.getWorkouts().subscribe(workouts => {
            // console.log(res);
            this.workouts = workouts;
        })


    }

  selectedWorkout(event, workout){
      this.navCtrl.push(WorkoutDetailsPage,{
        workout:workout
      })
  }



}
