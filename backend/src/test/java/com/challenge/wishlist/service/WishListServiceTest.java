package com.challenge.wishlist.service;

import com.challenge.wishlist.domain.Product;
import com.challenge.wishlist.domain.WishList;
import com.challenge.wishlist.dto.ProductDto;
import com.challenge.wishlist.mapper.ProductMapper;
import com.challenge.wishlist.repository.ProductRepository;
import com.challenge.wishlist.repository.WishListRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class WishListServiceTest {

  @InjectMocks
  private WishListService wishListService;

  @Mock
  private ProductRepository productRepository;

  @Mock
  private WishListRepository wishListRepository;

  @Mock
  private ProductMapper productMapper;

  @Test
  public void getWishList() {
    WishList wishList = new WishList();
    wishList.setUserId("123435454");
    wishList.setProductIds(Arrays.asList("EF1234", "EF3143", "GV4542"));

    List<Product> products = new ArrayList<>();
    Product product = new Product();
    product.setId("EF1234");
    product.setImgUrl("image");
    product.setName("Superstar");
    product.setPrice("99.99");
    products.add(product);

    when(wishListRepository.findById(any())).thenReturn(Optional.of(wishList));
    when(productRepository.findAll()).thenReturn(products);

    List<ProductDto> result = wishListService.getWishList("123435454");

    assertNotNull(result);
    assertTrue(result.size() == 1);
  }

  @Test
  public void addProductToWishList() {
    WishList wishList = new WishList();
    wishList.setUserId("123435454");
    wishList.setProductIds(Arrays.asList("EF1234", "EF3143", "GV4542"));

    when(wishListRepository.findById(any())).thenReturn(Optional.of(wishList));

    wishListService.addProductToWishList("123435454", "EF9999");

    verify(wishListRepository, times(1)).save(any());
  }

  @Test
  public void addProductToWishListNotFound() {
    when(wishListRepository.findById(any())).thenReturn(Optional.empty());

    wishListService.addProductToWishList("123435454", "EF9999");

    verify(wishListRepository, times(1)).save(any());
  }

  @Test
  public void removeProductFromWishList() {
    WishList wishList = new WishList();
    wishList.setUserId("123435454");
    wishList.setProductIds(Arrays.asList("EF1234", "EF3143", "GV4542"));

    when(wishListRepository.findById(any())).thenReturn(Optional.of(wishList));

    wishListService.addProductToWishList("123435454", "EF1234");

    verify(wishListRepository, times(1)).save(any());

  }
}
