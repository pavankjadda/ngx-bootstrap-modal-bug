import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SequenceNumberService {

  constructor(private http: HttpClient) {
  }

  loadSequenceNumbers(): Observable<any> {
    return this.http.get('./assets/seq_numbers.json');
  }
}
