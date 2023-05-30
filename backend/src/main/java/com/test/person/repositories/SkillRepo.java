package com.test.person.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.test.person.models.Skill;

public interface SkillRepo extends JpaRepository<Skill,Integer> {
    
}
