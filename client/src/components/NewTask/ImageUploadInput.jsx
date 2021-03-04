import React from 'react';
import PropTypes from 'prop-types';
import buttonsStyle from '../../styles/buttons.module.css';
import formStyle from '../../styles/form.module.css';

const ImageUploadInput = (props) => {
  const { handleChange, image } = props;

  return (
    <>
      <div className={formStyle.fileContainer}>
        <label htmlFor="image">
          <input
            accept="image/*"
            className={formStyle.fileInput}
            id="image"
            onChange={handleChange}
            name="image"
            type="file"
          />
          <div className={buttonsStyle.button}>
            <span className={buttonsStyle.textButton}>UPLOAD</span>

            <i className="far fa-image" />
          </div>
        </label>

        <span>
          {image.name ? image.name : ''}
        </span>
      </div>

      <span className={`${formStyle.textHelper} ${formStyle.alignLeft}`}>
        File must be an image (.jpg, .jpeg, .png) up to 1 MB
      </span>
    </>
  );
};

ImageUploadInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  image: PropTypes.shape({
    name: PropTypes.string,
  }),
};

ImageUploadInput.defaultProps = {
  image: {
    name: '',
  },
};

export default ImageUploadInput;
