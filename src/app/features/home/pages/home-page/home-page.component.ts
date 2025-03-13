import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from "../../../../core/components/navbar/navbar.component";
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }

}
