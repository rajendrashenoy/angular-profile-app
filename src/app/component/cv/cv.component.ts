import { Component, OnInit } from '@angular/core';
import {CertificatesService} from 'src/app/services/certificates.service';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import {Certificates} from 'src/app/Models/Certificates';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  certificates:Certificates[];

  constructor(private cetificateservice:CertificatesService) { }
  
  ngOnInit() {
    this.cetificateservice.getCertificates().subscribe(Certificates => 
    {
      this.certificates = Certificates;
    });
  }

}
