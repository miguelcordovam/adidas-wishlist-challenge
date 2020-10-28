package com.challenge.wishlist.controller;

import com.challenge.wishlist.service.ProductService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Api(value = "Product endpoint to retrieve product data")
public class ProductController {

  @Autowired
  private ProductService productService;

  @ApiOperation(
          consumes = "application/json",
          produces = "application/json",
          value = "Returns all products  from db",
          notes = "Returns a List of Products")
  @ApiResponses(value = {
          @ApiResponse(code = 200, message = "Data retrieval is successful"),
          @ApiResponse(code = 403, message = "Forbidden request."),
          @ApiResponse(code = 500, message = "Internal server error")}
  )
  @GetMapping("/products")
  public ResponseEntity getProducts() {
    return ResponseEntity.status(HttpStatus.ACCEPTED)
            .body(productService.getProducts());
  }
}
