import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";

import { NewOfferErrors } from './NewOfferErrors';

import { uploadOffer } from '../../services/offers-service';
import { NewOfferModel } from '../../models/NewOfferModel';

import { onNewOfferToastSuccess, onNewOfferToastUpload } from '../../notifications/toast-config';
import { ToastContainer } from "react-toastify";

export const NewOffer: React.FC = () => {
  const [startDate, setStartDate] = useState<any>();
  const [endDate, setEndDate] = useState<any>();
  const [errors, setErrors] = useState(null);

  const { register, setValue, reset, handleSubmit } = useForm<NewOfferModel>();

  useEffect(() => {
    // register third party components
    register({ name: "startDate" });
    register({ name: "endDate" });
  }, [register]);

  const onSubmit = handleSubmit((offer) => {
    setErrors(null);
    onNewOfferToastUpload();

    uploadOffer(offer)
      .then((res) => {
        onNewOfferToastSuccess();
        restForm();
      })
      .catch(err => {        
        err.response && setErrors(err.response.data.errors);
      });
  });

  const restForm = () => {
    // reset inputs managed by react-form
    reset();

    // reset custom form elements
    setStartDate(null);
    setEndDate(null);
    setErrors(null);
  }

  return (
    <>
      <ToastContainer />
      <div className="new-offer-wrapper">
        <div className="new-offer-header">
          <div className="new-offer-header-content">
            <h1>Add new offer</h1>
          </div>
        </div>
        {errors && <NewOfferErrors errors={errors} />}
        <div className="new-offer-form">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input className="form-control" name="title" id="title" ref={register} onChange={(e) => setValue("title", e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea className="form-control" name="description" id="description" ref={register} onChange={(e) => setValue("description", e.target.value)}
              />
            </div>
            <div className="form-group date-inputs">
              <div className="start-date">
                <label htmlFor="startDate">Start Date</label>
                <div className="start-date-picker">
                  <DatePicker className="form-control" selected={startDate}
                    onChange={(date) => {
                      setStartDate(date);
                      setValue("startDate", date);
                    }}
                    showTimeSelect
                    dateFormat="Pp"
                  />
                </div>
              </div>
              <div className="end-date">
                <label htmlFor="endDate">End Date</label>
                <div className="end-date-picker">
                  <DatePicker className="form-control" selected={endDate} minDate={startDate}
                    onChange={(date) => {
                      setEndDate(date);
                      setValue("endDate", date);
                    }}
                    showTimeSelect
                    dateFormat="Pp"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select className="form-control" name="category" id="category" onChange={(e) => setValue("category", e.target.value)} ref={register}>
                <option value={0}>Clothing</option>
                <option value={1}>Food</option>
                <option value={2}>Sports</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="status">Status</label>
              <select className="form-control" name="status" id="status" onChange={(e) => setValue("status", e.target.value)} ref={register}>
                <option value={0}>Published</option>
                <option value={1}>Draft</option>
                <option value={2}>Pending</option>
              </select>
            </div>
            <div className="new-offer-buttons">
              <Button variant="outline-danger" className="reset-offer-button" onClick={() => restForm()}>Reset offer </Button>
              <Button variant="primary" type="submit" className="add-offer-button">Add offer</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
