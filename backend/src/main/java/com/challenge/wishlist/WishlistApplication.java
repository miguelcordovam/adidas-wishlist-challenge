package com.challenge.wishlist;

import com.challenge.wishlist.config.AppProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableConfigurationProperties(AppProperties.class)
public class WishlistApplication {

  public static void main(String[] args) {
    SpringApplication.run(WishlistApplication.class, args);
  }

}
