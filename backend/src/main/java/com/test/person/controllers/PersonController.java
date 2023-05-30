package com.test.person.controllers;



import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.test.person.dto.PersonData;
import com.test.person.dto.ResponseData;
import com.test.person.models.Person;
import com.test.person.services.PersonService;


@RestController
@RequestMapping("/api/person")
public class PersonController {
    @Autowired
    private PersonService personService;
    @Autowired
    private ModelMapper mapper;
    @CrossOrigin
    @PostMapping
    public ResponseEntity<ResponseData<Person>> create(@Valid @RequestBody Person person, Errors errors) {
        ResponseData<Person> responseData = new ResponseData<>();
        if (errors.hasErrors()) {
            for (ObjectError error : errors.getAllErrors()) {
                responseData.getMessages().add(error.getDefaultMessage());
            }
            responseData.setStatus(false);
            responseData.setData(null);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseData);
        }
        Person persons=personService.save(person);
        System.out.println(persons);
        responseData.setStatus(true);
        responseData.setData(persons);
        responseData.getMessages().add("Data Berhasil Tersimpan");
        return ResponseEntity.ok(responseData);
    }
    @CrossOrigin
    @PutMapping("/{id}")
    public ResponseEntity<ResponseData<Person>> update(@Valid @RequestBody PersonData personData, @PathVariable("id") Integer id, Errors errors) {
        ResponseData<Person> responseData = new ResponseData<>();
        if (errors.hasErrors()) {
            for (ObjectError error : errors.getAllErrors()) {
                responseData.getMessages().add(error.getDefaultMessage());
            }
            responseData.setStatus(false);
            responseData.setData(null);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseData);
        }
        Person person = mapper.map(personData, Person.class);
        person.setId(id);
        responseData.setStatus(true);
        responseData.setData(personService.save(person));
        return ResponseEntity.ok(responseData);
    }
    @GetMapping
    public Iterable<Person> findAll() {
        return personService.findAll();
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public Person findOne(@PathVariable("id") Integer id) {
        return personService.findOne(id);
    }
}
