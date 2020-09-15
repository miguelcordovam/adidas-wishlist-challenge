package com.challenge.wishlist.repository;

import com.challenge.wishlist.domain.WishList;
import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import org.springframework.data.repository.CrudRepository;

@EnableScan
public interface WishListRepository extends CrudRepository<WishList, String> {
}
