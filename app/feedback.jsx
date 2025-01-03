// //! Form Validation using formik only

// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import * as Yup from "yup";

// const validate = (values) => {
//     const errors = {};

//     if (!values.name) {
//         errors.name = 'Name is required';
//     } else if (!/^[a-zA-Z ]+$/.test(values.name)) {
//         errors.name = 'Name should contain only alphabet letters';
//     } else if (values.name.length < 3 || values.name.length > 50) {
//         errors.name = 'Name should be between 3 and 50 characters';
//     }

//     if (!values.mobile) {
//       errors.mobile = 'Mobile number is required';
//     } else if (!/^[0-9]+$/.test(values.mobile) || values.mobile.length < 12 || values.mobile.length > 12) {
//       errors.mobile = 'Please enter a valid digit with country code without +';
//     }

//     if (!values.email) {
//       errors.email = 'Email is required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//       errors.email = 'Invalid email address';
//     }

//     if (!values.feedback) {
//       errors.feedback = 'Feedback is required';
//     } else if (values.feedback.length < 10 || values.feedback.length > 200) {
//       errors.feedback = 'Feedback should be between 10 and 200 characters';
//     }

//     return errors;
//   };

// const FeedbackForm = () => {
//   const initialValues = {
//     name: '',
//     mobile: '',
//     email: '',
//     feedback: '',
//   };

//   const onSubmit = (values, { resetForm }) => {
//     console.log(values);
//     // Reset the form after submission
//     resetForm();
//   };

//   return (
//     <main>
//     <h1 style={{ textAlign: 'center' }}>Form...</h1>
//     <hr/>
//     <Formik
//       initialValues={initialValues}
//       validate={validate}
//       onSubmit={onSubmit}
//     >
//       <Form className= "container"  >
//         {/* Input for name */}
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">Name:</label>
//           <Field type="text" placeholder="Enter Your Name" id="name" name="name" className="form-control" />
//           <ErrorMessage name="name" component="div" className="text-danger" />
//         </div>

//         {/* Input for mobile number */}
//         <div className="mb-3">
//           <label htmlFor="mobile" className="form-label">Mobile Number:</label>
//           <Field type="text" placeholder="Enter Your Mobile Number" id="mobile" name="mobile" className="form-control" />
//           <ErrorMessage name="mobile" component="div" className="text-danger" />
//         </div>

//         {/* Input for email */}
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">Email:</label>
//           <Field type="email" placeholder="Enter Your Email" id="email" name="email" className="form-control" />
//           <ErrorMessage name="email" component="div" className="text-danger" />
//         </div>

//         {/* Input for feedback */}
//         <div className="mb-3">
//           <label htmlFor="feedback" className="form-label">Feedback:</label>
//           <Field as="textarea" placeholder="Enter Your FeedBack" id="feedback" name="feedback" className="form-control" />
//           <ErrorMessage name="feedback" component="div" className="text-danger" />
//         </div>

//         {/* Submit button */}
//         <div className="mb-3">
//           <button type="submit" className="btn btn-primary">Submit</button>
//         </div>
//       </Form>
//     </Formik>
//     </main>

//   );
// };

// export default FeedbackForm;

// ! Using Formik and Yup: -
// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const validationSchema = Yup.object({
//   name: Yup.string()
//     .required('Name is required')
//     .matches(/^[A-Za-z][A-Za-z\s.]*$/, 'Invaid Name')
//     .min(3, 'Name should be at least 3 characters')
//     .max(50, 'Name should be at most 50 characters'),
//   mobile: Yup.string()
//     .required('Mobile number is required')
//     .matches(/^[1-9]\d{9}$/, "Phone number is not valid")
//     .length(12, 'Mobile number should be 12 digits'),
//   email: Yup.string()
//     .required('Email is required')
//     .max(255)
//     .email('Field should contain a valid e-mail'),
//   feedback: Yup.string()
//     .required('Feedback is required')
//     .min(10, 'Feedback should be at least 10 characters')
//     .max(2000, 'Feedback should be at most 200 characters'),
// });

// const initialValues = {
//   name: '',
//   mobile: '',
//   email: '',
//   feedback: '',
// };

// const FeedbackForm = () => {
//   const onSubmit = (values, { resetForm }) => {
//     console.log(values);

//     resetForm();
//   };

//   return (
//     <main>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={onSubmit}
//       >
//         <Form className="container">
//           {/* Input for name */}
//           <div className="mb-3">
//             <label htmlFor="name" className="form-label">Name:</label>
//             <Field type="text" placeholder="Enter Your Name" id="name" name="name" className="form-control" />
//             <ErrorMessage name="name" component="div" className="text-danger" />
//           </div>

