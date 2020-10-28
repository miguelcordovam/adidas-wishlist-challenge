package com.challenge.wishlist.controller;

import com.challenge.wishlist.service.WishListService;
import com.challenge.wishlist.util.TokenUtils;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
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
@Api(value = "Wishlist endpoint to retrieve wishlist data")
public class WishListController {

  @Autowired
  private WishListService wishListService;

  @Autowired
  private TokenUtils tokenUtils;

  @ApiOperation(
          consumes = "application/json",
          produces = "application/json",
          value = "Add product to wishlist",
          notes = "Add product to wishlist")
  @ApiResponses(value = {
          @ApiResponse(code = 200, message = "Product is added to wishlist"),
          @ApiResponse(code = 403, message = "Forbidden request."),
          @ApiResponse(code = 500, message = "Internal server error")}
  )
  @PostMapping("/wishlist/{productId}")
  public void addItemToWishList(HttpServletRequest request, @PathVariable String productId) {
    wishListService.addProductToWishList(tokenUtils.getJwtFromRequest(request), productId);
  }

  @ApiOperation(
          consumes = "application/json",
          produces = "application/json",
          value = "Remove product from wishlist",
          notes = "Remove product from wishlist")
  @ApiResponses(value = {
          @ApiResponse(code = 200, message = "Product is removed from wishlist"),
          @ApiResponse(code = 403, message = "Forbidden request."),
          @ApiResponse(code = 500, message = "Internal server error")}
  )
  @DeleteMapping("/wishlist/{productId}")
  public void removeItemFromWishList(HttpServletRequest request, @PathVariable String productId) {
    wishListService.removeProductFromWishList(tokenUtils.getJwtFromRequest(request), productId);
  }

  @ApiOperation(
          consumes = "application/json",
          produces = "application/json",
          value = "Get wishlist for a given user",
          notes = "Get wishlist for a given user")
  @ApiResponses(value = {
          @ApiResponse(code = 200, message = "Wishlist is retrieved"),
          @ApiResponse(code = 403, message = "Forbidden request."),
          @ApiResponse(code = 500, message = "Internal server error")}
  )
  @GetMapping("/wishlist")
  public ResponseEntity getWishList(HttpServletRequest request) {
    return ResponseEntity.status(HttpStatus.ACCEPTED).body(wishListService.getWishList
            (tokenUtils.getJwtFromRequest(request)));
  }
}
