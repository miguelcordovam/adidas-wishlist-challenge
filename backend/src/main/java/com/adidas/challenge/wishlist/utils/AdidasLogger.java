package com.adidas.challenge.wishlist.utils;

import java.util.Objects;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.exception.ExceptionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.slf4j.helpers.FormattingTuple;
import org.slf4j.helpers.MessageFormatter;

public class AdidasLogger {
  private final Logger slf4jLogger;

  public AdidasLogger(Class logClass) {
    this.slf4jLogger = LoggerFactory.getLogger(logClass);
  }

  public String getName() {
    return this.slf4jLogger.getName();
  }

  public void debug(String string) {
    if (this.slf4jLogger.isDebugEnabled()) {
      this.slf4jLogger.debug(this.getEscapedMessage(string));
    }

  }

  public void debug(String string, Object... args) {
    if (this.slf4jLogger.isDebugEnabled()) {
      this.slf4jLogger.debug(this.getEscapedFormattedString(string, args));
    }

  }

  public void debug(String string, Throwable throwable) {
    if (this.slf4jLogger.isDebugEnabled()) {
      this.slf4jLogger.debug(this.getEscapedStringWithException(string, throwable));
    }

  }

  public void trace(String string) {
    if (this.slf4jLogger.isTraceEnabled()) {
      this.slf4jLogger.trace(this.getEscapedMessage(string));
    }

  }

  public void trace(String string, Object... args) {
    if (this.slf4jLogger.isTraceEnabled()) {
      this.slf4jLogger.trace(this.getEscapedFormattedString(string, args));
    }

  }

  public void trace(String string, Throwable throwable) {
    if (this.slf4jLogger.isTraceEnabled()) {
      this.slf4jLogger.trace(this.getEscapedStringWithException(string, throwable));
    }

  }

  public void info(String string) {
    if (this.slf4jLogger.isInfoEnabled()) {
      this.slf4jLogger.info(this.getEscapedMessage(string));
    }

  }

  public void info(String string, Object... args) {
    if (this.slf4jLogger.isInfoEnabled()) {
      this.slf4jLogger.info(this.getEscapedFormattedString(string, args));
    }

  }

  public void info(String string, Throwable throwable) {
    if (this.slf4jLogger.isInfoEnabled()) {
      this.slf4jLogger.info(this.getEscapedStringWithException(string, throwable));
    }

  }

  public void warn(String string) {
    if (this.slf4jLogger.isWarnEnabled()) {
      this.slf4jLogger.warn(this.getEscapedMessage(string));
    }

  }

  public void warn(String string, Object... args) {
    if (this.slf4jLogger.isWarnEnabled()) {
      this.slf4jLogger.warn(this.getEscapedFormattedString(string, args));
    }

  }

  public void warn(String string, Throwable throwable) {
    if (this.slf4jLogger.isWarnEnabled()) {
      this.slf4jLogger.warn(this.getEscapedStringWithException(string, throwable));
    }

  }

  public void error(String string) {
    if (this.slf4jLogger.isErrorEnabled()) {
      this.slf4jLogger.error(this.getEscapedMessage(string));
    }

  }

  public void error(String string, Object... args) {
    if (this.slf4jLogger.isErrorEnabled()) {
      this.slf4jLogger.error(this.getEscapedFormattedString(string, args));
    }

  }

  public void error(String string, Throwable throwable) {
    if (this.slf4jLogger.isErrorEnabled()) {
      this.slf4jLogger.error(this.getEscapedStringWithException(string, throwable));
    }

  }

  private String getEscapedFormattedString(String string, Object... args) {
    FormattingTuple ft = MessageFormatter.arrayFormat(string, args);
    return this.getEscapedStringWithException(ft.getMessage(), ft.getThrowable());
  }

  private String getEscapedStringWithException(String message, Throwable throwable) {
    String escapedMessage = this.getEscapedMessage(message);
    String escapedException = this.getEscapedException(throwable);
    return StringUtils.isBlank(escapedException) ? escapedMessage : String.format("%s%n%s", escapedMessage, escapedException);
  }

  private String getEscapedException(Throwable throwable) {
    return Objects.nonNull(throwable) ? this.getEscapedMessage(ExceptionUtils.getFullStackTrace(throwable)) : null;
  }

  private String getEscapedMessage(String message) {
    return StringUtils.normalizeSpace(message);
  }
}
