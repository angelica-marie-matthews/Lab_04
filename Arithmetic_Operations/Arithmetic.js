INT; VARIABLES

int; intOperandA= 12;
int; intOperandB =40;
int; intSum=20;
int; intProduct= 15;
int; intDifference= 5;
int; intQuotinet= 100;
int; intModulo=10;

DOUBLE; VALUE; VARIABLES

doubleOperandA = 75.8;
doubleOperandB=6;
doubleSum= 1;
doubleProduct=11;
doubleDifference= 7;
doubleQuotient= 190;

intSum = intOperandA+intOperandB;
System.out.printIn ("The sum using ints of"+ intOperandA+"and"+ intOperandB+ "is"+intSum);
doubleSum = doubleOperandA + doubleOperandB;
System.out.println("The sum using doubles of " + doubleOperandA + " and " + doubleOperandB + " is " + doubleSum);
doubleDifference = doubleOperandA - doubleOperandB;
System.out.println("The difference using doubles of " + doubleOperandA + " and " + doubleOperandB + " is " + doubleDifference);

doubleProduct = doubleOperandA * doubleOperandB;
System.out.println("The product using doubles of " + doubleOperandA + " and " + doubleOperandB + " is " + doubleProduct);

doubleQuotient = doubleOperandA / doubleOperandB;
System.out.println("The quotient using doubles of " + doubleOperandA + " and " + doubleOperandB + " is " + doubleQuotient);
}
}