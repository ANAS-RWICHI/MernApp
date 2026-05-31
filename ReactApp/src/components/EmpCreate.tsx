import { useState } from "react";

export default function EmpCreate() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");
  const [department, setDepartment] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    fetch("http://localhost:3000/employees/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        phone,
        email,
        position,
        salary,
        department,
        comment,
      }),
    })
      .then((response) => {
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        return response.json();
      })
      .then(() => {
        alert("Employee added successfully!");
        setName("");
        setPhone("");
        setEmail("");
        setPosition("");
        setSalary("");
        setDepartment("");
        setComment("");
      })
      .catch((err) => {
        console.error("Error:", err);
        setError(err.message || "Failed to add employee");
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <form
        className="row g-3"
        onSubmit={handleSubmit}
      >
        <div className="col-md-6">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-12">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            id="inputPhone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Position</label>
          <input
            type="text"
            className="form-control"
            id="inputPosition"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          ></input>
        </div>
        <div className="col-md-6">
          <label className="form-label">Salary</label>
          <input
            type="number"
            className="form-control"
            id="inputSalary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          ></input>
        </div>
        <div className="col-md-4">
          <label className="form-label">Department</label>
          <select
            id="inputState"
            className="form-select"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option selected>Choose...</option>
            <option value="HR">HR</option>
            <option value="Engineering">Engineering</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Comment</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>
      <div className="col-12">
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Adding..." : "Add Employee"}
        </button>
      </div>
      </form>
    </>
  );
}
