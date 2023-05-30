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
import com.test.person.models.EmploymentHistory;
import com.test.person.services.EmploymentHistoryService;


@RestController
@RequestMapping("/api/employment")
public class EmploymentController {
    @Autowired
    private EmploymentHistoryService employmentHistoryService;
    @CrossOrigin
    @PostMapping("/{id}")
    public ResponseEntity<ResponseData<EmploymentHistory>> create(@Valid @RequestBody EmploymentHistory employmentHistory,@PathVariable("id") Integer id, Errors errors) {
        ResponseData<EmploymentHistory> responseData = new ResponseData<>();
        if (errors.hasErrors()) {
            for (ObjectError error : errors.getAllErrors()) {
                responseData.getMessages().add(error.getDefaultMessage());
            }
            responseData.setStatus(false);
            responseData.setData(null);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseData);
        }
        employmentHistory.setIdPerson(id);
        EmploymentHistory employmentHistorys =employmentHistoryService.save(employmentHistory);
        responseData.setStatus(true);
        responseData.setData(employmentHistorys);
        responseData.getMessages().add("Data Berhasil Tersimpan");
        return ResponseEntity.ok(responseData);
    }
}
