import {Component, EventEmitter, inject, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ProductsService} from "../../shared/services/products.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../shared/interfaces/product.interface";

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInput,
    MatButtonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

  productsService = inject(ProductsService)
  matSnackBar = inject(MatSnackBar)
  router = inject(Router)


  product: Product = inject(ActivatedRoute).snapshot.data['product'];

  form = new FormGroup({
    title: new FormControl<string>(this.product.title, {
      nonNullable : true,
      validators: Validators.required,
    })
  });

  onSubmit(){

    this.productsService
      .put(this.product.id,{
      title: this.form.controls.title.value
    })
      .subscribe(() => {
        this.matSnackBar.open("Product edited with success", "Okay...",{
        });
        this.router.navigateByUrl('/');
      })
  }
}
