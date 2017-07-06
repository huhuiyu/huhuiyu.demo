package org.huhuiyu.demo.gradle;

import org.springframework.stereotype.Component;

@Component
public class MessageService implements IMessageService {	
	@Override
	public String getMessage() {
		return "hello spring";
	}

}
