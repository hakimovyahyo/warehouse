package com.uz.warehouse.controller;

import com.uz.warehouse.repository.ProductRepository;
import com.uz.warehouse.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/product")
public class ProductController {
    @Autowired
    ProductService service;

    @Autowired
    ProductRepository repository;


}
