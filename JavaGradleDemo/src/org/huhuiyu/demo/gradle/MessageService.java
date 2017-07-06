package org.huhuiyu.demo.gradle;

public class MessageService implements IMessageService {
	@Override
	public String getMessage() {
		return "hello spring";
	}

}
