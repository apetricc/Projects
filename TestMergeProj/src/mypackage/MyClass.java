package mypackage;

public class MyClass {

	public void makeString() {
		for (int i = 0; i < 5; i++) {
			if (i < 6) System.out.println("Changed this whole line--hopefully that triggers a conflict.");
		}
		
	}
	
	public static void main(String[] args) {
		MyClass myClass = new MyClass();
		myClass.makeString();

	}

}
