import { Component, OnInit,Inject } from '@angular/core';
import {ProductsService} from '../products.service';
import{Eproducts} from'./Products.model'
import { Router} from '@angular/router';
import{LOCAL_STORAGE,WebStorageService} from 'angular-webstorage-service'
@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
    btn_name;
    flag;
    products_arry:Eproducts[];
  constructor(public pServ:ProductsService,public route:Router,@Inject(LOCAL_STORAGE) private storage:WebStorageService) { }
     
  ngOnInit() {
       
    this.btn_name="Show Image";   
    this.pServ.getProducts().subscribe((data)=>{
        console.log(data);
      this.products_arry=JSON.parse(JSON.stringify(data));
    })
  }
  change_value()
  {
    if(this.flag==false)
    {  
      this.btn_name="Hide Image"
       this.flag=true;
    }
    else{
      this.btn_name="Show Image"
      this.flag=false;
    }
  }
  
  
  edit_product(data)
  {
    //console.log($scope.);
    console.log(data);
 
      this.route.navigate(["/edit"],{ state: { example: data } });
  
  }
  delete_product(data)
  {
    console.log(data)
       //alert("delete called");     
       this.pServ.delete_product(data)
    .subscribe((result)=>{
      if(JSON.parse(JSON.stringify(result)).Status=="Success"){
      
       this.ngOnInit();
      }
      else{
        alert("some thing went wrongplease try again !!!");
      }
      //console.log(result);
    })
  }
  
}
