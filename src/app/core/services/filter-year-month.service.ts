import { Injectable } from '@angular/core';
import { MONTHS } from '@shared/constants/months';

@Injectable({
  providedIn: 'root',
})
export class FilterYearMonthService {
  private currentDate = new Date();

  getCurrentYear(): string {
    return this.currentDate.getFullYear().toString();
  }

  getCurrentMonth(): string {
    return MONTHS[this.currentDate.getMonth()];
  }

  getYears(startYear: number): string[] {
    const currentYear = this.currentDate.getFullYear();
    const years: string[] = [];

    for (let year = startYear; year <= currentYear; year++) {
      years.push(year.toString());
    }

    return years;
  }

  getFilteredMonths(selectedYear: string): string[] {
    const currentYear = this.getCurrentYear();

    if (selectedYear === currentYear) {
      const currentMonthIndex = new Date().getMonth();
      return MONTHS.slice(0, currentMonthIndex + 1);
    } else {
      return [...MONTHS];
    }
  }
}
