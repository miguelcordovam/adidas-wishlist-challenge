package com.challenge.wishlist.controller;

import com.challenge.wishlist.service.WishListService;
import com.challenge.wishlist.util.TokenUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class WishListController {

  @Autowired
  private WishListService wishListService;

  @Autowired
  private TokenUtils tokenUtils;


  @PostMapping("/wishlist/{productId}")
  public void addItemToWishList (HttpServletRequest request, @PathVariable String productId) {
    wishListService.addProductToWishList(tokenUtils.getJwtFromRequest(request), productId);
  }

  @DeleteMapping("/wishlist/{productId}")
  public void removeItemFromWishList (HttpServletRequest request, @PathVariable String productId) {
    wishListService.removeProductFromWishList(tokenUtils.getJwtFromRequest(request), productId);
  }

  @GetMapping("/wishlist")
  public ResponseEntity getWishList(HttpServletRequest request) {
    return ResponseEntity.status(HttpStatus.ACCEPTED).body(wishListService.getWishList
            (tokenUtils.getJwtFromRequest(request)));
  }
}
