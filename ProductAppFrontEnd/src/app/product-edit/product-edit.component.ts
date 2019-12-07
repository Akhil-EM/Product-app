import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import{Eproducts} from '../product-view/Products.model'
import{ProductsService} from '../products.service'
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  model: any = {};
  log_data:any;
  productItem=new Eproducts(null,null,null,null,null,null,null,null);
  constructor(public router:Router,public service:ProductsService) { 
    this.log_data=this.router.getCurrentNavigation().extras.state.example; //getting data 
  }

  ngOnInit() {
    console.log(this.log_data);
    
  }
  onSubmit()
  {
    ///alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.log_data.productCode));
    this.service.edit_product(this.log_data)
    .subscribe((response)=>{
              console.log(JSON.parse(JSON.stringify(response)).Status);
       if(JSON.parse(JSON.stringify(response)).Status=="Success")
       {
         alert("data updated success fully");
         this.router.navigate(["view"]);
       }
       else
       {
         alert("something went wrong !!");
       }
    })
  }
}
