import {
  MaterialReactTable,
  MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";
import { memo, useMemo } from "react";
import "./TableComponent.css";
import { ITableComponentProps, MarketData } from "./TableComponent.type";

const TableComponent = ({ data, maxVal }: ITableComponentProps) => {
  const columns = useMemo<MRT_ColumnDef<MarketData>[]>(
    () => [
      {
        accessorKey: "strike",
        header: "Strike",
        Header: ({ column }) => (
          <div className="column-header">
            {column.columnDef.header.split(" ").map((text) => (
              <div key={text}>{text}</div>
            ))}
          </div>
        ),
        Cell: ({ cell }) => cell.getValue<number>().toFixed(2),
        size: 120,
      },
      {
        accessorKey: "percent_in_out_money",
        header: "% In/Out Money",
        filterSelectOptions: ["In", "Out"],
        filterVariant: "multi-select",
        filterFn: (row, id, filterValue) => {
          const value = row.getValue<number>(id);

          const isIn = filterValue.includes("In") && value >= 0;
          const isOut = filterValue.includes("Out") && value < 0;

          return !filterValue.length || isIn || isOut;
        },
        Header: ({ column }) => (
          <div className="column-header">
            {column.columnDef.header.split(" ").map((text) => (
              <div key={text}>{text}</div>
            ))}
          </div>
        ),
        Cell: ({ cell }) => cell.getValue<number>().toFixed(2),
        muiTableBodyCellProps: ({ cell }) => ({
          sx: {
            backgroundColor:
              cell.getValue<number>() < 0 ? "#FFFBD6" : "#FFE0B1",
            display: "flex",
            height: "30px",
            lineHeight: "30px",
            padding: "8px",
            borderRight: "1px solid #B7B7B7",
            alignItems: "center",
            justifyContent: "end",
            fontFamily: "monospace",
            fontWeight: "bold",
          },
        }),
        size: 140,
      },
      {
        accessorKey: "percent_max_risk",
        header: "% Max Risk",
        Header: ({ column }) => (
          <div className="column-header">
            {column.columnDef.header.split(" ").map((text) => (
              <div key={text}>{text}</div>
            ))}
          </div>
        ),
        Cell: ({ cell }) => cell.getValue<number>().toFixed(2),
        size: 120,
      },
      {
        accessorKey: "percent_cost_to_insure",
        header: "% Cost To Insure",
        Header: ({ column }) => (
          <div className="column-header">
            {column.columnDef.header.split(" ").map((text) => (
              <div key={text}>{text}</div>
            ))}
          </div>
        ),
        Cell: ({ cell }) => cell.getValue<number>().toFixed(2),
        size: 120,
      },
      {
        accessorKey: "sigma_break_even",
        header: "Sigma Break Even",
        Header: ({ column }) => (
          <div className="column-header">
            {column.columnDef.header.split(" ").map((text) => (
              <div key={text}>{text}</div>
            ))}
          </div>
        ),
        Cell: ({ cell }) => cell.getValue<number>().toFixed(2),
        size: 120,
      },
      {
        accessorKey: "percent_to_dbl",
        header: "% To Dbl",
        Header: ({ column }) => (
          <div className="column-header">
            {column.columnDef.header.split(" ").map((text) => (
              <div key={text}>{text}</div>
            ))}
          </div>
        ),
        Cell: ({ cell }) => cell.getValue<number>().toFixed(2),
        size: 120,
      },
      {
        accessorKey: "prob_above",
        header: "Prob Above",
        Header: ({ column }) => (
          <div className="column-header">
            {column.columnDef.header.split(" ").map((text) => (
              <div key={text}>{text}</div>
            ))}
          </div>
        ),
        Cell: ({ cell }) => cell.getValue<number>().toFixed(2),
        size: 120,
      },
      {
        accessorKey: "opt_mid_price",
        header: "Opt Mid Price",
        Header: ({ column }) => (
          <div className="column-header">
            {column.columnDef.header.split(" ").map((text) => (
              <div key={text}>{text}</div>
            ))}
          </div>
        ),
        Cell: ({ cell }) => cell.getValue<number>().toFixed(2),
        size: 120,
      },
      {
        accessorKey: "percent_ask_time_value",
        header: "% Ask Time Value",
        Header: ({ column }) => (
          <div className="column-header">
            {column.columnDef.header.split(" ").map((text) => (
              <div key={text}>{text}</div>
            ))}
          </div>
        ),
        Cell: ({ cell }) => cell.getValue<number>().toFixed(2),
        size: 120,
      },
      {
        accessorKey: "delta",
        header: "Delta",
        Header: ({ column }) => (
          <div className="column-header">
            {column.columnDef.header.split(" ").map((text) => (
              <div key={text}>{text}</div>
            ))}
          </div>
        ),
        Cell: ({ cell }) => cell.getValue<number>().toFixed(2),
        size: 120,
      },
      {
        accessorKey: "opt_open_int",
        header: "Opt Open Int",
        Header: ({ column }) => (
          <div className="column-header">
            {column.columnDef.header.split(" ").map((text) => (
              <div key={text}>{text}</div>
            ))}
          </div>
        ),
        Cell: ({ cell }) => cell.getValue<number>().toLocaleString("en-IN"),
        size: 120,
      },
      {
        accessorKey: "black_scholes_ratio_siv",
        header: "Black Scholes Ratio (SIV)",
        Header: ({ column }) => (
          <div className="column-header">
            {column.columnDef.header.split(" ").map((text) => (
              <div key={text}>{text}</div>
            ))}
          </div>
        ),
        Cell: ({ cell }) => cell.getValue<number>().toFixed(2),
        size: 120,
      },
      {
        accessorKey: "black_scholes_ratio_50_day",
        header: "Black Scholes Ratio (50-Day)",
        Header: ({ column }) => (
          <div className="column-header">
            {column.columnDef.header.split(" ").map((text) => (
              <div key={text}>{text.replace("-", " ")}</div>
            ))}
          </div>
        ),
        Cell: ({ cell }) => cell.getValue<number>().toFixed(2),
        size: 135,
      },
      {
        accessorKey: "iv_hv",
        header: "IV/HV",
        Header: ({ column }) => (
          <div className="column-header">
            {column.columnDef.header.split(" ").map((text) => (
              <div key={text}>{text}</div>
            ))}
          </div>
        ),
        Cell: ({ cell }) => cell.getValue<number>().toFixed(2),
        size: 120,
      },
      {
        accessorKey: "percent_bid_ask_spread",
        header: "% BA Spread",
        Header: ({ column }) => (
          <div className="column-header">
            {column.columnDef.header.split(" ").map((text) => (
              <div key={text}>{text}</div>
            ))}
          </div>
        ),
        Cell: ({ cell }) => cell.getValue<number>().toFixed(2),
        size: 120,
      },
      {
        accessorKey: "percent_return_1_sigma_max_risk",
        header: "% Return/% Max Risk",
        Header: (
          <div className="column-header">
            <div>% Return</div>
            <div className="w-full h-[1px] border-t-[1px] border-gray-300"></div>
            <div>% Max Risk</div>
          </div>
        ),
        Cell: ({ cell }) => cell.getValue<number>().toFixed(2),
        muiTableBodyCellProps: ({ cell }) => {
          const percent = Math.ceil((cell.getValue<number>() / maxVal) * 100);
          const color =
            percent <= 10
              ? "hsla(0, 100%, 92%, 1)"
              : percent <= 50
              ? "hsla(47, 100%, 84%, 1)"
              : "hsla(137, 80%, 81%, 1)";

          return {
            sx: {
              background: `linear-gradient(to right, ${color} ${percent}%, white ${percent}%)`,
              display: "flex",
              height: "30px",
              lineHeight: "30px",
              padding: "8px",
              borderRight: "1px solid #B7B7B7",
              alignItems: "center",
              justifyContent: "end",
              fontFamily: "monospace",
              fontWeight: "bold",
            },
          };
        },
        size: 150,
      },
    ],
    [maxVal]
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enablePagination: false,
    enableBottomToolbar: false,
    enableGlobalFilter: false,
    enableHiding: false,
    enableDensityToggle: false,
    enableFullScreenToggle: false,
    initialState: {
      showColumnFilters: true,
    },
    getSubRows: (row: MarketData) => row.subRow,
    enableExpanding: true,

    muiTablePaperProps: {
      sx: {
        height: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      },
    },

    muiTableContainerProps: {
      sx: {
        height: "min-content",
        overflow: "auto",
        marginBottom: "1rem",
        borderRadius: 1,
      },
    },

    muiTableHeadProps: {
      sx: {
        position: "sticky",
        zIndex: 100,
        opacity: 1,
        top: 0,
        display: "flex",
      },
    },

    muiTableHeadCellProps: {
      sx: {
        background: "hsla(222, 47%, 11%, 1)",
        borderRight: "1px solid #929292",
        alignContent: "center",
        display: "flex",
        flexDirection: "column",
        padding: "10px 8px 6.4px",

        "& *": {
          color: "#fafafa",
        },

        "& > :nth-of-type(1)": {
          margin: "auto 0",
          height: "8.5rem",

          "& *": {
            opacity: 1,
          },
        },

        "& > :nth-of-type(2)": {
          color: "#fafafa",
          borderBottom: "1px solid hsla(0, 0%, 52%, 1)",

          "& *": {
            color: "#fafafa",
            boxSizing: "content-box",
            display: "flex",
          },
        },
      },
    },

    muiTableHeadRowProps: {
      sx: {
        display: "flex",
      },
    },

    muiTableBodyRowProps: ({ row }) => {
      return {
        sx: {
          backgroundColor: row.parentId
            ? "#c9667a"
            : row.index % 2 === 0
            ? "#F5F5F5"
            : "#EFEFEF",
          height: "30px",
          display: "flex",
        },
      };
    },

    muiTableBodyCellProps: () => ({
      sx: {
        display: "flex",
        height: "30px",
        lineHeight: "30px",
        padding: "8px",
        borderRight: "1px solid #B7B7B7",
        alignItems: "center",
        justifyContent: "end",
        fontFamily: "monospace",
        fontWeight: "bold",
      },
    }),
  });
  return (
    <>
      <MaterialReactTable table={table} />
    </>
  );
};

export default memo(TableComponent);
