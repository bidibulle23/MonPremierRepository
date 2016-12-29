package fr.ddoumeng.mescontacts.services;

import java.util.List;

import fr.ddoumeng.mescontacts.domain.Person;

public interface PersonService {

	List<Person> getAllPersons();
	
	Person getPersonById(String id);
	
	Person createPerson(Person person);
	
	Person updatePerson(Person person);

	void deletePerson(String id);
	
	List<Person> getPersonByLastName(String lastName);

}
