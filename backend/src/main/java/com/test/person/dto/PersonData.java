package com.test.person.dto;

import java.util.Date;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;


import lombok.Getter;
import lombok.Setter;
@Setter
@Getter

public class PersonData {
    private Integer id;
    @NotEmpty(message = " job Title Name Not Empty")
    private String jobTitle;
    @NotEmpty(message = " First Name Not Empty")
    private String nameFirst;
    private String photo;
    @NotEmpty(message = " Last Name Not Empty")
    private String nameLast;
    @NotEmpty(message = " Email Not Empty")
    @Email(message = "Email Not Valid")
    private String email;
    @NotEmpty(message = " Phone Not Empty")
    private String phone;
    @NotEmpty(message = " Address Not Empty")
    private String address;
    private String postalCode;
    private String drivingLicense;
    @NotEmpty(message = " Nationality Not Empty")
    private String nationality;
    @NotEmpty(message = " Email Not Empty")
    private String placeOfBirth;
    @NotNull(message = "date Of Birth NOT Empty")
    private Date dateOfBirth;
}
