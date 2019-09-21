package com.dev.flipkart;

import java.util.Scanner;

public class ProductDisplay {
	
	public static void display()
	{
		System.out.println("Items : "+ProductInfo.hm);
	}
	
	public static void buy()
	{
		Scanner i=new Scanner(System.in);
		
		System.out.println("Enter card number: ");
		long card = i.nextLong(16);
		
		System.out.println("Enter cvv: ");
		long cvv = i.nextLong(4);

		System.out.println("Enter Address: ");
		String add = i.next();
	}

}
