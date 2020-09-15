package com.challenge.wishlist.controller;

import com.challenge.wishlist.service.WishListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WishListController {

  @Autowired
  private WishListService wishListService;

  @PostMapping("/wishlist/{userId}/products/{productId}")
  public void addItemToWishList (@PathVariable String userId, @PathVariable String productId) {
    wishListService.addProductToWishList(userId, productId);
  }

  @DeleteMapping("/wishlist/{userId}/products/{productId}")
  public void removeItemFromWishList (@PathVariable String userId, @PathVariable String productId) {
    wishListService.removeProductFromWishList(userId, productId);
  }

  @GetMapping("/wishlist")
  public ResponseEntity getWishList(@RequestParam String userId) {
    return ResponseEntity.status(HttpStatus.ACCEPTED).body(wishListService.getWishList(userId));
  }
}
