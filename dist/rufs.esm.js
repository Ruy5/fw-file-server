const downloadM3U8 = () => {

};

function createFileInput(uploadFunc) {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.style.display = 'none';

    fileInput.addEventListener('change', (event) => {
        uploadFunc(event.target.files[0]);
    });

    document.body.appendChild(fileInput);
    fileInput.click();
}

const simpleUpload = (url) => {
    const upload = (file) => {
        const formData = new FormData();
        formData.append('file', file);

        fetch(url, {
            method: 'POST',
            body: formData
        }).then(response => response.json())
          .then(data => {
              console.log('Success:', data);
              alert('文件上传成功');
          })
          .catch((error) => {
              console.error('Error:', error);
              alert('文件上传失败');
          });
    };
    createFileInput(upload);
};

const sliceDownload = () => {

};

const sliceUpload = () => {

};

const rufs = {
    downloadM3U8, simpleUpload, sliceDownload, sliceUpload
};
window.rufs = rufs;

export { rufs as default };