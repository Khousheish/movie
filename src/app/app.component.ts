import {Component} from '@angular/core';
import { MovieService } from './movieservice';
import { Movie } from './movie.model';
import {SelectItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    movies: Movie[];

    sortOptions: SelectItem[];

    sortOrder: number;

    sortField: string;

    constructor(private movieService: MovieService, private primengConfig: PrimeNGConfig) { }

    ngOnInit() {
        this.movieService.getMovies().then(data => this.movies = data);

        this.sortOptions = [
            {label: 'Price High to Low', value: '!price'},
            {label: 'Price Low to High', value: 'price'}
        ];

        this.primengConfig.ripple = true;
    }

    onSortChange(event) {
        let value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        }
        else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }
}
