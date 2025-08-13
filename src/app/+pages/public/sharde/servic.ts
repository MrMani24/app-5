import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Servic {
  lastId = 9
  private data: person[] = [
    { id: 1, userName:'admin1', password:'1234', FirstName: 'سیاوش', LastName:'باران ریز' , wealth: 'رئیس اتحادیه', title: 'کارشناس ارشد کشاورزی', img: 'person.webp' },
    { id: 2, userName:'admin2', password:'1234', FirstName: 'جواد', LastName:'قاسملو موحد' , wealth: 'نایب رئیس اتحادیه', title: '...', img: 'person.webp' },
    { id: 3, userName:'admin3', password:'1234', FirstName: 'محمد', LastName:'چهارمحالی' , wealth: 'خزانه دار', title: '...', img: 'person.webp' },
    { id: 5, userName:'admin4', password:'1234', FirstName: 'سعید', LastName:'احمدی', wealth: 'مدیراجرایی', title: '...', img: 'person.webp' },
    { id: 6, userName:'admin5', password:'1234', FirstName: 'عزیز', LastName:'باقری', wealth: 'رئیس کمسیون رسیدگی به شکایات', title: 'کار شناس ارشد گیاه پزشکی', img: 'person.webp' },
    { id: 7, userName:'admin6', password:'1234', FirstName: 'فرهاد', LastName:'خدایی', wealth: 'رئیس کمیسیون بازرسی', title: 'کارشناس کشاورزی', img: 'person.webp' },
    { id: 8, userName:'admin8', password:'1234', FirstName: 'علیرضا', LastName:'خانجانی', wealth: 'رئیس کمیسیون آموزش', title: '...', img: 'person.webp' },
  ]

  // http = inject(HttpClient)
  List(){
    return this.data;
    // return this.http.get<any[]>('http://localhost:5169/members/list')
  }
  
  add( a : person ){
    // await this.http.post('http://localhost:5169/member/create' , a).toPromise()
    this.data.push(a);
    a.id = this.lastId++
  }
  
  edit(b: person, selsctedId: number) {
    // await this.http.put('http://localhost:5169/member/update/'+selsctedId , b).toPromise()
    let a = this.data.findIndex( m=> m.id == selsctedId)
    this.data[a] = b
  }

  delete(person: person, selsctedId: number) {
    // await this.http.put('http://localhost:5169/member/remove/'+selsctedId ,person)
    let a = this.data.findIndex(m => m.id === selsctedId);
    this.data.splice(a, 1);
  }
}

export interface person {
  id: number;
  password:string;
  userName:string;
  FirstName: string;
  LastName: string;
  wealth: string;
  title: string
  img: any;
}