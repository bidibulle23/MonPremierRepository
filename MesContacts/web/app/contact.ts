export class Contact {
  id: string;
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
	this.lastName = lastName;
  }
}