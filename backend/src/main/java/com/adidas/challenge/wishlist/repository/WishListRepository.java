package com.adidas.challenge.wishlist.repository;

import com.adidas.challenge.wishlist.domain.WishList;
import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

@EnableScan
public interface WishListRepository extends CrudRepository<WishList, String> {
}
