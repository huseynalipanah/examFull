import React, { useContext, useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Add.scss";
import { Helmet } from "react-helmet-async";
import { SearchContext } from "../../Context/SearchContext/SearchContext";
const Add = () => {
  const [data, setData] = useState([]);
  const { search, handleSearch } = useContext(SearchContext);
  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/card/");
    const newData = await response.json();
    setData(newData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function addDataFormik(item) {
    await fetch("http://localhost:3000/card/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(item),
    });
    await fetchData();
  }

  async function deleteData(id) {
    await fetch(`http://localhost:3000/card/${id}`, {
      method: "DELETE",
    });
    await fetchData();
  }

  return (
    <div className="add">
      <Helmet>
        <title>Add Page</title>
      </Helmet>
      <Formik
        initialValues={{ name: "", price: "", img: "" }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
          price: Yup.number().required("Required"),
          img: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            addDataFormik(values);
            resetForm();
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="form">
          <label htmlFor="name">Name </label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />

          <label htmlFor="price">Price</label>
          <Field name="price" type="text" />
          <ErrorMessage name="price" />

          <label htmlFor="img">Image </label>
          <Field name="img" type="text" />
          <ErrorMessage name="img" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <div className="table">
        <div className="search">
          <input type="text" onChange={(e) => handleSearch(e)} />
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Header</th>
              <th>Price</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data
                .filter((x) =>
                  x.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((x) => (
                  <tr key={x._id}>
                    <td>{x.name}</td>
                    <td>₼ {x.price}</td>
                    <td>
                      <img src={x.img} alt="" />
                    </td>

                    <td onClick={() => deleteData(x._id)}>DELETE</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Add;
