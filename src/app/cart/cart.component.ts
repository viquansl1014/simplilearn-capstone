import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';


import { Item } from '../model.item';
import { ProductService } from '../product.service';
import { Product } from '../model/model.product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Item[] = [];
	total: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
		private productService: ProductService
  ) { }

ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      	var id = params['id'];

		if (id && id != undefined) {
        console.log("add "+ id + " to cart");
        this.productService.getProductById(id).subscribe(data=>{
			//console.log(data);
        	// create new item
			var item: Item = {
				product: data,
				quantity: 1
			};

        	// check out local storage for cart
			if (localStorage.getItem('cart') == null) {
          	// if the cart is empty / doesn't exist
				let cart: any = [];
				cart.push(JSON.stringify(item));
				localStorage.setItem('cart', JSON.stringify(cart));
			} else {
          		// if cart exist
				let cart: any = JSON.parse(localStorage.getItem('cart'));
          		let index: number = -1;

          		// when through the cart
          		// and find out if the item we are adding is in the cart
          		// if so get the index 
				for (var i = 0; i < cart.length; i++) {
            		let item: Item = JSON.parse(cart[i]);
            
					if (item.product[0]._id == id) {
						index = i;
						break;
					}
          		}
          
				if (index == -1) {
            		// if you are adding a new item to the cart
					cart.push(JSON.stringify(item));
					localStorage.setItem('cart', JSON.stringify(cart));
				} else {
            		// if that item is in there but you wanted more
					let item: Item = JSON.parse(cart[index]);
					item.quantity += 1;
					cart[index] = JSON.stringify(item);
					localStorage.setItem("cart", JSON.stringify(cart));
				}
        	}	
        	// load end result
        	this.loadCart();
        
        });

		} else {
        	// when you went straight to the cart url
			this.loadCart();
		}
    });

}

  /////

  	loadCart(): void {
		this.total = 0;
    	this.items = [];
    	// check local storage to load cart data
		let cart = JSON.parse(localStorage.getItem('cart'));
		
		for (var i = 0; i < cart.length; i++) {
			let item = JSON.parse(cart[i]);

			// i have no idea why but apparently this returned as an array
			console.log(item.product[0]); 
			this.items.push({
				product: item.product[0],
				quantity: item.quantity
			});

			this.total += item.product[0].price * item.quantity;
		}
	}

	remove(id: string): void {
		let cart: any = JSON.parse(localStorage.getItem('cart'));
    	let index: number = -1;
    
    	// find index and splice
		for (var i = 0; i < cart.length; i++) {
			let item: Item = JSON.parse(cart[i]);
			
			// dont know why but item.product is an array
			if (item.product[0]._id.toString() == id) {
				cart.splice(i, 1);
				break;
			}
    	}
    	// save
    	localStorage.setItem("cart", JSON.stringify(cart));
    	// refresh
		this.loadCart();
  }
  

	cartInfo:any;
	checkOut() {
		
		// just shows cart infos
		let cart: any = JSON.parse(localStorage.getItem('cart'));
		this.cartInfo= "Your order has been processed. " +cart.length + " item(s) is coming your way!";
		console.log(cart);
		// empty cart
		cart =[];
		// save
		localStorage.setItem("cart", JSON.stringify(cart));

	}

}
