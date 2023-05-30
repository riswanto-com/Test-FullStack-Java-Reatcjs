package com.test.person.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.test.person.models.Person;

public interface PersonRepo extends JpaRepository<Person, Integer> {
    
}
