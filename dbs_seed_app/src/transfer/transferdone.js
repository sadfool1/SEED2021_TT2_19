import React from "react";
import { render } from "react-dom";

import { Col, Divider, Row, } from 'antd';
import 'antd/dist/antd.css';


const App = () => {
  return (
    <div style={{ padding: 50 }}>
      <Row>
        <Col>
          <Divider>Transaction Receipt</Divider>
        </Col>
      </Row>

      <Row style={{ marginTop: 1 }}>
        <Col span={20} offset={0}>
          <table>
            <tr>
              <th>Name: </th>
              <td></td>
            </tr>
            <p></p>
            <tr>
              <th>Bank Account No:</th>
              <td></td>
            </tr>
            <p></p>
            <tr>
              <th>Transfer Amount:</th>
              <td>$ </td>
            </tr>
            <p></p>
            <tr>
              <th>Transaction No:</th>
              <td></td>
            </tr>
            <p></p>
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