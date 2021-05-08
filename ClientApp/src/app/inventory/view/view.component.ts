import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Inventory } from '../inventory';
import { InventryService } from '../inventry.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id: number;
  inventory: Inventory;
   
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
  }

}
