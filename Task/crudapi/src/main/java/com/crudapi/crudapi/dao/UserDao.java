package com.crudapi.crudapi.dao;
import org.springframework.data.jpa.repository.JpaRepository;

import com.crudapi.crudapi.entities.*;

public interface UserDao extends JpaRepository<User,Long> {
	
}
