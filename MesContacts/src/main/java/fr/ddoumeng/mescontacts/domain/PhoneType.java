package fr.ddoumeng.mescontacts.domain;

public enum PhoneType {

	F("Fixe"),
	M("Mobile");

    private String type;

    PhoneType(String type) {
        this.type = type;
    }

    public String type() {
        return type;
    }

}
