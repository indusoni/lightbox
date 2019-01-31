const calculateAspectRatio = ({ width, height }, ref, refType = 'height') => {
    let ImgHeight;
    let imgWidth;
    switch (refType) {
      case 'height': {
        imgWidth = width / height * ref;
        ImgHeight = ref;
        return { width: imgWidth, height: ImgHeight };
      }
      case 'width': {
        ImgHeight = height / width * ref;
        imgWidth = ref;
        return { width: imgWidth, height: ImgHeight };
      }
      default: {
        return { width, height };
      }
    }
  };

export {calculateAspectRatio};  