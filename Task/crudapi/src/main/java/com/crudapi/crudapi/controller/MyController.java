package com.crudapi.crudapi.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.crudapi.crudapi.entities.User;
import com.crudapi.crudapi.services.UserService;

@RestController
public class MyController {
	
	@Autowired
	private UserService userService;
	
	//get all the users
	
	@GetMapping("/users")
	public List<User> getUsers(){
		return this.userService.getUsers();
	}
	
	//get requested user
	@GetMapping("/users/{userId}")
	public User getUser(@PathVariable String userId){
		return this.userService.getUser(Long.parseLong(userId));
	}
	
	//adding user
	@PostMapping("/users")
	public User addUser(@RequestBody User user){
		return this.userService.addUser(user);
	}
	@PutMapping("/users")
	public User updateUsers(@RequestBody User user){
		return this.userService.updateUser(user);
	}
	@DeleteMapping("/users/{userId}")
	public ResponseEntity<HttpStatus> deleteUser(@PathVariable String userId){
		try {
			this.userService.deleteUser(Long.parseLong(userId));
			return new ResponseEntity<>(HttpStatus.OK);
			
		}catch(Exception e){
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}
}
