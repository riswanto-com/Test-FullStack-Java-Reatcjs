package com.test.person.services;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.test.person.models.Person;
import com.test.person.repositories.PersonRepo;
@Service
@Transactional
public class PersonService {
    @Autowired
    private PersonRepo personRepo;
    public Person save(Person person) {
        return personRepo.save(person);
    }
    public Person findOne(Integer id) {
        Optional<Person> person = personRepo.findById(id);
        if (!person.isPresent()) {
            return null;
        }
        return person.get();
    }
    public Iterable<Person> findAll() {
        return personRepo.findAll();
    }
    public void removeOne(Integer id) {
        personRepo.deleteById(id);
    }
}
