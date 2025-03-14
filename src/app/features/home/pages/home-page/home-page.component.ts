import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from "../../../../core/components/navbar/navbar.component";
import { FooterComponent } from "../../../../core/components/footer/footer.component";
import { ChatBootAgenteComponent } from "../../../chat-boot/components/chat-boot-agente/chat-boot-agente.component";
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, ChatBootAgenteComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }

}
