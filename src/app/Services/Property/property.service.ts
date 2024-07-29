import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../Auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  
  apiUrl = 'https://zami-khaya-api-three.vercel.app/zam/properties';
    
  favCount = new BehaviorSubject<number>(0);
  favList: any[] = [];
  
  constructor(private _http: HttpClient, private authService: AuthService) { }

  getAllProperties(): Observable<any[]> {
    return this._http.get<any[]>(this.apiUrl);
  }

  getFavlist = (): any[] => this.favList;

  addToFavlist = (property: any): void => {
    const alreadyInfavlist = this.favList.some(({ id }) => id === property.id);
    if (!alreadyInfavlist) {
      this.favList.push(property);
      this.favCount.next(this.favCount.value + 1);
    } else {
      console.log("Property already exists in favlist!");
    }
  }

  removeFromFavlist = (id: string): void => {
    this.favList = this.favList.filter(property => property.id !== id);
    this.favCount.next(this.favList.length);
  }

  createProperty(propertyData: any): Observable<any> {
    const headers = new HttpHeaders()
      .append('Accept', '*/*');
    console.log(propertyData);
    return this._http.post<any>(`${this.apiUrl}`, propertyData, { headers });
  }

  getPropertyById(id: string): Observable<any> {
    return this._http.get<any>(`${this.apiUrl}/${id}`);
  }
}
