import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'; // If you want to use icons
import { NgFor } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface TimeSlot {
  time: string;
  available: boolean;
  id: number; // Add an ID for radio button uniqueness
}

interface Day {
  name: string;
  slots: TimeSlot[];
}
@Component({
  selector: 'app-home2',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule, MatRadioModule, FormsModule, NgFor, CommonModule],
  templateUrl: './home2.component.html',
  styleUrl: './home2.component.css'
})
export class Home2Component {
  selectedDay: string = 'الأحد';
  days: Day[] = [
    {
      name: 'الأحد',
      slots: [
        { time: '08:00 ص', available: true, id: 1 },
        { time: '08:00 ص', available: false, id: 2 },
        { time: '09:00 ص', available: true, id: 3 },
      ],
    },
    {
      name: 'الاثنين',
      slots: [
        { time: '08:00 ص', available: true, id: 4 },
        { time: '08:30 ص', available: false, id: 5 },
        { time: '08:00 ص', available: false, id: 6 },
      ],
    },
    {
      name: 'الثلاثاء',
      slots: [
        { time: '08:30 ص', available: true, id: 7 },
        { time: '08:00 ص', available: false, id: 8 },
        { time: '08:00 ص', available: false, id: 9 },
      ],
    },
    {
      name: 'الاربعاء',
      slots: [
        { time: '09:00 ص', available: true, id: 10 },
        { time: '08:00 ص', available: false, id: 11 },
        { time: '08:00 ص', available: false, id: 12},
      ],
    },
    {
      name: 'الخميس',
      slots: [
        { time: '09:00 ص', available: true, id: 13 },
        { time: '09:00 ص', available: false, id: 14 },
        { time: '08:00 ص', available: false, id: 15 },
      ],
    },
  ];

  selectDay(dayName: string) {
    this.selectedDay = dayName;
  }
}
