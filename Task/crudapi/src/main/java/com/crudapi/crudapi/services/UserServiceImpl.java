package com.crudapi.crudapi.services;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crudapi.crudapi.dao.UserDao;
import com.crudapi.crudapi.entities.User;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserDao userDao;
	
	@Override
	public List<User> getUsers() {
		return userDao.findAll();
	}

	@Override
	public User getUser(long userId) {
		return userDao.getById(userId);
	}

	@Override
	public User addUser(User user) {
		userDao.save(user);
		return user;
	}

	@Override
	public User updateUser(User user) {
		userDao.save(user);
		return user;
	}

	@Override
	public void deleteUser(long parseLong) {
		User entity=userDao.getById(parseLong);
		userDao.delete(entity);
	}

}
