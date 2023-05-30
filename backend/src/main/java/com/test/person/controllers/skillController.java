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
import com.test.person.models.Skill;
import com.test.person.services.SkillService;


@RestController
@RequestMapping("/api/skill")
public class skillController {
    @Autowired
    private SkillService skillService;
    @CrossOrigin
    @PostMapping("/{id}")
    public ResponseEntity<ResponseData<Skill>> create(@Valid @RequestBody Skill skill,@PathVariable("id") Integer id, Errors errors) {
        ResponseData<Skill> responseData = new ResponseData<>();
        if (errors.hasErrors()) {
            for (ObjectError error : errors.getAllErrors()) {
                responseData.getMessages().add(error.getDefaultMessage());
            }
            responseData.setStatus(false);
            responseData.setData(null);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseData);
        }
        skill.setIdPerson(id);
        Skill skills =skillService.save(skill);
        responseData.setStatus(true);
        responseData.setData(skills);
        responseData.getMessages().add("Data Berhasil Tersimpan");
        return ResponseEntity.ok(responseData);
    }
}
