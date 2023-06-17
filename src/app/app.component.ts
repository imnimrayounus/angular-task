import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Task';
  eventsList = [
    {'eventName':'Google Cloud DevFest 2022 Islamabad','image':'../assets/images/islm.jpg','eventCity':'GDG Cloud Islamabad','eventdate':'26'},
    {'eventName':'De3Fest Peshawar 2022','image':'../assets/images/peshw.jpg','eventCity':'GDG Cloud Peshawar','eventdate':'31'},
    {'eventName':'DevFest Karachi 2022','image':'../assets/images/khr.jpg','eventCity':'GDG Cloud Kolachi','eventdate':'24'},
    {'eventName':'Devfest\'22 - Google Developer Groups Flagship Event','image':'../assets/images/isl.png','eventCity':'GDG Islamabad','eventdate':'18'},
 
    {'eventName':'DevFest Lahore 2022','image':'../assets/images/lhr.jpg','eventCity':'GDG Lahore','eventdate':'216'},
    {'eventName':'Personal Branding for Developers','image':'../assets/images/pb.jpg','eventCity':'GDG Peshawar','eventdate':'17'},
    {'eventName':'International Women\'s Day #ProgressNotPerfection','image':'../assets/images/wtm.png','eventCity':'GDG Cloud Islamabad','eventdate':'12'},
    {'eventName':'Swift Pakistan Meetup X','image':'../assets/images/swift.jpg','eventCity':'Swift Pakistan','eventdate':'26'},

    {'eventName':'AWS Community Faisalabad Meetup','image':'../assets/images/aws.jpg','eventCity':'AWS Community Pakistan','eventdate':'26'},  
  ];
}
