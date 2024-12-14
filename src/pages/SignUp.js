import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';

function EmployeeDataForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        employeeId: "",
        position: "",
        department: "",
        hireDate: "",
        workHours: "",
        image: null,
        imagePreview: "",
    });

    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [countdown, setCountdown] = useState(5);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData((prev) => ({
                ...prev,
                image: file,
                imagePreview: URL.createObjectURL(file),
            }));
        }
    };

    const validate = () => {
        let newErrors = {};
        const today = new Date().toISOString().split("T")[0];
        const empIdPattern = /^EMP\d+$/;

        // Validation First Name & Last Name
        if (!formData.firstName.trim()) newErrors.firstName = "First Name is required.";
        if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required.";

        // Validation Employee ID
        if (!formData.employeeId.trim()) {
            newErrors.employeeId = "Employee ID is required.";
        } else if (!empIdPattern.test(formData.employeeId)) {
            newErrors.employeeId = "Employee ID must follow the format EMP12345.";
        }

        // Validation Hire Date
        if (!formData.hireDate) {
            newErrors.hireDate = "Hire Date is required.";
        } else if (formData.hireDate >= today) {
            newErrors.hireDate = "Hire Date must be before today.";
        }

        // Validation Department & Position
        if (!formData.department.trim()) newErrors.department = "Department is required.";
        if (!formData.position.trim()) newErrors.position = "Position is required.";

        // Validation Work Hours
        if (!formData.workHours.trim()) newErrors.workHours = "Work Hours are required.";

        // Validation Image
        if (!formData.image) newErrors.image = "Image upload is required.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setShowModal(true);
            setCountdown(5);

            const timer = setInterval(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);

            setTimeout(() => {
                clearInterval(timer);
                setShowModal(false);
                navigate('/');
            }, 5000);
        }
    };

    return (
        <div className="container mt-4">
            <h2
                className="text-center mb-4"
                style={{
                    color: "#175d5f",
                    fontFamily: "'Iceland', sans-serif",
                    fontSize: "50px",
                    fontWeight: "700",
                }}
            >
                Sign Up
            </h2>
            <form onSubmit={handleSubmit} className="border p-4 shadow rounded" style={{ maxWidth: "700px", margin: "auto" }}>
                {/* Name Fields */}
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label className="form-label">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Enter first name"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={`form-control ${errors.firstName && "is-invalid"}`}
                        />
                        {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Middle Name</label>
                        <input
                            type="text"
                            name="middleName"
                            placeholder="Enter middle name"
                            value={formData.middleName}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Enter last name"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={`form-control ${errors.lastName && "is-invalid"}`}
                        />
                        {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                    </div>
                </div>

                {/* Employee Details */}
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label">Employee ID</label>
                        <input
                            type="text"
                            name="employeeId"
                            placeholder="EMP12345"
                            value={formData.employeeId}
                            onChange={handleChange}
                            className={`form-control ${errors.employeeId && "is-invalid"}`}
                        />
                        {errors.employeeId && <div className="invalid-feedback">{errors.employeeId}</div>}
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Position</label>
                        <input
                            type="text"
                            name="position"
                            placeholder="Technician, Supervisor, etc."
                            value={formData.position}
                            onChange={handleChange}
                            className={`form-control ${errors.position && "is-invalid"}`}
                        />
                        {errors.position && <div className="invalid-feedback">{errors.position}</div>}
                    </div>
                </div>

                {/* Hire Date & Department */}
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label">Department</label>
                        <input
                            type="text"
                            name="department"
                            placeholder="Quality Control, Assembly, etc."
                            value={formData.department}
                            onChange={handleChange}
                            className={`form-control ${errors.department && "is-invalid"}`}
                        />
                        {errors.department && <div className="invalid-feedback">{errors.department}</div>}
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Hire Date</label>
                        <input
                            type="date"
                            name="hireDate"
                            value={formData.hireDate}
                            onChange={handleChange}
                            className={`form-control ${errors.hireDate && "is-invalid"}`}
                        />
                        {errors.hireDate && <div className="invalid-feedback">{errors.hireDate}</div>}
                    </div>
                </div>

                {/* Work Hours */}
                <div className="mb-3">
                    <label className="form-label">Work Hours</label>
                    <select
                        name="workHours"
                        value={formData.workHours}
                        onChange={handleChange}
                        className={`form-select ${errors.workHours && "is-invalid"}`}
                    >
                        <option value="">Select work hours</option>
                        <option value="8h-16h">8h-16h</option>
                        <option value="16h-00h">16h-00h</option>
                        <option value="00h-8h">Night Shift (00h-8h)</option>
                    </select>
                    {errors.workHours && <div className="invalid-feedback">{errors.workHours}</div>}
                </div>

                {/* Image Upload */}
                <div className="mb-3">
                    <label className="form-label">Upload Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className={`form-control ${errors.image && "is-invalid"}`}
                    />
                    {errors.image && <div className="invalid-feedback">{errors.image}</div>}
                    {formData.imagePreview && (
                        <div className="text-center mt-3">
                            <img src={formData.imagePreview} alt="Preview" style={{ maxWidth: "150px", borderRadius: "8px" }} />
                        </div>
                    )}
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="btn btn-primary px-5 me-2"
                        style={{ backgroundColor: "#041E2B", border: "none" }}
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        className="btn btn-secondary px-5"
                        onClick={() => navigate("/")} // Retourner à la page principale
                    >
                        Cancel
                    </button>
                </div>

            </form>

            {/* Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header
                    style={{
                        backgroundColor: "#041E2B",
                        color: "#ffffff",
                        borderBottom: "none",
                        textAlign: "center",
                    }}
                >
                    <Modal.Title style={{ width: "100%", fontFamily: "'Inknut Antiqua', serif" }}>
                        Submission Successful
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ padding: "30px", textAlign: "center", fontFamily: "Arial, sans-serif" }}>
                    <p style={{ fontSize: "18px", fontWeight: "600", color: "#333" }}>
                        Your form has been successfully submitted to the
                        <span style={{ color: "#175d5f" }}> <strong>Administration Team</strong></span>.
                    </p>
                    <p style={{ fontSize: "16px", color: "#555" }}>
                        You will receive an email shortly with your
                        <strong> Username</strong> and <strong> Password</strong> to access the platform.
                    </p>
                    <div className="text-center mt-4">
                        <span
                            style={{
                                fontSize: "18px",
                                fontWeight: "bold",
                                color: "#175d5f",
                                backgroundColor: "#f0f8ff",
                                padding: "10px 20px",
                                borderRadius: "8px",
                                display: "inline-block",
                            }}
                        >
                            Closing in {countdown} seconds...
                        </span>
                    </div>
                </Modal.Body>
                <Modal.Footer
                    style={{
                        justifyContent: "center",
                        backgroundColor: "#f0f8ff",
                        borderTop: "none",
                    }}
                >
                    <Button
                        variant="success"
                        style={{
                            backgroundColor: "#175d5f",
                            borderColor: "#175d5f",
                            padding: "10px 20px",
                            fontSize: "16px",
                            fontWeight: "600",
                            fontFamily: "'Inter', sans-serif",
                        }}
                        onClick={() => setShowModal(false)}
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}

export default EmployeeDataForm;
