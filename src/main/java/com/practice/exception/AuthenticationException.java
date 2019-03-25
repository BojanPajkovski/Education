package com.practice.exception;

/**
 * Created by User on 19.03.2019.
 */
public class AuthenticationException extends Exception {

    public AuthenticationException(String name){
        super(name);
    }
}
