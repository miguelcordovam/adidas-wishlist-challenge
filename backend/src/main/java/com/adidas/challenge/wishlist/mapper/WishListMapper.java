package com.adidas.challenge.wishlist.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        implementationPackage = "com.adidas.challenge.wishlist.mapper.impl")
public interface WishListMapper {


}
