import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.scss']
})
export class CompOneComponent implements OnInit {
  clientName: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.route.paramMap.subscribe((params)=>{
        const name = params.get('name');

        console.log('name is ' + name);
        this.clientName = name;
      });
  }

}
