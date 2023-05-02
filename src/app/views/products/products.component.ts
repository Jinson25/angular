import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products=[];
  constructor(private apiService: ApiService){}

  ngOnInit(){
    this.apiService.getProducts()
      .subscribe(
        res => {
          console.log(res)
          this.products = res;
        },
        err => {
          console.log(err)
        }
      )
  }
}
