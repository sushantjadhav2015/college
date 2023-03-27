import { Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CartsService } from "src/app/service/carts.service";
import { DataserviceService } from "src/app/service/dataservice.service";
import { ShoppingJSONService } from "src/app/service/shopping-json.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  public cartProduct: any = [];
  total: number;

  constructor(
    private shoppingService: ShoppingJSONService,
    private cartService: CartsService
  ) {}

  ngOnInit() {
    this.getCartItem();
  }

  getCartItem() {
    // this code is used to show data of json server on cart page
    this.shoppingService.getProduct().subscribe((res) => {
      this.cartProduct = res;
      // console.log(this.cartProduct);
    });
  }

  updateQuantity(product, quantity: number){
    product.quantity = quantity;
    this.shoppingService.updateProduct(product).subscribe(()=>{
      this.getCartItem();
    });
  }

  removeItem(product: any) {
    this.cartProduct.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartProduct.splice(index, 1);
      }
    });
    this.shoppingService.removeCartPro(product.id).subscribe(() => {
      // alert("product removed successfully");
    });
    this.cartService.removeCartItem(product); //by using this code badge count is change when you delete product
  }

  // emptyCart(id:any){
  //   this.shoppingService.removeAll(id).subscribe(()=>{
  //     alert('cart is empty')
  //   })
  // }
  // emptyCart(product: any) {
  //   this.cartService.removeCartItem(product);
  //  }
}
