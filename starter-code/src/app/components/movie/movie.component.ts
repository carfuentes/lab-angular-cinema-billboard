import { Component, OnInit } from '@angular/core';
import {CinemaService} from '../../services/cinema.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movieId:number;
  movie:Object;

  constructor(private Cinema: CinemaService, private route:ActivatedRoute, private router: Router) { 
    
  }

  ngOnInit() {
    this.route.params
      .subscribe((params) => this.movieId = Number(params['id']));
    this.movie= this.Cinema.getMovie(this.movieId);

  }





  
}
