import React, { useState, useEffect, useRef } from "react";
import "./CreatePost.css";
import ImageUploader from "react-images-upload";
const CreatePost = (props) => {
    const [title, setName] = React.useState("");
    const [content, setDescription] = React.useState("");
    const [isPrivate, setPrivate] = React.useState(false);
    const [selectedFile, setSelectedFile] = React.useState([]);
	const [isFilePicked, setIsFilePicked] = React.useState(false);
    // const [pictures, setPictures] = useState([]);
    const fileInput = useRef(null)
    const onDrop = e => {
        // setPictures([...pictures, picture]);
        // const file = e;
        if (e.target.files && e.target.files.length > 0 && e.size > 52428800)
        alert("File size exceeds the limit!" );
        else{
            setSelectedFile(e.target.files[0]);
            setIsFilePicked(true);
        }
    };
    const removeSelectedFile = () => {
        setSelectedFile();
      };
    // const handleFileInput = (e) => {
    //     // handle validations
    //     const file = e.target.files[0];
    //     if (file.size > 1024)
    //       onFileSelectError({ error: "File size cannot exceed more than 1MB" });
    //     else onFileSelectSuccess(file);
    //   };
    const handleSubmit = (event) => {
        event.preventDefault();
        //const formData = new FormData();
        console.log(`
        Post Title: ${title}
        Content: ${content}
        Set Private: ${isPrivate}
        File: ${selectedFile.name}
        `);

        //formData.append('Post Title', title);
        //formData.append('Content', content);
        //formData.append('Set Private', isPrivate);
		//formData.append('File', selectedFile);
        /*
		fetch(
			`${process.env.REACT_APP_IP}:3001/api/createChallenge`,
			{
				method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
				body: formData,
			}
		)
        
			.then((response) => response.json())
			// .then((result) => {
			// 	console.log('Success:', result);
			// })
			// .catch((error) => {
			// 	console.error('Error:', error);
			// });
            .then(data => console.log(data.text));
        */
        
    
        // event.preventDefault();
        fetch(`${process.env.REACT_APP_IP}:3001/api/createPost`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
               },
               body: JSON.stringify({
                   title: title,
                content: content,
                private: isPrivate
            }),
            })
            .then(response => response.json())
            .then(data => console.log(data.text));
    
    }
    // const handleImageChange = (e) => {//处理图片
    //     const saveUrl = this.props.saveUrl;
    //     const file = e.target.files[0];
    //     const windowURL = window.URL || window.webkitURL;//实现预览
    //     const dataURl = windowURL.createObjectURL(file);//硬盘或sd卡指向文件路径
    //     this.setState({
    //       imgUrl:dataURl
    //     });
    //     let param = new FormData(); //创建form对象
    //     param.append('file',file);
    //     this.props.dispatch({
    //       type:this.props.url,
    //       payload:{
    //         params:param,
    //         callback: (rsp) => {
    //           saveUrl(rsp.data);
    //           rsp.send({text: "Photo Received"});
    //         },
    //         errorCallBack: (rsp) => {
    //           rsp.send(rsp.msg);
    //         }
    //       }
    //     });
    //   };

    // const  addImage = () => {
    //     this.input.click();//触发input：file的click事件，
    //   };
    
    // <div className={styles.uploadImg_main}>
    
    
    //   <div className={styles.montmorillonite_text}>{this.props.msg}</div>
    //   <div className={styles.montmorillonite}>
    //     <div className={styles.montmorillonite_add} >+
    //     </div>
    //   </div>
    // </div>
//   </div>

// var myInput = document.getElementById('myFileInput');
// function sendPic() {
//     var file = myInput.files[0];

//     // Send file here either by adding it to a `FormData` object 
//     // and sending that via XHR, or by simply passing the file into 
//     // the `send` method of an XHR instance.
// }

