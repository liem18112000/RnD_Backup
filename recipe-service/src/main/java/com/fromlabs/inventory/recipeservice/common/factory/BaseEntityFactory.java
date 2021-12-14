package com.fromlabs.inventory.recipeservice.common.factory;

import com.fromlabs.inventory.recipeservice.common.entity.BaseEntity;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@NoArgsConstructor
public class BaseEntityFactory<ID extends Serializable> implements EntityFactory<ID> {

    public BaseEntity<ID> createRandom() {
        BaseEntity<ID> entity = this.createEmpty();
        entity.setActivated(Boolean.TRUE);
        entity.setDescription(RANDOM_STRING_PROPERTY);
        entity.setClientId(RANDOM_NUMBER_PROPERTY);
        entity.setUpdateAt(DEFAULT_TIMESTAMP_PROPERTY);
        entity.setName(RANDOM_STRING_PROPERTY);
        return entity;
    }

    public BaseEntity<ID> createEmpty() {
        return new BaseEntity<>();
    }

    public BaseEntity<ID> create() {
        BaseEntity<ID> entity = this.createEmpty();
        entity.setActivated(Boolean.TRUE);
        entity.setDescription(DEFAULT_STRING_PROPERTY);
        entity.setClientId(DEFAULT_NUMBER_PROPERTY);
        entity.setUpdateAt(DEFAULT_TIMESTAMP_PROPERTY);
        entity.setName(DEFAULT_STRING_PROPERTY);
        return entity;
    }

    public String getEntityClassName() {
        return this.getClass().getName();
    }
}
