import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { store } from 'src/app/Models/Store';
import { StoreService } from 'src/app/Services/store.service';
import { StoreComponent } from '../store.component';


@Component({
  selector: 'app-add-edit-store',
  templateUrl: './add-edit-store.component.html',
  styleUrls: ['./add-edit-store.component.css']
})
export class AddEditStoreComponent implements OnInit {

  constructor(private service: StoreService) { }

  @Output() storeCloseEvent = new EventEmitter<string>();

  store: store = new store();

  ngOnInit(): void {
  }

  onStart(id: number, mode: string) {
    console.log(mode);
    console.log(id);
    if (mode == "C") {
      this.store = new store();
    }
    else {
      this.service.getStoreById(id).subscribe((data: any) => {
        alert("getstore")
        this.store = data;
      });
    }
  }

  addStore() {
    console.log(this.store);
    this.service.addStore(this.store).subscribe(res => {
      this.storeCloseEvent.emit();
    });
  }

}
