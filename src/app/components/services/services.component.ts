import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterModule, CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    { title: 'رخص الهندسة', description: 'نمنح التراخيص المهنية للمهندسين لمزاولة المهنة في السعودية.' },
    { title: 'برامج التدريب', description: 'طور مهاراتك من خلال برامج التدريب المعتمدة لدينا.' },
    { title: 'خدمات الاستشارة', description: 'احصل على المشورة والحلول المخصصة لاحتياجاتك.' }
  ];
}
