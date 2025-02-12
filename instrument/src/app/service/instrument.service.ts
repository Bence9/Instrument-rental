import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Instrument } from '../model/instrument';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {

  http = inject(HttpClient);

  apiUrl = 'http://localhost:3000/instruments';

  constructor() { }

  getAll(): Observable<Instrument[]>{
    return this.http.get<Instrument[]>(this.apiUrl);
  }

  get(id: number): Observable<Instrument>{
    return this.http.get<Instrument>(`${this.apiUrl}/${id}`);
  }

  create(instrument: Instrument): Observable<Instrument>{
    return this.http.post<Instrument>(this.apiUrl, instrument);
  }

  update(instrument: Instrument): Observable<Instrument>{
    return this.http.patch<Instrument>(`${this.apiUrl}/${instrument.id}`, instrument);
  }

  remove(id: number): Observable<Instrument>{
    return this.http.delete<Instrument>(`${this.apiUrl}/${id}`);
  }

}
