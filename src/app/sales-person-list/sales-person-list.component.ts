import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent{
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Anup", "Kumar", "anup.kumar@test.com", 10000),
    new SalesPerson("Banup", "Sumar", "barup.sumar@test.com", 20000),
    new SalesPerson("Canup", "Dumar", "canup.dumar@test.com", 30000),
    new SalesPerson("Danup", "Bumar", "danup.bumar@test.com", 60000)
  ]
}
