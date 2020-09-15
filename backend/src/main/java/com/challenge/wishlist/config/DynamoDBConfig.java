package com.challenge.wishlist.config;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClient;
import org.socialsignin.spring.data.dynamodb.repository.config.EnableDynamoDBRepositories;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.core.annotation.Order;
import org.springframework.util.StringUtils;

@Configuration
@Primary
@EnableDynamoDBRepositories
        (basePackages = "com.challenge")
public class DynamoDBConfig {

  @Value("${amazon.dynamodb.endpoint}")
  private String amazonDynamoDBEndpoint;

  @Value("${amazon.aws.accesskey}")
  private String amazonAWSAccessKey;

  @Value("${amazon.aws.secretkey}")
  private String amazonAWSSecretKey;

  @Bean
  public AmazonDynamoDB amazonDynamoDB() {
    AmazonDynamoDB amazonDynamoDB
            = new AmazonDynamoDBClient(amazonAWSCredentials());

    if (!StringUtils.isEmpty(amazonDynamoDBEndpoint)) {
      amazonDynamoDB.setEndpoint(amazonDynamoDBEndpoint);
    }

    return amazonDynamoDB;
  }

  @Bean
  public AWSCredentials amazonAWSCredentials() {
    return new BasicAWSCredentials(
            amazonAWSAccessKey, amazonAWSSecretKey);
  }
}