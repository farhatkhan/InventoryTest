import { Component, OnInit } from '@angular/core';
import { Inventory } from '../inventory';
import { InventryService } from '../inventry.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  inventories: Inventory[] = [];
  
  constructor(public postService: InventryService) { }
  
  ngOnInit(): void {
    this.postService.getAll().subscribe((data: Inventory[])=>{
      this.inventories = data;
      console.log(this.inventories);
    })  
  }
  
  deleteInventory(id){
    this.postService.delete(id).subscribe(res => {
         this.inventories = this.inventories.filter(item => item.id !== id);
         console.log('Inventory deleted successfully!');
    })
  }
}
