package com.dev.flipkart;

public class Product{

	@Override
	public String toString() {
		return "[Product_ID=" + ProductID + ", ProductName=" + ProductName + ", ProductCost=" + ProductCost
				+ ", ProductColor=" + ProductColor + ", Description=" + Description + "]";
	}
	private int ProductID;
	private String ProductName;
	private double ProductCost;
	private String ProductColor;
	private String Description;
	
	public int getProductID() {
		return ProductID;
	}
	public void setProductID(int productID) {
		ProductID = productID;
	}
	public String getProductName() {
		return ProductName;
	}
	public void setProductName(String productName) {
		ProductName = productName;
	}
	public double getProductCost() {
		return ProductCost;
	}
	public void setProductCost(double productCost) {
		ProductCost = productCost;
	}
	public String getProductColor() {
		return ProductColor;
	}
	public void setProductColor(String productColor) {
		ProductColor = productColor;
	}
	public String getDescription() {
		return Description;
	}
	public void setDescription(String description) {
		Description = description;
	}
}
