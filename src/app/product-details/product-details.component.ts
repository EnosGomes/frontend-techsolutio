import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-Product-details',
  templateUrl: './Product-details.component.html',
  styleUrls: ['./Product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id: number = 0;
  product: Product = new Product(); 
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.product = new Product();
    this.productService.getProductById(this.id).subscribe( data => {
      this.product = data;
    });
  }
}