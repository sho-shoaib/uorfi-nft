import React, { useState } from "react";

const Newsletter = () => {
  const [data] = useState({
    title: "Contact us",
    desc: "We will hit you up!",
  });

  return (
    <section className='tf-section newsletter'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='newsletter__body' data-aos='fade-up'>
              <div className='block-text'>
                <h3 className='mb-13'>{data.title}</h3>
                <p className='fs-21'>{data.desc}</p>
              </div>
              <form className='body__form'>
                <div className='form-group'>
                  <input
                    type='email'
                    className='form-control'
                    id='exampleInputEmail1'
                    placeholder='Your Twitter ID'
                    required
                  />
                  <button
                    type='submit'
                    className='btn btn-primary'
                    style={{
                      backgroundColor: "#1DA1F2",
                      borderColor: "#1DA1F2",
                    }}
                  >
                    Tweet
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
