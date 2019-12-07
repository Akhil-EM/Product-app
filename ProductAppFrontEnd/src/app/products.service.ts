import { Injectable } from '@angular/core';
import {Eproducts} from './product-view/Products.model'
import{HttpClient} from '@angular/common/http'
///creating htttp request to get data from server 
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products:Eproducts;
 // any[]=[{ "productId": 1, "productName": "Leaf Rake", "productCode": "GDN-0011", "releaseDate": "March 19, 2016", "description": "Leaf rake with 48-inch wooden handle.", "price": 19.95, "starRating": 3.2, "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png" }, { "productId": 2, "productName": "Garden Cart", "productCode": "GDN-0023", "releaseDate": "March 18, 2016", "description": "15 gallon capacity rolling garden cart", "price": 32.99, "starRating": 4.2, "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png" }, { "productId": 5, "productName": "Hammer", "productCode": "TBX-0048", "releaseDate": "May 21, 2016", "description": "Curved claw steel hammer", "price": 8.9, "starRating": 4.8, "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png" }, { "productId": 8, "productName": "Saw", "productCode": "TBX-0022", "releaseDate": "May 15, 2016", "description": "15-inch steel blade hand saw", "price": 11.55, "starRating": 3.7, "imageUrl": "https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png" }, { "productId": 10, "productName": "Video Game Controller", "productCode": "GMG-0042", "releaseDate": "October 15, 2015", "description": "Standard two-button video game controller", "price": 35.95, "starRating": 4.6, "imageUrl": "https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png" } ];

  constructor(public httpobj:HttpClient ) { }
  getProducts(){
   //return this.products;
   return this.httpobj.get("http://localhost:3000/getproducts");
  }
   addproduct(value){
      
      return this.httpobj.post("http://localhost:3000/add", value);
   }
   edit_product(value)
   {
    return this.httpobj.post("http://localhost:3000/updateproduct",{"product":value});
   }
   delete_product(value)
   {
     //console.log("data "+value)
       return this.httpobj.post("http://localhost:3000/deleteproduct",{id:value});
    
   }
   add_user(value)
   {
    return this.httpobj.post("http://localhost:3000/insertuser",{"user":value})
   }
   get_user(value)
   {
    return this.httpobj.post("http://localhost:3000/getuser",{"user":value})
   }
}