//           {/* Input for mobile number */}
//           <div className="mb-3">
//             <label htmlFor="mobile" className="form-label">Mobile Number:</label>
//             <Field type="text" placeholder="Enter Your Mobile Number" id="mobile" name="mobile" className="form-control" />
//             <ErrorMessage name="mobile" component="div" className="text-danger" />
//           </div>

//           {/* Input for email */}
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">Email:</label>
//             <Field type="email" placeholder="Enter Your Email" id="email" name="email" className="form-control" />
//             <ErrorMessage name="email" component="div" className="text-danger" />
//           </div>

//           {/* Input for feedback */}
//           <div className="mb-3">
//             <label htmlFor="feedback" className="form-label">Feedback:</label>
//             <Field as="textarea" placeholder="Enter Your FeedBack" id="feedback" name="feedback" className="form-control" />
//             <ErrorMessage name="feedback" component="div" className="text-danger" />
//           </div>

//           {/* Submit button */}
//           <div className="mb-3">
//             <button type="submit" className="btn btn-primary">Submit</button>
//           </div>
//         </Form>
//       </Formik>
//     </main>
//   );
// };

// export default FeedbackForm;

// ! Using fromik and yup with field varification AND ADD MULTIPLE MEMBERS INSIDE ATTENDEES ARRAY

import React, { useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .matches(/^[A-Za-z][A-Za-z\s.]*$/, "Invaid Name")
    .min(3, "Name should be at least 3 characters")
    .max(50, "Name should be at most 50 characters"),
  mobile: Yup.string()
    .required("Mobile number is required")
    .matches(/^\+\d{1,4}\d{10}$/, "Phone number is not valid")
    .test("is-valid-phone", "Invalid phone number", (value) =>
      isValidPhoneNumber(value)
    ),
  email: Yup.string()
    .required("Email is required")
    .max(255)
    .email("Field should contain a valid e-mail"),
  confirmEmail: Yup.string()
    .required("Confirm Email is required")
    .oneOf([Yup.ref("email"), null], "Email does not match"),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required"),
  // .matches(/^[A-Za-z][A-Za-z\s.]*$/, "Invaid Country"),
  zipcode: Yup.string()
    .required("ZIP-code is required")
    .matches(/^\d{4,}$/, "Zip code should be at least 4 digits"),
  addrees: Yup.string()
    .required("Addrees is required")
    .max(100, "minimum 100 character take"),
  ageGroup: Yup.string().required("Age group is required"),
  attendees: Yup.array().of(
    Yup.object().shape({
      name: Yup.string()
        .required("Name is required")
        .matches(/^[A-Za-z][A-Za-z\s.]*$/, "Invalid Name")
        .min(3, "Name should be at least 3 characters")
        .max(50, "Name should be at most 50 characters"),
      email: Yup.string()
        .required("Email is required")
        .max(255)
        .email("Field should contain a valid e-mail"),
      mobile: Yup.string()
        .required("Mobile number is required")
        .test("is-valid-phone", "Invalid phone number", (value) =>
          isValidPhoneNumber(value)
        ),
      city: Yup.string().required("City is required"),
      country: Yup.string().required("Country is required"),
      zipcode: Yup.string()
        .required("ZIP-code is required")
        .matches(/^\d{4,}$/, "Zip code should be at least 4 digits"),
      addrees: Yup.string()
        .required("Address is required")
        .max(100, "Minimum 100 characters required"),
      ageGroup: Yup.string().required("Age group is required"),
    })
  ),
});

const initialValues = {
  name: "",
  mobile: "",
  email: "",
  confirmEmail: "",
  city: "",
  country: "",
  zipcode: "",
  addrees: "",
  ageGroup: "",
  attendees: [],
};

