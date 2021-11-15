import React, { useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";

export default function ExportOne() {
  const [selected, setSelected] = useState([]);
  const [selectedValues, setSelectedValues] = useState([]);
  const [objectArray] = useState([
    { key: "USER_TOTAL_ACTIVE", cat: "USER_TOTAL_ACTIVE" },
    { key: "USER_TOTAL_INACTIVE", cat: "USER_TOTAL_INACTIVE" },
    { key: "USER_TOTAL_ALL", cat: "USER_TOTAL_ALL" },
  ]);

  const handleSelectedSegment = (e) => {
    if (e.target.value === "USER_ID") {
      setSelectedValues([{ key: "USER_ID", cat: "USER_ID" }]);
      setSelected([]);
    } else if (e.target.value === "GROUP_ID") {
      setSelectedValues([{ key: "GROUP_ID", cat: "GROUP_ID" }]);
      setSelected([]);
    } else if (e.target.value === "DOMAIN") {
      setSelectedValues([{ key: "DOMAIN", cat: "DOMAIN" }]);
      setSelected([]);
    }
  };

  const onSelect = (selected) => {
    setSelected([...selected]);
  };

  const onRemove = (selected) => {
    setSelected([...selected]);
  };

  const handleTemplate = (e) => {
    setSelectedValues([
      { key: "USER_ID", cat: "USER_ID" },
      { key: "USER_TOTAL_ACTIVE", cat: "USER_TOTAL_ACTIVE" },
      { key: "USER_TOTAL_INACTIVE", cat: "USER_TOTAL_INACTIVE" },
    ]);
  };

  return (
    <div>
      <h4 style={{ margin: 10 }}>Export (Setting values to "selectedValues" state which disbales all the Pre Selected Values)</h4>
      <div style={{ margin: 10 }}>
        <label style={{ marginRight: 10 }}>Select Segment</label>
        <select onChange={(e) => handleSelectedSegment(e)}>
          <option></option>
          <option value="USER_ID">Segment USER</option>
          <option value="GROUP_ID">Segment GROUP</option>
          <option value="DOMAIN">Segment DOMAIN</option>
        </select>
      </div>
      <div style={{ margin: 10 }}>
        <label style={{ marginRight: 10 }}>Select Template</label>
        <select onChange={(e) => handleTemplate(e)}>
          <option></option>
          <option value="Template-1">Template-1</option>
        </select>
      </div>
      <div style={{ margin: 10 }}>
        <Multiselect
          onSelect={onSelect}
          onRemove={onRemove}
          disablePreSelectedValues
          options={objectArray}
          closeIcon="close"
          displayValue="key"
          selectedValues={selectedValues}
          showCheckbox={true}
          avoidHighlightFirstOption
        />
      </div>
      <pre style={{ margin: 10 }}>State: {JSON.stringify({ selected, selectedValues }, null, 2)}</pre>    </div>
  );
}
