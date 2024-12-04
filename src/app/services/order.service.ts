import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { OrderFormData } from '../interfaces/order-form-data';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private http = inject(HttpClient);

  getOrderById(id: string): Observable<OrderFormData> {
    return this.http.get<OrderFormData>(`${environment.apiUrl}/orders/${id}`);
  }

  createOrder(orderData: OrderFormData): Observable<OrderFormData> {
    return this.http.post<OrderFormData>(`${environment.apiUrl}/orders`, orderData);
  }
}
