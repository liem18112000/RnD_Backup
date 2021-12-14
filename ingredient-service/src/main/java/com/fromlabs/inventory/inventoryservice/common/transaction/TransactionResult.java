/*
 * Copyright (c) 2021. Liem Doan
 */

package com.fromlabs.inventory.inventoryservice.common.transaction;

public interface TransactionResult {
    Object  getTransactionResult();
    boolean isTransactionSuccess();
    Object  getTransactionMessage();
    String  brief();
}
