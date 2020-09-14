package com.adidas.challenge.wishlist.utils;

public final class AdidasLoggerFactory {
  private AdidasLoggerFactory() {
    throw new IllegalStateException("Utility class");
  }

  public static AdidasLogger getLogger(Class logClass) {
    return new AdidasLogger(logClass);
  }
}
