import { Component, OnInit } from '@angular/core';
import { validateLocaleAndSetLanguage } from 'typescript';
import { InventoryCategory } from '../Models/InventoryCategory';
import { CategoryInventoryService } from '../Services/CategoryInventory.service';
import { store } from '../Models/Store';
import { FormBuilder , FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-InventoryCategory',
  templateUrl: './InventoryCategory.component.html',
  styleUrls: ['./InventoryCategory.component.css']
})
export class InventoryCategoryComponent implements OnInit {

  constructor(private api: CategoryInventoryService,private FormBuilder: FormBuilder) { }
  ShopList: InventoryCategory[] = [];
  InventoryCategory: InventoryCategory = new InventoryCategory();
  store: store = new store();
  mode = ""
  Popup: any;
  ShowModal: boolean = false;
  buttonShop: string = "";
  deletemodal: string="";
  close: boolean = false

  ngOnInit() {
    this.CategoryAPI();
    this.Popup = this.FormBuilder.group({
      Name: ['', [Validators.required]],
        } ,

    );
  }
   DeleteShop(Id: number) {
    this.deletemodal = "Delete Inventory";
    this.api.deleteCategoryAPI(Id).subscribe(data => {
     this.CategoryAPI();
      }, (err) => {
      alert("Error while deleting");
      })
    
  }
  CategoryAPI() {
    this.api.getCategoryAPI().subscribe((data: any) => {
      this.ShopList = data;
    })
  }
  AddCategory() {
    this.mode = "C";
    this.InventoryCategory = new InventoryCategory();
    this.ShowModal = true;
    this.buttonShop = "Add Inventory";
  }

  EditCategory(Id) {
    this.buttonShop = "Edit Inventory";
    this.api.GetByID(Id).subscribe(data => {
      this.InventoryCategory = data;
            this.ShowModal = true;
    });
    console.log(this.InventoryCategory);
  }
  createShop() {
    if (this.mode == "C") {
      console.log(this.InventoryCategory);
      this.api.ADDCategory(this.InventoryCategory).subscribe((result: any) => {
        this.ShowModal = false;
        this.CategoryAPI();
        this.close;
      })
    }
    else {
             this.api.UpdateInventryCategory(this.InventoryCategory).subscribe((data: any) => {
        this.ShowModal = false;
        alert("Data updated successfully");
        this.CategoryAPI();
      })
    }
  }
}




