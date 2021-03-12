import * as React from 'react'
import { Column, useTable } from 'react-table'
import { IUser } from '../../interfaces'

type TableProps = {
  DATA: Array<any>
  COLUMNS: Array<Column<IUser>>
}

const Table: React.FC<TableProps> = ({ COLUMNS, DATA }) => {
  const columns = React.useMemo(() => COLUMNS, [])
  const data = React.useMemo(() => DATA, [])

  const tableInstance = useTable({
    columns,
    data
  })
  console.log(columns)

  const {
    getTableBodyProps,
    getTableProps,
    rows,
    prepareRow,
    headerGroups
  } = tableInstance

  return (
    // apply the table props
    <table {...getTableProps()}>
      <thead>
        {
          // Loop over the header rows
          headerGroups.map((headerGroup) => (
            // Apply the header row props
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                // Loop over the headers in each row
                headerGroup.headers.map((column) => (
                  // Apply the header cell props
                  <th {...column.getHeaderProps()}>
                    {
                      // Render the header
                      column.render('Header')
                    }
                  </th>
                ))
              }
            </tr>
          ))
        }
      </thead>
      {/* Apply the table body props */}
      <tbody {...getTableBodyProps()}>
        {
          // Loop over the table rows
          rows.map((row) => {
            // Prepare the row for display
            prepareRow(row)
            return (
              // Apply the row props
              <tr {...row.getRowProps()}>
                {
                  // Loop over the rows cells
                  row.cells.map((cell) => (
                    //Apply the cell props
                    <td {...cell.getCellProps()}>
                      {
                        // Render the cell contents
                        cell.render('Cell')
                      }
                    </td>
                  ))
                }
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default Table
