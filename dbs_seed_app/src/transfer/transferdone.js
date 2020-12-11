import React from "react";
import { render } from "react-dom";

import { Col, Divider, Row, Table } from 'antd';
import 'antd/dist/antd.css';

const App = () => {
  return (
    <div style={{ padding: 20 }}>
      <Row>
        <Col>
          <Divider>Receipt</Divider>
        </Col>
      </Row>

      <Row style={{ marginTop: 1 }}>
        <Col span={20} offset={0}>
          <table>
            <tr>
              <th>Name :</th>
              <td></td>
            </tr>
            <tr>
              <th>Bank Account No.:</th>
              <td>123124</td>
            </tr>
            <tr>
              <th>Transfer Amount:</th>
              <td>$ </td>
            </tr>
            <tr>
              <th>Transaction No.</th>
              <td></td>
            </tr>
            <tr>
              <th>Status:</th>
              <td> </td>
            </tr>
          </table>
        </Col>
      </Row>

    </div>
  );
};

render(<App />, document.getElementById("root"));
