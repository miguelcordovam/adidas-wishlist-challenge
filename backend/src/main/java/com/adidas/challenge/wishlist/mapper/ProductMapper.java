package com.adidas.challenge.wishlist.mapper;
import com.adidas.challenge.wishlist.domain.Product;
import com.adidas.challenge.wishlist.dto.ProductDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        implementationPackage = "com.adidas.challenge.wishlist.mapper.impl")
public interface ProductMapper {

  @Mappings({
          @Mapping(source = "id", target = "id"),
          @Mapping(source = "name", target = "name"),
          @Mapping(source = "price", target = "price"),
          @Mapping(source = "imgUrl", target = "imgUrl")
  })
  ProductDto toDto (Product product);

}
