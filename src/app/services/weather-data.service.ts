import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  constructor(private http: HttpClient) { }

  getWeatherData() {
    console.log("GET");
    let url = `https://api.openweathermap.org/data/2.5/forecast?lat=12.840140799999999&lon=77.65852160000001&appid=f5f7c182f4a8850365de9575b191124b&units=metric`;
    return this.http.get(url);
  }
}
