import React from 'react';

import ImagePreview from '../ImagePreview/ImagePreview';
import LoggedUploadForm from '../LoggedUploadForm/LoggedUploadForm';
import NotLoggedUploadForm from '../NotLoggedUploadForm/NotLoggedUploadForm';

export default props => {
  return (
    <div>
      <ImagePreview />

      <div className="block" />

      {/* <LoggedUploadForm /> */}
      <NotLoggedUploadForm />
    </div>
  );
};
