import "./rentalEvent.css";
export const RentalEvent = () => {
  return (
    <div className="rental-container">
      <div className="image-rental">
        <img
          src="https://www.istockphoto.com/photos/placeholder-image"
          alt=""
        />
      </div>
      <div className="rental-content">
        <div className="rental-header">
          <div className="space-text">
            <p>
              <b>Time Frame:</b> 8:00 to 9:00
            </p>
          </div>
          <div className="space-text">
            <p>
              <b>Capacity:</b> 30 people
            </p>
          </div>
          <div className="space-text">
            <p>
              <b>Price:</b> 500
            </p>
          </div>
        </div>
        <div className="rental-text">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  );
};
