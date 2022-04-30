import React, {useEffect, useState} from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { SplitButton } from 'primereact/splitbutton';
import { Button } from "primereact/button";
import { Fieldset } from "primereact/fieldset";
import {
    DEFAULT_COLUMNS,
    DEFAULT_FILTER_FIELDSET_CONFIG,
    DEFAULT_PAGINATOR,
    DEFAULT_SIZE,
    DEFAULT_TABLE_CONFIG,
    DEFAULT_TABLE_LENGTH_OPTIONS
} from "./config";
import { getFilterModel } from "./TableUtil";
import {Link} from "react-router-dom";

const Table = (props) => {
    const {
        columns = DEFAULT_COLUMNS,
        fetchData,

        mockData,
        onAfterSort,
        onAfterChangePage,
        onAfterChangeSize,
        onAfterRefresh,
        onAfterResetFilter,

        filterLegend,
        headerSection,
        headerSectionPosition,

        getNavigateBackLink,
        navigateBackLabel
    } = props;

    const [data, setData] = useState([]);

    const [paginator, setPaginator] = useState(DEFAULT_PAGINATOR);

    const [filter, setFilter] = useState(getFilterModel(columns));

    const [loading, setLoading] = useState(true);

    /**
     * Fetch data for the first time and when pagination or filter change
     */
    useEffect(() => {
        onFetchData()
    }, [JSON.stringify(paginator), JSON.stringify(filter)])

    /**
     * On fetch data
     */
    const onFetchData = () => {
        onLoading(() => {
            if (Array.isArray(mockData) && mockData.length > 0) {
                console.log("Mock data")
                setData(mockData)
            } else {
                if (!fetchData) {
                    console.error("fetchData is null")
                } else {
                    fetchData(filter, paginator).then(res => {
                        const {content, page, rows, total} = res
                        setData(content);
                        setPaginator({
                            ...paginator,
                            page: page,
                            total: total,
                            rows: rows
                        })
                    });
                }
            }
        })
    }

    /**
     * On loading
     * @param func function need to be executed with loading effect
     */
    const onLoading = (func) => {
        setLoading(true);
        try {
            func()
        } catch (e) {
            console.error(e)
            setLoading(false)
        }
        setLoading(false)
    }

    /**
     * On reset filter
     */
    const onResetFilter = () => {
        setFilter(getFilterModel(columns))
        if (onAfterResetFilter) {
            onAfterResetFilter()
        }
    }

    /**
     * On change page
     * @param e event
     */
    const onChangePage = e => {
        const { page } = e
        setPaginator({
            ...paginator,
            page: page
        })
        if (onAfterChangePage) {
            onAfterChangePage(page)
        }
    };

    /**
     * On sort data
     * @param e event
     */
    const onSort = e => {
        const {sortField, sortOrder} = e
        setPaginator({
            ...paginator,
            sortField: sortField,
            sortOrder: sortOrder
        })
        if (onAfterSort) {
            onAfterSort(sortField, sortOrder)
        }
    };

    /**
     * On reset paginator
     */
    const onResetPagination = () => {
        setPaginator(DEFAULT_PAGINATOR);
    }

    /**
     * On refresh data
     */
    const onRefresh = () => {
        onResetFilter()
        onResetPagination()
        if (onAfterRefresh) {
            onAfterRefresh()
        }
    }

    /**
     * On change table size
     * @param size table size
     */
    const onChangeSize = size => {
        setPaginator({
            ...paginator,
            rows: size > 0 ? size : DEFAULT_SIZE
        })
        if (onAfterChangeSize) {
            onAfterChangeSize(size)
        }
    };

    const renderFilterInputs = (filterInputs) => {
        if (!filterInputs) {
            return;
        }
        return filterInputs
            .map((col, index) => {
                const {
                    field,
                    filterConfig
                } = col;

                const {
                    InputComponent = InputText,
                    formatInput = (input) => input ? input.trim() : "",
                    inputProps = {}
                } = filterConfig;

                const onFilterValueChange = (event) => {
                    let tempFilter = {...filter};
                    tempFilter[field] = formatInput(event.target.value);
                    setFilter({...tempFilter})
                }

                return (
                    <div className="p-col-12 p-md-6 p-lg-6">
                        <InputComponent key={`filterInput-${index}`}
                                        value={filter[field]}
                                        onChange={(e) => onFilterValueChange(e)}
                                        {...inputProps}/>
                    </div>
                )
            })
    }

    const renderFilter = (legend, columns) => {
        const filterInputs = columns
            .filter(col => col.filterConfig && col.filterConfig.enabled);

        return (
            <Fieldset
                legend={legend ? legend : "Filter"}
                toggleable
                {...DEFAULT_FILTER_FIELDSET_CONFIG}>
                <div className="p-grid p-fluid">
                    {renderFilterInputs(filterInputs)}
                </div>
                <div className="p-d-flex p-jc-center">
                    <div>
                        <Button
                            className="p-button-warning"
                            icon="pi pi-trash"
                            iconPos="left"
                            label="Clear filter"
                            onClick={onResetFilter}
                        />
                    </div>
                </div>
            </Fieldset>
        )
    }

    const renderHeader = (additionalHeader, position = "before") => {
        const tableLengthOptions = DEFAULT_TABLE_LENGTH_OPTIONS
            .map((option, index) => ({
                key: `option-${index}`,
                label: `${option} items / pages`,
                command: () => onChangeSize(option)
            }))
        return (
            <React.Fragment>
                <div className="table-header" >
                    <span className="p-input-icon-left">
                        {position === "before" && additionalHeader}
                        <SplitButton className="table-control-length p-button-contrast"
                                     label="Refresh"
                                     icon="pi pi-refresh"
                                     onClick={onRefresh}
                                     model={tableLengthOptions}>
                        </SplitButton>
                        {position === "after" && additionalHeader}
                    </span>
                    {navigateBackLabel && getNavigateBackLink && <span
                        className="p-input-icon-left"
                        style={{ fontSize: "17px" }}>
                        <Link to={getNavigateBackLink()}>
                            {navigateBackLabel}
                        </Link>
                    </span>}
                </div>
            </React.Fragment>
        )
    }

    const renderColumns = (columns) => {
        if (columns) {
            return columns.map((col, index) => {
                const {
                    field,
                    header = field.length > 0 ? field.charAt(0).toUpperCase() + field.slice(1) : "Header",
                    sortField = field,
                    filterField = field,
                    columnConfig = {}
                } = col;
                return (
                    <Column key={`column-${index}`}
                            field={field}
                            sortField={sortField}
                            filterField={filterField}
                            header={header}
                            {...columnConfig} />
                )
            })
        }
    }

    return (
        <div className="datatable-doc-demo">
            {renderFilter(filterLegend, columns)}
            <DataTable lazy={true}
                       first={paginator.page * paginator.rows}
                       value={data}
                       loading={loading}
                       header={renderHeader(headerSection, headerSectionPosition)}
                       className="p-datatable-customers"
                       onPage={onChangePage}
                       onSort={onSort}
                       rows={paginator.rows}
                       totalRecords={paginator.total}
                       sortField={paginator.sortField}
                       sortOrder={paginator.sortOrder}
                       rowHover
                       scrollable
                       {...DEFAULT_TABLE_CONFIG}>
                {renderColumns(columns)}
            </DataTable>
        </div>
    );
}

export default Table;