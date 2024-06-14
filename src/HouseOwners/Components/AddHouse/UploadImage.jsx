import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Image, Upload } from "antd";
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const UploadImage = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
   <Button
  icon={<PlusOutlined />}
  style={{
    border: 0,
    background: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }}
  type="button"
>
  Upload
</Button> 
  );
  return (
    <>
      <Form.Item
        name="images" // Name of the field in form values
        label="Images"
        valuePropName="fileList" // Indicates that fileList should be used for managing files
        getValueFromEvent={(e) => e.fileList} // Extract the file list from Upload onChange event
      >
        <Upload
          action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
          listType="picture-card"
          maxCount={8} // Maximum number of files allowed
          beforeUpload={() => false} // Prevent default upload behavior
        >
          <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
          </div>
        </Upload>
      </Form.Item>

      {previewImage && (
        <Image
          wrapperStyle={{
            display: "none",
          }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(""),
          }}
          src={previewImage}
        />
      )}
    </>
  );
};
export default UploadImage;
