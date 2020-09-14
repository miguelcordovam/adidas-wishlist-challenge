package com.adidas.challenge.wishlist.controller;

import com.adidas.challenge.wishlist.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {

  @Autowired
  private ProductService productService;

  @GetMapping("/products")
  public ResponseEntity getProducts () {
    return ResponseEntity.status(HttpStatus.ACCEPTED)
            .body(productService.getProducts());
  }
}
