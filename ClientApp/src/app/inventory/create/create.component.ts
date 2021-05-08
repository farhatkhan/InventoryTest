import { Component, OnInit } from '@angular/core';
import { InventryService } from '../inventry.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: FormGroup;
   
  constructor(
    public inventoryService: InventryService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required)
    });
  }
   
  get f(){
    return this.form.controls;
  }
    
  submit(){
    console.log(this.form.value);
    this.inventoryService.create(this.form.value).subscribe(res => {
         console.log('Inventry created successfully!');
         this.router.navigateByUrl('inventory/index');
    })
  }
}
