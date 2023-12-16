import React, { useEffect, useState } from 'react'
import {Table as AntTable} from 'antd';


const Table = ({columns, dataSource, pagination, slice}) => {

  return (
    <AntTable columns={columns} dataSource={dataSource} pagination={pagination} style={{borderRadius:"12px" }} />
  )
}

export default Table