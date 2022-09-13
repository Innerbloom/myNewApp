import { Component, OnInit } from '@angular/core';
import {BudgetItem} from "./shared/models/budget-item.model";

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {

  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBudget: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetItem) {
    this.budgetItems.push(newItem);
    this.totalBudget += newItem.amount;
  }

  deleteItem(item: BudgetItem) {
    let index = this.budgetItems.indexOf(item)
    this.budgetItems.splice(index, 1)
    this.totalBudget -= item.amount;
  }

}
