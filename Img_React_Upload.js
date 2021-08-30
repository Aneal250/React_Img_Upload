import React, { useState } from 'react';

export default function Image() {
  const [imgUrl, setImgUrl] = useState('');
  const [imgUpload, setImgUpload] = useState('');

  const handleImageChange = (e) => {
    console.log(e.target.files[0]);
    // use this to display the image on the DOM
    setImgUrl(URL.createObjectURL(e.target.files[0]));
    
    // this is what you will send to the backend
    setImgUpload(e.target.files[0]);
    setImgUrl(e.target.files[0]);
  };

  const handleImageUpload = async () => {
    try {
      let formData = new FormData();
      formData.append('photo', imgUpload);
      let { res } = await axios.post('url', formData);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {imgUrl ? (
        <img src={imgUrl} alt="profile" />
      ) : (
        <img
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          alt="profile"
        />
      )}
      <form action="">
        <label htmlFor="image">Upload</label>
        <input
          type="file"
          name="image"
          id="image"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
        <button onClick={handleImageUpload}> Upload</button>
      </form>
    </div>
  );
}
