package com.test.person.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.test.person.models.Education;

public interface EducationRepo extends JpaRepository<Education,Integer> {
    
}
