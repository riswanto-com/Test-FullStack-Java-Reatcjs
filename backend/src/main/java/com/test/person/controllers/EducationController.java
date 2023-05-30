package com.test.person.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.test.person.dto.ResponseData;
import com.test.person.models.Education;
import com.test.person.services.EducationService;


@RestController
@RequestMapping("/api/education")
public class EducationController {
    @Autowired
    private EducationService educationService;
    @CrossOrigin
    @PostMapping("/{id}")
    public ResponseEntity<ResponseData<Education>> create(@Valid @RequestBody Education education,@PathVariable("id") Integer id, Errors errors) {
        ResponseData<Education> responseData = new ResponseData<>();
        if (errors.hasErrors()) {
            for (ObjectError error : errors.getAllErrors()) {
                responseData.getMessages().add(error.getDefaultMessage());
            }
            responseData.setStatus(false);
            responseData.setData(null);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseData);
        }
        education.setIdPerson(id);
        Education educations =educationService.save(education);
        responseData.setStatus(true);
        responseData.setData(educations);
        responseData.getMessages().add("Data Berhasil Tersimpan");
        return ResponseEntity.ok(responseData);
    }
}
