package org.huhuiyu.demo.gradle;

import java.io.InputStreamReader;

public class Demo {
	public static final String CONFIG = "demo.config";

	public static String readConfig() {
		
		try {
			InputStreamReader reader = new InputStreamReader(Demo.class.getResourceAsStream(CONFIG));
			char[] chars = new char[4096];
			int len = reader.read(chars);
			StringBuilder sb = new StringBuilder();
			while (len > 0) {
				sb.append(chars, 0, len);
				len = reader.read(chars);
			}
			reader.close();
			return sb.toString();
		} catch (Exception e) {
			return e.getMessage();
		}

	}

	public static void main(String[] args) {
		System.out.println(Demo.readConfig());
	}
}
