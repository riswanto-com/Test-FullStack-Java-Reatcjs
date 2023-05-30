package com.test.person.models;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Person implements Serializable {
    private static final long serialVersionUID=1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(length = 100)
    private String jobTitle;
    @Column(length = 100)
    private String nameFirst;
    @Column(length = 15)
    private String photo;
    @Column(length = 100)
    private String nameLast;
    @Column(length = 100)
    private String email;
    @Column(length = 100)
    private String country;
    @Column(length = 100)
    private String city;
    @Column(length = 15)
    private String phone;
    @Lob
    private String address;
    @Lob
    private String professionalSummary;
    @Column(length = 10)
    private String postalCode;
    @Column(length = 100)
    private String drivingLicense;
    @Column(length = 100)
    private String nationality;
    @Column(length = 100)
    private String placeOfBirth;
    @Temporal(TemporalType.DATE)
    private Date dateOfBirth;
}
