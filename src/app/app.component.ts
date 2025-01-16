import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit
 {
  userList:any=[];
  ngOnInit(): void {
    this.getDetails();
  }
  title = 'Product-API';
  constructor(private api:ApiService){}

  getDetails(){
    this.api.getProductDetailsAPI().subscribe((res:any)=>{
      console.log(res);
      this.userList=res.products;
    })
  }

}