// myInput.addEventListener('change', sendPic, false);
    return (
      <div id="CreatePost" style={{ backgroundImage: "url('/images/background.png')" }}>
          <form onSubmit={handleSubmit}>
              <h1>Create Post</h1>
              <button id= "cancel"> Cancel</button>
              <button id="post_b">Post</button>
              <label>
                  Title:
                  <input
                  name="title"
                  type="title"
                  value={title}
                  onChange={e => setName(e.target.value)}
                  required />
              </label>
              
              <label>
                  Content:
                  <input
                  name="content"
                  type="content"
                  value={content}
                  onChange={e => setDescription(e.target.value)}
                  required />
              </label>
  
              
              <label>
                Photo Selected:
                {/* <button onClick={removeSelectedFile}>Remove This Image</button> */}
                {/* <input 
                    type="file" onChange={handleFileInput}>
                <button onClick={e => fileInput.current && fileInput.current.click()} className="btn btn-primary">
                <FileUploaded
                    onFileSelectSuccess={(file) => setSelectedFile(file)}
                    onFileSelectError={({ error }) => alert(error)}
                /> */}

                  {/* <section className="button">
                  
                  </section> */}
                  {/* Photo Selected: */}
                  {/* <input
                    style={{
                        display:'none'
                    }}
                    id="myFileInput"
                    // ref={(el) => { this.input = el }}
                    type='file'
                    accept='image/*'
                    // onChange={handleImageChange}
                    
                  /> */}
                    {/* <button onClick={selectPhoto}>Select a Photo</button> */}
                        {/* {this.state.imgUrl&&<img src={this.state.imgUrl}  alt="" />} */}
                        {/* <ImageUploader
                            withIcon={true}
                            buttonText='Choose images'
                            onChange={onDrop}
                            imgExtension={['.jpg', '.gif', '.png', '.gif']}
                            maxFileSize={5242880}
                            // use: [
                            //   {
                            //     loader: 'file-loader',
                            //     options: {
                            //       limit: 8192,
                            //       esModule: false,
                            //     },
                            //   },
                        /> */}
                        <input
                        name="selectedFile"
                        type="file"
                        // formControlName='fileSource'
                        // value={selectedFile}
                        onChange={onDrop}
                        // onChange="onDrop($event)"
                        // onChange={e=> setDescription(e.target.value)}
                        // required 
                        />
                        {isFilePicked ? (
				        <div>
					        <p>Filename: {selectedFile.name}</p>
					        <p>Filetype: {selectedFile.type}</p>
					        <p>Size in bytes: {selectedFile.size}</p>
					        <p>lastModifiedDate:{' '}{selectedFile.lastModifiedDate.toLocaleDateString()}</p>
				        </div>
			            ) : (
				            <p>Select a file to show details</p>
			            )}
                        {/* <button onClick={removeSelectedFile}>Remove This Image</button> */}
                        {/* {selectedFile && (
                            <div>
                            <img
                            // src={selectedFile}
                            src={URL.createObjectURL(selectedFile)}
                            alt=""
                            />
                            <button onClick={removeSelectedFile}>Remove This Image</button>
                            </div>
                        )} */}
                        
                        {/* <button onClick={e => fileInput.current && fileInput.current.click()} className="btn btn-primary"></button> */}
                        
                        {/* <img src={this.state.file} alt=""/>                         */}

                        
                        
                         {/* <img id="output_image" height=50px width=50px\ */}
                        {/* <input type="file" accept="image/*" onchange="preview_image(event)"></input> */}
                  {/* <img id="image" src="https://picsum.photos/200?page=home" width="100" height="100"/> */}
              </label>
              
  
              <label>
              Private   
                  <input
                  name="Private"
                  type="checkbox"
                  onChange={e => setPrivate(e.target.value)}
                  />
                      
              </label>
  
          </form>
    
      </div>
      );
    
};
// function selectPhoto() {
//   alert("Should jump to select a photo page!");
// }
// function preview_image(event) {
//     var reader = new FileReader();
//     reader.onload = function(){
//       var output = document.getElementById('output_image');
//       output.src = reader.result;
//     }
//     reader.readAsDataURL(event.target.files[0]);
//   }

  
export default CreatePost;



