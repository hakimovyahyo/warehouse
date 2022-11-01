package com.uz.warehouse.service.interfaces;

import com.uz.warehouse.Dtos.ProductsDto;
import com.uz.warehouse.entity.Products;

import java.util.List;

public interface ProductsServiceInterface {

    List<Products> getAllProducts();

    Products create(ProductsDto dto);

    Products update(Integer id,ProductsDto dto);

    void delete(Integer id);
}
