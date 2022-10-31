package com.uz.warehouse.service;

import com.uz.warehouse.Dtos.ProductsDto;
import com.uz.warehouse.entity.Products;
import com.uz.warehouse.entity.ProductsType;
import com.uz.warehouse.repository.ProductRepository;
import com.uz.warehouse.repository.ProductTypeRepository;
import com.uz.warehouse.service.interfaces.ProductsServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.data.crossstore.ChangeSetPersister;

import java.util.List;

public class ProductService implements ProductsServiceInterface {
    @Autowired
    ProductRepository repository;
    @Autowired
    ProductTypeRepository productTypeRepository;


    @Override
    public List<Products> getAllProducts() {
        return repository.findAll();
    }

    @Override
    public Products create(ProductsDto dto) {
//        Products products = new Products(
//                dto.getName(),
//                dto.getPrice(),
////                dto.getType(dto.getTypeId() != null ? productTypeRepository.findById(dto.getTypeId()) : null);
//        );
        return null;
    }

    @Override
    public Products update(ProductsDto dto) {
        return null;
    }

    @Override
    public void delete(Integer id) {

    }
}
