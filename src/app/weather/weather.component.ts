import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  cityName: string | undefined;
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  getWeather() {
    if (!this.cityName) {
      console.error("City name is undefined");
      return;
    }
  
    this.weatherService.getWeatherByCity(this.cityName)
      .subscribe((data: any) => {
        console.log(data); // Log the entire response data
        this.weatherData = data.data.getWeatherByCityName;
      });
  }
  
}
