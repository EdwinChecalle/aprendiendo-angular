import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Aplicacion-';
  ngOnInit () {
    firebase.initializeApp({
    apiKey: 'AIzaSyA9is2mslut0EWxVAASh3piGmdbcA2Em-A',
    authDomain: 'comprasapp-83618.firebaseapp.com'
    });
    }
}
