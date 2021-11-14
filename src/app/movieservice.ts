import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Movie } from './movie.model';

@Injectable()
export class MovieService {


    status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];

    movieNames: string[] = [
        "Bamboo Watch",
        "Black Watch",
        "Blue Band",
        "Blue T-Shirt",
        "Bracelet",
        "Brown Purse",
        "Chakra Bracelet",
        "Galaxy Earrings",
        "Game Controller",
        "Gaming Set",
        "Gold Phone Case",
        "Green Earbuds",
        "Green T-Shirt",
        "Grey T-Shirt",
        "Headphones",
        "Light Green T-Shirt",
        "Lime Band",
        "Mini Speakers",
        "Painted Phone Case",
        "Pink Band",
        "Pink Purse",
        "Purple Band",
        "Purple Gemstone Necklace",
        "Purple T-Shirt",
        "Shoes",
        "Sneakers",
        "Teal T-Shirt",
        "Yellow Earbuds",
        "Yoga Mat",
        "Yoga Set",
    ];

    constructor(private http: HttpClient) { }

    getMoviesSmall() {
        return this.http.get<any>('assets/movies-small.json')
        .toPromise()
        .then(res => <Movie[]>res.data)
        .then(data => { return data; });
    }

    getMovies() {
        return this.http.get<any>('assets/movies.json')
        .toPromise()
        .then(res => <Movie[]>res.data)
        .then(data => { return data; });
    }

    getMoviesWithOrdersSmall() {
        return this.http.get<any>('assets/movies-orders-small.json')
        .toPromise()
        .then(res => <Movie[]>res.data)
        .then(data => { return data; });
    }

    generatePrduct(): Movie {
        const movie: Movie =  {
            id: this.generateId(),
            description: "movie Description",
        };

        return movie;
    }

    generateId() {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }

    generateName() {
        return this.movieNames[Math.floor(Math.random() * Math.floor(30))];
    }

    generatePrice() {
        return Math.floor(Math.random() * Math.floor(299)+1);
    }

    generateQuantity() {
        return Math.floor(Math.random() * Math.floor(75)+1);
    }

    generateStatus() {
        return this.status[Math.floor(Math.random() * Math.floor(3))];
    }

    generateRating() {
        return Math.floor(Math.random() * Math.floor(5)+1);
    }
}