package org.huhuiyu.demo.gradle;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class MessagePrinter {

	private final IMessageService service;
	private static final Logger logger = LogManager.getLogger(MessagePrinter.class);

	@Autowired
	public MessagePrinter(IMessageService service) {
		this.service = service;
	}

	public void print() {
		logger.debug(service.getMessage());
		logger.info(service.getMessage());
		logger.error(service.getMessage());
	}

}
