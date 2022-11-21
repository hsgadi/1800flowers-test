import { Input } from "antd";
import React from "react";

const Search = ({ value, onSearch }) => (
  <div className="mb-5">
    <Input
      placeholder="Search"
      allowClear
      value={value}
      onChange={(event) => onSearch(event.target.value)}
      type="text"
    />
  </div>
);

export default Search;
