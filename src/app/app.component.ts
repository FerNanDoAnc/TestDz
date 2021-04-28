import { Component, OnInit } from '@angular/core';
import { RestService } from './services/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BuscarDeezer';
  
  public ListMusic:any=[]
  
  constructor(private RestService:RestService){

  }

  ngOnInit(): void {
    this.cargarData();
  }
  
  public cargarData(){
    this.RestService.get("https://api.deezer.com/album/302127").subscribe(response =>{
      this.ListMusic=response;
    })
  }
}
