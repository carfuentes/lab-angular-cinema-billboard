import { Component, OnInit } from '@angular/core';
import {CinemaService} from '../../services/cinema.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies:any[];

  constructor(private Cinema: CinemaService, private router:Router) {
    this.movies=this.Cinema.getMovies();
   }

  

  ngOnInit() {

    
  }

  goDetails(id) {
    this.router.navigate(["/movie",id]);

  }


}
