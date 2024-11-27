import React from 'react';
import { FaRegCopy, FaRegImage, FaUsers } from 'react-icons/fa';

function CreateAds() {
  return (
    <section className="create-ads py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="display-5 fw-bold mb-4">Create new ads and ad variants at the click of a button</h2>
            <div className="features">
              <div className="feature mb-4">
                <FaRegCopy className="text-warning mb-3" size={24} />
                <h5>Quick Ad Creation</h5>
                <p className="text-muted">Easy creation and audience testing</p>
              </div>
              <div className="feature mb-4">
                <FaRegImage className="text-warning mb-3" size={24} />
                <h5>Organic Post Boost</h5>
                <p className="text-muted">Boost your best organic posts</p>
              </div>
              <div className="feature mb-4">
                <FaUsers className="text-warning mb-3" size={24} />
                <h5>Audience Management</h5>
                <p className="text-muted">Work efficiently with audiences and creatives</p>
              </div>
            </div>
            <a href="#" className="btn btn-link text-primary ps-0">Learn about Launching →</a>
          </div>
          <div className="col-lg-6">
            <div className="create-ads-image p-4">
              <img 
                src="https://placehold.co/800x600?text=Ad+Creation+Tool" 
                alt="Create Ads Preview" 
                className="img-fluid rounded shadow-lg" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateAds;