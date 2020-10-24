package com.challenge.wishlist.service;

import com.challenge.wishlist.domain.User;
import com.challenge.wishlist.dto.UserDto;
import com.challenge.wishlist.exception.ResourceNotFoundException;
import com.challenge.wishlist.mapper.UserMapper;
import com.challenge.wishlist.repository.UserRepository;
import com.challenge.wishlist.security.TokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import redis.clients.jedis.Jedis;

@Service
public class UserService {

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private Jedis jedis;

  @Autowired
  private UserMapper userMapper;

  @Autowired
  private TokenProvider tokenProvider;

  public UserDto findByEmail (String email) {
    User user = userRepository.findByEmail(email)
            .orElseThrow(() -> new ResourceNotFoundException("User", "id", email));

    return userMapper.toDto(user);
  }

  public void logout (String token) {
    //token will live at most expiration time in yaml, after this redis will remove them
    jedis.set(token, tokenProvider.getUserIdFromToken(token));
    jedis.expire(token, 864000);
  }
}
