package com.test.person.services;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.test.person.models.Skill;
import com.test.person.repositories.SkillRepo;
@Service
@Transactional
public class SkillService {
    @Autowired
    private SkillRepo skillRepo;
    public Skill save(Skill skill) {
        return skillRepo.save(skill);
    }
    public Skill findOne(Integer id) {
        Optional<Skill> skill = skillRepo.findById(id);
        if (!skill.isPresent()) {
            return null;
        }
        return skill.get();
    }
    public Iterable<Skill> findAll() {
        return skillRepo.findAll();
    }
    
    public void removeOne(Integer id) {
        skillRepo.deleteById(id);
    }
}
