const taskModel = {
  description: {
    fieldName: 'Description',
    options: {
      required: true,
    },
  },
  image: {
    fieldName: 'Image',
    options: {
      extensions: ['jpg', 'jpeg', 'png'],
      maxSize: 1048576,
      minSize: 1,
      required: false,
      types: ['image/jpeg', 'image/pjpeg', 'image/png'],
    },
  },
};

export default taskModel;
