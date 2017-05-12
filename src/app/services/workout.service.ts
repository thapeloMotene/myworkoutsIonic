import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class WorkoutService{
    http: any;
    apiKey: string;
    workoutsUrl: string;
    localUrl: string;
     headers :any ={};

    constructor (http:Http){
        this.http = http;
        this.apiKey ='9aKNvJWRCFHiJfvdA-yQc6C8vl2G2fGq';
        this.workoutsUrl ='https://api.mlab.com/api/1/databases/myworkouts_thapelo/collections/workouts';


        /*for the local url to work you must make sure that mongo is able to processes http requests
        via its web client start mongodb like: mongod --rest
        */
        this.localUrl = 'https://127.0.0.1:28017/myworkouts/workouts';

    }

    getWorkouts(){
        return this.http.get(this.workoutsUrl+'?apiKey='+this.apiKey).map(res=> res.json());
        //return this.http.get(this.localUrl).map(res => res.json());
        
    }

    addWorkout(workout:any){
        this.headers = new Headers();
    this.headers.append('Content-Type','application/json');

        return this.http.post(this.workoutsUrl+'?apiKey='+this.apiKey,JSON.stringify(workout),{headers:this.headers}).map(res=> res.json());
    }

    deleteWorkout(id){
        return this.http.delete(this.workoutsUrl+'/'+id+'?apiKey='+this.apiKey).map(res => res.json());
    }
}

