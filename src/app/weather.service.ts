// weather.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
  private apiUrl = 'http://localhost:4000/graphql'; // Assuming Apollo Server runs on this URL

  constructor(private http: HttpClient) {}

  getWeatherByCity(city: string): Observable<any> {
    const query = `{
      getWeatherByCityName(city: "${city}") {
        city
        temperature
        description
      }
    }`;
    return this.http.post(this.apiUrl, { query });
  }
}
