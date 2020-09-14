package com.adidas.challenge.wishlist.service;

import com.adidas.challenge.wishlist.domain.WishList;
import com.adidas.challenge.wishlist.dto.ProductDto;
import com.adidas.challenge.wishlist.mapper.ProductMapper;
import com.adidas.challenge.wishlist.repository.ProductRepository;
import com.adidas.challenge.wishlist.repository.WishListRepository;
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

  public List<ProductDto> getWishList (String userId) {

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

  public void addProductToWishList (String userId, String productId) {
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

  public void removeProductFromWishList (String userId, String productId) {
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
