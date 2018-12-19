import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private optionPresets = {
    json: {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': ''
      })
    }
  };

  constructor(private http: HttpClient) {
  }

  private get(url: string): Promise<any> {
    return this.http.get(url).toPromise();
  }
  private post(url: string, body: object, options: object): Promise<any> {
    return this.http.post(url, body, options).toPromise();
  }
  private put(url: string, body: object, options: object): Promise<any> {
    return this.http.put(url, body, options).toPromise();
  }
  private patch(url: string, body: object, options: object) {
    return this.http.patch(url, body, options).toPromise();
  }
  private delete(url: string, options: object): Promise<any> {
    return this.http.delete(url, options).toPromise();
  }
}
