// import { WeatherService } from './../weather.service';
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-weather',
//   templateUrl: './weather.component.html',
//   styleUrls: ['./weather.component.css']
// })
// export class WeatherComponent implements OnInit {
//   myWeather: any;
//   temperature: number = 0;
//   feelsLikeTemp: number = 0;
//   humidity: number = 0;
//   pressure: number = 0;
//   summary: string = '';
//   iconURL: string = '';
//   city: string = 'Almaty';
//   //units: string = 'metric'
//   units: string = 'imperial'

//   constructor(private weatherService: WeatherService) { }

//   ngOnInit(): void {
//     this.getWeather();
//   }

//   getWeather() {
//     this.weatherService.getweather(this.city, this.units).subscribe({
//       next: (res) => {
//         console.log(res);
//         this.myWeather = res;
//         this.temperature = this.myWeather.main.temp;
//         this.feelsLikeTemp = this.myWeather.main.feels_like;
//         this.humidity = this.myWeather.main.humidity;
//         this.pressure = this.myWeather.main.pressure;
//         this.summary = this.myWeather.weather[0].main;
  
//         // Corrected the URL by removing extra space
//         this.iconURL = 'https://openweathermap.org/img/wn' + this.myWeather.weather[0].icon + '@2x.png';
//       },
//       error: (error) => console.log(error.message),
//       complete: () => console.info('API call completed')
//     });
//   }
  

//   onRadioButtonChange() {
//     if (this.units == 'imperial') {
//       this.units = 'metric';
//     } else {
//       this.units = 'imperial';
//     }

//     this.getWeather();
//   }

// }

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  cityName !: string;
  weatherData: any;

  constructor(private http: HttpClient) {}

  getWeather() {
    const apiKey = '5cad434697f1def9900049dc08df685a';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=${apiKey}&units=metric`;
    
    this.http.get(url).subscribe((data: any) => {
      this.weatherData = data;
    });
  }
}

