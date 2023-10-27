import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ServiceManagerInterface {
  id?: string;
  name: string;
  experience_years: number;
  user_id: string;
  address: string;
  phone_number: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface ServiceManagerGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  user_id?: string;
  address?: string;
  phone_number?: string;
}
