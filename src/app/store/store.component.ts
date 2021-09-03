import { Component, OnInit, ViewChild } from '@angular/core';
import { store } from '../Models/Store';
import { StoreService } from '../Services/store.service';
import { AddEditStoreComponent } from './add-edit-store/add-edit-store.component';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  @ViewChild(AddEditStoreComponent) addEditComp? : AddEditStoreComponent;

  constructor(private service:StoreService) { }

  
  storelist:any=[];
  ModalTitle:string = "";
  loading:boolean=false;
  ActivateAddEditStoreComp: boolean=false;

  ngOnInit(): void {
    this.refreshStoreList();      
  }

  refreshStoreList(){    
    this.service.getStoreList().subscribe(data=>{   
    this.storelist=data;     
    console.log(data);
    });
  }

  addClick(){
    this.ModalTitle="Add New Store";
    this.ActivateAddEditStoreComp = true; 
    console.log(this.ActivateAddEditStoreComp);   
    // this.addEditComp?.onStart(0,"C"); 
    //this.refreshStoreList();
  }

  deleteClick(id:number){     
    if(confirm('Are you sure?')){
      this.service.deleteStore(id).subscribe(data=>{alert(`${id} Deleted successfully !`);
      this.refreshStoreList();
      })
    }
  }

  editClickHandler(id:number){    
    this.ModalTitle="Edit Store";
    this.ActivateAddEditStoreComp=true;
    this.addEditComp?.onStart(id,"E");
  } 

  closeClick(){
    this.ActivateAddEditStoreComp=false;
    this.refreshStoreList();
  }

  

}
