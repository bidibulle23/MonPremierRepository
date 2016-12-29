package fr.ddoumeng.mescontacts.services;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import fr.ddoumeng.mescontacts.domain.Person;
import fr.ddoumeng.mescontacts.repositories.PersonRepository;

@Service(value="personService")
public class PersonServiceImpl implements PersonService {

	@Resource
	private PersonRepository personRepository;

	@Override
	public List<Person> getAllPersons() {
		return this.personRepository.findAll();
	}

	@Override
	public Person getPersonById(String id) {
		return this.personRepository.findOne(id);
	}

	@Override
	public Person createPerson(Person person) {
		return this.personRepository.save(person);
	}

	@Override
	public Person updatePerson(Person person) {
		return this.personRepository.save(person);
	}

	@Override
	public void deletePerson(String id) {
		this.personRepository.delete(id);

	}

	@Override
	public List<Person> getPersonByLastName(String lastName) {
		return this.personRepository.findByLastName(lastName);
	}

	public PersonRepository getPersonRepository() {
		return personRepository;
	}

	public void setPersonRepository(PersonRepository personRepository) {
		this.personRepository = personRepository;
	}

}
