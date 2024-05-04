import {Component, inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductsService} from "../../shared/services/products.service";
import {MatCardModule} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {CardComponent} from "./components/card/card.component";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatCardModule, MatButton, CardComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  httpClient = inject(HttpClient);
  products: any[] = [];

  productsService = inject(ProductsService);

  ngOnInit(){
    this.productsService.getAll().subscribe((products) => {
      this.products = products;
    })
  }
}
