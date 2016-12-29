package fr.ddoumeng.mescontacts.controllers;

import java.util.List;
import java.util.stream.Collectors;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import fr.ddoumeng.mescontacts.domain.Person;
import fr.ddoumeng.mescontacts.services.PersonService;

@RestController
@RequestMapping("/people")
public class PersonController {

	@Resource
	private PersonService personService;

	@RequestMapping(method = RequestMethod.GET)
	public List<Person> getAllPersons() {
 	  	return this.personService.getAllPersons();	
	}
 
	@RequestMapping(value = "/search/{lastName}", method = RequestMethod.GET)
	public List<Person> getPersonByLastName(@PathVariable(value = "lastName") String lastName) {
   		return this.personService.getAllPersons()
   				.stream()
   				.filter(p -> p.getLastName().contains(lastName)).collect(Collectors.toList());
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Person getPersonById(@PathVariable(value = "id") String id) {
   		return this.personService.getPersonById(id);
	}

	@RequestMapping(method = RequestMethod.POST)
	public Person createPerson(@RequestBody Person person) {
		return this.personService.createPerson(person);
	}
 
	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public Person updatePerson(@PathVariable(value = "id") String id, @RequestBody Person person) {
		person.setId(id);
 		return this.personService.updatePerson(person);
 	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE) 
	public void deletePerson(@PathVariable(value = "id") String id) {
		this.personService.deletePerson(id);
	}

	public PersonService getPersonService() {
		return personService;
	}

	public void setPersonService(PersonService personService) {
		this.personService = personService;
	}

}
