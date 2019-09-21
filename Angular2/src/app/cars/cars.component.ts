import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  carData:any='';
cars=[
  {
    brand:'BMW',
    img:'https://upload.wikimedia.org/wikipedia/commons/f/ff/2019_BMW_330i_M_Sport_2.0_Front.jpg',
    description:'BMW took wraps off the new-gen 3 Series at the 2018 Paris Motor Show. The G20 3 Series takes its inspiration from the resurrected 8 and comes with many modern day features while retaining its characteristic driving dynamics. And the new 3 Series is a lot better looking compared to the F30 model it replaces.Up front, the new iteration of BMW’s Kidney grille is characteristic of the new crop of BMWs. The headlights carry the signature DRL styling but are a lot bigger and edgier than the F30. While the L-shaped taillights are akin to the ones seen on the new Z4 Roadster and 8 Coupe. The overall profile remains unchanged but there are subtle changes around the windows and roofline coupled with new design alloy wheels of up to 19-inches to make it appear fresh. There are different bumper styles depending on the trim levels. And the standard 3 seems to have taken a lot of sporty bits from the high-performance M3. The new 3 Series is based on the same CLAR platform that underpins the 5 and 7 Series.'
  },
  {
    brand:'Skoda',
    img:'https://cdn.pixabay.com/photo/2017/09/02/23/19/car-2708882__340.jpg',
    description:'It’s been nearly five years since Skoda’s most popular sedan,the Rapid got an update and now the Czech manufacturer has finally decided to give the car its most comprehensive update in a bid to increase the numbers.'
  },
  {
    brand:'Duster',
    img:'https://www.motorbeam.com/wp-content/uploads/Renault-Duster-Mileage.jpg',
    description:'The Diesel engine is 1461 cc while the Petrol engine is 1498 cc. It is available with the Manual and Automatic transmission. Depending upon the variant and fuel type the Duster has a mileage of 13.9 to 19.87 kmpl. The Duster is a 5 seater SUV and has a length of 4360, width of 1822 and a wheelbase of 2673.'
  },
  {
    brand:'Benz',
    img:'https://media.zigcdn.com/media/model/2018/Sep/mercedes-c--class-new-right_600x300.jpg',
    description:'Mercedes-Benz (German: [mɛɐ̯ˈtseːdəsˌbɛnts, -dɛs-]) is a German global automobile marque and a division of Daimler AG. The brand is known for luxury vehicles, buses, coaches, and trucks. The headquarters is in Stuttgart, Baden-Württemberg. The name first appeared in 1926 under Daimler-Benz.'
  }
]
  constructor() { }
  sendData(car){
    this.carData=car;
  }

  ngOnInit() {
  }

}
