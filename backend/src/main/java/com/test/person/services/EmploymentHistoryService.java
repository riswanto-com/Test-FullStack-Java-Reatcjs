package com.test.person.services;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.test.person.models.EmploymentHistory;
import com.test.person.repositories.EmploymentHistoryRepo;
@Service
@Transactional
public class EmploymentHistoryService {
    @Autowired
    private EmploymentHistoryRepo employmentHistoryRepo;
    public EmploymentHistory save(EmploymentHistory employmentHistory) {
        return employmentHistoryRepo.save(employmentHistory);
    }
    public EmploymentHistory findOne(Integer id) {
        Optional<EmploymentHistory> employmentHistory = employmentHistoryRepo.findById(id);
        if (!employmentHistory.isPresent()) {
            return null;
        }
        return employmentHistory.get();
    }
    public Iterable<EmploymentHistory> findAll() {
        return employmentHistoryRepo.findAll();
    }
    
    public void removeOne(Integer id) {
        employmentHistoryRepo.deleteById(id);
    }
}
