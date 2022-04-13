/*
 * Copyright (c) 2021. Liem Doan
 */

package com.fromlabs.inventory.inventoryservice.client.supplier;

import com.fromlabs.inventory.inventoryservice.client.supplier.beans.ImportDetailDto;
import com.fromlabs.inventory.inventoryservice.client.supplier.beans.ImportDetailRequest;
import com.fromlabs.inventory.inventoryservice.client.supplier.beans.ImportDto;
import com.fromlabs.inventory.inventoryservice.config.ApiV1;
import io.sentry.spring.tracing.SentryTransaction;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import static com.fromlabs.inventory.inventoryservice.config.AppConfig.INGREDIENT_ID;

/**
 * Client for supplier module
 * @author Liem
 */
@SentryTransaction(operation = "ingredient-supplier-client")
@FeignClient(value = "${services.supplier-service.name}")
@RequestMapping(value = "endpoint/supplier/" + ApiV1.URI_API)
public interface SupplierClient {

    @GetMapping("import/{id:\\d+}")
    ImportDto getImportById(@PathVariable Long id);

    @PostMapping("import/add-items")
    ImportDetailDto onAddNewItem(@RequestBody ImportDetailRequest request);

    @GetMapping("import/{importId:\\d+}/ingredient/{ingredientId:\\d+}")
    boolean isIngredientCanBeProvidable(
            @PathVariable Long importId, @PathVariable Long ingredientId,
            @RequestParam("quantity") float quantity);

    @GetMapping("providable-material/exist-by-ingredient/{ingredientId:\\d+}")
    boolean isMaterialExistByIngredient(
            @PathVariable(INGREDIENT_ID) Long ingredientId
    );
}
