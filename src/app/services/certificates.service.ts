import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import {Certificates} from 'src/app/Models/Certificates';

@Injectable({
  providedIn: 'root'
})

export class CertificatesService {

  certificatesUrl:string = 'https://rajshenoyrestapi.herokuapp.com/cerificates';

  constructor(private http:HttpClient) { 
  }

  getCertificates():Observable<Certificates[]> {

        return this.http.get<Certificates[]>(this.certificatesUrl);

  }
}
