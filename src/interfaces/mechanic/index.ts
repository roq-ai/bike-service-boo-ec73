import { ServiceInterface } from 'interfaces/service';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface MechanicInterface {
  id?: string;
  name: string;
  experience_years: number;
  specialization: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  service?: ServiceInterface[];
  user?: UserInterface;
  _count?: {
    service?: number;
  };
}

export interface MechanicGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  specialization?: string;
  user_id?: string;
}
