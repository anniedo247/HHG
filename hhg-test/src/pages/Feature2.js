import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import {
  faEnvelope,
  faCalendarMinus,
  faAddressCard,
} from "@fortawesome/free-regular-svg-icons";
import Moment from "react-moment";

import getEmployees from "../redux/actions/employee.actions";
import PaginationBar from "../components/PaginationBar";
import SearchBar from "../components/SearchBar";

const Feature2 = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const limit = 5;

  const employees = useSelector((state) => state.employee.employees);
  console.log("e", employees);
  const totalPages = 5
  console.log(totalPages);

  const dispatch = useDispatch();

  const onChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault(e);
    setSearchTerm(searchTerm);
  };

  useEffect(() => {
    dispatch(getEmployees(page, limit,searchTerm));
  }, [dispatch, page, limit,searchTerm]);

  return (
    <div>
      <Container className="mt-5 w-75">
        <div><h3>EMPLOYEES</h3></div>
        <div className="text-left mb-5">
          <SearchBar
            searchInput={searchTerm}
            onChange={onChange}
            onSubmit={onSubmit}
          />
        </div>
        <Table bordered hover className="table text-left">
          <thead>
            <tr
              style={{
                fontFamily: "'Roboto Condensed', sans-serif",
                letterSpacing: "0.15em",
                fontSize: "20px",
              }}
            >
              <th>
                NAME <FontAwesomeIcon icon={faSort} size="md" />
              </th>
              <th>
                {" "}
                <FontAwesomeIcon icon={faEnvelope} size="md" /> EMAIL
              </th>
              <th>
                {" "}
                <FontAwesomeIcon icon={faAddressCard} size="md" /> POSITION
              </th>
              <th>
                <FontAwesomeIcon icon={faCalendarMinus} size="md" /> DOB
              </th>
            </tr>
          </thead>
          {employees.map((e) => (
            <tbody >
              <tr>
                <td>
                  <h5>{e.name}</h5>
                </td>
                <td>{e.email}</td>
                <td>{e.position}</td>
                <td>
                  <Moment format="YYYY-MM-DD">{e.birthday}</Moment>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </Container>
      <PaginationBar page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default Feature2;
