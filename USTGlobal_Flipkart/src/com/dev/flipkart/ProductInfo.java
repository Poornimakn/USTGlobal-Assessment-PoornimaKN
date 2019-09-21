package com.dev.flipkart;

import java.util.Scanner;
import java.util.HashMap;

public class ProductInfo {
	
	static HashMap<String, Product> hm = new HashMap<String, Product>();
	
	public static void main(String[] args) 
	{
	
		Scanner scn = new Scanner(System.in);
		
		Product p= new Product();
		p.setProductID(1089);
		p.setProductName("Mobile");
		p.setProductCost(20000);
		p.setProductColor("Blue");
		p.setDescription("This is an Redmi Phone. It's Color is Blue. It's Cost is 20000");

		Product p1= new Product();
		p1.setProductID(2783);
		p1.setProductName("Laptop");
		p1.setProductCost(50000);
		p1.setProductColor("Grey");
		p1.setDescription("This is an HP Laptop. It's Color is Grey. It's Cost is 50000");

		Product p2= new Product();
		p2.setProductID(3327);
		p2.setProductName("Pant");
		p2.setProductCost(2000);
		p2.setProductColor("Black");
		p2.setDescription("This is an Jeans Pant. It's Color is Black, It's Cost is 2000 ");

		Product p3= new Product();
		p3.setProductID(4628);
		p3.setProductName("Box");
		p3.setProductCost(800);
		p3.setProductColor("Pink");
		p3.setDescription("This is an Storage Box. It's Color is Pink, It's Cost is 800");

		hm.put("1",p);
		hm.put("2",p1);
		hm.put("3",p2);
		hm.put("4",p3);

		System.out.println("Press 1 to show items");
		System.out.println("Press 2 to buy item");
		int show = scn.nextInt();
		
		if(show==1)
		{
			ProductDisplay.display();
		}
		else if(show==2)
		{
			ProductDisplay.buy();
		}
		else
		{
			System.out.println("You pressed wrong key");
		}
	}
	
}
