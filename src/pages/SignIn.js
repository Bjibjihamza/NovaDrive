import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function LoginPage() {
  const [formData, setFormData] = useState({
    employeeId: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); // Pour la navigation vers la page principale

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validation des champs
  const validate = () => {
    let newErrors = {};
    const empIdPattern = /^EMP\d+$/;

    if (!formData.employeeId.trim()) {
      newErrors.employeeId = "Employee ID is required.";
    } else if (!empIdPattern.test(formData.employeeId)) {
      newErrors.employeeId = "Employee ID must follow the format EMP12345.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setShowModal(true);
    }
  };

  const handleCancel = () => {
    navigate("/"); // Retourner à la page principale
  };

  return (
    <div className="container mt-5">
      <h2
        className="text-center mb-4"
        style={{
          color: "#175d5f",
          fontFamily: "'Iceland', sans-serif",
          fontSize: "50px",
          fontWeight: "700",
        }}
      >
        Login
      </h2>
      <form
        onSubmit={handleSubmit}
        className="border p-4 shadow rounded bg-light"
        style={{ maxWidth: "500px", margin: "auto" }}
      >
        {/* Employee ID */}
        <div className="mb-3">
          <label className="form-label">Employee ID</label>
          <input
            type="text"
            name="employeeId"
            placeholder="EMP12345"
            value={formData.employeeId}
            onChange={handleChange}
            className={`form-control ${errors.employeeId && "is-invalid"}`}
          />
          {errors.employeeId && (
            <div className="invalid-feedback">{errors.employeeId}</div>
          )}
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className={`form-control ${errors.password && "is-invalid"}`}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
        </div>

        {/* Submit and Cancel Buttons */}
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary px-4 me-2"
            style={{ backgroundColor: "#041E2B", border: "none" }}
          >
            Submit
          </button>
          <button
            type="button"
            className="btn btn-secondary px-4"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>

      {/* Success Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header style={{ backgroundColor: "#041E2B", color: "#fff" }}>
          <Modal.Title>Login Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ textAlign: "center", fontSize: "16px" }}>
          <p>Welcome back! You have successfully logged in.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => setShowModal(false)}
            style={{ backgroundColor: "#175d5f", borderColor: "#175d5f" }}
          >
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default LoginPage;
