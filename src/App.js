import React, { useState, useEffect } from "react";

import { Form, Button, Table } from "semantic-ui-react";

import axios from "axios";

export default function App() {
  const [name, setName] = useState("");

  const [designation, setDesignation] = useState("");

  const [salary, setSalary] = useState("");

  const [apiData, setAPIData] = useState([]);

  const [refresh, setRefresh] = useState("");

  /*const onSubmit = () => {
    axios
      .post(
        "https://sheet.best/api/sheets/f19bd107-088e-47a2-9e31-09ceffed3e10",
        {
          name,
          designation,
          salary,
        }
      )

      .then((data) => {
        setRefresh(data);
      });
  }; */

  useEffect(() => {
    axios
      .get("https://sheet.best/api/sheets/f19bd107-088e-47a2-9e31-09ceffed3e10")

      .then((response) => {
        setAPIData(response.data);
      });
  }, [refresh]);

  return (
    <div>
      <Table fixed style={{ padding: 20 }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>

            <Table.HeaderCell>Designation</Table.HeaderCell>

            <Table.HeaderCell>Salary</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {apiData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.name}</Table.Cell>

                <Table.Cell>{data.designation}</Table.Cell>

                <Table.Cell>{data.salary}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
