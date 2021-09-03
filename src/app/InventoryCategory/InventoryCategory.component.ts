import { Component, OnInit } from '@angular/core';
import { validateLocaleAndSetLanguage } from 'typescript';
import { InventoryCategory } from '../Models/InventoryCategory';
import { CategoryInventoryService } from '../Services/CategoryInventory.service';
import { store } from '../Models/Store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreComponent } from '../store/store.component';
import { StoreService } from '../Services/store.service';

@Component({
  selector: 'app-InventoryCategory',
  templateUrl: './InventoryCategory.component.html',
  styleUrls: ['./InventoryCategory.component.css']
})
export class InventoryCategoryComponent implements OnInit {

  constructor(private api: CategoryInventoryService, private service: StoreService, private FormBuilder: FormBuilder) { }
  ShopList: InventoryCategory[] = [];
  selectedDay: string = '';

  InventoryCategory: InventoryCategory = new InventoryCategory();
  store: store = new store();
  Loading: boolean = false;
  mode = ""
  Popupform: any;
  ShowModal: boolean = false;
  buttonShop: string = "";
  deletemodal: string = "";
  storelist: store[] = [];
  close: boolean = false;
  submitted = false;
  totalRecords: number;
  cols: any[];
  loading: boolean = false;
  storeId:any;

  ngOnInit() {
    this.CategoryAPI();
    this.refreshStoreList();

    this.Popupform = this.FormBuilder.group({
      StoreId: ['', [Validators.required]],
      Name: ['', [Validators.required]],
    } ,

    );

  }

  refreshStoreList() {
    this.service.getStoreList().subscribe(data => {
      this.storelist = data;
    });
  }

  GetStoreByName(id: any) {
    // alert(id);   
    this.storeId=id;
    this.service.GetStoreByName(id).subscribe(data => {
      this.storeId;
         console.log(this.storeId)
    });
   }

  get f() {
    return this.Popupform.controls;
  }

  OnSubmit() {

    this.submitted = true;
  }
  DeleteShop(Id: number) {
    
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
    this.buttonShop = "Add Category";
    this.storeId;
 }

  EditCategory(Id) {
    this.buttonShop = "Edit Category";
    this.api.GetByID(Id).subscribe(data => {
      this.InventoryCategory = data;
      this.ShowModal = true;
    });

  }
  createShop() {
    if (this.mode == "C") {
      console.log(this.InventoryCategory);
      this.api.ADDCategory(this.InventoryCategory).subscribe((result: any) => {
        this.ShowModal = false;
        this.CategoryAPI();
        this.close;
        this.storeId;
        })
    }
    else {
      this.api.UpdateInventryCategory(this.InventoryCategory).subscribe((data: any) => {
        this.ShowModal = false;
        this.CategoryAPI();
        this.close;
      })
    }
  }
}




