package com.challenge.wishlist.service;

import com.challenge.wishlist.domain.WishList;
import com.challenge.wishlist.dto.ProductDto;
import com.challenge.wishlist.mapper.ProductMapper;
import com.challenge.wishlist.repository.ProductRepository;
import com.challenge.wishlist.repository.WishListRepository;
import com.challenge.wishlist.security.TokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class WishListService {

  @Autowired
  private ProductRepository productRepository;

  @Autowired
  private WishListRepository wishListRepository;

  @Autowired
  private ProductMapper productMapper;

  @Autowired
  private TokenProvider tokenProvider;

  public List<ProductDto> getWishList (String token) {
    String userId = tokenProvider.getUserIdFromToken(token);
    Optional<WishList> wishList = wishListRepository.findById(userId);
    List<ProductDto> products = new ArrayList<>();

    if (wishList.isPresent()) {
      productRepository.findAll().forEach(p -> {
        if (wishList.get().getProductIds().contains(p.getId())) {
          products.add(productMapper.toDto(p));
        }
      });
    }

    return products;
  }

  public void addProductToWishList (String token, String productId) {
    String userId = tokenProvider.getUserIdFromToken(token);
    Optional<WishList> wishListFound = wishListRepository.findById(userId);

    if (wishListFound.isPresent()){
      WishList wishList = wishListFound.get();

      List<String> productIds = wishList.getProductIds();
      Set<String> ids = new HashSet<>(productIds);
      ids.add(productId);

      wishList.setProductIds(new ArrayList<>(ids));

      wishListRepository.save(wishList);
    } else {
      WishList wishList = new WishList();
      wishList.setUserId(userId);
      wishList.setProductIds(Arrays.asList(productId));
      wishListRepository.save(wishList);
    }
  }

  public void removeProductFromWishList (String token, String productId) {
    String userId = tokenProvider.getUserIdFromToken(token);
    Optional<WishList> wishListFound = wishListRepository.findById(userId);

    if (wishListFound.isPresent()){
      WishList wishList = wishListFound.get();

      List<String> productIds = wishList.getProductIds();
      productIds.remove(productId);

      wishList.setProductIds(productIds);

      wishListRepository.save(wishList);
    }
  }
}
