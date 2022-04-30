import React from "react";
import {Calendar} from "primereact/calendar";
import {convertDateToEnCADate} from "../../core/utility/ComponentUtility";
import moment from "moment";
import {SplitButton} from "primereact/splitbutton";
import {Button} from "primereact/button";

/**
 * Get filter model from columns
 * @param columns Table columns
 * @returns {{}|*}
 */
const getFilterModel = (columns) => {
    if (!columns) {
        return {}
    }

    return columns.filter(col => col.filterConfig && col.filterConfig.enabled)
        .reduce((filterModel, col) => {
            const { field, filterConfig } = col;
            const { defaultValue = "" } = filterConfig;
            if (field && !Object.keys(filterModel).includes(field)) {
                let tempModel = {...filterModel};
                tempModel[field] = defaultValue;
                return {...tempModel}
            }
            return filterModel;
        }, {});
}

const getDefaultColumnConfig = (field) => {
    return {
        field: field,
        filterConfig: {
            enabled: true,
            defaultValue: "",
            inputProps: {
                placeholder: field.charAt(0).toUpperCase() + field.slice(1)
            }
        },
        columnConfig: {
            sortable: true,
            body: rowData => <React.Fragment>
                    <span style={{ verticalAlign: 'middle', marginRight: '.6em' }}>
                        {rowData[field]}
                    </span>
            </React.Fragment>
        }
    }
}

const getDateColumnConfig = (field, placeholder, dateFormat = "yy-mm-dd") => {
    return {
        field: field,
        filterConfig: {
            enabled: true,
            defaultValue: "",
            InputComponent: Calendar,
            formatInput: input => convertDateToEnCADate(input),
            inputProps: {
                dateFormat: dateFormat,
                placeholder: placeholder
            }
        },
        columnConfig: {
            sortable: true,
            body: rowData => <React.Fragment>
                    <span style={{ verticalAlign: 'middle', marginRight: '.6em' }}>
                        {moment(rowData.createAt).format('HH:mm-A-ddd-DD/MMM/YYYY')}
                    </span>
            </React.Fragment>
        }
    }
}

const getActionColumnConfig = (onClick, getItemModel) => {
    return {
        field: "action",
        filterConfig: {
            enabled: false
        },
        columnConfig: {
            sortable: false,
            body: rowData => {
                if (!getItemModel) {
                    return (
                        <React.Fragment>
                            <div className="card">
                                <Button label="View"
                                        onClick={() => onClick(rowData)}>
                                </Button>
                            </div>
                        </React.Fragment>
                    );
                }
                return (
                    <React.Fragment>
                        <div className="card">
                            <SplitButton label="View"
                                         onClick={() => onClick(rowData)}
                                         model={getItemModel(rowData)}>
                            </SplitButton>
                        </div>
                    </React.Fragment>
                );
            }
        }
    }
}

const capitalizeTheFirstLetter = word => {
    if (!word || word.length === 0) {
        return "";
    }
    return word.charAt(0).toUpperCase() + word.substring(1);
}

const capitalizeTheFirstLetterOfEachWord = (words, separator = ' ') => {
    const separateWords = words.toLowerCase().split(separator);
    for (let i = 0; i < separateWords.length; i++) {
        separateWords[i] = capitalizeTheFirstLetter(separateWords[i])
    }
    return separateWords.join(separator);
}

export {
    getFilterModel,
    getDateColumnConfig,
    getDefaultColumnConfig,
    getActionColumnConfig,
    capitalizeTheFirstLetter,
    capitalizeTheFirstLetterOfEachWord
}