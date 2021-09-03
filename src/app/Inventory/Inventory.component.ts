import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../Services/Inventory.service';

@Component({
  selector: 'app-Inventory',
  templateUrl: './Inventory.component.html',
  styleUrls: ['./Inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor(private service:InventoryService) { }
  InventoryList:any;
  Loading: boolean = false;
  totalRecords: number;
  ngOnInit() {
    this.GetCategoryAPI();
  }

  GetCategoryAPI()
  {
    this.service.getCategoryAPI().subscribe((data: any) => {
      this.InventoryList = data;
    })
  }
  DeleteCategory(Id)
  {
    
  }

}
