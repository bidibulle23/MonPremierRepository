package fr.ddoumeng.mescontacts.domain;

public class PhoneNumber {

	private PhoneType type;
	private String value;

	public PhoneType getType() {
		return type;
	}

	public void setType(PhoneType type) {
		this.type = type;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

}