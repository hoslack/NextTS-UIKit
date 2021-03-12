// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export interface IUser {
  id: number
  first_name: string
  last_name: string
  email: string
  date_of_birth: string
  age: number
  country: string
  phone: string
}
