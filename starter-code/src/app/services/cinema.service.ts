import { Injectable } from '@angular/core';
import {Movies} from "../../sample-movies";

interface MovieInterface {
  id:number,
  title:string,
  poster:string,
  synopsis:string,
  genres:string[],
  year:number,
  director:string,
  actors:string[]

}

class Movie implements MovieInterface {
  id;
  title;
  poster;
  synopsis;
  genres;
  year;
  director;
  actors

}


@Injectable()
export class CinemaService {

  movies: Array<Movie>=Movies;
  constructor() { }

  getMovies() {
    return this.movies;
  }

  getMovie(id) {
    return this.movies.filter(movie => movie.id===id)[0];
  }

}
