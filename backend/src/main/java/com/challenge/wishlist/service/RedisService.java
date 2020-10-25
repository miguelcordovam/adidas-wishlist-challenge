package com.challenge.wishlist.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import redis.clients.jedis.Jedis;

@Service
public class RedisService {

  @Value("${spring.redis.host}")
  private String redisHost;

  @Value("${spring.redis.port}")
  private Integer redisPort;


  public void set(String key, String value, int expireTime) {
    Jedis jedis = new Jedis(redisHost, redisPort);

    //token will live at most expiration time in yaml, after this redis will remove them
    jedis.set(key, value);
    jedis.expire(key, expireTime);
  }

  public Object get(String key) {
    Jedis jedis = new Jedis(redisHost, redisPort);

    return jedis.get(key);
  }
}
