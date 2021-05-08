import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Inventory } from '../inventory';
import { InventryService } from '../inventry.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  inventory: Inventory;
  form: FormGroup;
  
  constructor(
    public inventoryService: InventryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['inventoryId'];
    this.inventoryService.find(this.id).subscribe((data: Inventory)=>{
      this.inventory = data;
    });
    
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
    this.inventoryService.update(this.id, this.form.value).subscribe(res => {
         console.log('Inventory updated successfully!');
         this.router.navigateByUrl('inventory/index');
    })
  }
}
