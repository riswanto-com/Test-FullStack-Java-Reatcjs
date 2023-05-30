package com.test.person.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.test.person.models.EmploymentHistory;

public interface EmploymentHistoryRepo extends JpaRepository<EmploymentHistory,Integer> {
    
}
