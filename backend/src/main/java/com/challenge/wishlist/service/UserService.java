package com.challenge.wishlist.service;

import com.challenge.wishlist.domain.User;
import com.challenge.wishlist.dto.UserDto;
import com.challenge.wishlist.exception.ResourceNotFoundException;
import com.challenge.wishlist.mapper.UserMapper;
import com.challenge.wishlist.repository.UserRepository;
import com.challenge.wishlist.security.TokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private UserMapper userMapper;

  @Autowired
  private RedisService redisService;

  @Autowired
  private TokenProvider tokenProvider;

  public UserDto findByEmail (String email) {
    User user = userRepository.findByEmail(email)
            .orElseThrow(() -> new ResourceNotFoundException("User", "id", email));

    return userMapper.toDto(user);
  }

  public void logout (String token) {
    redisService.set(token, tokenProvider.getUserIdFromToken(token), 864000);
  }
}
