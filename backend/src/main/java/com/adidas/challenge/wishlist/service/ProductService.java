package com.adidas.challenge.wishlist.service;

import com.adidas.challenge.wishlist.dto.ProductDto;
import com.adidas.challenge.wishlist.mapper.ProductMapper;
import com.adidas.challenge.wishlist.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {

  @Autowired
  private ProductRepository productRepository;

  @Autowired
  private ProductMapper productMapper;

  public List<ProductDto> getProducts () {
    List<ProductDto> products = new ArrayList<>();

    productRepository.findAll().forEach(p -> products.add(productMapper.toDto(p)));

    return products;
  }
}
