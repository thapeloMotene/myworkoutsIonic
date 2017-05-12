import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {WorkoutsPage} from '../workouts/workouts'
import {WorkoutService} from '../../app/services/workout.service';
@Component({
  selector: 'workout-details',
  templateUrl: 'workout-details.html'
})
export class WorkoutDetailsPage {
    workout: any;
    result:any;
  constructor(public navCtrl: NavController, private params: NavParams,private  _workoutservice: WorkoutService) {
    this.workout = params.get('workout');
  }

  deleteWorkout(id){
    this._workoutservice.deleteWorkout(id).subscribe(res => {
      this.result= res;
    });
    this.navCtrl.push(WorkoutsPage);
  }

}
