import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetlogService{
  constructor (private http:Http){ }

  getLogs(){
    return this.http.get('http://localhost:3000/service/log')
      .map(res => res.json());
  }

  getSomeLogs(selected){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/service/getlogs',JSON.stringify(selected), {headers: headers})
      .map(res => res.json());
  }
}
