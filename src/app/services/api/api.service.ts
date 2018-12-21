import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public optionPresets = {
    json: {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    },
    file: {
      headers: new HttpHeaders({
        'Content-Type':  'multipart/form-data'
      })
    }
  };

  constructor(private http: HttpClient) {
  }

  // todo: Request Options set Authorization key in headers if available

  private get(url: string): Promise<any> {
    return this.http.get(url).toPromise();
  }
  private post(url: string, body: object, options: object = this.optionPresets.json): Promise<any> {
    return this.http.post(url, body, options).toPromise();
  }
  private put(url: string, body: object, options: object = this.optionPresets.json): Promise<any> {
    return this.http.put(url, body, options).toPromise();
  }
  private patch(url: string, body: object, options: object = this.optionPresets.json) {
    return this.http.patch(url, body, options).toPromise();
  }
  private delete(url: string, options: object): Promise<any> {
    return this.http.delete(url, options).toPromise();
  }
}
