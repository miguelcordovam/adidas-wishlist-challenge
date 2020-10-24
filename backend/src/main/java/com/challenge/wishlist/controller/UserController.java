package com.challenge.wishlist.controller;

import com.challenge.wishlist.dto.UserDto;
import com.challenge.wishlist.security.CurrentUser;
import com.challenge.wishlist.security.UserPrincipal;
import com.challenge.wishlist.service.UserService;
import com.challenge.wishlist.util.TokenUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private TokenUtils tokenUtils;

    @GetMapping("/user/me")
    @PreAuthorize("hasRole('USER')")
    public UserDto getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
        return userService.findByEmail(userPrincipal.getEmail());
    }

    @PostMapping("/user/logout")
    @PreAuthorize("hasRole('USER')")
    public void logout(HttpServletRequest request) {
      String token = tokenUtils.getJwtFromRequest(request);
      userService.logout(token);
    }
}
