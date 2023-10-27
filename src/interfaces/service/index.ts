import { MechanicInterface } from 'interfaces/mechanic';
import { CustomerInterface } from 'interfaces/customer';
import { GetQueryInterface } from 'interfaces';

export interface ServiceInterface {
  id?: string;
  name: string;
  description?: string;
  price: number;
  mechanic_id: string;
  customer_id: string;
  created_at?: any;
  updated_at?: any;

  mechanic?: MechanicInterface;
  customer?: CustomerInterface;
  _count?: {};
}

export interface ServiceGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  mechanic_id?: string;
  customer_id?: string;
}
