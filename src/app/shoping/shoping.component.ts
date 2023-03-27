import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Router } from "@angular/router";
import { CartsService } from "../service/carts.service";
import { ShoppingJSONService } from "../service/shopping-json.service";
import { CartComponent } from "./cart/cart.component";
import { UseraccountComponent } from "./useraccount/useraccount.component";

@Component({
  selector: "app-shoping",
  templateUrl: "./shoping.component.html",
  styleUrls: ["./shoping.component.css"],
})
export class ShopingComponent implements OnInit {
  public cartItem: number = 0;

  constructor(
    private route: Router,
    public dialog: MatDialog,
    private cartsService: CartsService,
    private shoppingServer: ShoppingJSONService
  ) {}

  ngOnInit() {
    this.route.navigate(["/login"]);
    this.badageItemCount();
  }

  badageItemCount(){
    this.shoppingServer.getProduct().subscribe((res) => {
      this.cartItem = res.length;
    });
    this.cartsService.getProducts().subscribe(res=>{
      this.cartItem=res.length
    })


  }

  // account dialog box
  openDialog() {
    const dialogRef = this.dialog.open(UseraccountComponent);
    dialogRef.afterClosed().subscribe((result) => {
      // console.log(`Dialog result: ${result}`);
    });
  }
}
