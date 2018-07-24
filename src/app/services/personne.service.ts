import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personne } from '../models/personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  private url = '/assets/data/personne.json';

  constructor(private http: HttpClient) { }

  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>(this.url) ;
  }
}
