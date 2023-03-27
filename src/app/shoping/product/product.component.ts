import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { CartsService } from "src/app/service/carts.service";
import { DataserviceService } from "src/app/service/dataservice.service";
import { ShopingService } from "src/app/service/shoping.service";
import { ShoppingJSONService } from "src/app/service/shopping-json.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
// ,OnChanges
export class ProductComponent implements OnInit {
  fashion = [
    {
      id: 1,
      url: "https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100",
      title: "All product",
      link: "allProduct",
    },
    {
      id: 2,
      url: "https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100",
      title: "Fashion",
      link: "fashion",
    },
    {
      id: 3,
      url: "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
      title: "Electronics",
      link: "electronics",
    },
    {
      id: 4,
      url: "https://rukminim1.flixcart.com/image/612/612/l27wtjk0/jewellery-set/e/k/d/freshwater-r-far848-klassic-jewels-original-imagdhxfhagyurz6.jpeg?q=70",
      title: "Jewllary",
      link: "jewllary",
    },
  ];

  // product: any[];

  public productList: any;
  cartClicked: boolean = false;
  cart;
  quantity:number
  isloading:boolean=false

  constructor(
    private shopingServ: ShopingService,
    private jsonService: ShoppingJSONService,
    private cartsService: CartsService,
    private dataService: DataserviceService
  ) {}

  ngOnInit() {
    this.isloading=true
    this.shopingServ.getProduct().subscribe((res) => {
      this.productList = res;
      // add to extra colum in cart page ( quantity colum and price col)
      this.productList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
      this.isloading=false
    });
  }

  addToCart(item: any) {
    item.cartClicked = true;

    const cartData = {
      title: item.title,
      quantity: item.quantity,
      image: item.image,
      price: item.price,
      total: item.total,
      category: item.category,
    };

    //TODO post data in our json server
    this.jsonService.saveProducts(cartData).subscribe((response) => {
      // console.log(response),
      //  (error) => console.error(error);
    });
    this.cartsService.addtoCart(item);
  }

  incrementQuantity(item: any, cQuantity: number) {
    item.quantity += 1;
    // item.quantity = cQuantity;
    // this.jsonService.updateProduct(item).subscribe(() => {});
  }

  decrementQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity -= 1;
    }
  }
}
