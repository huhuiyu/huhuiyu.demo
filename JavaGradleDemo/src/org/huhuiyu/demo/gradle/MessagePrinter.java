package org.huhuiyu.demo.gradle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class MessagePrinter {

	private final IMessageService service;

	@Autowired
	public MessagePrinter(IMessageService service) {
		this.service = service;
	}

	public void print() {
		System.out.println(service.getMessage());
	}

}
