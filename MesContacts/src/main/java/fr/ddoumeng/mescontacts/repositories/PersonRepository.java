package fr.ddoumeng.mescontacts.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;

import fr.ddoumeng.mescontacts.domain.Person;

//@RepositoryRestResource(path = "persons")
public interface PersonRepository extends MongoRepository<Person, String> {

	List<Person> findByLastName(@Param("name") String name);

}
