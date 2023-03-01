import React from "react";

export default function Search({ searchWord, searchWordHandler }) {
  const changeHandler = (e) => {
    console.log("change don");
    e.preventDefault();
    searchWordHandler(e.target.value);
  };

  return (
    <div class="row height d-flex justify-content-center align-items-center">
      <div class="">
        <div class="search">
          <i class="fa fa-search"></i>
          <input
            type="text"
            class="form-control"
            placeholder="Search"
            value={searchWord}
            onChange={changeHandler}
          />
        </div>
      </div>
    </div>
  );
}
