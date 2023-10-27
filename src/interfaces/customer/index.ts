import { ServiceInterface } from 'interfaces/service';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CustomerInterface {
  id?: string;
  name: string;
  address: string;
  phone_number: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  service?: ServiceInterface[];
  user?: UserInterface;
  _count?: {
    service?: number;
  };
}

export interface CustomerGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  address?: string;
  phone_number?: string;
  user_id?: string;
}
