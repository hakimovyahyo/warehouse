package com.uz.warehouse.Dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ClientDto {
    private Integer id;
    private Integer fullName;
    private String phoneNumber;
    private String address;
}
