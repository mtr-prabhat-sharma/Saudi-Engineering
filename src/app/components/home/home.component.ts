import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'; // If you want to use icons
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Appointment {
  time: string;
  date: string;
  visitNumber: number;
  employeeName: string;
  serviceName: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  appointments: Appointment[] = [
    { time: '10:30 صباحا', date: '10/1/2025', visitNumber: 10, employeeName: 'خالد عبد الله المصلية', serviceName: 'الاعتماد المهني للمهندسين' },
    { time: '10:30 صباحا', date: '10/1/2025', visitNumber: 10, employeeName: 'خالد عبد الله المسمى', serviceName: 'الاعتماد المهني للمهندسين' },
    { time: '10:30 صباحا', date: '10/1/2025', visitNumber: 10, employeeName: 'خالد عبد الله المصعبي', serviceName: 'الاعتماد المهني للمهندسين' },
    { time: '10:30 صباحا', date: '10/1/2025', visitNumber: 10, employeeName: 'خالد عبد الله المصري', serviceName: 'الاعتماد المهني للمهندسين' },
  ];
}