const FeedbackForm = () => {
  const [error, setError] = useState("");
  const [city, setCity] = useState({});
  const [suggestions, setSuggestions] = useState([]);
  const [mobileNo, setMobileNo] = useState();
  const [userData, setUserData] = useState([]);
  const [listCountries, setListCountries] = useState([]);
  const [focus, setFocus] = useState("");
  const [citySearchValue, setCitySearchValue] = useState("");
  const [expandedMemberIndex, setExpandedMemberIndex] = useState(0);

  const toggleExpansion = (index) => {
    if (expandedMemberIndex === index) {
      setExpandedMemberIndex(null);
    } else {
      setExpandedMemberIndex(index);
    }
  };

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    if (userData.length < 3) {
      setUserData((prev) => [...prev, values]);
      resetForm();
      setCity("");
      setCity({ city: "" });
      setMobileNo("");
    } else {
      console.error("you cant add more than three");
    }
  };

  const onRegister = () => {
    console.log(userData);
  };

  useEffect(() => {
    if (citySearchValue.length > 0) {
      fetch(
        `https://static-gatsby-qa.web.app/srcmapi/cities/${citySearchValue.toLowerCase()}.json`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((response) => {
          if (response.results.length) {
            setSuggestions(response.results);
          } else {
            console.error("Unexpected API response format:", response.results);
            setSuggestions([]);
          }
        })
        .catch((error) => {
          console.error("Error fetching city suggestions:", error);
          setSuggestions([]);
        });
    } else {
      setSuggestions([]);
    }
  }, [citySearchValue]);

  useEffect(() => {
    fetch("https://static-gatsby-qa.web.app/srcmapi/countries/all.json", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setListCountries(data.results);
      })
      .catch((error) => {
        console.error("Error fetching city suggestions:", error);
        setListCountries([]);
      });
  }, []);

  const handleInputChange = (e) => {
    setCitySearchValue(e.target.value);
  };

  const handleSuggestionClick = (suggestion, name) => {
    setCity((prev) => ({
      ...prev,
      [name]: `${suggestion.name} ${suggestion.state}`,
    }));
    setSuggestions([]);
    setFocus("");
  };

  const ageGroups = [
    { value: "", label: "Select an age group" },
    { value: 4, label: "0-4" },
    { value: 9, label: "5-9" },
    { value: 14, label: "10-14" },
    { value: 19, label: "15-19" },
    { value: 24, label: "20-24" },
    { value: 29, label: "25-29" },
    { value: 34, label: "30-34" },
    { value: 39, label: "35-39" },
    { value: 44, label: "40-44" },
    { value: 49, label: "45-49" },
    { value: 54, label: "50-54" },
    { value: 59, label: "55-59" },
    { value: 64, label: "60-64" },
    { value: 69, label: "65-69" },
    { value: 74, label: "70-74" },
    { value: 79, label: "75-79" },
  ];

  return (
    <main>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form className="container">
            <div className="row">
              {/* Input for name */}
              <div className="col-lg-6 col-md-12 col-sm-12">
                <label htmlFor="name">Name:</label>
                <span style={{ color: "red" }}> *</span>
                <Field
                  id="name"
                  name="name"
                  placeholder="Enter Your Name"
                  type="text"
                  className="form-control"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-danger"
                />
              </div>

              {/* Input for mobile number */}
              <div className="col-lg-6 col-md-12 col-sm-12">
                <label htmlFor="mobile">Mobile Number:</label>
                <PhoneInput
                  id="mobile"
                  name="mobile"
                  international
                  defaultCountry="IN"
                  placeholder="Enter Your Mobile Number"
                  countryCallingCodeEditable={false}
                  onChange={(value) => {
                    setFieldValue("mobile", value);
                    setMobileNo(value);
                  }}
                  value={mobileNo}
                  className="form-control"
                  error={error}
                />
                {error && <span style={{ color: "red" }}>{error}</span>}
                <ErrorMessage
                  name="mobile"
                  component="div"
                  className="text-danger"
                />
              </div>

              {/* Input for email */}
              <div className="col-lg-6 col-md-12 col-sm-12">
                <label htmlFor="name">Email:</label>
                <span style={{ color: "red" }}> *</span>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="form-control"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger"
                />
              </div>

              {/* Input for confirm email */}
              <div className="col-lg-6 col-md-12 col-sm-12">
                <label htmlFor="name">Confirm Email:</label>
                <span style={{ color: "red" }}> *</span>
                <Field
                  type="confirmEmail"
                  id="confirmEmail"
                  name="confirmEmail"
                  placeholder="Confirm Your Mail"
                  className="form-control"
                />
                <ErrorMessage
                  name="confirmEmail"
                  component="div"
                  className="text-danger"
                />
              </div>

              {/* Input for city*/}
              <div className="col-lg-6 col-md-12 col-sm-12">
                <label htmlFor="city">City:</label>
                <span style={{ color: "red" }}> *</span>
                <Field
                  type="city"
                  id="city"
                  name="city"
                  placeholder="City"
                  className="form-control"
                  value={city.city}
                  onFocus={(e) => setFocus(e.target.name)}
                  onChange={(e) => {
                    handleInputChange(e);
                    setCity((prev) => ({ ...prev, city: e.target.value }));
                  }}
                />
                <ErrorMessage
                  name="city"
                  component="div"
                  className="text-danger"
                />
                {focus === "city" && suggestions.length > 0 && (
                  <ul className="suggestions-list">
                    {suggestions.map((suggestion, i) => (
                      <li
                        key={i}
                        onClick={() => {
                          handleSuggestionClick(suggestion, focus);
                          setFieldValue("city", suggestion.id);
                        }}
                      >
                        {suggestion.name} {suggestion.state}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Input for Country*/}
              <div className="col-lg-6 col-md-12 col-sm-12">
                <label htmlFor="name">Country:</label>
                <span style={{ color: "red" }}> *</span>
                <Field
                  as="select"
                  type="country"
                  id="country"
                  name="country"
                  placeholder="Country"
                  className="form-control"
                  // value={country}
                  // onChange={(value) => {
                  //   handleCountyInputChange(value)
                  //   setShowCountry(true)
                  // }}
                >
                  <option disabled value={""}>
                    Select Country
                  </option>
                  {listCountries.map((group) => (
                    <option key={group.id} value={group.id}>
                      {group.name}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="country"
                  component="div"
                  className="text-danger"
                />
                {/* {listCountries && showCountry &&(
                  <ul className="suggestions-list">
                    {listCountries.map((listCountries, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          handleCountrySuggestionClick(listCountries);
                          setFieldValue(
                            "contry",
                            listCountries.id
                          );
                          setShowCountry(false);
                        }}
                      >
                        {listCountries.name}
                      </li>
                    ))}
                  </ul>
                )} */}
              </div>

              {/* Input for ZIP code*/}
              <div className="col-lg-6 col-md-12 col-sm-12">
                <label htmlFor="name">ZIP Code:</label>
                <span style={{ color: "red" }}> *</span>
                <Field
                  type="zipcode"
                  id="zipcode"
                  name="zipcode"
                  placeholder="zipcode"
                  className="form-control"
                />
                <ErrorMessage
                  name="zipcode"
                  component="div"
                  className="text-danger"
                />
              </div>

              {/* Input for addrees*/}
              <div className="col-lg-6 col-md-12 col-sm-12">
                <label htmlFor="addrees">Addrees:</label>
                <span style={{ color: "red" }}> *</span>
                <Field
                  type="addrees"
                  id="addrees"
                  name="addrees"
                  placeholder="Addrees"
                  className="form-control"
                />
                <ErrorMessage
                  name="addrees"
                  component="div"
                  className="text-danger"
                />
              </div>

              {/* Input for age group */}
              <div className="col-lg-6 col-md-12 col-sm-12">
                <label htmlFor="ageGroup">Age Group:</label>
                <span style={{ color: "red" }}> *</span>
                <Field
                  as="select"
                  type="ageGroup"
                  id="ageGroup"
                  name="ageGroup"
                  className="form-control"
                >
                  {ageGroups.map((group) => (
                    <option key={group.value} value={group.value}>
                      {group.label}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="ageGroup"
                  component="div"
                  className="text-danger"
                />
              </div>

              {/* Submit button */}
              <FieldArray name="attendees">
                {({ insert, remove, push }) => (
                  <div className="pt-4">
                    {values.attendees.length != 0 &&
                      values.attendees.map((attendee, index) => (
                        <div key={index}>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              borderBottom: "1px solid #ccc",
                              padding: "8px 0",
                              cursor: "pointer",
                            }}
                          >
                            <span onClick={() => toggleExpansion(index)}>
                              <FontAwesomeIcon icon={faAngleDown} /> New
                              Attendees {index + 1}
                            </span>
                            <FontAwesomeIcon
                              icon={faTrashAlt}
                              onClick={() => remove(index)}
                              type="button"
                              style={{ color: "red", cursor: "pointer" }}
                            />
                          </div>
                          {expandedMemberIndex === index && (
                            <div className="row">
                              {/* Name Field */}
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <label htmlFor={`attendees.${index}.name`}>
                                  Name
                                </label>
                                <Field
                                  id={`attendees.${index}.name`}
                                  name={`attendees.${index}.name`}
                                  placeholder="Enter Your Name"
                                  type="text"
                                  className="form-control"
                                />
                                <ErrorMessage
                                  name={`attendees.${index}.name`}
                                  component="div"
                                  className="text-danger"
                                />
                              </div>

                              {/* Email Field */}
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <label htmlFor={`attendees.${index}.email`}>
                                  Email
                                </label>
                                <Field
                                  name={`attendees.${index}.email`}
                                  placeholder="Enter Your Email"
                                  type="email"
                                  className="form-control"
                                />
                                <ErrorMessage
                                  name={`attendees.${index}.email`}
                                  component="div"
                                  className="text-danger"
                                />
                              </div>

                              {/* Mobile Number Field */}
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <label htmlFor={`attendees.${index}.mobile`}>
                                  Mobile
                                </label>
                                <PhoneInput
                                  id={`attendees.${index}.mobile`}
                                  name={`attendees.${index}.mobile`}
                                  international
                                  defaultCountry="IN"
                                  placeholder="Enter Mobile Number"
                                  countryCallingCodeEditable={false}
                                  onChange={(value) =>
                                    setFieldValue(
                                      `attendees.${index}.mobile`,
                                      value
                                    )
                                  }
                                  value={values.attendees[index].mobile}
                                  className="form-control"
                                />
                                <ErrorMessage
                                  name={`attendees.${index}.mobile`}
                                  component="div"
                                  className="text-danger"
                                />
                              </div>

                              {/* Address Field */}
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <label htmlFor={`attendees.${index}.addrees`}>
                                  Addrees:
                                </label>
                                <span style={{ color: "red" }}> *</span>
                                <Field
                                  type="addrees"
                                  id={`attendees.${index}.addrees`}
                                  name={`attendees.${index}.addrees`}
                                  placeholder="Addrees"
                                  className="form-control"
                                />
                                <ErrorMessage
                                  name={`attendees.${index}.addrees`}
                                  component="div"
                                  className="text-danger"
                                />
                              </div>

                              {/* City Field */}
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <label htmlFor={`attendees.${index}.city`}>
                                  City:
                                </label>
                                <span style={{ color: "red" }}> *</span>
                                <Field
                                  type={`attendees.${index}.city`}
                                  id={`attendees.${index}.city`}
                                  name={`attendees.${index}.city`}
                                  placeholder="City"
                                  className="form-control"
                                  value={city[`attendees.${index}.city`]}
                                  onFocus={(e) => setFocus(e.target.name)}
                                  onChange={(e) => {
                                    handleInputChange(
                                      e,
                                      `attendees.${index}.city`
                                    );
                                    setCity((prev) => ({
                                      ...prev,
                                      [`attendees.${index}.city`]:
                                        e.target.value,
                                    }));
                                  }}
                                />
                                <ErrorMessage
                                  name={`attendees.${index}.city`}
                                  component="div"
                                  className="text-danger"
                                />
                                {focus === `attendees.${index}.city` &&
                                  suggestions.length > 0 && (
                                    <ul className="suggestions-list">
                                      {suggestions.map((suggestion, i) => (
                                        <li
                                          key={i}
                                          onClick={() => {
                                            handleSuggestionClick(
                                              suggestion,
                                              focus
                                            );
                                            setFieldValue(
                                              `attendees.${index}.city`,
                                              suggestion.id
                                            );
                                          }}
                                        >
                                          {suggestion.name} {suggestion.state}
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                              </div>

                              {/* ZipCode Field */}
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <label htmlFor={`attendees.${index}.zipcode`}>
                                  ZIP Code:
                                </label>
                                <span style={{ color: "red" }}> *</span>
                                <Field
                                  type="zipcode"
                                  id={`attendees.${index}.zipcode`}
                                  name={`attendees.${index}.zipcode`}
                                  placeholder="zipcode"
                                  className="form-control"
                                />
                                <ErrorMessage
                                  name={`attendees.${index}.zipcode`}
                                  component="div"
                                  className="text-danger"
                                />
                              </div>

                              {/* Country field for attendee */}
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <label htmlFor={`attendees.${index}.country`}>
                                  Country
                                </label>
                                <Field
                                  as="select"
                                  id={`attendees.${index}.country`}
                                  name={`attendees.${index}.country`}
                                  className="form-control"
                                >
                                  <option value={""}>Select Country</option>
                                  {listCountries.map((group) => (
                                    <option key={group.value} value={group.id}>
                                      {group.name}
                                    </option>
                                  ))}
                                </Field>
                                <ErrorMessage
                                  name={`attendees.${index}.country`}
                                  component="div"
                                  className="text-danger"
                                />
                              </div>

                              {/* Age Group Field */}
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <label htmlFor={`attendees.${index}.ageGroup`}>
                                  Age Group
                                </label>
                                <Field
                                  as="select"
                                  id={`attendees.${index}.ageGroup`}
                                  name={`attendees.${index}.ageGroup`}
                                  className="form-control"
                                >
                                  {ageGroups.map((group) => (
                                    <option
                                      key={group.value}
                                      value={group.value}
                                    >
                                      {group.label}
                                    </option>
                                  ))}
                                </Field>
                                <ErrorMessage
                                  name={`attendees.${index}.ageGroup`}
                                  component="div"
                                  className="text-danger"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    {values.attendees.length !== 3 && (
                      <button
                        className="col-sm-6 col-md-3 RegButton mx-md-3 my-3 d-flex justify-content-center align-items-center"
                        type="button"
                        onClick={() =>
                          push({
                            name: "",
                            email: "",
                            mobile: "",
                            city: "",
                            addrees: "",
                            zipcode: "",
                            country: "",
                            ageGroup: "",
                          })
                        }
                      >
                        <Image
                          src="/addPlus.webp"
                          alt="PlusImage"
                          width={20}
                          height={20}
                        />
                        <span style={{ color: "rgba(88, 152, 207, 1);" }}>
                          ADD MEMBER
                        </span>
                      </button>
                    )}
                  </div>
                )}
              </FieldArray>
              <div class="py-2 d-flex justify-content-center align-items-center row">
                <button
                  class="RegButton mx-md-3 my-3 col-sm-6 col-md-3 text-center "
                  style={{
                    backgroundColor: "rgba(88, 152, 207, 1)",
                    color: "#fff",
                  }}
                  type="submit"
                  onSubmit={onSubmit}
                >
                  REGISTER NOW
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </main>
  );
};

export default FeedbackForm;

// //! 2 validation
// import React, { useState } from "react";
// import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
// import "react-phone-number-input/style.css";
// import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
// import * as Yup from "yup";
// import Image from "next/image";
// import { useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleDown, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

// const validationSchema = Yup.object({
//   attendees: Yup.array().of(
//     Yup.object().shape({
//       name: Yup.string()
//         .required("Name is required")
//         .matches(/^[A-Za-z][A-Za-z\s.]*$/, "Invalid Name")
//         .min(3, "Name should be at least 3 characters")
//         .max(50, "Name should be at most 50 characters"),
//       email: Yup.string()
//         .required("Email is required")
//         .max(255)
//         .email("Field should contain a valid e-mail"),
//       mobile: Yup.string()
//         .required("Mobile number is required")
//         .test("is-valid-phone", "Invalid phone number", (value) =>
//           isValidPhoneNumber(value)
//         ),
//       city: Yup.string().required("City is required"),
//       country: Yup.string().required("Country is required"),
//       zipcode: Yup.string()
//         .required("ZIP-code is required")
//         .matches(/^\d{4,}$/, "Zip code should be at least 4 digits"),
//       addrees: Yup.string()
//         .required("Address is required")
//         .max(100, "Minimum 100 characters required"),
//       ageGroup: Yup.string().required("Age group is required"),
//     })
//   ),
// });

// const initialValues = {
//   attendees: [
//     {
//       name: "",
//       email: "",
//       mobile: "",
//       city: "",
//       country: "",
//       zipcode: "",
//       addrees: "",
//       ageGroup: "",
//     },
//   ],
// };

// const FeedbackForm = () => {
//   const [error, setError] = useState("");
//   const [city, setCity] = useState({});
//   const [suggestions, setSuggestions] = useState([]);
//   const [mobileNo, setMobileNo] = useState();
//   const [userData, setUserData] = useState([]);
//   const [listCountries, setListCountries] = useState([]);
//   const [focus, setFocus] = useState("");
//   const [citySearchValue, setCitySearchValue] = useState("");
//   const [expandedMemberIndex, setExpandedMemberIndex] = useState(0);

//   const toggleExpansion = (index) => {
//     if (expandedMemberIndex === index) {
//       setExpandedMemberIndex(null);
//     } else {
//       setExpandedMemberIndex(index);
//     }
//   };

//   const onSubmit = (values, { resetForm }) => {
//     console.log(values);
//     setUserData(values);
//     resetForm();
//     setCity("");
//     setCity({ city: "" });
//     setMobileNo("");
//   };

//   const onRegister = () => {
//     console.log(userData);
//   };

//   useEffect(() => {
//     if (citySearchValue.length > 0) {
//       fetch(
//         `https://static-gatsby-qa.web.app/srcmapi/cities/${citySearchValue.toLowerCase()}.json`,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       )
//         .then((response) => response.json())
//         .then((response) => {
//           if (response.results.length) {
//             setSuggestions(response.results);
//           } else {
//             console.error("Unexpected API response format:", response.results);
//             setSuggestions([]);
//           }
//         })
//         .catch((error) => {
//           console.error("Error fetching city suggestions:", error);
//           setSuggestions([]);
//         });
//     } else {
//       setSuggestions([]);
//     }
//   }, [citySearchValue]);

//   useEffect(() => {
//     fetch("https://static-gatsby-qa.web.app/srcmapi/countries/all.json", {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setListCountries(data.results);
//       })
//       .catch((error) => {
//         console.error("Error fetching city suggestions:", error);
//         setListCountries([]);
//       });
//   }, []);

//   const handleInputChange = (e) => {
//     setCitySearchValue(e.target.value);
//   };

//   const handleSuggestionClick = (suggestion, name) => {
//     setCity((prev) => ({
//       ...prev,
//       [name]: `${suggestion.name} ${suggestion.state}`,
//     }));
//     setSuggestions([]);
//     setFocus("");
//   };

//   const ageGroups = [
//     { value: "", label: "Select an age group" },
//     { value: 4, label: "0-4" },
//     { value: 9, label: "5-9" },
//     { value: 14, label: "10-14" },
//     { value: 19, label: "15-19" },
//     { value: 24, label: "20-24" },
//     { value: 29, label: "25-29" },
//     { value: 34, label: "30-34" },
//     { value: 39, label: "35-39" },
//     { value: 44, label: "40-44" },
//     { value: 49, label: "45-49" },
//     { value: 54, label: "50-54" },
//     { value: 59, label: "55-59" },
//     { value: 64, label: "60-64" },
//     { value: 69, label: "65-69" },
//     { value: 74, label: "70-74" },
//     { value: 79, label: "75-79" },
//   ];

//   return (
//     <main>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={onSubmit}
//       >
//         {({ setFieldValue, values }) => (
//           <Form className="container">
//             <div className="row">
//               {/* Submit button */}
//               <FieldArray name="attendees">
//                 {({ insert, remove, push }) => (
//                   <div className="pt-4">
//                     {values.attendees.map((attendee, index) => (
//                       <div key={index}>
//                         <div
//                           style={{
//                             display: "flex",
//                             justifyContent: "space-between",
//                             alignItems: "center",
//                             borderBottom: "1px solid #ccc",
//                             padding: "8px 0",
//                             cursor: "pointer",
//                           }}
//                         >
//                           <span onClick={() => toggleExpansion(index)}>
//                             <FontAwesomeIcon icon={faAngleDown} /> New Attendees{" "}
//                             {index + 1}
//                           </span>
//                           <FontAwesomeIcon
//                             icon={faTrashAlt}
//                             onClick={() => remove(index)}
//                             type="button"
//                             style={{ color: "red", cursor: "pointer" }}
//                           />
//                         </div>
//                         {expandedMemberIndex === index && (
//                           <div className="row">
//                             {/* Name Field */}
//                             <div className="col-lg-6 col-md-12 col-sm-12">
//                               <label htmlFor={`attendees.${index}.name`}>
//                                 Name
//                               </label>
//                               <Field
//                                 id={`attendees.${index}.name`}
//                                 name={`attendees.${index}.name`}
//                                 placeholder="Enter Your Name"
//                                 type="text"
//                                 className="form-control"
//                               />
//                               <ErrorMessage
//                                 name={`attendees.${index}.name`}
//                                 component="div"
//                                 className="text-danger"
//                               />
//                             </div>

//                             {/* Email Field */}
//                             <div className="col-lg-6 col-md-12 col-sm-12">
//                               <label htmlFor={`attendees.${index}.email`}>
//                                 Email
//                               </label>
//                               <Field
//                                 name={`attendees.${index}.email`}
//                                 placeholder="Enter Your Email"
//                                 type="email"
//                                 className="form-control"
//                               />
//                               <ErrorMessage
//                                 name={`attendees.${index}.email`}
//                                 component="div"
//                                 className="text-danger"
//                               />
//                             </div>

//                             {/* Mobile Number Field */}
//                             <div className="col-lg-6 col-md-12 col-sm-12">
//                               <label htmlFor={`attendees.${index}.mobile`}>
//                                 Mobile
//                               </label>
//                               <PhoneInput
//                                 id={`attendees.${index}.mobile`}
//                                 name={`attendees.${index}.mobile`}
//                                 international
//                                 defaultCountry="IN"
//                                 placeholder="Enter Mobile Number"
//                                 countryCallingCodeEditable={false}
//                                 onChange={(value) =>
//                                   setFieldValue(
//                                     `attendees.${index}.mobile`,
//                                     value
//                                   )
//                                 }
//                                 value={values.attendees[index].mobile}
//                                 className="form-control"
//                               />
//                               <ErrorMessage
//                                 name={`attendees.${index}.mobile`}
//                                 component="div"
//                                 className="text-danger"
//                               />
//                             </div>

//                             {/* Address Field */}
//                             <div className="col-lg-6 col-md-12 col-sm-12">
//                               <label htmlFor={`attendees.${index}.addrees`}>
//                                 Addrees:
//                               </label>
//                               <span style={{ color: "red" }}> *</span>
//                               <Field
//                                 type="addrees"
//                                 id={`attendees.${index}.addrees`}
//                                 name={`attendees.${index}.addrees`}
//                                 placeholder="Addrees"
//                                 className="form-control"
//                               />
//                               <ErrorMessage
//                                 name={`attendees.${index}.addrees`}
//                                 component="div"
//                                 className="text-danger"
//                               />
//                             </div>

//                             {/* City Field */}
//                             <div className="col-lg-6 col-md-12 col-sm-12">
//                               <label htmlFor={`attendees.${index}.city`}>
//                                 City:
//                               </label>
//                               <span style={{ color: "red" }}> *</span>
//                               <Field
//                                 type={`attendees.${index}.city`}
//                                 id={`attendees.${index}.city`}
//                                 name={`attendees.${index}.city`}
//                                 placeholder="City"
//                                 className="form-control"
//                                 value={city[`attendees.${index}.city`]}
//                                 onFocus={(e) => setFocus(e.target.name)}
//                                 onChange={(e) => {
//                                   handleInputChange(
//                                     e,
//                                     `attendees.${index}.city`
//                                   );
//                                   setCity((prev) => ({
//                                     ...prev,
//                                     [`attendees.${index}.city`]: e.target.value,
//                                   }));
//                                 }}
//                               />
//                               <ErrorMessage
//                                 name={`attendees.${index}.city`}
//                                 component="div"
//                                 className="text-danger"
//                               />
//                               {focus === `attendees.${index}.city` &&
//                                 suggestions.length > 0 && (
//                                   <ul className="suggestions-list">
//                                     {suggestions.map((suggestion, i) => (
//                                       <li
//                                         key={i}
//                                         onClick={() => {
//                                           handleSuggestionClick(
//                                             suggestion,
//                                             focus
//                                           );
//                                           setFieldValue(
//                                             `attendees.${index}.city`,
//                                             suggestion.id
//                                           );
//                                         }}
//                                       >
//                                         {suggestion.name} {suggestion.state}
//                                       </li>
//                                     ))}
//                                   </ul>
//                                 )}
//                             </div>

//                             {/* ZipCode Field */}
//                             <div className="col-lg-6 col-md-12 col-sm-12">
//                               <label htmlFor={`attendees.${index}.zipcode`}>
//                                 ZIP Code:
//                               </label>
//                               <span style={{ color: "red" }}> *</span>
//                               <Field
//                                 type="zipcode"
//                                 id={`attendees.${index}.zipcode`}
//                                 name={`attendees.${index}.zipcode`}
//                                 placeholder="zipcode"
//                                 className="form-control"
//                               />
//                               <ErrorMessage
//                                 name={`attendees.${index}.zipcode`}
//                                 component="div"
//                                 className="text-danger"
//                               />
//                             </div>

//                             {/* Country field for attendee */}
//                             <div className="col-lg-6 col-md-12 col-sm-12">
//                               <label htmlFor={`attendees.${index}.country`}>
//                                 Country
//                               </label>
//                               <Field
//                                 as="select"
//                                 id={`attendees.${index}.country`}
//                                 name={`attendees.${index}.country`}
//                                 className="form-control"
//                               >
//                                 <option value={""}>Select Country</option>
//                                 {listCountries.map((group) => (
//                                   <option key={group.value} value={group.id}>
//                                     {group.name}
//                                   </option>
//                                 ))}
//                               </Field>
//                               <ErrorMessage
//                                 name={`attendees.${index}.country`}
//                                 component="div"
//                                 className="text-danger"
//                               />
//                             </div>

//                             {/* Age Group Field */}
//                             <div className="col-lg-6 col-md-12 col-sm-12">
//                               <label htmlFor={`attendees.${index}.ageGroup`}>
//                                 Age Group
//                               </label>
//                               <Field
//                                 as="select"
//                                 id={`attendees.${index}.ageGroup`}
//                                 name={`attendees.${index}.ageGroup`}
//                                 className="form-control"
//                               >
//                                 {ageGroups.map((group) => (
//                                   <option key={group.value} value={group.value}>
//                                     {group.label}
//                                   </option>
//                                 ))}
//                               </Field>
//                               <ErrorMessage
//                                 name={`attendees.${index}.ageGroup`}
//                                 component="div"
//                                 className="text-danger"
//                               />
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                     {values.attendees.length < 3 && (
//                       <button
//                         className="col-sm-6 col-md-3 RegButton mx-md-3 my-3 d-flex justify-content-center align-items-center"
//                         type="button"
//                         onClick={() =>
//                           push({
//                             name: "",
//                             email: "",
//                             mobile: "",
//                             city: "",
//                             addrees: "",
//                             zipcode: "",
//                             country: "",
//                             ageGroup: "",
//                           })
//                         }
//                       >
//                         <Image
//                           src="/addPlus.webp"
//                           alt="PlusImage"
//                           width={20}
//                           height={20}
//                         />
//                         <span style={{ color: "rgba(88, 152, 207, 1);" }}>
//                           ADD MEMBER
//                         </span>
//                       </button>
//                     )}
//                   </div>
//                 )}
//               </FieldArray>
//               <div class="py-2 d-flex justify-content-center align-items-center row">
//                 <button
//                   class="RegButton mx-md-3 my-3 col-sm-6 col-md-3 text-center "
//                   style={{
//                     backgroundColor: "rgba(88, 152, 207, 1)",
//                     color: "#fff",
//                   }}
//                   type="submit"
//                   onSubmit={onSubmit}
//                 >
//                   REGISTER NOW
//                 </button>
//               </div>
//             </div>
//           </Form>
//         )}
//       </Formik>
//     </main>
//   );
// };

// export default FeedbackForm;
