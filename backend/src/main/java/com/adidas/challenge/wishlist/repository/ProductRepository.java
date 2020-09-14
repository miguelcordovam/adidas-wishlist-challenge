package com.adidas.challenge.wishlist.repository;

import com.adidas.challenge.wishlist.domain.Product;
import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import org.springframework.data.repository.CrudRepository;

@EnableScan
public interface ProductRepository extends CrudRepository<Product, String> {
}
