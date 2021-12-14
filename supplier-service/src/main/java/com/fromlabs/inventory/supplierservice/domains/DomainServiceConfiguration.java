/*
 * Copyright (c) 2021. Liem Doan
 */

package com.fromlabs.inventory.supplierservice.domains;

import com.fromlabs.inventory.supplierservice.domains.restaurant.services.RestaurantInventoryDomainService;
import com.fromlabs.inventory.supplierservice.domains.restaurant.services.RestaurantInventoryDomainServiceImpl;
import com.fromlabs.inventory.supplierservice.imports.ImportService;
import com.fromlabs.inventory.supplierservice.supplier.SupplierService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Slf4j
@Configuration
@ConfigurationProperties(prefix = "domain")
public class DomainServiceConfiguration {

    public String serviceName;
    public String servicePath;

    public static final String DOMAIN_SERVICE_NAME_CONFIG   = "domain.service-name";
    public static final String RESTAURANT_DOMAIN            = "FromLabsRestaurantDomainService";

    @Bean(name = RESTAURANT_DOMAIN)
    @ConditionalOnProperty(
        value       = DOMAIN_SERVICE_NAME_CONFIG,
        havingValue = RESTAURANT_DOMAIN
    )
    public RestaurantInventoryDomainService getResDomainService(
        SupplierService supplierService,
        ImportService   importService
    ) {
        log.info("Domain service : {}", RestaurantInventoryDomainServiceImpl.class.getName());
        return new RestaurantInventoryDomainServiceImpl(
            supplierService, importService
        );
    }
}
