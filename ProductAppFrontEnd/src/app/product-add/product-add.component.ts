import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service'
import {Router} from '@angular/router'
import { Route } from '@angular/compiler/src/core';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  model: any = {};
  constructor(public service:ProductsService,public route:Router) { }
    
  ngOnInit() {
  }
  onSubmit()
  {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
    console.log(this.model)
    this.service.addproduct(this.model)
    .subscribe((data)=>{
      console.log(data);
      
      if(JSON.parse(JSON.stringify(data)).Status=="Success")
      {
        alert("new product added !!!");
        this.route.navigate(["view"]);
      }
      else
      {
        alert("something went wrong !!");
      }
    })
  }
}
