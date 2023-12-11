import React, { useEffect, useState } from 'react'
import {Table as AntTable} from 'antd';


const Table = ({columns, dataSource, pagination, slice}) => {

  return (
    <AntTable columns={columns} dataSource={dataSource} pagination={pagination} style={{boxShadow:"0px 0px 8px rgba(0,0,0,.08)",borderRadius:"12px" }} />
  )
}

export default Table