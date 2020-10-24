package com.challenge.wishlist.mapper;

import com.challenge.wishlist.domain.User;
import com.challenge.wishlist.dto.UserDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        implementationPackage = "com.challenge.wishlist.mapper.impl")
public interface UserMapper {

  @Mappings({
          @Mapping(source = "email", target = "email"),
          @Mapping(source = "name", target = "name"),
          @Mapping(source = "provider", target = "provider")
  })
  UserDto toDto (User user);

}
