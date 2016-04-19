/// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {Observable} from 'rxjs/RX';

@Component({
    selector: 'my-app',
    template: `
        <input id="search" type="text" class="form-control" placeholder="search">
    `
})
export class AppComponent {
    constructor() {
    
    //Observables version
    var keyups = Observable.fromEvent($("#search"),"keyup");
    //keyups.subscribe( data => console.log(data) );



         //callback hell version without observables
        /*var debounced = _.debounce(function (text) {
            var url = "https://api.spotify.com/v1/search?type=artist&q=" + text;
            $.getJSON(url, function (artists) {

                console.log(artists);


            })
        }, 400);

        $("#search").keyup(function (e: any) {
            var text = e.target.value;

            //check for input length
            if (text.length < 3)
                return;

            debounced(text);

        });*/
    }
}