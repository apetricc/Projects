public class recursiveExample {
	public static void main(String[] args) {
	recursionTest(0, 20);

	}

	public static void recursionTest(int numberOfTimesRun, int desiredNumberOfRuns) {

	String spacing = "";
	for (int i = 0; i < numberOfTimesRun; i++) {
		spacing += " ";
	}

	System.out.println(numberOfTimesRun + ": " + spacing + "The Function has been called " + numberOfTimesRun + " times.");

		if (numberOfTimesRun < desiredNumberOfRuns) {
			recursionTest(numberOfTimesRun + 1, desiredNumberOfRuns);
			System.out.println(numberOfTimesRun + ": " + spacing + "Resuming run for layer: " + numberOfTimesRun);
		}
	}

	public int myFunction() {
		int myMainMethodVariable = 20;

		myMainMethodVariable++;
		return myMainMethodVariable;
	}

}