import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ProductsService} from "../../shared/services/products.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInput,
    MatButtonModule
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  matSnackBar = inject(MatSnackBar)

  router = inject(Router)


  productsService = inject(ProductsService)

  form = new FormGroup({
    title: new FormControl<string>('', {
      nonNullable : true,
      validators: Validators.required,
    })
  });

  onSubmit(){

    this.productsService.post({
      title: this.form.controls.title.value

    })
      .subscribe(() => {
        this.matSnackBar.open("Product create with success", "Okay...",{
        });
        this.router.navigateByUrl('/');
      })
  }

}
