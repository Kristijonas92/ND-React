import React from 'react';
import '../pages/PopularBusiness.scss';

const businesses = [
  {
    category: 'Cleaning',
    title: 'House Cleaning',
    owner: 'Jenny Wilson',
    address: '255 Grand Park Ave, New York',
    imageUrl: 'path/to/house-cleaning.jpg',
    buttonText: 'Book Now'
  },
  {
    category: 'Cleaning',
    title: 'Washing Cloths',
    owner: 'Emma Potter',
    address: '525 N Tyron Street, New York',
    imageUrl: 'path/to/washing-cloths.jpg',
    buttonText: 'Book Now'
  },
  {
    category: 'Repair',
    title: 'House Repairing',
    owner: 'Ronaldo Epric',
    address: '412 N Tyron Street, New York',
    imageUrl: 'path/to/house-repairing.jpg',
    buttonText: 'Book Now'
  },
  {
    category: 'Cleaning',
    title: 'Bathroom Cleaning',
    owner: 'Henny Wilson',
    address: '525 N Tyron Street, NC',
    imageUrl: 'path/to/bathroom-cleaning.jpg',
    buttonText: 'Book Now'
  }
];

const PopularBusiness = () => {
  return (
    <div className="popular-business">
      <div className="container">
        <div className="row">
          {businesses.map((business, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="business-card">
                <img src={business.imageUrl} alt={business.title} className="card-image" />
                <div className="card-body">
                  <span className="business-category">{business.category}</span>
                  <h3 className="business-title">{business.title}</h3>
                  <p className="business-owner">{business.owner}</p>
                  <p className="business-address">{business.address}</p>
                  <button className="book-now">{business.buttonText}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularBusiness;
