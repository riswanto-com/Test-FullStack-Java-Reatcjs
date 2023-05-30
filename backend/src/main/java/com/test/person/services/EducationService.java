package com.test.person.services;


import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.test.person.models.Education;
import com.test.person.repositories.EducationRepo;
@Service
@Transactional
public class EducationService {
    @Autowired
    private EducationRepo educationRepo;
    public Education save(Education education) {
        return educationRepo.save(education);
    }
    public Education findOne(Integer id) {
        Optional<Education> education = educationRepo.findById(id);
        if (!education.isPresent()) {
            return null;
        }
        return education.get();
    }
    public Iterable<Education> findAll() {
        return educationRepo.findAll();
    }
    public void removeOne(Integer id) {
        educationRepo.deleteById(id);
    }
}
