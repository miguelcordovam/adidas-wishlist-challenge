package com.challenge.wishlist.controller;

import com.challenge.wishlist.dto.UserDto;
import com.challenge.wishlist.security.CurrentUser;
import com.challenge.wishlist.security.UserPrincipal;
import com.challenge.wishlist.service.UserService;
import com.challenge.wishlist.util.TokenUtils;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@Api(value = "User endpoint to retrieve user data")
public class UserController {

  @Autowired
  private UserService userService;

  @Autowired
  private TokenUtils tokenUtils;

  @ApiOperation(
          consumes = "application/json",
          produces = "application/json",
          value = "Returns current user",
          notes = "Returns current user")
  @ApiResponses(value = {
          @ApiResponse(code = 200, message = "Data retrieval is successful"),
          @ApiResponse(code = 403, message = "Forbidden request."),
          @ApiResponse(code = 500, message = "Internal server error")}
  )
  @GetMapping("/user/me")
  @PreAuthorize("hasRole('USER')")
  public UserDto getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
    return userService.findByEmail(userPrincipal.getEmail());
  }

  @ApiOperation(
          consumes = "application/json",
          produces = "application/json",
          value = "Returns http response after logging out",
          notes = "Returns http response after logging out")
  @ApiResponses(value = {
          @ApiResponse(code = 200, message = "Log out is successful"),
          @ApiResponse(code = 403, message = "Forbidden request."),
          @ApiResponse(code = 500, message = "Internal server error")}
  )
  @PostMapping("/user/logout")
  @PreAuthorize("hasRole('USER')")
  public void logout(HttpServletRequest request) {
    String token = tokenUtils.getJwtFromRequest(request);
    userService.logout(token);
  }
}
