import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
// import { RiDeleteBin5Line } from "react-icons/ri";
// import { toast } from "sonner";
// import DeleteModal from "../DeleteModal";
// import { Link } from "react-router-dom";

const DisplayBus = () => {
  const [buses, setBuses] = useState([]);
  // const [showModal, setShowModal] = useState(false);

  // const CloseModal = () => {
  //   setShowModal(false);
  // };

  useEffect(() => {
    axios
      .get("/api/auth/viewbus")
      .then((bus) => setBuses(bus.data))
      .catch((err) => console.log(err));
  }, []);

  // const deleteToast = () => {
  //   toast.success("Deleted!", { duration: 2000 });
  // };

  // const handleDelete = (id) => {
  //   axios
  //     .delete(`/api/auth/deletebus/${id}`)
  //     .then((result) => {
  //       console.log(result);
  //       deleteToast();
  //       window.location.reload();
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center pt-4">
        <div className="table-form d-flex justify-content-center align-items-center">
          <div className="d-flex flex-column justify-content-center align-items-center bg-light rounded-5 w-100 p-5">
            <h2 className="">List of Buses:</h2>
            <hr className="text-secondary m-1" />
            <div className="over-flow">
              <table className="table table-light table-striped">
                <thead>
                  <tr className="">
                    <th>Bus No.</th>
                    <th>Source</th>
                    <th>Destination </th>
                    <th>Via</th>
                    <th>STA</th>
                    <th>STC</th>
                  </tr>
                </thead>
                <tbody>
                  {buses.map((bus) => {
                    return (
                      <tr>
                        <td>{bus.busno}</td>
                        <td>{bus.source}</td>
                        <td>{bus.destination}</td>
                        <td>{bus.via}</td>
                        <td>{bus.sta}</td>
                        <td>{bus.stc}</td>
                        {/* <td> */}
                        {/* <Link
                      to={`/update/${bus._id}`}
                      className="btn btn-light m-1"
                      title="Edit"
                    >
                      <FiEdit />
                    </Link> */}
                        {/* <button
                      className="btn btn-danger m-1"
                      title="Delete"
                      onClick={(e) => setShowModal(true)}
                    >
                      <RiDeleteBin5Line />
                    </button>
                    {showModal && (
                      <DeleteModal
                        CloseModal={CloseModal}
                        onDelete={() => handleDelete(bus._id)}
                      />
                    )} */}
                        {/* </td> */}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DisplayBus;
