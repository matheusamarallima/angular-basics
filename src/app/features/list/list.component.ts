import {Component, inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductsService} from "../../shared/services/products.service";
import {MatCardModule} from "@angular/material/card";
import {MatAnchor, MatButton} from "@angular/material/button";
import {CardComponent} from "./components/card/card.component";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatCardModule, MatButton, CardComponent, RouterLink, MatAnchor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  httpClient = inject(HttpClient);
  products: any[] = [];
  router = inject(Router);
  productsService = inject(ProductsService);

  ngOnInit(){
    this.productsService.getAll().subscribe((products) => {
      this.products = products;
    })
  }

  onEdit(){
    this.router.navigateByUrl("/edit-product")
  }
}
